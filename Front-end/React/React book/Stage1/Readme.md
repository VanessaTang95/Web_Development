# React-Basic
For detailed info and tutorial, check [Official Website](https://reactjs.org/)
* react.js is basically View of MVC, you can't count it to solve other things
* **Compiler status you need to use Babel**
* **Organize you need to use Redux/Duck**
* **Write Single App you need React-router**
* **Write a mobile app you need ReactNative**
* p.s: if you are in specific region like China, that `npm` download process will be slow, use `npm config set registry https://registry.npm.taobao.org`

### JSX
* If you need to `extends Component`, you need to `import React, {Component} from "react"`
* JSX: a HTML style JavaScript
* It's actually a JS object
* ![Check This](https://huzidaha.github.io/static/assets/img/posts/44B5EC06-EAEB-4BA2-B3DC-325703E4BA45.png)
* HTML attribute `class`--> JSX `className`; HTML attribute `for` --> JSX `htmlFor`
* JSX's null ---> View didn't show --> hide


### Render
* one `render()` return one JSX element, so you need use one tag to wrap all content


### Component
* Component is reusable
* Coponent's name need to start with Capital alphabet


### Event of React
* put attributes like `onClik`,`onKeyDown`to element
* detaild info about supported events of React [check HERE](https://reactjs.org/docs/events.html#supported-events)
* this.FUNCTION_NAME.bind(this

### State
* React use `state` to store changable variable
* Two `state` initializations:
  ```JavaScript
  constructor(){
    super();
    this.state={isLiked:false}
  }
  ```
  or only define state
  ```
  state={isLiked:false}
  ```
  * Like in Java, `state` can only initialize and assign once, to manipulate `state`, use method `setState()`
  * `setState()` is not immediately change `state`, instead it put the updated state into a queue, then retrieve the new status state into original state, then lead to component update
  - Examples:
  ```
  handleClickOnLikeButton () {
    //isLiked=false;
   console.log(this.state.isLiked)//output: false
   this.setState({
     isLiked: !this.state.isLiked
   })
   console.log(this.state.isLiked)// output: false
 }
  ```
  ```
  handleClickOnLikeButton () {
   this.setState({ count: 0 }) // => this.state.count 还是 undefined
   this.setState({ count: this.state.count + 1}) // => undefined + 1 = NaN
   this.setState({ count: this.state.count + 2}) // => NaN + 2 = NaN
 }
  ```
  * But you can use this method to manipulate State
  ```
  handleClickOnLikeButton () {
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    // 最后的结果是 this.state.count 为 3
  }
  ```

  ### props
  * to improve the customorization of component,, when using the component, we can add props to pass value from parent to child
  * use `defaultProps` to configure default value
  * once `props` pass as parameter, cannot modify it, but can modify props through parents
