import { contactData } from "@/Data/data";
import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactInfo() {
    return (
        <div>
            <div className="flex items-center space-x-8">
                <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-900
                flex items-center justify-center flex-col">
                    <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white"/>
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
                <h1 className="text-base sm:text-lg text-white/70">
                {contactData.phone}
                </h1>
                </div>
            </div>
            <div className="flex items-center space-x-8 mt-8 mb-8">
                <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-900
                flex items-center justify-center flex-col">
                    <MdEmail className="w-4 h-4 md:w-7 md:h-7 text-white"/>
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl text-white font-bold">Email</h1>
                <h1 className="text-base sm:text-lg text-white/70">
                {contactData.email}
                </h1>
                </div>
            </div>
            <div className="flex items-center space-x-8">
                <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-900
                flex items-center justify-center flex-col">
                    <FaMapLocation className="w-4 h-4 md:w-7 md:h-7 text-white"/>
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
                <h1 className="text-base sm:text-lg text-white/70">
                {contactData.address}
                </h1>
                </div>
            </div>
        </div>
    )
}