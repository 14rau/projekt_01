var cache = require("memory-cache");

export interface ITitle{
    id: number;
    name: string;
    rarity: "Gewöhnlich" | "Ungewöhnlich" | "Selten" | "Episch" | "Meisterhaft" | "Shiny" | "Unique";
    color: number;
    description: string;
    start: string;
    end: string;
    crafter: string;
    useableforcraft: boolean;
    tradeable: boolean;
    created: string;
    icon? : string;
}

import * as fetch from "node-fetch";


export class Api {
    private cache;
    url = "";
    constructor(url, host) {
        this.url = url+":"+host
        this.cache = new cache.Cache();
    }

    public clearCache() {
        this.cache.del("titleColl");
    }


    async getDiscordStatus() {
        let t = await fetch("https://srhpyqt94yxb.statuspage.io/api/v2/summary.json");
        let status = await t.json();
        return status.status.indicator;        
    }
    
}



exports.ManamiApi = Api;