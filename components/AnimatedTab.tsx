'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { tabs } from "@/data/tabs";
import { tabStore } from "@/store/TabStore";

export default function AnimatedTabs() {
  //let [activeTab, setActiveTab] = useState(tabs[0].id);
    const tabs=tabStore(s=>s.tabs)
    const setActiveTab=tabStore(s=>s.setActiveTab)
    const activeTab=tabStore(s=>s.activeTab)
  return (
    <div className="flex justify-center p-8 space-x-1 bg-[#513417] w-[100vw]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
