import DatePicker from "@/components/main/DatePicker";
import MeetingCard from "@/components/main/PastMeetingCard";
import MeetingNavBar from "@/components/main/MeetingNavBar"
import { client } from "../../../../sanity/lib/client";

// export const revalidate = 1000

async function getData() {
    const query = `
        *[_type == "minutes"]{
  slug{
    current
  },
  title,
    agenda,
    startTime,
    endTime,
    location
}
    `;


    const data = await client.fetch(query);
    return data;
};


export default async function Home() {
    const meetingsContent = await getData();


    return (
        <section>
            <MeetingNavBar Children={
                <div>
                    <DatePicker />
                </div>
            }
            />

            <div className="grid grid-cols-1 gap-4 px-4 mb-4">
                {meetingsContent.map((meeting: any) => (
                    <MeetingCard
                        key={meeting.slug}
                        title={meeting.title}
                        date={meeting.startTime}
                        startTime={meeting.endTime}
                        endTime={meeting.endTime}
                        location={meeting.location}
                        slug={meeting.slug.current}
                    // agenda={meeting.agenda}
                    />
                ))}
            </div>
        </section>
    );
}
