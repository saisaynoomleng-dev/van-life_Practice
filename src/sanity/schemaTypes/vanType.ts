import { defineArrayMember, defineField, defineType } from "sanity";
import { FaVanShuttle } from 'react-icons/fa6'
import { BiDetail } from 'react-icons/bi'
import { MdPermMedia } from 'react-icons/md'

export const vanType = defineType({
    name: 'van',
    title: 'Van',
    icon: FaVanShuttle,
    type: 'document',
    groups: [
        {name: 'detail', title: 'Detail', icon: BiDetail},
        { name: 'media', title: 'Media', icon: MdPermMedia}
    ],
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            group: 'detail'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'detail',
            options: {
                source: 'name'
            },
            validation: rule => rule
                .required()
                .error(`Required to generate a page on th website`),
            hidden: ({document}) => !document?.name
        }),
        defineField({
            name: 'type',
            title: 'Van Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Simple', value: 'simple'},
                    { title: 'Rugged', value: 'rugged'},
                    { title: 'Luxury', value: 'luxury'},
                ],
                layout: 'radio'
            },
            validation: rule => rule
                .required()
                .warning('Required to provide van type to the customers'),
            group: 'detail'
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            initialValue: 10,
            validation: rule => rule
                .required(),
            group: 'detail'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block'
                })
            ],
            validation: rule => rule
                .required(),
            group: 'detail'
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'media',
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
    ],
    preview: {
        select: {
            name: 'name',
            image: 'mainImage',
            type: 'type',
            price: 'price'
        },
        prepare({name, image, type, price}){
            const nameFormatted = name || 'Name not specified';
            
            return{
                title: `${nameFormatted} (${type.slice(0,1).toUpperCase()}${type.slice(1)})`,
                subtitle: `$${price}/day`,
                media: image ?? FaVanShuttle
            }
        }
    }
})