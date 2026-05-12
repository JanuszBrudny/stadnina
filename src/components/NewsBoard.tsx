import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import type { TypedObject } from 'sanity'

// Definiujemy interfejs używając konkretnych typów zamiast "any"
interface NewsItem {
	_id: string
	title: string
	publishedAt: string
	mainImage?: {
		asset: {
			_ref: string
			_type: string
		}
		alt?: string
	}
	content: TypedObject | TypedObject[] // Oficjalny typ dla Portable Text
}

async function getNews(): Promise<NewsItem[]> {
	// W zapytaniu upewniamy się, że pobieramy potrzebne pola
	return await client.fetch(
		`
    *[_type == "news"] | order(publishedAt desc) {
      _id,
      title,
      publishedAt,
      mainImage,
      content
    }
  `,
		{},
		{
			next: {
				revalidate: 10,
			},
		},
	)
}

export default async function NewsBoard() {
	const newsItems = await getNews()

	return (
		<section className='max-w-7xl mx-auto py-12 px-4'>
			<h2 className='text-4xl md:text-5xl font-bold mb-10 text-center '>Aktualnosci i ogloszenia</h2>

			<div className='flex flex-col items-center'>
				{newsItems.map((item: NewsItem) => (
					<div
						key={item._id}
						className='flex flex-col py-8 my-8 w-full border border-green-700 bg-white shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden  transition-shadow '>
						{item.mainImage && (
							<div className='relative h-64 w-full'>
								<Image
									src={urlFor(item.mainImage).width(800).url()}
									alt={item.mainImage.alt || item.title}
									fill
									sizes='(max-width: 768px) 100vw, 50vw'
									className='object-cover'
								/>
							</div>
						)}

						<div className='p-8'>
							<div className='flex items-center justify-between mb-4'>
								<time className='text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
									{new Date(item.publishedAt).toLocaleDateString('pl-PL')}
								</time>
							</div>

							<h3 className='text-2xl md:text-4xl font-bold text-gray-900 mb-4'>{item.title}</h3>

							<div className='prose prose-blue max-w-none text-gray-700 text-2xl'>
								{item.content && <PortableText value={item.content as TypedObject[]} />}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
