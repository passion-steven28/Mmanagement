import DatePicker from "@/components/main/DatePicker";
import MeetingCard from "@/components/main/MeetingCard";
import MeetingNavBar from "@/components/main/MeetingNavBar"
import { title } from "process";

const meetingsContent = [
    {
        title: "UX DESIGN DISCUSSION"
    },
    {
        title: "PRODUCT ROADMAP"
    },
    {
        title: "SALES STRATEGY"
    },
    {
        title: "ENGINEERING REVIEW"
    },
    {
        title: "MARKETING CAMPAIGN"
    }
]

export default function Home() {
    console.log("hello world")

    return (
        <section>
            <MeetingNavBar Children={
                <div>
                    <DatePicker />
                </div>
            }
            />

            <div className="grid grid-cols-1 gap-4">

            </div>
        </section>
    );
}
