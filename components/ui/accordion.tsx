"use client";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({
  question,
  answer,
}: AccordionItemProps) {
  return (
    <details className="group border-b border-[#e8ddd4] py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold text-[#30231e]">
        {question}

        <span className="text-xl transition-transform group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#75675f]">
        {answer}
      </p>
    </details>
  );
}