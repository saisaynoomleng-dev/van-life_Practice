import { IoDocument } from "react-icons/io5";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
    name: 'page',
    title: 'Page',
    icon: IoDocument,
    type: 'document',
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
            options: {
                source: 'name'
            },
            validation: rule => rule
                .required(),
            hidden: ({document}) => !document?.name
        }),
        defineField({
            name: 'contents',
            title: 'Contents',
            type: 'pageBuilder'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            }
        })
    ],
    preview: {
        select: {
            name: 'name',
            image: 'image',
            slug: 'slug'
        },
        prepare({name, image, slug}){
            return{
                title: name,
                subtitle: slug.current,
                media: image ?? IoDocument
            }
        }
    }
})