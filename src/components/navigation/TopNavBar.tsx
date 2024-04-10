import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type Props = {}

export default function TopNavBar({ }: Props) {
    return (
        <div className='flex items-center justify-between w-full p-4 px-10'>
            <div>
                <h1>MinuteS</h1>
            </div>

            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}