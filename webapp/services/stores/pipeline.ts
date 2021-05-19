import { createStore } from "/deps.ts";

interface RobotItem {
  name: string;
}

interface RobotArray {
  robots: Array<RobotItem>;
}

const useRobots = createStore();
