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
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-sm text-left font-semibold text-[#30231e] transition-colors duration-200 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2">
        {question}

        <span className="text-xl transition-all duration-200 ease-out group-open:rotate-45 group-hover:text-[#6f4938]">
          +
        </span>
      </summary>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#75675f]">
        {answer}
      </p>
    </details>
  );
}