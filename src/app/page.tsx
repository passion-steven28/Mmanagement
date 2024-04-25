import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    console.log("hello world");

    return (
        <main className="flex flex-col items-center justify-center gap-4 min-h-screen py-2">
            <div>
                <Image src="/logo.svg" alt="logo" width={300} height={300} />
            </div>

            <Separator />

            <div className="text-center p-2 px-10 grid gap-2 text-xl font-semibold">
                <h1 className="text-2xl font-bold underline mb-4">
                    welcome to a meeting planer
                </h1>
                <p className="mb-4 text-sm">
                    This is a simple meeting planner app that allows you to create, edit,
                    and delete meetings. You can also add attendees, set a start and end
                    time, and add an agenda.
                </p>
                <p>
                    To get started, click the &quot;Create Meeting&quot;.
                </p>
                <p>
                    I hope you find this app useful! If you have any questions or feedback,
                    please feel free to contact me at <span className="text-blue-500 underline">passionsteven@gmail.com</span>
                </p>
            </div>

            <div className="flex items-center justify-between gap-4">
                <Link
                    href="/dashboard/meetings"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View Meetings
                </Link>
                <Link
                    href="/studio"
                >
                    <Button>Create Meeting</Button>
                </Link>
            </div>
        </main>
    );
}
