import { type SchemaTypeDefinition } from 'sanity'
import { newsType } from '../schemaTypes/news'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [newsType],
}
