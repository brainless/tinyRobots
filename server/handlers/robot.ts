import { Context, Router } from "/deps.ts";

interface Robot {
  name: string;
}

type RobotList = Array<Robot>;

const sampleRobotList: RobotList = [
  { name: "Twitter Search" },
  { name: "E-commerce Sales" },
];

function listRobot(ctx: Context) {
  ctx.response.body = JSON.stringify(sampleRobotList);
  ctx.response.headers.append("Content-type", "application/json");
}

const router = new Router();
router.get("/api/robot", listRobot);

export default router;
