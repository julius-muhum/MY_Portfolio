import React from "react";
import Link from 'next/link'
import NavLink from "./NavLink";

const navLinks = [
    {
        title: "About",
        path: "#About",
    },
    {
        title: "Skills",
        path: "#Skills",

    },
    {
        title: "Experience",
        path: "#Experience",
    },
    {
        title: "Contact",
        path: "#Contact",
    }
]

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[rgba(18,18,18,0.9)]">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                LOGO
                </Link>
                <div className="menu">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt:10">
                        {
                        navLinks.map((link,index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                            }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar