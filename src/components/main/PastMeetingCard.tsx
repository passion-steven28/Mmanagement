import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {
    slug: string,
    title: string,
    date: string,
    startTime: string,
    endTime: string,
    location: string,
}

export default function MeetingCard({ slug, title, date, startTime, endTime, location }: Props) {
    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between w-full'>
                <h1 className='text-4xl font-bold underline'>{title}</h1>
                <Link
                    href={'/dashboard/minutes/'+slug}
                >
                    <Button
                    >
                        view details
                    </Button>
                </Link>
            </CardHeader>

            <CardContent className='flex flex-col gap-2'>
                <div>
                    <div className='text-2xl font-semibold'>
                        <h1>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })}</h1>
                    </div>
                    <div className='text-sm font-medium text-muted-foreground'>
                        <div className='flex items-center gap-4'>
                            <h1>{new Date(startTime).toLocaleTimeString(
                                'en-US', { hour: 'numeric', minute: 'numeric' }
                            )}</h1>
                            <h1>{new Date(endTime).toLocaleTimeString(
                                'en-US', { hour: 'numeric', minute: 'numeric' }
                            )}</h1>
                        </div>

                        <h1 className='text-red-700'>{location}</h1>
                    </div>
                </div>

                <div>
                    <p className="text-clip overflow-hidden ...">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore provident ipsam sequi ducimus optio, quaerat quidem iusto corporis magnam, consequatur ut, temporibus incidunt. Cum, sit ratione. Nesciunt, est repellendus?
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}