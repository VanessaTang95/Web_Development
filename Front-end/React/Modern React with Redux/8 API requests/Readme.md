# Loading Data using API
Using AJAX, JSON, Unsplash API

### Axios vs Fetch
* Axios: 3rd party package, need install, more powerful
* Fetch: function built into modern browsers, but slow
* In this class, Use [Axios](https://unsplash.com/documentation#getting-started)
* Both are Async requests
* Fetch use `.then()`

#### Axios
##### Authorization
> Many actions can be performed without requiring authentication from a specific user. For example, downloading a photo does not require a user to log in.
>To authenticate requests in this way, pass your application’s access key via the HTTP Authorization header:
  > Authorization: Client-ID YOUR_ACCESS_KEY
  >You can also pass this value using a client_id query parameter:
  ```
  https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
  ```
> If only your access key is sent, attempting to perform non-public actions that require user authorization will result in a 401 Unauthorized response.

##### further more
when send `get` request and get the raw json data, the api returns a promise

##### async await
* If you wanna use await, then you need to use async syntax at the same time.
* And async-await working as same as `.then()`
