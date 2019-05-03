# Class-Based Components

### Functional Components VS Class Components
* FC: simple contents
  - cons: when running app, with outside API, every time the app restarting, users will wait for some time
* CC: anything else
  - Pros:
    - can rerendering
    - Easier code organization
    - can use "state"(another react system) -> easier to handle user input
    - understands lifecycle events -> easier to do things when the app first starts

### Dummy Application
* Goal:
  - northern hemisphere : 10~3: chilly; 3~10:sunny
  - Southern hemisphere : 10~3: sunny; 3~10:chilly
* Challenges:
  - figure out users physical location
  - figure out current month
  - change text and styling based on location + month
* Helper:
  - Geolocation API:
    - developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

### Rules of Class Components
* Must be JS Class
* Must extend (subclass) React.Component
* Must define a "render" method that returns some amount of JSX
