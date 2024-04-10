import { defineField, defineType } from 'sanity'


export const member = defineType({
    name: "member",
    title: "Member",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "phone",
            title: "Phone Number",
            type: "string",
        }),
        defineField({
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
            initialValue: "member",
            options: {
                list: ["chairperson", "vice-chairperson", "secretary", "member"],
                layout: "radio",
            },
        }),
    ],
});
