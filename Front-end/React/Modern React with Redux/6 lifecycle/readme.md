# Lifecycle method
### Lifecycle of Component
1. constructor **(place to one-time setup)**
2. render **（avoid doing anything besides running JSX）**
  - (content visible on screen)
3. componentDidMount(load data or sth)**(place to do data-loading)**
  - wait for updates
4. componentDidUpdate **(place to do more data-loading when state/props change)**
  - until this component is no longer shown
5. componentWillUnmount **(place to cleanup--especially for non-react stuff)**

#### Other lifecycle methods(rarely used)
* shoudComponentUpdate
* getDerivedStateFromProps
* getSnapshotBeforeUpdate
