import { defineField, defineType } from "sanity";
import { IoIosLink } from 'react-icons/io'

export const navlinksType = defineType({
    name: 'navlinks',
    title: 'Navlinks',
    type: 'document',
    icon: IoIosLink,
    fields: [
        defineField({
            name: 'name',
            title: 'Link Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            },
            hidden: ({document}) => !document?.name,
            validation: rule => rule.required()
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'string',
            validation: rule => rule
                .required()
                .error('Required to generate urls for the nav links')
        })
    ]
})