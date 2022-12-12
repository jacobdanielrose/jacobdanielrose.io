import { defineField, defineType } from "sanity";

export default defineType({
    name: 'social',
    title: 'Social',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'platform for social media',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'URL',
            description: 'the link to the social media profile',
            type: 'url',
            validation: (rule) => rule.required(),
        })
    ]
})