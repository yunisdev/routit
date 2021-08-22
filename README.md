[![CI](https://github.com/yunisdev/routit/actions/workflows/main.yml/badge.svg)](https://github.com/yunisdev/routit/actions/workflows/main.yml)

# routit

`routit` is a tool for using your API easily in your project. It has an easy setup and implementation that will save your time.

## Getting started

### Installation

To install, run:

```bash
> npm install routit
```

### Implementing in project

For using `routit` in your project, you must have it imported.

```js
import { RestRoute, RoutitServer } from 'routit'
```

#### Creating server

We are assuming that you have a API server in `https://api.myserver.com` and it have an API route `/todos`. Let's look at how we can implement this

First of all, you need to create a class that inherits from `RoutitServer` and add `serverRoot` property on it. `serverRoot` is the root URL of your server. **Note: Do not add a slash at the end of URL**.

```js
class MyServer extends RoutitServer {
  serverRoot = 'https://api.myserver.com'
}
```

The name of the class can be whatever you want.

#### Creating route

You can create routes using the `RestRoute` class. It accepts two parameters:

- `server` - `RoutitServer` object to set host server of the route. You can pass the object by passing `this` in class.
- `routeName` - `string` for setting which route API call has to be done. In our example, it must be `todos`. **Note: Do not add a slash at the end of `routeName`**.

```js
class MyServer extends RoutitServer {
  serverRoot = 'https://api.myserver.com'
  Todos = new RestRoute(this, 'todos')
}
```

#### Creating server object

The last thing to use your api in your project is to create an object of the server.

```js
const API = new MyServer()
```

## Making requests

### GET

There 2 ways of get request. One is `getAll`, other is `getOne`.

#### getAll

`getAll` is used for fetch all the elements.

```js
var response = await API.Todos.getAll()
// This will request https://api.myserver.com/todos with GET
```

#### getOne

`getOne` is used for fetch one element by id.

```js
var response = await API.Todos.getOne(5)
// This will request https://api.myserver.com/todos/5 with GET
```

### POST

`post` method will send data to server. (Mostly for creating)

```js
var response = await API.Todos.post({
  id: 15,
  completed: false,
  title: 'lorem lorem',
  userId: 1,
})
// This will request https://api.myserver.com/todos with POST
```

### PUT

`put` method will send data to server by id. (Mostly for replacing data)

```js
var response = await API.Todos.put(15, {
  userId: 1,
  title: 'lorem ipsum',
  completed: true,
})
// This will request https://api.myserver.com/todos/15 with PUT
```

### PATCH

`patch` method will send data to server by id. (Mostly for patching data)

```js
var response = await API.Todos.patch(15, {
  title: 'lorem ipsum dolor',
})
// This will request https://api.myserver.com/todos/15 with PATCH
```

### DELETE

`delete` method will send delete request to server by id.

```js
var response = await API.Todos.delete(15)
// This will request https://api.myserver.com/todos/15 with DELETE
```