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
