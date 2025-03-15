import React, { useContext, useState } from "react";
import { Content } from "./Context";

export default function Rightside() {
    const {
        onSent,
        recentPrompt,
        previousConversations,
        showResult,
        resultData,
        loading,
        input,
        setInput,
        error,
    } = useContext(Content);

    const handleInputChange = (e) => setInput(e.target.value);

    const handleSubmit = () => {
        if (input.trim()) {
            onSent(input);
            setInput("");
        }
    };

    return (
        <div className="w-full h-screen p-4 flex flex-col">

            <div className="md:hidden fixed top-0 left-0 right-0 p-4 bg-white z-10 shadow-md flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800">Gemini</div>
                <div className="flex items-center gap-4">
                    <img
                        className="h-6 w-6 cursor-pointer"
                        src="hamburger.png"
                        alt="hamburger menu"
                        onClick={() => setextend((prev) => !prev)}
                    />
                    <div className="flex items-center justify-center text-lg bg-blue-600 p-2 w-8 h-8 rounded-full cursor-pointer text-white">
                        B
                    </div>
                </div>
            </div>


            <div className="flex-grow overflow-auto text-center mt-20 pb-20 scrollbar-thin scrollbar-thumb-gray-300">

                <div className="mt-4 pl-4">
                    <p>
                        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-2xl font-semibold">
                            Hello, Mukarram
                        </span>
                    </p>
                    <p className="text-lg text-gray-700">How can I help you today?</p>
                </div>


                <div className="mt-6 space-y-4">
                    {previousConversations.map((conversation, index) => (
                        <div key={index} className="space-y-4">

                            <div className="flex justify-start">
                                <div className="bg-blue-100 p-1 px-3 rounded-lg max-w-[70%] md:max-w-[50%]">
                                    <p className="text-gray-800">{conversation.prompt}</p>
                                </div>
                            </div>


                            <div className="flex justify-end">
                                <div className="bg-green-100 p-1 px-4 rounded-lg max-w-[70%] md:max-w-[50%]">
                                    <p className="text-gray-800">{conversation.response}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                    {recentPrompt && (
                        <div className="md:ml-16 flex justify-start">
                            <div className="bg-blue-100 p-4 rounded-lg max-w-[70%] md:max-w-[50%]">
                                <p className="text-gray-800">{recentPrompt}</p>
                            </div>
                        </div>
                    )}


                    {loading && (
                        <div className="flex justify-end">
                            <div className="bg-green-100 p-4 rounded-lg max-w-[70%] md:max-w-[50%]">
                                <p className="text-blue-500">Loading...</p>
                            </div>
                        </div>
                    )}


                    {showResult && !loading && (
                        <div className="flex justify-end">
                            <div className="bg-green-100 p-4 rounded-lg max-w-[70%] md:max-w-[50%]">
                                <p className="text-gray-800">{resultData}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            <div className="fixed bottom-3 left-0 right-0 mx-auto w-full max-w-3xl px-4">
                <div className="flex items-center w-full border-2 border-gray-200 p-3 rounded-xl bg-white shadow-lg">
                    <input
                        className="flex-1 bg-transparent border-none decoration-transparent p-2 text-black placeholder-gray-400 focus:outline-none"
                        type="text"
                        placeholder="Enter a prompt here"
                        value={input}
                        onChange={handleInputChange}
                        onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                    />
                    <div
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 cursor-pointer hover:bg-blue-700"
                        onClick={handleSubmit}
                    >
                        <img className="w-5 h-5" src="submitarrow.png" alt="submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}