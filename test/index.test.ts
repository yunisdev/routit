import { RestRoute, SDKServer } from '../src'

describe('Create example server', () => {
  interface TodosType {
    id: number
    userId: number
    completed: boolean
    title: string
  }

  class MyServer extends SDKServer {
    serverRoot = 'https://jsonplaceholder.typicode.com'
    Todos = new RestRoute<TodosType>(this, 'todos')
    Users = new RestRoute(this, 'users')
  }

  var API = new MyServer()

  it('Test getAll', async () => {
    var response = await API.Todos.getAll()

    expect(response.data[0].id).toBe(1)
    expect(response.data[0].userId).toBe(1)
    expect(response.data[0].completed).toBe(false)
    expect(response.data[0].title).toBe('delectus aut autem')
  })

  it('Test getOne', async () => {
    var response = await API.Todos.getOne(5)

    expect(response.data.id).toBe(5)
    expect(response.data.title).toBe("laboriosam mollitia et enim quasi adipisci quia provident illum")
  })
})
