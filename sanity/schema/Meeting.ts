import { defineField, defineType } from "sanity";

export const Meeting = defineType({
    name: "meeting",
    title: "Meeting",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "datetime",
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today'
            },
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "agenda",
            title: "Agenda",
            type: "string",
        }),
        defineField({
            name: "numberOfAttendees",
            title: "Number of Attendees",
            type: "number",
        }),
        defineField({
            name: "chairperson",
            title: "Chairperson",
            type: "reference",
            to: [{ type: "member" }],
        }),
    ],
});
