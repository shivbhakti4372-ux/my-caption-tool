"use client";

import { useState } from "react";

export default function ToolPage() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const generateCaption = () => {
    if (!inputText) return;
    
    const capitalized = inputText.toUpperCase();
    const hashtags = "\n\n#Trending #Viral #NextJS #Developer";
    const finalResult = `🔥 ${capitalized} 🚀${hashtags}`;
    
    setOutputText(finalResult);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-700">
        
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          Viral Caption Generator
        </h1>
        <p className="text-gray-400 mb-6 text-sm">
          Apne normal text ko viral caption mein badlein sirf 1 click mein.
        </p>

        <textarea
          rows="4"
          className="w-full bg-gray-900 border border-gray-600 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Apna text yahan likhein..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          onClick={generateCaption}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform transition active:scale-95"
        >
          ✨ Generate Magic ✨
        </button>

        {outputText && (
          <div className="mt-6 p-4 bg-gray-900 rounded-xl border border-green-500/30 relative">
            <h3 className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">Result</h3>
            <p className="whitespace-pre-wrap text-gray-200">{outputText}</p>
            
            <button 
              onClick={() => navigator.clipboard.writeText(outputText)}
              className="absolute top-4 right-4 text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md transition"
            >
              Copy
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}
