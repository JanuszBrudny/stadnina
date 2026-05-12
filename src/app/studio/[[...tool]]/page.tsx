'use client' // <--- TO JEST KLUCZOWE

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Usuwamy export const dynamic = 'force-static', ponieważ Studio musi być dynamiczne
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
	return <NextStudio config={config} />
}
