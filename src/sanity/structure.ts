// ./src/sanity/structure.ts
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = S =>
	S.list()
		.title('Base')
		.items([
			// 1. Zmień 'post' na 'news' i zmień tytuł na 'Aktualności'
			S.documentTypeListItem('news').title('Aktualności'),

			// 2. Usuń stare odwołania, których już nie używasz
			// S.documentTypeListItem('category').title('Categories'), <- USUŃ TO
			// S.documentTypeListItem('author').title('Authors'),     <- USUŃ TO

			S.divider(),

			// 3. Upewnij się, że filtr też nie szuka starego typu 'post'
			...S.documentTypeListItems().filter(item => item.getId() && !['news'].includes(item.getId()!)),
		])
