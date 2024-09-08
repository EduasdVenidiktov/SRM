import StatusLabel, { Status } from '@/app/components/status-label';
import {headers} from "next/headers";
import MagicButton from "@/app/components/magic-button";
import AddCompanyButton from "@/app/components/add-company-button";

export default function Home() {
    console.log(headers());

    return (
        <main>
            <h1 className="text-xl">Home page</h1>
            <AddCompanyButton/>
            <MagicButton/>
               </main>
    );
}