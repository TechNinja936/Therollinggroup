import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = "re_Ys6mCkHz_PrM1HU4ocFDp4oBN9LvMsoPN";
const TO_EMAIL = "Nicrolling@therollinggroup.com";
const FROM_EMAIL = "onboarding@resend.dev";

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ProposalRequest {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  propertyAddress: string;
  propertySize: string;
  servicesNeeded: string[];
  startDate: string;
  additionalInfo: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { type, data } = await req.json();

    let emailSubject = "";
    let emailHtml = "";

    if (type === "contact") {
      const contact = data as ContactSubmission;
      emailSubject = `New Contact Form Submission from ${contact.name}`;
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message.replace(/\n/g, '<br>')}</p>
      `;
    } else if (type === "proposal") {
      const proposal = data as ProposalRequest;
      emailSubject = `New Proposal Request from ${proposal.companyName}`;
      emailHtml = `
        <h2>New Proposal Request</h2>
        <p><strong>Company Name:</strong> ${proposal.companyName}</p>
        <p><strong>Contact Person:</strong> ${proposal.contactPerson}</p>
        <p><strong>Email:</strong> ${proposal.email}</p>
        <p><strong>Phone:</strong> ${proposal.phone}</p>
        <p><strong>Property Address:</strong> ${proposal.propertyAddress}</p>
        <p><strong>Property Size:</strong> ${proposal.propertySize}</p>
        <p><strong>Services Needed:</strong> ${proposal.servicesNeeded.join(", ")}</p>
        <p><strong>Desired Start Date:</strong> ${proposal.startDate}</p>
        ${proposal.additionalInfo ? `<p><strong>Additional Information:</strong></p><p>${proposal.additionalInfo.replace(/\n/g, '<br>')}</p>` : ''}
      `;
    } else {
      throw new Error("Invalid notification type");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: emailSubject,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    const result = await res.json();

    return new Response(JSON.stringify({ success: true, data: result }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});