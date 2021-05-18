import { Application } from "/deps.ts";

import baseRouter from "/handlers/base.ts";

const app = new Application();
app.use(baseRouter.routes());
app.use(baseRouter.allowedMethods());

console.log("tinyRobots server is running at http://localhost:8000");

await app.listen("127.0.0.1:8000");
