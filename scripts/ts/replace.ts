const fs = require('fs')
const path = require('path')
const pathloc = path.join(__dirname, "/../../build/view/index.html")
const pathjs = path.join(__dirname, "/../../build/view/init.mjs")
fs.readFile(pathloc, 'utf8', (err:string|null,data:string|null) => {
    if (err){
        console.error(err)
        return;
    }
    if (!data) {
      console.error(err)
        return;
    }
  let result = data.split("/_app").join("_app");
  result = result.split("from \"").join("from \"./");
  result = result.split("import(\"").join("import(\"./");
  const js = result.split("<script type=\"module\">")[1].split("</script>")[0]
  result = result.split("<script type=\"module\">")[0]+"<link rel=\"stylesheet\" href=\"/fonts/font.css\"/><link rel=\"icon\" href=\"/icons/full.png\" /><script defer type=\"module\" src=\"init.mjs\"><script defer src=\"/init.mjs\"></script>"+result.split("</script>")[1]
  fs.writeFile(pathloc, result, 'utf8', (err:string|null) => {
     if (err) return console.log(err);
  });
  fs.writeFile(pathjs, js, 'utf8', (err:string|null) => {
    if (err) return console.log(err);
 });
});