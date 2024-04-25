import { defineField, defineType } from "sanity";

export const minutes = defineType({
    name: "minutes",
    title: "Minutes",
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
            type: "string",
        }),
        defineField({
            name: "agenda",
            title: "Agenda",
            type: "string",
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
        defineField({
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            initialValue: new Date().toISOString(),
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "reference",
            to: [{ type: "member" }],
        }),
        defineField({
            name: "actions",
            title: "Action Items",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "description",
                            type: "string"
                        },
                        {
                            name: "owner",
                            title: "Owner",
                            type: "reference",
                            to: [{ type: "member" }],
                        },
                        {
                            name: "deadline",
                            title: "Deadline",
                            type: "date"
                        },
                    ],
                },
            ],
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
            name: "attendees",
            title: "Attendees",
            type: "array",
            of: [{ type: "reference", to: [{ type: "member" }] }],
            initialValue: [],
        }),
    ],
});