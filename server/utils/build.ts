import { ensureFile } from "/deps.ts";

export async function bundleIndexJs(output: string) {
  await ensureFile(output);
  Deno.chdir(`${Deno.cwd()}/../webapp/`);

  const res = await Deno.run({
    cmd: [
      "deno",
      "bundle",
      "--import-map",
      "import_map.json",
      "--config",
      "tsconfig.json",
      "index.tsx",
      output,
    ],
  });
  return (await res.status()).success;
}
