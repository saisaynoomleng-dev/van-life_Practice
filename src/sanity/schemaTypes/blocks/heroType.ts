import { defineArrayMember, defineField, defineType } from "sanity";

export const heroType = defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H1', value: 'h1'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                        {title: 'H5', value: 'h5'},
                        {title: 'H6', value: 'h6'},
                        {title: 'Quote', value: 'blockquote'}
                    ],
                    marks: {
                        decorators: [
                            {title: 'B', value: 'strong'},
                            {title: 'I', value: 'emphasis'}
                        ]
                    }
                })
            ]
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    validation: rule => rule
                        .required()
                })
            ]
        })
    ]
})