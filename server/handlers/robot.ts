import { OakContext, OakRouter } from "/deps.ts";
import { RobotInterface } from "/utils/interfaces.ts";

type RobotList = Array<RobotInterface>;

const sampleRobotList: RobotList = [];

function listRobot(ctx: OakContext) {
  ctx.response.body = JSON.stringify(sampleRobotList);
  ctx.response.headers.append("Content-type", "application/json");
}

async function addRobot(ctx: OakContext) {
  const json = await ctx.request.body().value;
  const { defineRobot } = await import(json.path);
  console.log(defineRobot());

  ctx.response.body = JSON.stringify({
    status: "created",
    robot: defineRobot(),
  });
  ctx.response.status = 201;
  ctx.response.headers.append("Content-type", "application/json");
}

const router = new OakRouter();
router.get("/api/robot", listRobot);
router.post("/api/robot", addRobot);

export default router;
