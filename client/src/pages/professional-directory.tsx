export default function ProfessionalDirectory() {
  return (
    <div className="min-h-screen bg-neutral-bg flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Professional Directory</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Browse a directory of qualified professionals for mental health, learning, and developmental support. Always verify credentials before engaging services.</p>
        <ul className="list-disc pl-6 text-lg md:text-xl text-gray-700 text-left w-full">
          <li>Clinical Psychologists</li>
          <li>Child Development Specialists</li>
          <li>Speech & Language Therapists</li>
          <li>Occupational Therapists</li>
        </ul>
      </div>
    </div>
  );
}
