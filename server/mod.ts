import { OakApplication, OakContext } from "prj/deps.ts";

import baseRouter from "prj/handlers/base.ts";
import robotRouter from "prj/handlers/robot.ts";

async function corsHeaders(
  ctx: OakContext,
  next: () => Promise<unknown>
): Promise<void> {
  await next();
  ctx.response.headers.append(
    "Access-control-allow-origin",
    "http://localhost:3000"
  );
}

const app = new OakApplication();
app.use(corsHeaders);
app.use(baseRouter.routes());
app.use(baseRouter.allowedMethods());
app.use(robotRouter.routes());
app.use(robotRouter.allowedMethods());

console.log("tinyRobots server is running at http://localhost:8000");

// deno run --inspect --unstable --allow-read --allow-write --allow-net --allow-run --import-map=https://raw.githubusercontent.com/brainless/tinyRobots/main/server/import_map.json https://raw.githubusercontent.com/brainless/tinyRobots/main/server/mod.ts
await app.listen("127.0.0.1:8000");
