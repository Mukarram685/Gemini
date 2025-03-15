import React, { createContext, useState } from "react";
import run from "./Api";

export const Content = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousConversations, setPreviousConversations] = useState([]); 
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);
  const [error, setError] = useState(null);

  const onSent = async (prompt) => {
    setLoading(true);
    setError(null); 
    try {
      const result = await run(prompt);
      console.log(result);

      // Store both prompt and response in the same array
      const newConversation = { prompt, response: result };
      setPreviousConversations((prev) => [...prev, newConversation]);

      setShowResult(true);
      setRecentPrompt(prompt);
    } catch (error) {
      console.error("Error sending prompt:", error);
      setError("There was an error processing your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    onSent,
    previousConversations, // Providing the prompt-response pairs
    setPreviousConversations,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    error,
  };

  return <Content.Provider value={contextValue}>{children}</Content.Provider>;
};

export default ContextProvider;
