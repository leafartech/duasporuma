interface CardProps {
    imagePath: string
    text: string
}

export default function Card({ imagePath, text}: CardProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 border border-border rounded-xl py-3 sm:py-6 px-5 max-w-sm lg:max-w-sm md:max-w-xs transition duration-500 hover:bg-white hover:border-white hover:shadow-xl">
            <img src={`./images/cards/${imagePath}.png`} alt="" className="w-20 md:w-12" />
            <p className="text-subtitle font-medium text-sm sm:text-base md:text-sm">{text}</p>
        </div>
    )
}