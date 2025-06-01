/* eslint-disable react/no-unescaped-entities */
export default function ContactForm() {
    return (
        <div className="bg-[#1b3566] rounded-lg p-4 sm:p-10">
            <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-mono ">
                Let's Work together!
            </h1>
            <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
                Got a project in mind? I'm ready to contribute
                with passion and precision. Let's talk!
            </p>
            {/* input fields */}
            <form className="mt-8 block w-full overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <input 
                    type="text" 
                    placeholder="First name" 
                    className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border
                    border-white/15 outline-none" />
                     <input 
                    type="text" 
                    placeholder="Last name" 
                    className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border 
                    border-white/15 outline-none " />
                </div>
                <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <input 
                    type="email" 
                    placeholder="Email address" 
                    className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border 
                    border-white/15 outline-none" />
                     <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] 
                    border-white/15 outline-none" />
                </div>
                <div>
                    <select className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md
                    border border-white/15 outline-none">
                        <option value="" disabled selected>
                            Select an option
                        </option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="fullstack">Fullstack Development</option>
                        <option value="data">Data Scientist/ Data Analyst</option>
                    </select>
                </div>
                <textarea 
                className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md
                    border border-white/15 outline-none"
                rows={7} 
                placeholder="Message"></textarea>
                <div className="mt-4 ml-4 mb-4">
                    <button className="bg-[#E2A01A] text-white font-bold px-6 py-2 rounded-full shadow-lg shadow-[#E2A01A]/50 hover:shadow-xl hover:scale-105 transition-all duration-300" >Send Message</button>
                </div>
            </form>
        </div>
    );
};