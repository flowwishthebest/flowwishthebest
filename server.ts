import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const root = `${Deno.cwd()}/static`;

app.use(async (ctx) => {
  try {
    await ctx.send({ root, index: "index.html" });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "Not found";
  }
});

await app.listen({ port: 8000 });
