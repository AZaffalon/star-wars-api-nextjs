'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

// Define prop types for href and text
interface NavLinkProps {
    href: string
    text: string
}

export default function NavLink({ href, text }: NavLinkProps) {
    // Used for active Link
     const pathname = usePathname()

    return (
        <Link 
            href={href} 
            className={`
                ${pathname === href ? 'underline' : ''}
                block py-2 pl-3 pr-4 text-xl hover:underline
                `}
            >
                {text}
        </Link>
    )
}