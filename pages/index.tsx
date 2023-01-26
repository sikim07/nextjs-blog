import { SetStateAction, useEffect, useState } from 'react'
import MainBaseLayout from '../components/layouts/MainBaseLayout'

interface apiResType1 {
    response: string
}

export default function Home() {
    const [res1, setRes1] = useState<SetStateAction<null | apiResType1>>(null)
    const [res2, setRes2] = useState<SetStateAction<null | Response>>(null)

    const fetchData = async () => {
        const response1 = await fetch('/', {
            method: 'GET',
        })
        setRes1(response1)
        const response2 = await fetch('/test', {
            method: 'GET',
        })
        setRes2(response2)
        console.log(res2)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return res1 && res2 ? (
        <MainBaseLayout>
            <div className="text-3xl font-bold underline text-green-600 text-center relative">
                <div className="text-3xl font-bold underline hover:ring-2 w-50 h-2/6 w-[35px]"></div>
                test
                <div className="flex">
                    <div className="flex-1">11</div>
                    <div className="flex-1">11</div>
                </div>
                <div>teaildsasdfdsadsfaf</div>
            </div>
        </MainBaseLayout>
    ) : (
        <div>loading</div>
    )
}
