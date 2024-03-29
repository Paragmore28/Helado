import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/ishant.jpg'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
	return (
		<>
			<Head>
				<title>
					KING Starts as a Square - Get lost in the world of icon design
				</title>
				<meta
					name="description"
					content="A book and video course that teaches you how to design your own icons from scratch. "
				/>
			</Head>
			<NavBar />
			<Hero />
			<Introduction />
			{/*			<TableOfContents />*/}
			<Testimonial
				id="tommy-stroman-testimonial-1"
				author={{
					name: 'Ishant',
					role: 'Co-Founder at Helado',
					image: avatarImage1,
				}}
			>
				<p>
					"Burned my tonsils up because they made me eat all the possible
					Ice creams"
				</p>
			</Testimonial>
			<Screencasts />
			<Testimonial
				id="gerardo-stark-testimonial-2"
				author={{
					name: 'Gerardo Stark',
					role: 'Creator of Pandemicons',
					image: avatarImage2,
				}}
			>
				<p>
					“I’ve tried to create my own icons in the past but quickly got
					frustrated and gave up. Now I sell my own custom icon sets online.”
				</p>
			</Testimonial>
			{/*<Resources />*/}
			<FreeChapters />
			<Pricing />
			<Testimonials />
			<Author />
			<Footer />
		</>
	)
}
