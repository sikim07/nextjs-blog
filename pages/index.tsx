import MainBaseLayout from '../components/layouts/MainBaseLayout'

export default function Home() {
    const fetchData = async () => {
        const res1 = await fetch('/', {
            method: 'GET',
        })
        console.log(res1)
        const res2 = await fetch('/test', {
            method: 'GET',
        })
        console.log(res2)

        return res2
    }

    fetchData()
    return (
        <MainBaseLayout>
            <div className="text-3xl font-bold underline text-green-600 text-center relative">
                <div className="text-3xl font-bold underline hover:ring-2 w-50 h-2/6 w-[35px]">
                    test
                </div>
                test
                <div className="flex">
                    <div className="flex-1">11</div>
                    <div className="flex-1">11</div>
                    <div className="flex-1">11</div>
                    <div className="flex-1">11</div>
                    <div className="flex-1">22</div>
                    <div className="flex-1">22</div>
                </div>
                <div>teaildsasdfdsadsfaf</div>
            </div>
        </MainBaseLayout>
    )
}
