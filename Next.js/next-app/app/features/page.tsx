'use client'
import { useState, useEffect } from "react"
import Person from "./definition";
import axios from "axios";
import FeatureSection from "./FeatureSection";
import FeatureRightSide from "./FeatureRightSide";
import FeatureLeftSide from "./FeatureLeftSide";
const BASE_URL = `http://localhost:3000`;
async function getPerson(url: string): Promise<Person[]> {
    try {
        const response = await axios.get(`${url}/person`);
        if (response.status !== 200) throw new Error("Failed to fetch data person");
        return response.data
    } catch (error) {
        console.error(error);
        return [];
    }

}
export default function Page() {
    const [person, setPerson] = useState<Person[]>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        getPerson(BASE_URL)
            .then(res => setPerson(res))
            .catch(er => er)
        setLoading(false);
    }, [])
    return <section className="w-full m-auto mb-10 bg-transparent ">
        {
            loading ? (<p className="text-slate-700 text-[30px] ">loading...</p>) : (
                <>
                    <FeatureSection />
                    <div className="w-full p-6 flex flex-row gap-10 justify-top items-center">
                        <FeatureLeftSide person={person} />
                        <ul className="w-full max-w-3xl divide-y divide-gray-200 dark:divide-gray-700">
                            <FeatureRightSide person={person} />
                        </ul>
                    </div>
                </>
            )
        }

    </section>
}