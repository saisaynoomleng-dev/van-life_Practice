import { defineField, defineType } from "sanity";
import { TbLayoutNavbarInactive } from 'react-icons/tb'

export const navbarType = defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    icon: TbLayoutNavbarInactive,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            hidden: ({document}) => !document?.name,
            options: {
                source: 'name'
            },
            validation: rule => rule
                .required()
                .error(`Required to generate a page on the website`)
        }),
        defineField({
            name: 'navlink',
            title: 'Navlink',
            type: 'array',
            of: [
                {type: 'reference', to: [{type: 'navlinks'}]}
            ]
        })
    ],

})