"use client"

import { useRef } from 'react';
// import Link from 'next/link'
import { useSpells } from "@/contexts/SpellsContext"
import {ComponentStyleProps} from "@/utils/types/ComponentStyleProps"

const Navbar = ({className}: ComponentStyleProps) => {
    const { spellsByLetter } = useSpells();
    const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const navRef = useRef<HTMLDivElement | null>(null);

    const handleTouchMove = (e: React.TouchEvent<HTMLElement>)=> {
        const touch = e.touches[0];
        const nav = navRef.current;
        if (!nav) return

        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        if (element?.tagName === "BUTTON") {
            const link = element.closest("a");
            if (link) {
                const href = link.getAttribute("href");
                if (href) window.location.hash = href;
            }
        }

        
    }

    return (
        <nav ref={navRef} onTouchMove={handleTouchMove} className={`nav ${className}`}>
            { alphabet.map((letter: string) => {
                const hasLink = spellsByLetter[letter]?.length > 0;
                return (
                    <a className="navItem nav__navItem" key={ letter } href={ `#${letter}` }>
                        <button
                            className={ `navBtn nav__navBtn ${hasLink ? "hasLink" : "noLink nav__navBtn_noLink"} ` }>
                            {letter}
                        </button>
                    </a>
                )
            })}
        </nav>
    )
    
}
export default Navbar