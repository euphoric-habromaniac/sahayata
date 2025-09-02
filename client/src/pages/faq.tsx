import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Sahayata a diagnostic tool?",
    answer: "No, it is a screening tool to guide conversations and encourage professional support."
  },
  {
    question: "Is my data private?",
    answer: "Yes, self-assessments are anonymous and private."
  },
  {
    question: "Can I use Sahayata for my child?",
    answer: "Yes, select your role and age group to begin a family screening."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-neutral-bg flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="w-full text-left">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={faq.question} className="border-b border-gray-200">
              <AccordionTrigger className="text-lg text-primary-dark font-semibold py-4 hover:bg-primary-light/10 transition-colors duration-200 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 py-4 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
