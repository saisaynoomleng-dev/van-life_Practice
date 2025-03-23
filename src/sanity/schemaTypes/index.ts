import { type SchemaTypeDefinition } from 'sanity'
import { vanType } from './vanType'
import { navbarType } from './navbarType'
import { navlinksType } from './blocks/navlinksType'
import { heroType } from './blocks/heroType'
import { splitImageType } from './blocks/splitImageType'
import { pageBuilderType } from './pageBuilderType'
import { pageType } from './pageType'
import { featuresType } from './blocks/featuresType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    vanType,
    navbarType,
    navlinksType,
    heroType,
    splitImageType,
    pageBuilderType,
    pageType,
    featuresType
  ],
}
