import create from "zustand";

export interface IRobot {
  name: string;
}

interface CurrentRobots {
  robots: Array<IRobot>;
  addRobot: (robot: IRobot) => void;
}

const useCurrentRobots = create<CurrentRobots>((set) => ({
  robots: [],
  addRobot: (robot: IRobot) => {
    set((state: CurrentRobots) => ({
      robots: [...state.robots, robot],
    }));
  },
}));

export default useCurrentRobots;
