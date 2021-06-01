import {
  RobotInterface,
  CountEnum,
  ItemTypeEnum,
} from "https://raw.githubusercontent.com/brainless/tinyRobots/main/server/utils/interfaces.ts";

const API_KEY = "C2F7M3RSDAXLA8TX";
// file:///home/brainless/Projects/tinyRobots/robots/commerce/stockMarket/alphaVantage/mod.ts

export function defineRobot(): RobotInterface {
  return {
    name: "Alpha Vantage Time Series Daily",
    output: {
      count: CountEnum.StreamOfItems,
      itemType: ItemTypeEnum.Object,
    },
    hashTags: ["stock", "stock-markets", "daily-stocks", "trading"],
  };
}

function getDailyURL(symbol: string): string {
  const apiKey = API_KEY;
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}&datatype=csv`;
  return url;
}

export async function output() {
  const response = await fetch(getDailyURL("IBM"));
  const data = response.text();
  return data;
}
