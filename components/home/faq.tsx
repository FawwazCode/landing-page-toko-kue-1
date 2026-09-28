import { AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bisakah saya memilih isi cake box sendiri?",
    answer:
      "Bisa. Pilih ukuran box, lalu susun pilihan cake slice sesuai selera.",
  },
  {
    question: "Bagaimana cara memesan cake?",
    answer:
      "Pilih cake yang kamu inginkan, tentukan jumlahnya, lalu kirim pesanan melalui WhatsApp.",
  },
  {
    question: "Apakah tersedia pengantaran?",
    answer:
      "Detail pengantaran dapat dikonfirmasi langsung melalui WhatsApp.",
  },
  {
    question: "Bisakah memesan untuk acara?",
    answer:
      "Tentu. Untuk pesanan dalam jumlah besar atau kebutuhan acara, hubungi kami melalui WhatsApp.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#fffdf9] py-16 md:py-20 lg:py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6b52]">
            FAQ
          </p>

          <h2 className="mt-3 font-serif text-5xl font-bold text-[#35241e]">
            Got questions?
          </h2>
        </div>

        <div className="mt-8">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}