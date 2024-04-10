import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

const meetingsData = [
    {
        title: 'Today',
        url: '/dashboard/minutes/today'
    },
    {
        title: 'Yesterday',
        url: '/dashboard/minutes/today'
    },
    {
        title: 'Last Week',
        url: '/dashboard/minutes/today'
    },
    {
        title: 'Last Month',
        url: '/dashboard/minutes/today'
    },
    {
        title: 'Last Year',
        url: '/dashboard/minutes/today'
    }
]

type Props = {}

export default function SideNavBar({ }: Props) {
    return (
        <Card className='w-full h-full'>
            <CardHeader>
                past meetings
            </CardHeader>
            <CardContent className='grid grid-cols-1 gap-4'>
                {meetingsData.map((meeting) => (
                    <Link
                        key={meeting.title}
                        href={meeting.url}
                        className='flex items-center justify-between gap-4 w-full border-b-2 border-gray-200 hover:bg-gray-100 rounded-md p-4'
                    >
                        <h1>{meeting.title}</h1>
                        <ArrowRight />
                    </Link>
                ))}
            </CardContent>
        </Card>
    )
}