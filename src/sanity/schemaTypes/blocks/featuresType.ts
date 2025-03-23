import { defineField, defineType } from "sanity";

export const featuresType = defineType({
    name: 'features',
    type: 'object',
    fields: [
        defineField({
            name: 'features',
            type: 'array',
            of: [
                defineField({
                    name: 'feature',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            type: 'string'
                        }),
                        defineField({
                            name: 'text',
                            type: 'string'
                        })
                    ]
                })
            ]
        })
    ]
})