# Welcome to starty (start + ie)
Checkout the site for more info (:
https://github.com/josh-codes/Startly

# Building
The view folder is what the user sees we use svelte for that.   
The scripts folder has patches for the view and extention folder, it changes the manifest version and adds browser_specific_settings in firefox.   
It also moves the inline javascript to `init.mjs`.   
The output will be in the `app` folder and the zip will be called app.zip and it will be in the root directory.   
Use node v16.6.1.   
   
First make sure to run  
```bash
npm run i
```
To build for firefox, use   
```bash
npm run firefox
```
To build for chrome, use
```bash
npm run chrome
```