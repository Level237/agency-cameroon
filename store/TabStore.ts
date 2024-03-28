import { Portfolios } from "@/data/portfolio";
import { tabs } from "@/data/tabs";
import { PortfolioType } from "@/types/PortfolioType";
import { Tabs } from "@/types/Tabs";
import { create } from "zustand";

type TabType={
    tabs:Tabs[],
    portfolio:PortfolioType[],
    activeTab:number,
    setActiveTab:(id:number)=>void
}
export const tabStore=create<TabType>((set)=>({
    tabs:tabs,
    portfolio:Portfolios,
    activeTab:1,
    setActiveTab:(id:number)=>{
        set({activeTab:tabs[id - 1].id})
        if(id===1){
            set({portfolio:Portfolios.map(p=>{return p})})
            console.log(Portfolios);
        }else{
            set({portfolio:Portfolios.filter(portfolio=>portfolio.target===id)})
        }
       
    }
}))