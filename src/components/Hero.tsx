import Image from 'next/image'

interface HeroProps {
	title: string
	subtitle: string
	backgroundImage: string
}
export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
	return (
		<section className='relative flex h-[80vh] w-full items-center justify-center overflow-hidden bg-black text-white '>
			<Image src={backgroundImage} alt={title} fill loading='eager' className=' object-cover opacity-50' />

			<div className='relative z-10 px-4 text-center'>
				<h2 className='text-4xl font-bold md:text-6xl'>{title}</h2>
				<p className='mt-4 text-lg md:text-xl text-gray-200'>{subtitle}</p>
			</div>
		</section>
	)
}
