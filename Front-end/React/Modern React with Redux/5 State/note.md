# State in React Component

### Rules of State
* Only usable with class components (can be used with functioanal components by using the "hook" system)
* props VS state? confusing part
* 'State' is a JS object that contains data relevant to a components
* **updating 'state' on a component causes the component to (almost) instantly rerender**
* **state must be initialized when a component is created**
* **update state using `setState` function**

p.s.: shared some philosophy with JAVA(constructor, initialization, get/set method, etc.)


### App Lifecycle
1. JS file loaded by browser
2. instance of app component is created
3. app components `constructor` function get called
4. create state object and assigned to the `this.state` property
5. call some service inside constructor (in season, it's geolocation service)
6. call components render method
7. app returns jsx, gets rendered to page as html
8. get result of service/function
9. update state object with a call to `this.setState`
10. react find that we update state
11. react call render method a second time
12. render method returns updated jsx
13. react takes that jsx and updates content on the screen


### Handling Error Gracefully
