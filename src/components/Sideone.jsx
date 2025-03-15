import React, { useState } from "react";

export default function Sideone() {
    const [extend, setextend] = useState(false);

    const MenuItem = ({ iconSrc, alt, label }) => (
        <div className="flex items-center gap-4 mt-4 hover:bg-gray-500 p-2 rounded-lg cursor-pointer">
            <img className="w-5 h-5" src={iconSrc} alt={alt} />
            {extend && <span className="relative bottom-1 text-white">{label}</span>}
        </div>
    );

    return (
        <>
            <div className="md:hidden fixed top-0 right-0 left-0 p-4 bg-white z-50 shadow-md flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800">Gemini</div>
                <img
                    className="h-6 w-6 cursor-pointer"
                    src="hamburger.png"
                    alt="hamburger menu"
                    onClick={() => setextend((prev) => !prev)}
                />
            </div>

            <div
                className={`h-screen bg-gray-400 transition-all duration-300 ease-in-out p-4 ${
                    extend ? "w-64" : "w-16"
                } fixed left-0 top-0 bottom-0 z-40 ${
                    extend ? "block" : "hidden md:block"
                }`}
            >
                <div className="flex mt-4">
                    <img
                        className="h-6 w-6 cursor-pointer"
                        src="hamburger.png"
                        alt="hamburger menu"
                        onClick={() => setextend((prev) => !prev)}
                    />
                </div>

                {/* Menu Items */}
                <div className="absolute bottom-9 w-[90%]">
                    <MenuItem iconSrc="help.svg" alt="help icon" label="Help" />
                    <MenuItem iconSrc="clock.png" alt="clock icon" label="Activity" />
                    <MenuItem iconSrc="setting.png" alt="settings icon" label="Setting" />
                </div>
            </div>
        </>
    );
}