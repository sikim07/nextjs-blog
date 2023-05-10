import { SetStateAction, useEffect, useState } from 'react'
import MainBaseLayout from '../components/layouts/MainBaseLayout'

interface apiResType1 {
    response: string
}

export default function Home() {
    useEffect(() => {}, [])
    return (
        <MainBaseLayout>
            <div className="relative text-center text-3xl font-bold text-green-600 underline"></div>
        </MainBaseLayout>
    )
}
