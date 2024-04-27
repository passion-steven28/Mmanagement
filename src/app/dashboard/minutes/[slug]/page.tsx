import Link from 'next/link';
import MeetingNavBar from "@/components/main/MeetingNavBar";
import { ChevronLeftIcon, UsersRoundIcon } from 'lucide-react';
import { client } from '../../../../../sanity/lib/client';
import { PortableText } from '@portabletext/react'
import AttendeesList from '@/components/main/AttendeesList';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';


async function getData(slug: string) {
    const query = `
        *[_type == "minutes" && slug.current == $slug]{
    slug,
  title,
  actions[]{
    description,
    deadline,
    owner->{
      name,
      role
    }
  },
  body,
  agenda,
    location,
    startTime,
    endTime,
      author,
      attendees[]->{
    ...,
    profileImage{
    asset{
      _ref
    }
    }
      }
}
    `;

    const data = await client.fetch(query, { slug });
    return data[0];
}


export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);

    return (
        <section className="relative grid grid-cols-12 gap-4">
            <div className="col-start-1 col-end-13">
                <MeetingNavBar
                    Children={
                        <div>
                            <Link
                                href="/dashboard/minutes"
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
                            event description
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
                            description
                        </h1>
                        <PortableText
                            value={data.body}
                            // components={myPortableTextComponents}
                        />
                    </div>

                    <div className='w-full'>
                        <h1 className="text-4xl font-semibold capitalize underline tracking-wide mb-2">
                            action taken
                        </h1>
                        {data.actions.map((action: { description: string, deadline: Date, owner: { name: string, role: string } }, index: number) => (
                                <Card key={index} className="mb-4 w-full">
                                    <CardHeader>
                                        <h1>
                                            {action.owner.name} - {action.owner.role}
                                        </h1>
                                    </CardHeader>
                                    <CardContent>
                                        <h1>{action.description}</h1>
                                    </CardContent>
                                    <CardFooter className='flex items-center gap-4'>
                                        <h1 className='capitalize text-xl font-bold text-red-500'>deadline</h1>
                                        <h1>{action.deadline.toString()}</h1>
                                    </CardFooter>
                                </Card>
                            ))}
                    </div>

                    <div>
                        <h1 className="text-4xl font-semibold capitalize underline tracking-wide mb-2">
                            organizer
                        </h1>
                        <h2>passion steven</h2>
                        <h2>passion.steven@gmail.com</h2>
                    </div>
                </div>
            </div>

            <div className="col-start-9 col-end-13 max-h-screen sticky top-[15%]">
                <AttendeesList participants={data.attendees} />
            </div>
        </section>
    );
}