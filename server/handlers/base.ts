import { Context, Router } from "/deps.ts";

import { bundleIndexJs } from "/utils/build.ts";

const webappPath = "../webapp/";

function getPing(ctx: Context): void {
  ctx.response.body = `{"status": "pong!"}`;
  ctx.response.headers.append("Content-type", "application/json");
}

async function getIndex(ctx: Context): Promise<void> {
  const contents = await Deno.readTextFile(`${webappPath}public/index.html`);
  ctx.response.body = contents;
  ctx.response.headers.append("Content-type", "text/html");
}

async function getJSBundle(ctx: Context): Promise<void> {
  await bundleIndexJs(`${webappPath}public/js/main.js`);
  const contents = await Deno.readTextFile(`${webappPath}public/js/main.js`);
  ctx.response.body = contents;
  ctx.response.headers.append("Content-type", "application/javascript");
}

const router = new Router();
router.get("/ping", getPing);
router.get("/static/js/main.js", getJSBundle);
router.get("", getIndex);

export default router;
