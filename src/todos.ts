import { TodoResponseJson } from "./types"

export const fetchTodoIds = async () => {
    const res = await fetch('https://dummyjson.com/todos/random/5')
    const json = await res.json() as TodoResponseJson[]
    let completedIds = [] as number[]
    let wipIds = [] as number[]
    json.map(todo => {
      if (todo.completed) {
        completedIds = [...completedIds, todo.id]
      } else {
        wipIds = [...wipIds, todo.id]
      }
    })

    return { completedIds, wipIds }
}