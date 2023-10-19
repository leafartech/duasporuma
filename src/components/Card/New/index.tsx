import { ElementType, ReactNode } from "react"

interface MyCardProps {
    Icon: ElementType
    children: ReactNode
}

export default function MyCard({ Icon, children }: MyCardProps) {
    return (
        <div className="w-full bg-white/80 shadow-xl border border-my4 rounded-3xl flex flex-col gap-4 py-12 px-8">
            <Icon className="h-10 w-10 text-my4" />
            <p className="text-zinc-600 font-medium">{ children }</p>
        </div>
    )
}