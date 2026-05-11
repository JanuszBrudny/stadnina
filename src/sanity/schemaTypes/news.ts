import { defineField, defineType } from 'sanity'

export const newsType = defineType({
	name: 'news',
	title: 'Aktualności',
	type: 'document',

	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł aktualności',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'publishedAt',
			title: 'Data publikacji',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'mainImage',
			title: 'Zdjęcie',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Tekst alternatywny',
				},
			],
		}),
		defineField({
			name: 'content',
			title: 'Treść aktualności',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'publishedAt',
			media: 'mainImage',
		},
		prepare(selection) {
			const { subtitle } = selection
			return {
				...selection,
				// Formatowanie daty w podglądzie listy
				subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'Brak daty',
			}
		},
	},
})
