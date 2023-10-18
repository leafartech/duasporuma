import { ReactNode } from "react"

interface HeroFlexProps {
    children: ReactNode
    title: string
    imagePath: string
    reverse: boolean
}

export default function HeroFlex({ children, imagePath, reverse, title }: HeroFlexProps) {
    return (
        <div className={`w-full flex-col flex items-center justify-between ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
            <div className="flex flex-col gap-2 sm:gap-5 max-w-[520px]">
                <h2 className="font-bold text-xl sm:text-[30px] sm:leading-10">{title}</h2>
                { children }
            </div>
            <div className="sm:max-w-[520px] flex justify-end mt-4 sm:mt-0">
                <img src={`../images/${imagePath}`} alt="Imagem Hero" className="sm:h-full" />
            </div>
        </div>
    )
}