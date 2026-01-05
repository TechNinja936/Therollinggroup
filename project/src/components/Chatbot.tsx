import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm here to help you with information about The Rolling Group's commercial landscaping services. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('estimate')) {
      return "Pricing varies based on property size, scope of work, and contract duration. I'd recommend filling out our Request Proposal form for a detailed quote tailored to your needs. Would you like me to direct you there?";
    }

    if (message.includes('service') || message.includes('what do you do') || message.includes('offerings')) {
      return "We provide comprehensive commercial landscaping services including: grounds maintenance, government contract support, industrial landscape management, multi-site property care, debris removal, irrigation, and more. Would you like details on a specific service?";
    }

    if (message.includes('government') || message.includes('municipal') || message.includes('state') || message.includes('federal')) {
      return "Yes! We specialize in government contracts including municipal, state, and federal properties. We're fully compliant with all necessary regulations and maintain OSHA safety standards. We handle school districts, universities, public facilities, and more.";
    }

    if (message.includes('contract') || message.includes('rfp') || message.includes('proposal')) {
      return "We handle all types of commercial contracts including long-term maintenance agreements, RFP responses, and multi-property service contracts. You can submit your RFP or request a proposal through our form. We typically respond within 24 hours.";
    }

    if (message.includes('area') || message.includes('location') || message.includes('service area') || message.includes('houston')) {
      return "We serve the Greater Houston area including Harris, Fort Bend, Montgomery, Brazoria, Galveston, and Liberty counties. We're based in Houston and handle properties throughout the region.";
    }

    if (message.includes('safety') || message.includes('osha') || message.includes('compliant') || message.includes('insurance')) {
      return "Safety is our top priority. We're fully licensed and insured, OSHA compliant, and maintain strict safety protocols for all our crews. We provide detailed safety documentation and reporting as required by our government and corporate clients.";
    }

    if (message.includes('multi-site') || message.includes('multiple') || message.includes('locations') || message.includes('properties')) {
      return "Absolutely! We specialize in multi-site property management. We provide coordinated maintenance across multiple locations with consistent quality, centralized reporting, and dedicated account management. Many of our clients have 10+ properties under our care.";
    }

    if (message.includes('contact') || message.includes('call') || message.includes('email') || message.includes('phone')) {
      return "You can reach us at 832-801-5009 or Nicrolling@therollinggroup.com. Our business hours are Monday-Friday, 8AM-6PM. You can also fill out our contact form and we'll get back to you within 24 hours.";
    }

    if (message.includes('hours') || message.includes('availability') || message.includes('when')) {
      return "Our office hours are Monday through Friday, 8:00 AM to 6:00 PM. However, we offer rapid response services and can handle emergency situations 24/7 for our contract clients.";
    }

    if (message.includes('experience') || message.includes('how long') || message.includes('established')) {
      return "The Rolling Group has over 15 years of experience in commercial landscaping and property maintenance. We've managed 500+ properties and maintained a 100% client satisfaction rating with our government and corporate clients.";
    }

    if (message.includes('industrial') || message.includes('warehouse') || message.includes('distribution')) {
      return "Yes, we have extensive experience with industrial properties including warehouses, distribution centers, and manufacturing facilities. We understand the unique requirements of industrial sites and provide heavy-duty grounds care with minimal disruption to operations.";
    }

    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with regarding our commercial landscaping services?";
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! How can I help you learn more about The Rolling Group's commercial landscaping and property maintenance services?";
    }

    return "I'd be happy to help you with information about our commercial landscaping services, pricing, contracts, service areas, or any other questions. You can also contact our team directly at 832-801-5009 or submit a proposal request for detailed information specific to your needs.";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-700 transition-all duration-300 hover:scale-110 z-50"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle className="mr-3" size={24} />
              <div>
                <h3 className="font-bold">The Rolling Group</h3>
                <p className="text-xs text-emerald-100">Commercial Services Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-md'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isBot ? 'text-gray-500' : 'text-emerald-100'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white p-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
