import { OakContext, OakRouter } from "prj/deps.ts";

const webappPath = "../frontend/";

function getPing(ctx: OakContext): void {
  ctx.response.body = `{"status": "pong!"}`;
  ctx.response.headers.append("Content-type", "application/json");
}

async function getIndex(ctx: OakContext): Promise<void> {
  const contents = await Deno.readTextFile(`${webappPath}public/index.html`);
  ctx.response.body = contents;
  ctx.response.headers.append("Content-type", "text/html");
}

async function getJSBundle(ctx: OakContext): Promise<void> {
  const contents = await Deno.readTextFile(`${webappPath}public/js/main.js`);
  ctx.response.body = contents;
  ctx.response.headers.append("Content-type", "application/javascript");
}

const router = new OakRouter();
router.get("/ping", getPing);
router.get("/static/js/main.js", getJSBundle);
router.get("", getIndex);

export default router;
