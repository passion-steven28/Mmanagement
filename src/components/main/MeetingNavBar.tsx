import { Search } from 'lucide-react'
import React, { Children, ReactNode } from 'react'

type Props = {
    Children: ReactNode
}

export default function MeetingNavBar({ Children }: Props) {
    return (
        <div className='flex items-center justify-between w-full p-4 border-b-2 border-gray-200 mb-5'>
            <div>
                {Children}
            </div>

            {/* Search bar */}
            <div>
                <form action="#"
                    className='flex items-center gap-4 border-2 p-0 rounded-full overflow-hidden'
                >
                    <input
                        type='text'
                        placeholder='Search...'
                        className='w-full outline-none px-4'
                    />
                    <div className='bg-slate-500 p-2 rounded-full text-white cursor-pointer'>
                        <Search />
                    </div>
                </form>
            </div>
        </div>
    )
}