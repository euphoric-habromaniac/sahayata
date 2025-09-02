export default function SupportCenters() {
  return (
    <div className="min-h-screen bg-neutral-bg flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Support Centers</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Find local and online support centers for mental health and developmental guidance. We recommend reaching out to professionals for comprehensive care.</p>
        <ul className="list-disc pl-6 text-lg md:text-xl text-gray-700 text-left w-full">
          <li>National Mental Health Helpline: 1800-599-0019</li>
          <li>Childline India: 1098</li>
          <li>Online Counseling: <a href="https://www.betterhelp.com/" className="text-primary-medium underline">BetterHelp</a></li>
        </ul>
      </div>
    </div>
  );
}
