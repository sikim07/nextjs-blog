import { SetStateAction, useEffect, useState } from 'react'
import MainBaseLayout from '../components/layouts/MainBaseLayout'

interface apiResType1 {
    response: string
}

export default function Home() {
    const [res1, setRes1] = useState<SetStateAction<null | apiResType1>>(null)
    const [res2, setRes2] = useState<SetStateAction<null | Response>>(null)

    useEffect(() => {}, [])
    return (
        <MainBaseLayout>
            <div className="relative text-3xl font-bold text-center text-green-600 underline">
                <div className="text-3xl font-bold underline hover:ring-2 w-50 h-2/6 w-[35px]"></div>
                test
                <div className="flex">
                    <div className="flex-1">11</div>
                </div>
                <div>teaildsasdfdsadsfaf</div>
                <div>teaildsasdfdsadsfaf</div>
                <div>teaildsasdfdsadsfaf</div>
                <div>teaildsasdfdsadsfaf</div>
                <div>teaildsasdfdsadsfaf</div>
                <div>teaildsasdfdsadsfaf</div>
                <div>teaildsasdfdsadsfaf</div>
                <div>teaildsasdfdsadsfaf</div>
                <div>teaildsasdfdsadsfaf</div>
            </div>
        </MainBaseLayout>
    )
}
