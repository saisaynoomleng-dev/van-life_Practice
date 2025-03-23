import { defineField, defineType } from "sanity";

export const splitImageType = defineType({
    name: 'splitImage',
    type: 'object',
    fields: [
        defineField({
            name: 'orientation',
            type: 'string',
            options: {
                list: [
                    {title: 'Image Left', value: 'imageLeft'},
                    {title: 'Image Right', value: 'imageRight'}
                ]
            }
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        })
    ]
})