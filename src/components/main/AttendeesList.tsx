import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UsersRoundIcon } from 'lucide-react'
import urlFor from '@/lib/urlFor'

type Props = {
    participants: Array<{
        name: string
        profileImage: {
            asset: {
                _ref: string;
            }
        }
        role: string
    }>
}

export default function AttendeesList({ participants }: Props) {
    return (
        <ScrollArea className="col-start-3 col-end-3 max-h-screen">
            <h1 className="text-2xl font-semibold capitalize mb-2 flex items-center gap-4 w-full border-b border-gray-300">
                <UsersRoundIcon /> attendees
            </h1>
            <div className="flex flex-col">
                {participants.map((participant) => (
                    <div
                        key={participant.name}
                        className="flex items-center justify-between gap-4 p-4 w-full hover:bg-gray-100 transition-all rounded-md shadow-sm mb-2"
                    >
                        <Avatar>
                            <AvatarImage src={urlFor(participant.profileImage).url()} />
                            <AvatarFallback>
                                {participant.name.slice(0, 2).toLocaleUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2 w-full">
                            <h2 className="text-md font-semibold capitalize">
                                {participant.name}
                            </h2>
                            <p className="text-sm">{participant.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
    );
}
export function GuestList({ participants }: Props) {
    return (
        <ScrollArea className="col-start-3 col-end-3 max-h-screen">
            <h1 className="text-2xl font-semibold capitalize mb-2 flex items-center gap-4 w-full border-b border-gray-300">
                <UsersRoundIcon /> guest
            </h1>
            <div className="flex flex-col">
                {participants.map((participant) => (
                    <div
                        key={participant.name}
                        className="flex items-center justify-between gap-4 p-4 w-full hover:bg-gray-100 transition-all rounded-md shadow-sm mb-2"
                    >
                        <Avatar>
                            <AvatarImage src={urlFor(participant.profileImage).url()} />
                            <AvatarFallback>
                                {participant.name.slice(0, 2).toLocaleUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2 w-full">
                            <h2 className="text-md font-semibold capitalize">
                                {participant.name}
                            </h2>
                            <p className="text-sm">{participant.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
    );
}
