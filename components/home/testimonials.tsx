import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-[#f7f1eb] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6b52]">
            Customer love
          </p>

          <h2 className="mt-3 font-serif text-5xl font-bold text-[#35241e]">
            Sweet moments worth coming back to.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] bg-white p-7"
            >
              <div className="text-lg tracking-widest text-[#b27a5d]">
                ★★★★★
              </div>

              <p className="mt-5 text-base leading-8 text-[#5f5048]">
                “{testimonial.message}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-[#30231e]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-[#897b72]">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}