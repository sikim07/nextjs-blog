import MainHeader from '@/components/layouts/MainHeader'
import MainFooter from '@/components/layouts/MainFooter'
import { ReactNode } from 'react'

const MainBaseLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <MainHeader />
            {children}
            <MainFooter />
        </>
    )
}

export default MainBaseLayout
