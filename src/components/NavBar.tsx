'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className='relative flex flex-col p-4 md:flex-row md:justify-between border-b border-green-900 bg-white z-50'>
			<div className='flex w-full items-center justify-between md:w-auto'>
				<div className='font-bold text-2xl text-green-900'>Maciejówka Zabrze</div>

				<button
					className='rounded p-2 md:hidden active:scale-95 transition-transform'
					type='button'
					onClick={() => setIsOpen(!isOpen)}
					aria-label='Toggle menu'>
					<Image src='/menu.svg' alt='Menu' width={36} height={36} />
				</button>
			</div>

			<div
				className={`
					fixed top-0 left-0 h-screen w-full z-60
					flex flex-col items-center justify-center gap-4 
					bg-black/95 text-white text-2xl
					transition-transform duration-300 ease-in-out
					${isOpen ? 'translate-x-0' : '-translate-x-full'} 
					md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:bg-transparent md:text-black md:text-base md:p-0
				`}>
				<button className='absolute top-6 right-6 p-8 md:hidden' onClick={() => setIsOpen(false)}>
					✕
				</button>

				<Link href='/' onClick={() => setIsOpen(false)} className='p-4 hover:text-green-500 transition-colors'>
					Strona główna
				</Link>
				<Link href='/news' onClick={() => setIsOpen(false)} className='p-4 hover:text-green-500 transition-colors'>
					Aktualności
				</Link>
				<Link href='/aboutUs' onClick={() => setIsOpen(false)} className='p-4 hover:text-green-500 transition-colors'>
					O nas
				</Link>
			</div>

			{isOpen && <div className='fixed inset-0 bg-black/40 z-55 md:hidden' onClick={() => setIsOpen(false)} />}
		</nav>
	)
}
