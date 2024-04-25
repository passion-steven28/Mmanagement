'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Switch } from "@/components/ui/switch"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SquareArrowOutUpRight, ZoomIn } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import AttendeesList from './AttendeesList'
import Link from 'next/link'
import { Separator } from '../ui/separator'



type Props = {
    slug: string
    agenda: string
    title: string
    date: string
    startTime: string
    endTime: string
    location: string
    chairperson: string
    organizer: string
    notifications: boolean
}



export default function MeetingCard({ slug, agenda, title, date, startTime, endTime, location, chairperson, organizer }: Props) {
    const [notifications, setNotifications] = useState(false);


    return (
        <Dialog>
            <Card className='max-h-fit w-full'>
                <CardHeader className='flex flex-row justify-content-center align-items-center gap-4 w-full p-2 mb-4'>
                    <CardTitle className='w-full'>{title}</CardTitle>
                </CardHeader>

                <Separator />

                <CardContent>
                    <div>
                        <h1>
                            {new Date(startTime).toLocaleTimeString()} - {new Date(endTime).toLocaleTimeString()}
                        </h1>
                        <h1>
                            {new Date(date).toLocaleDateString()}
                        </h1>
                        <h1>{location}</h1>

                        <Separator />

                    </div>
                    <div className='mt-4'>
                        <h1>{chairperson} - chairperson</h1>
                        <h1>{organizer} - organizer</h1>
                    </div>
                </CardContent>
                <CardFooter className='fle items-center justify-center w-full'>
                    <Link
                        href={'/dashboard/meetings/' + slug}
                    >
                        <Button>join meeting</Button>
                    </Link>
                </CardFooter>
            </Card>




            <DialogContent>
                <DialogHeader>
                    <DialogTitle><h1>{title}</h1></DialogTitle>
                    <DialogDescription>
                        <section>
                            <div className='flex flex-col gap-2 font-bold text-sm'>
                                <h1>{startTime} - {endTime}</h1>
                                <h1>{date}</h1>
                                <h1>{location}</h1>
                                <h1>{location}</h1>
                            </div>

                            <div className='flex flex-col gap-2 font-bold text-lg'>
                                <h1>{chairperson} - chairperson</h1>
                                <h1>{organizer} - organizer</h1>
                            </div>

                            <div>
                                <h1 className='text-2xl font-bold underline'>meeting agenda</h1>
                                <p>{agenda}</p>
                            </div>

                            <div>
                                <div>
                                    <div
                                        // key={participant.name}
                                        className="flex items-center justify-between gap-4 p-4 w-full hover:bg-gray-100 transition-all rounded-md shadow-sm mb-2"
                                    >
                                        <Avatar>
                                            <AvatarImage src='/' />
                                            <AvatarFallback>
                                                {/* {participant.name.slice(0, 2).toLocaleUpperCase()} */}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-2 w-full">
                                            <h2 className="text-md font-semibold capitalize">
                                                {/* {participant.name} */}
                                            </h2>
                                            {/* <p className="text-sm">{participant.role}</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        // key={participant.name}
                                        className="flex items-center justify-between gap-4 p-4 w-full hover:bg-gray-100 transition-all rounded-md shadow-sm mb-2"
                                    >
                                        <Avatar>
                                            <AvatarImage src='/' />
                                            <AvatarFallback>
                                                {/* {participant.name.slice(0, 2).toLocaleUpperCase()} */}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-2 w-full">
                                            <h2 className="text-md font-semibold capitalize">
                                                {/* {participant.name} */}
                                            </h2>
                                            {/* <p className="text-sm">{participant.role}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='grid gap-4'>
                                <h1 className='text-2xl font-bold underline'>platform</h1>
                                <div className='grid grid-cols-3 gap-4 w-full'>
                                    <Card className='flex items-center justify-center w-full h-full py-4'>
                                        <ZoomIn />
                                    </Card>
                                    <Card className='flex items-center justify-center w-full h-full py-4'>
                                        <ZoomIn />
                                    </Card>
                                    <Card className='flex items-center justify-center w-full h-full py-4'>
                                        <ZoomIn />
                                    </Card>
                                </div>
                            </div>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </section>
                        <section>
                            <div className="col-start-9 col-end-13 max-h-screen sticky top-[15%]">
                                {/* <AttendeesList
                                    participants={attendees}
                                /> */}
                            </div>
                        </section>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}