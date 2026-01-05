export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-emerald-50/30 via-white to-blue-50/20 pointer-events-none">
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -left-20 top-60 w-80 h-80 bg-blue-100 rounded-full opacity-15 blur-3xl"></div>
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/2 w-72 h-72 bg-emerald-50 rounded-full opacity-10 blur-3xl"></div>
    </div>
  );
}
