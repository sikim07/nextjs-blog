import Image from 'next/image'
import icon_cat from '@/assets/icons/icon_cat.svg'
import Link from 'next/link'

const MainHeader = () => {
    return (
        <nav className="w-full">
            <div className="p-[10px]">
                <Link href={'/'}>
                    <Image src={icon_cat} width={50} height={50} alt="고양이 아이콘" />
                </Link>
            </div>
        </nav>
    )
}

export default MainHeader
