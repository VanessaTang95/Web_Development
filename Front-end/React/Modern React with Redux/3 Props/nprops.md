# Communicating with props

### 3 tenets/principles of Components
* Nesting:
* Reusability
* Configuration

### resource
* semantic ui
* faker.js

### Creating a reusable configurable Components
1. Identify the JSX that appears to be duplicated
2. What is the purpose of that block of JSX? Think of a descriptive name for what it does
3. Create a new file to house this new component - it should have the same name as the Components
4. Create a new component in the new file, paste the JSX into it
5. Make the new component configuable by using React's "props" system

##### Tips
Thougn we use `{JS Variable/Func}` to refer JS variable or funcs, components must use `<ComponentsName/>`

### What is "props" system
* System for passing data from a parent component to a child components(vice is not versa!!!)
* Goal is to customize or configure a child component
* Syntax: `<Parents NameOfProp=valueOfTheProp/>` NameOfProp usually is the className
