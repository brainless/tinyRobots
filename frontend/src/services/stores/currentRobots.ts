import create from "zustand";

type Robot = {
  name: string;
};

type CurrentRobots = {
  robots: Array<Robot>;
  addRobot: (robot: Robot) => void;
};

const useCurrentRobots = create<CurrentRobots>((set) => ({
  robots: [],
  addRobot: (robot: Robot) => {
    set((state: CurrentRobots) => ({
      robots: [...state.robots, robot],
    }));
  },
}));

export default useCurrentRobots;
