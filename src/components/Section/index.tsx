import { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode
    bg?: string
    className?: string
}

export default function Section({ children, bg, className }: SectionProps) {
    return (
        <section className={`px-4 w-full flex items-center justify-center ${bg}`}>
            <div className={`relative w-full max-w-6xl sm:flex sm:justify-center ${className}`}>
                {children}
            </div>
        </section>
    )
}