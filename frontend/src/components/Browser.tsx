import { useState, useEffect } from "react";

import api from "services/api";
import AddRobot from "./AddRobot";

interface RobotItem {
  name: string;
}

interface RobotArray {
  robots: Array<RobotItem>;
  isFetching: boolean;
  isReady: boolean;
}

function Browser() {
  const [robotsList, setRobotsList] = useState<RobotArray>({
    robots: [],
    isFetching: false,
    isReady: false,
  });

  async function onReady() {
    try {
      const response = await api.get("/api/robot");
      if (response.status === 200) {
        setRobotsList({
          robots: response.data,
          isFetching: false,
          isReady: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onReady();
  }, []);

  return (
    <div className="h-screen w-full md:max-w-xs p-4 bg-gray-100 border-r">
      <input
        className="text-sm p-2 border rounded-md w-full"
        placeholder="Search Robots..."
      />

      <p className="text-sm text-gray-600 my-4">
        Robots are small pieces of code (written in TypeScript or JavaScript)
        that you can use and combine to create workflow.
        <br />
        <br />
        Robots can either start a new workflow, for example by fetching new
        Tweets. Or they can process on an existing workflow, for example filter
        Tweets that have at least 5 likes.
      </p>

      <AddRobot />
    </div>
  );
}

export default Browser;
