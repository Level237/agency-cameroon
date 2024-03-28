import { tabs } from "@/data/tabs";
import { Tabs } from "@/types/Tabs";
import { create } from "zustand";

type TabType={
    tabs:Tabs[],
    activeTab:number,
    setActiveTab:(id:number)=>void
}
export const tabStore=create<TabType>((set)=>({
    tabs:tabs,
    activeTab:1,
    setActiveTab:(id:number)=>{
        set({activeTab:tabs[id - 1].id})
        console.log(id);
    }
}))