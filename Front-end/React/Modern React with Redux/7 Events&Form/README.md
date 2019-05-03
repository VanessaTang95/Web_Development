# Handling Input using Event and Form
Something need to figure out after known the basic UI
  - How to get feedback?
  - How to fetch data from outside API
  - how to show lists of records?

### Event
* onClick: click on something
* onChange: change text in an input
* onSubmit: submit a form
* when we are coding for our own application, we will use `event.preventDefault()` a lot

### "this" in JS
* What is "this" used for in a class?
  - reference back to the class itself
* How the value of "this" is determined in a function
  - determined by the object who use this function

### controlled vs uncontrolled
* uncontrolled - have default methods
* uncontrolled - store all the data in DOM
* controlled - store all the data in components instead of DOM

### Two ways to solve "this" problem
* this.xxx.bind(this)
* arrow functions

### Child and Parents communication
* Parent to child --> props
* use class and set up a callback
