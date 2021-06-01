import React, { useState } from "react";

import api from "services/api";
import useCurrentRobots from "services/stores/currentRobots";

function AddRobot() {
  const [robotPath, changeRobotPath] = useState<string>("");
  const addRobot = useCurrentRobots((store) => store.addRobot);

  function handleAddRobotPath(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    changeRobotPath(event.target.value);
  }

  async function handleCaptureRobot(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      const response = await api.post("/api/robot", {
        path: robotPath,
      });
      console.log(response.data);
    }
  }

  return (
    <>
      <h3>Add a Robot</h3>
      <input
        className="text-sm p-2 border rounded-md w-full"
        placeholder="file:/// or https://"
        value={robotPath}
        onChange={handleAddRobotPath}
        onKeyUp={handleCaptureRobot}
      />
    </>
  );
}

export default AddRobot;
