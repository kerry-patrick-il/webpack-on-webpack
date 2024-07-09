# Webpack on Webpack Minimal Repro Repo

## Background
I have a library which exposes a single React component that outputs a div with two images, which are assets located in the library. The library's build script uses `tsc` to transpile the typescript and a copy command to move the 

The library is being consumed by a webpack-bundled React app which is configured to handle image files as webpack file asset modules, and is also being published to a private npm package registry for other teams to consume.

When I build the app and library and run `yarn start`, the app loads fine and I can see the image files loaded successfully. 

## The Problem
I want to modify the library's build to use webpack instead of `tsc`. In my business scenario this is so I can hide a credentialed npm package the library depends on from my consumers, so it's purely for the published library, although since we're using a yarn workspaces monorepo the output of the build is also consumed by the app. 

When I change the library to be a bundled build, the image files are loaded into the library's build folder just fine, but the app is no longer able to detect that these images are required and pull them up into the app's webpack bundle. I can see by inspecting the app's bundled JS code that the JS code from the library is there, but the image references are now orphans. 

## Requirements for running this code
* node 20
* npm
* yarn@^1.22


## The Good Branch (build-using-tsc)
To run the application:
1. clone this repo
2. `yarn install`
3. `yarn run build`
4. `yarn start`

You should see a browser window showing the_app with pictures of two beautiful dogs.
