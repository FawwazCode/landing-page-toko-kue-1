import Link from "next/link";
import { Clock, MapPin, Navigation } from "lucide-react";

const address = "Alamat Toko Kue, Indonesia";

const openingHours = [
  {
    day: "Monday - Sunday",
    time: "09:00 - 21:00",
  },
];

const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=PLACEHOLDER";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=TokoKue";

export function LocationSection() {
  return (
    <section id="location"className="border-t border-[#eadfd6] bg-[#fcf9f6] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6b52]">
              Visit Toko Kue
            </p>

            <h2 className="mt-3 max-w-lg font-serif text-4xl font-bold leading-tight text-[#3c2921] md:text-5xl">
              Sweet moments are better shared in person.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#75675f]">
              Come visit Toko Kue and discover our freshly baked cakes,
              carefully made for everyday treats and special moments.
            </p>

            <div className="mt-6 space-y-4">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#efe3da] text-[#9a6b52]">
                  <MapPin size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#30231e]">
                    Store Address
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#75675f]">
                    {address}
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#efe3da] text-[#9a6b52]">
                  <Clock size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#30231e]">
                    Opening Hours
                  </h3>

                  {openingHours.map((item) => (
                    <p
                      key={item.day}
                      className="mt-1 text-sm leading-6 text-[#75675f]"
                    >
                      {item.day}
                      <br />
                      {item.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3c2921] px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#241914] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2"
            >
              <Navigation size={17} strokeWidth={1.8} />
              Get Directions
            </Link>
          </div>

          {/* Google Maps */}
          <div className="overflow-hidden rounded-2xl border border-[#eadfd6] bg-white shadow-sm">
            <div className="aspect-[4/3] w-full md:aspect-[16/10]">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunqiest location on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}