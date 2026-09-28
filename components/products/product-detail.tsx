"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format-price";
import { generateSingleProductWhatsAppUrl } from "@/lib/whatsapp";

interface ProductDetailProps {
	product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
	const [quantity, setQuantity] = useState(1);
	const whatsappUrl = generateSingleProductWhatsAppUrl(product, quantity);

	return (
		<main className="bg-[#fffdf9] pb-24 pt-32">
			<div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
				<div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#f3ebe4]">
					<Image
						src={product.image}
						alt={product.name}
						fill
						priority
						className="object-cover"
						sizes="(max-width: 1024px) 90vw, 50vw"
					/>
				</div>

				<div className="flex flex-col items-start justify-center">
					<Link
						href="/menu"
						className="mb-8 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#75675f] transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2"
					>
						<ArrowLeft size={16} />
						Back to cake menu
					</Link>

					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6b52]">
						{product.category === "classic" ? "Classic cake" : "Signature cake"}
					</p>

					<h1 className="mt-3 font-serif text-5xl font-bold leading-tight text-[#35241e] sm:text-6xl">
						{product.name}
					</h1>

					<p className="mt-5 text-xl font-semibold text-[#6f4938]">
						{formatPrice(product.price)}
					</p>

					<p className="mt-6 max-w-xl leading-8 text-[#75675f]">
						{product.description}
					</p>

					<div className="mt-8">
						<h2 className="font-semibold text-[#30231e]">Made with</h2>
						<ul className="mt-3 flex flex-wrap gap-2">
							{product.ingredients.map((ingredient) => (
								<li
									key={ingredient}
									className="rounded-full bg-[#f3ebe4] px-3 py-2 text-sm text-[#6f4938]"
								>
									{ingredient}
								</li>
							))}
						</ul>
					</div>

					<div className="mt-9 flex flex-wrap items-center gap-4">
						<div className="flex h-12 items-center gap-4 rounded-full border border-[#dfd2c9] px-3">
							<button
								type="button"
								onClick={() => setQuantity((current) => Math.max(1, current - 1))}
								disabled={quantity === 1}
								aria-label="Decrease quantity"
								className="flex h-8 w-8 items-center justify-center rounded-full text-[#6f4938] transition-all duration-200 ease-out hover:scale-105 hover:bg-[#ead6c4] hover:text-[#4c3024] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-40"
							>
								<Minus size={16} />
							</button>
							<span className="min-w-5 text-center text-sm font-semibold text-[#30231e]">
								{quantity}
							</span>
							<button
								type="button"
								onClick={() => setQuantity((current) => current + 1)}
								aria-label="Increase quantity"
								className="flex h-8 w-8 items-center justify-center rounded-full text-[#6f4938] transition-all duration-200 ease-out hover:scale-105 hover:bg-[#ead6c4] hover:text-[#4c3024] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-1"
							>
								<Plus size={16} />
							</button>
						</div>

						<a
							href={whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#6f4938] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4c3024] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2"
						>
							Order via WhatsApp
							<ArrowRight size={17} />
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
