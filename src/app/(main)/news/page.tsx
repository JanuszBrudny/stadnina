import NewsBoard from '@/components/NewsBoard'
import Hero from '@/components/Hero'
export default function news() {
	return (
		<>
			<Hero
				title='Aktualności'
				subtitle='Tutaj dowiesz się co dzieje sie w stadninie!'
				backgroundImage='/header-hiro.jpg'
			/>

			<NewsBoard />
		</>
	)
}
