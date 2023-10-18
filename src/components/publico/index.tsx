import { ReactNode } from 'react'

interface PublicoProps {
    children: ReactNode
}

export default function Publico({ children }: PublicoProps) {
    return (
        <div className="flex flex-col sm:grid sm:grid-cols-my gap-2  sm:gap-6 sm:items-center">
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 44" fill="none">
                <g clip-path="url(#clip0_32_122)">
                    <path d="M1.20794 28.4056L4.1637 31.1116C5.5497 32.3803 7.18498 33.0274 8.82881 33.0274C10.0083 33.0274 11.1934 32.6938 12.2945 32.0191L32.1401 19.7779C33.9079 18.6908 34.6771 15.9463 33.8537 13.6583C33.029 11.3648 30.9065 10.3674 29.1259 11.4234L29.116 11.4308L23.4153 14.9728C23.401 14.9581 23.3868 14.9453 23.3711 14.9324L13.0837 6.40195C12.0381 5.40095 10.6507 5.22128 9.46269 5.92528L8.35019 6.59812C7.69778 6.99228 7.24765 7.77695 7.14509 8.69545C7.04253 9.61578 7.30321 10.5306 7.84023 11.1429L15.4554 19.9154L8.24763 24.3924L3.63522 22.2126C2.52699 21.6956 1.28344 22.1503 0.544144 23.3658C0.106835 24.0863 -0.0754964 24.9956 0.0299137 25.9269C0.142446 26.9206 0.569784 27.8226 1.20794 28.4056ZM8.7875 9.77528C8.60517 9.56628 8.5197 9.26928 8.55388 8.95762C8.58807 8.64595 8.73479 8.39112 8.95558 8.25912L10.0638 7.58995C10.7732 7.16278 11.6065 7.27278 12.2717 7.90895L21.9139 15.9059L16.8414 19.0574L8.7875 9.77528ZM1.66519 24.4933C1.92445 24.0698 2.30905 23.8333 2.70363 23.8333C2.85177 23.8333 2.99991 23.8681 3.14378 23.9359L8.03965 26.2496C8.22056 26.3358 8.42141 26.3211 8.59519 26.2129L29.7299 13.0863C30.7954 12.4556 32.0675 13.0533 32.5632 14.4283C33.0603 15.8106 32.5945 17.4679 31.5262 18.1243L11.6806 30.3654C9.51255 31.6946 6.94852 31.4104 4.98988 29.6193L2.03413 26.9133C1.7122 26.6199 1.49711 26.1634 1.44013 25.6629C1.3917 25.2321 1.47147 24.8159 1.66804 24.4933H1.66519ZM34.187 43.0833C34.187 43.5893 33.868 43.9999 33.4748 43.9999H0.71223C0.319079 43.9999 0 43.5893 0 43.0833C0 42.5773 0.319079 42.1666 0.71223 42.1666H33.4748C33.868 42.1666 34.187 42.5773 34.187 43.0833Z" fill="#6E6E6E" />
                </g>
                <defs>
                    <clipPath id="clip0_32_122">
                        <rect width="34.187" height="44" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <p className="font-medium text-lg">{children}</p>
        </div>
    )
}