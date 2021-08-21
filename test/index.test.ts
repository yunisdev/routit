import { RestRoute, SDKServer } from '../src'

describe('Create example server', () => {
  interface TodosType {
    id: number
    userId: number
    completed: boolean
    title: string
  }

  class MyServer extends SDKServer {
    serverRoot = 'http://localhost:8000'
    Todos = new RestRoute<TodosType>(this, 'todos')
  }

  var API = new MyServer()

  it('Test getAll', async () => {
    var response = await API.Todos.getAll()

    expect(response.status).toBe(200)
    expect(response.data[0].id).toBe(1)
    expect(response.data[0].userId).toBe(1)
    expect(response.data[0].completed).toBe(false)
    expect(response.data[0].title).toBe('delectus aut autem')
  })

  it('Test getOne', async () => {
    var response = await API.Todos.getOne(5)

    expect(response.status).toBe(200)
    expect(response.data.id).toBe(5)
    expect(response.data.title).toBe(
      'laboriosam mollitia et enim quasi adipisci quia provident illum'
    )
  })

  it('Test post', async () => {
    var response = await API.Todos.post({
      id: 15,
      completed: false,
      title: 'lorem lorem',
      userId: 1,
    })

    expect(response.status).toBe(201)
    expect(response.data.id).toBe(15)
  })

  it('Test put', async () => {
    var response = await API.Todos.put(15, {
      userId: 1,
      title: 'lorem ipsum',
      completed: true,
    })

    expect(response.status).toBe(200)
    expect(response.data.id).toBe(15)
  })

  it('Test patch', async () => {
    var response = await API.Todos.patch(15, {
      title: 'lorem ipsum dolor',
    })

    expect(response.status).toBe(200)
    expect(response.data.id).toBe(15)
  })

  it('Test delete', async () => {
    var response = await API.Todos.delete(15)

    expect(response.status).toBe(200)
    expect(Object.keys(response.data as object).length).toBe(0)
  })
})
