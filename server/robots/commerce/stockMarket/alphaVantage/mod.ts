import { axios } from "/deps.ts";
import { RobotInterface, CountEnum, ItemTypeEnum } from "/utils/interfaces.ts";

const API_KEY = "C2F7M3RSDAXLA8TX";
export function defineRobot(): RobotInterface {
  return {
    name: "Alpha Vantage Time Series Daily",
    output: {
      count: CountEnum.StreamOfItems,
      itemType: ItemTypeEnum.Object,
    },
    hashTags: ["stock"],
  };
}

function getDailyURL(symbol: string): string {
  const apiKey = API_KEY;
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
  return url;
}

export async function output() {
  const url = getDailyURL("IBM");
  const response = await axios.get(url);
  console.log(response);
}
