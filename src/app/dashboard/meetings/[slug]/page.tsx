import Link from 'next/link';
import MeetingNavBar from "@/components/main/MeetingNavBar";
import { ChevronLeftIcon, UsersRoundIcon } from 'lucide-react';
import { client } from '../../../../../sanity/lib/client';
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import AttendeesList, { GuestList } from '@/components/main/AttendeesList';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';


async function getData(slug: string) {
    const query = `
        *[_type == "meeting" && slug.current == "${slug}"]{
  slug{
    current
  },
  title,
  agenda,
  location,
  outcomes,
  startTime,
  endTime,
  attendees[]->,
  guest[]->
}`;

    const data = await client.fetch(query, { slug });
    return data[0];
}


export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);
    console.log(data);

    // Check if the meeting exists
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <section className="relative grid grid-cols-12 gap-4">
            <div className="col-start-1 col-end-13">
                <MeetingNavBar
                    Children={
                        <div>
                            <Link
                                href="/dashboard/meetings"
                                className="flex items-center gap-4"
                            >
                                <ChevronLeftIcon />
                                <h1 className="text-3xl font-bold">{data.title}</h1>
                            </Link>
                        </div>
                    }
                />
            </div>

            <div className="grid grid-cols-3 gap-4 relative col-start-1 col-end-9 w-full">
                <div className="col-start-1 col-end-3 grid grid-cols-1 gap-4 p-4 min-h-screen">
                    <div>
                        <h1 className="text-4xl font-semibold capitalize underline tracking-wide mb-2">
                            meeting description
                        </h1>
                        <div className="text-2xl font-semibold">
                            <h1>
                                {new Date(data.startTime).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                })}
                            </h1>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-4">
                                <h1>
                                    {new Date(data.startTime).toLocaleTimeString("en-US", {
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}
                                </h1>
                                <h1>
                                    {new Date(data.endTime).toLocaleTimeString("en-US", {
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}
                                </h1>
                            </div>

                            <h1 className="text-red-700">{data.location}</h1>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-4xl font-semibold capitalize underline tracking-wide mb-2">
                            agenda
                        </h1>
                        <ol>
                            {data.agenda.map((item: string) => (
                                <li
                                    key={item}
                                    className='text-lg font-semibold capitalize underline tracking-wide mb-2 list-disc list-inside'
                                >
                                    {item}
                                </li>
                            ))}{" "}
                        </ol>
                    </div>

                    <div>
                        <h1 className="text-4xl font-semibold capitalize underline tracking-wide mb-2">
                            outcomes
                        </h1>
                        <ol>
                            {data.outcomes.map((item: string) => (
                                <li
                                    key={item}
                                    className='text-lg font-semibold capitalize underline tracking-wide mb-2 list-disc list-inside'
                                >
                                    {item}
                                </li>
                            ))}{" "}
                        </ol>
                    </div>

                    <div>
                        <PortableText
                            value={data.body}
                        />
                    </div>
                </div>

            </div>
            <div className="col-start-9 col-end-13 max-h-screen sticky top-[15%]">
                <AttendeesList participants={data.attendees} />
                <GuestList participants={data.guest} />
            </div>
        </section>
    );
}
