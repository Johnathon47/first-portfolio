import { navLinks } from "@/constant/constant"
import Link from "next/link"
import { CgClose } from "react-icons/cg"

// Props type
type Props ={
    showNav:boolean;
    closeNav:()=>void
}

export default function MobileNav({closeNav, showNav}: Props) {
    const navOpen = showNav?"translate-x-0":"translate-x-[-100%]";

    return (
        <div>
            {/* Overlay */}
            <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
            {/* Nav links */}
            <div className={`text-white ${navOpen} transform transition-all duration-500 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715]
            space-y-6 z-[10000]`} >
                        {navLinks.map((navlink)=>{
                        return <Link key={navlink.id} href={navlink.url}>
                            <p className="nav_link text-[20px] ml-12 pb-2 sm:text-[30px]">{navlink.label}</p>
                        </Link>
                    })}
                    {/* Close button */}
                    <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"/>
            </div>
        </div>
    )
}