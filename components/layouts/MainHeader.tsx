import Image from 'next/image'
import { NaviagtionItemType } from '@/types/ui'
import icon_cat from '@/assets/icons/icon_cat.svg'

const MainHeader = () => {
    const navigationItems: NaviagtionItemType[] = [
        {
            id: 1,
            title: 'nav1',
            link: '/',
        },
        {
            id: 2,
            title: 'nav2',
            link: '/',
        },
        {
            id: 3,
            title: 'nav3',
            link: '/',
        },
    ]

    return (
        <nav className="h-[60px] w-full">
            <div className="flex">
                <Image src={icon_cat} width={50} height={50} alt="고양이 아이콘" />
                {navigationItems.map((item: NaviagtionItemType) => (
                    <div
                        className="p-[5px_20px] text-[28px] font-bold text-[#333333]"
                        key={item.id}>
                        {item.title}
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default MainHeader
