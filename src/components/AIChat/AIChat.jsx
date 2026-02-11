import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { callGemini } from "../../services/geminiApi";
import { ComponentRenderer } from "./ComponentRenderer";
import { getPortfolioContextText } from "../../data/portfolioContext";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function generateContactCard(e) {
    e?.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await callGemini({
        prompt: "Generate my contact card",
        mode: "component",
        context: getPortfolioContextText(),
      });
      setResult(data);
      setPrompt("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await callGemini({
        prompt: prompt.trim(),
        mode: "component",
        context: getPortfolioContextText(),
      });
      setResult(data);
      setPrompt("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue text-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform ring-4 ring-blue/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiMessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-3rem))] rounded-xl shadow-2xl bg-ghostWhite/95 backdrop-blur-sm border border-blue/30 overflow-hidden"
          >
            <div className="flex items-center justify-between p-3 border-b border-blue/20 bg-blue/5">
              <span className="font-bold text-blue">Troy</span>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded hover:bg-blue/10 cursor-pointer transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="p-3 max-h-[60vh] overflow-y-auto">
              {error && (
                <div className="mb-2 p-2 rounded bg-red-100 text-red-700 text-sm">{error}</div>
              )}
              {result?.data && (
                <div className="mb-4">
                  <ComponentRenderer schema={result.data} />
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t border-blue/20">
              <button
                type="button"
                onClick={generateContactCard}
                disabled={loading}
                className="mb-2 w-full py-2 px-4 border-[2px] border-solid border-blue text-sm rounded-[2.2rem] shadow-md hover:scale-[1.02] disabled:opacity-50 transition-all cursor-pointer font-medium"
              >
                {loading ? "Generating..." : "Generate Contact Card"}
              </button>
              {/* <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Or describe a component, e.g. Create a contact form"
                className="w-full outline-none bg-transparent border border-solid border-blue p-2 rounded text-sm"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className="mt-2 w-full py-2 px-4 border-[2px] border-solid border-grey text-sm rounded-[2.2rem] shadow-md hover:border-blue disabled:opacity-50 transition-all cursor-pointer"
              >
                {loading ? "Generating..." : "Generate"}
              </button> */}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
