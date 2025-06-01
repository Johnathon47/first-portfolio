"use client"

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {

    const [isVisible, setIsVisible]= useState(false);

    useEffect(()=>{
        const toggleVisibility = ()=>{
            if(window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return ()=> {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const ScrollToTop = ()=> {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        });
    };
    return (
        <div className="fixed bottom-4 animate-pulse right-4">
            {isVisible && (
                <button onClick={ScrollToTop} className="shadow-lg shadow-[#E2A01A]/50 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-[#E2A01A] text-white rounded-full w-12 h-12 flex items-center justify-center
                focus:outline-none">
                    <FaArrowUp/>
                </button>
            )}
        </div>
    );
};