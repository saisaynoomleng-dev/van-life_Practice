import { FaVanShuttle } from 'react-icons/fa6'
import { IoDocuments } from 'react-icons/io5'
import { TbLayoutNavbarInactive } from 'react-icons/tb'
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('van').title('All Vans').icon(FaVanShuttle),
      S.documentTypeListItem('navbar').title('All Navbars').icon(TbLayoutNavbarInactive),
      S.documentTypeListItem('page').title('App Pages').icon(IoDocuments)
    ])
