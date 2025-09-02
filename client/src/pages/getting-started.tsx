import { Button } from "@/components/ui/button";

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-neutral-bg flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Getting Started</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Welcome to Sahayata! Begin your journey by selecting your role and age group. Our gentle screening will guide you step by step.</p>
        <Button onClick={() => window.location.href = "/role-selection"} className="bg-primary-medium text-white px-6 py-3 rounded-xl">Start Now</Button>
      </div>
    </div>
  );
}
