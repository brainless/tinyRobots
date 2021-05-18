import { Context } from "../deps.ts";

async function listOperators(ctx: Context, next: () => Promise<unknown>) {
  const operators = [
    {
      name: "Twitter Search",
      description: "Returns search results using Twitter Search API",
      importPath: "operators/",
    },
  ];

  if (ctx.request.url.pathname == "/operators/list") {
    ctx.response.body = JSON.stringify(operators);
    ctx.response.headers.append("Content-type", "application/json");
  } else {
    await next();
  }
}

export { listOperators };
