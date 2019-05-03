# Node module
---
## Global object
* There are many global functions in JS:
> - setTimeout(); setInterval(); clearTimeout(); clearInterval();
* In the browser, there have an ```window``` object which can be used to use global functions and variables
* Node doesn't have ```window``` object, instead it has ```global``` objects
* Normally, we don't use ```window/global.console.log()``` instead we will use ```console.log()``` directly
* But in real-world projects, we should prevent define variales into global scope to prevent possible overwrite
---
## Module
* Module is similar to Package in JAVA
* module keep variable in the module scope to avoid public edit
* To export `public` thing, use ```module.export=xxx``` syntax
* To use functions or variables or objects from one module, use ```require(path)```
* Store the required module into __const__ instead of __var/let__
* Module Wrapper function
  - Node will wrap it contents inside a function
    - (function(exports, require, module, __filename, __dirname){})
    - That's an *Immediately Involved Function Expressions* also known as *(iife{}())*
---
### Some Modules
* path
* os
* fs(filesystems)
* events
* for more, visit [NodeJS website](https://nodejs.org/dist/latest-v10.x/docs/api/)
