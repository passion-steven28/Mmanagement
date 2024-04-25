import MeetingCard from "@/components/main/MeetingCard";
import { client } from "../../../../sanity/lib/client";

// Function to fetch data from sanity
async function getData() {
    // GROQ query to fetch meetings within the current week
    const query = `
        *[_type == "meeting"] | order(startTime) {
            slug{current},
            title,
            agenda,
            location,
            outcomes,
            startTime,
            endTime,
            attendees[]->,
            guest[]->
        }
    `;

    // Fetch data from sanity
    const data = await client.fetch(query);
    return data;
};

export default async function Home() {
    const meetingsContent = await getData();
    console.log(meetingsContent.slug);

    return (
        <main className="grid grid-cols-3 place-items-start gap-4 px-4">
            {meetingsContent.map(
                (meeting: {
                    slug: { current: string | null };
                    title: string;
                    agenda: string;
                    location: string;
                    startTime: string;
                    endTime: string;
                }) => (
                    <MeetingCard
                        key={meeting.title}
                        slug={meeting.slug.current ?? ""}
                        title={meeting.title}
                        agenda={meeting.agenda}
                        location={meeting.location}
                        startTime={meeting.startTime}
                        endTime={meeting.endTime}
                        date={meeting.startTime}
                        chairperson={""}
                        organizer={""}
                        notifications={false}
                    />
                )
            )}
        </main>
    );
}
