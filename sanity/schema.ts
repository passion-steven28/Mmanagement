import { type SchemaTypeDefinition } from 'sanity'
import { minutes } from './schema/minutes'
import { Meeting } from './schema/Meeting'
import { member } from './schema/member'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    minutes,
    Meeting,
    member
  ],
}