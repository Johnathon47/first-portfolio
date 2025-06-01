import Image from "next/image";

export default function Footer() {
    return (
        <div className="pt-6 pb-6 bg-[#0f0715]">
            <div>
            <Image 
                src="/image/logo_hei.png" 
                alt="LOGO HEI MY UNIVERSITY" 
                width={80} 
                height={80} 
                className="mx-auto"/>
            </div>
            <div className=" pt-10 flex items-center flex-wrap  justify-center space-x-10 text-white font-bold">
                <div>Home</div>
                <div>About</div>
                <div>Project</div>
                <div>Contact</div>
            </div>
            <p className="text-white/60 mt-6 text-center">© 2025 All Rights Reserved by Johnathon student of HEI</p>
        </div>
    );
};