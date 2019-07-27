
export interface MonedaData {
    id: number;
    name: string;
    symbol: string;
    website_slug: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: any;
    quotes: Array<USD>;
    last_updated:string;
}
interface USD {
    price: number;
    volume_24h: number;
    market_cap: number;
    percent_change_1h: any;
    percent_change_24h: any;
    percent_change_7d: any;
}

