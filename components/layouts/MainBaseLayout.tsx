import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import { ReactNode } from 'react'

interface ComponentProps {
    children: ReactNode
}

export default function MainBaseLayout({children}: ComponentProps) {
    return <>
<MainHeader />
{children}
<MainFooter />
    </>
}