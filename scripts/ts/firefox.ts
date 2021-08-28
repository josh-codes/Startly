import { readFileSync, writeFileSync } from 'fs';
import { join as fspathjoin, resolve } from 'path';
const manifest = fspathjoin(resolve(), "/../app/manifest.json");
const firefox = fspathjoin(resolve(), "/../browser/firefox.json");
const patch = async (path:string, patchfile:string) => {
    let manifest = JSON.parse(await readFileSync(path, "utf8"))
    let patch =JSON.parse( await readFileSync(patchfile, "utf8"))
    let keys = Object.keys(patch);
    keys.forEach((data:any)=>{
        manifest[data] = patch[data]
    })
    await writeFileSync(path, JSON.stringify(manifest))
}
patch(manifest, firefox)