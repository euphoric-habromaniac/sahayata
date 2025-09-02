export default function ContactUs() {
  return (
    <div className="min-h-screen bg-neutral-bg flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Reach out to us for any questions, feedback, or support.</p>
        <div className="space-y-6 text-lg md:text-xl text-gray-700 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2"><strong>Email:</strong> <a href="mailto:contact@pranjalkumar.com" className="text-primary-medium underline break-all">contact@pranjalkumar.com</a></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2"><strong>LinkedIn:</strong> <a href="https://in.linkedin.com/in/pranjalkumar1024" target="_blank" rel="noopener noreferrer" className="text-primary-medium underline">Pranjal Kumar</a></div>
        </div>
      </div>
    </div>
  );
}
