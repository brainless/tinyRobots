import { OakApplication } from "/deps.ts";

import baseRouter from "/handlers/base.ts";
import robotRouter from "/handlers/robot.ts";

const app = new OakApplication();
app.use(baseRouter.routes());
app.use(baseRouter.allowedMethods());
app.use(robotRouter.routes());
app.use(robotRouter.allowedMethods());

console.log("tinyRobots server is running at http://localhost:8000");

await app.listen("127.0.0.1:8000");
