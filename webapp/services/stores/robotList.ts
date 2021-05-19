import { axios, createStore } from "/deps.ts";

interface RobotItem {
  name: string;
}

interface RobotArray {
  robots: Array<RobotItem>;

  list: () => void;
  search: (q: string) => void;
}

/**
 * This store is used to list and search through all available Robots in the systems.
 * The list is maintained in the server by `tinyRobots` but it is possible to use a separate server (say in large enterprises).
 */
const useRobotList = createStore<RobotArray>((set) => ({
  robots: [],

  list: async () => {
    try {
      const response = await axios.get("/api/robot");
      console.log(response);
      if (response.status === 200) {
        set({
          robots: response.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  search: () => {},
}));

export default useRobotList;
