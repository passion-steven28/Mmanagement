import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image';

const navLinks = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: ArrowRight,
    },
    {
        name: "Meeting",
        href: "/dashboard/meetings",
        icon: ArrowRight,
    },
    {
        name: "Minutes",
        href: "/dashboard/minutes",
        icon: ArrowRight,
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: ArrowRight,
    }
]

type Props = {}

export default function SideNavBar({ }: Props) {
    return (
        <div className='grid grid-cols-1 gap-2 p-4'>
            <div className='flex items-center justify-start h-[20vh] w-full'>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={300}
                    height={300}
                />
            </div>
            {navLinks.map((link) => (
                <Button key={link.name}>
                    <Link
                        href={link.href}
                        key={link.name}
                        className="flex items-center justify-start px-2 py-2 text-sm font-medium leading-5 text-white rounded-lg focus:outline-none focus:shadow-outline-gray-300"
                    >
                        <span>{link.name}</span>
                        <span>
                            <link.icon />
                        </span>
                    </Link>
                </Button>
            ))}
        </div>
    )
}