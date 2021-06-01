import useCurrentRobots, { IRobot } from "services/stores/currentRobots";
import Robot from "./Robot";

function Pipeline() {
  const robots: Array<IRobot> = useCurrentRobots((store) => store.robots);

  return (
    <>
      {robots.map((robot: IRobot, i) => (
        <Robot key={`rb-${i}`} {...robot} />
      ))}
    </>
  );
}

export default Pipeline;
