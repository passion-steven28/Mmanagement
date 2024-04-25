import { defineField, defineType } from "sanity";

export const Meeting = defineType({
    name: "meeting",
    title: "Meeting",
    type: "document",
    fields: [
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "attachments",
            title: "Attachments",
            type: "array",
            of: [{ type: "file" }],
        }),
        defineField({
            name: "startTime",
            title: "StartTime",
            type: "datetime",
        }),
        defineField({
            name: "endTime",
            title: "EndTime",
            type: "datetime",
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
        }),
        defineField({
            name: "agenda",
            title: "Agenda",
            type: "array",
            of: [{
                type: "string"
            }],
            initialValue: [],
        }),
        defineField({
            name: "outcomes",
            title: "Outcomes",
            type: "array",
            of: [{
                type: "string"
            }],
        }),
        defineField({
            name: "attendees",
            title: "Attendees",
            type: "array",
            of: [{ type: "reference", to: [{ type: "member" }] }],
        }),
        defineField({
            name: "guest",
            title: "Guest",
            type: "array",
            of: [{ type: "reference", to: [{ type: "member" }] }],
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "array",
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                    fields: [
                        {
                            type: "text",
                            name: "alt",
                            title: "Alternative text",
                            description: "image alt text",
                        },
                    ],
                },
            ],
        }),
    ],
});
