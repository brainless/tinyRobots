import { OakContext, OakRouter } from "prj/deps.ts";
import { RobotInterface } from "prj/utils/interfaces.ts";

type RobotList = Array<RobotInterface>;

const sampleRobotList: RobotList = [];

function listRobot(ctx: OakContext) {
  ctx.response.body = JSON.stringify(sampleRobotList);
  ctx.response.headers.append("Content-type", "application/json");
}

async function addRobot(ctx: OakContext) {
  const json = await ctx.request.body().value;
  const { defineRobot } = await import(json.path);

  ctx.response.body = JSON.stringify({
    status: "created",
    robot: defineRobot(),
  });
  ctx.response.status = 201;
  ctx.response.headers.append("Content-type", "application/json");
}

async function outputRobot(ctx: OakContext) {
  const json = await ctx.request.body().value;
  const { output } = await import(json.path);
  const outputData = await output();

  ctx.response.body = JSON.stringify({
    status: "success",
    data: outputData,
  });
  ctx.response.status = 201;
  ctx.response.headers.append("Content-type", "application/json");
}

const router = new OakRouter();
router.get("/api/robot", listRobot);
router.post("/api/robot", addRobot);
router.post("/api/output", outputRobot);

export default router;
