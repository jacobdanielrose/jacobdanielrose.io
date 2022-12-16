import { defineField, defineType } from "sanity";

export default defineType({
    name: 'codeblock',
    title: 'Code',
    type: 'object',
    fields: [
        defineField({
            name: 'code',
            title: 'Code',
            type: 'code',
        })
    ],
})