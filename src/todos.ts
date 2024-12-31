import { TodoResponseJson } from './types'

export const fetchTodoIds = async () => {
  return {
    ids: [61, 97, 195, 109, 35],
  }
}

export const fetchTeamTodoIds = async () => {
  return {
    ids: [1,2,3,4,5,6,7,8,9,10],
  }
}

export const groupTodosByStatus = async (ids: number[]) => {
  const results = await Promise.all(
    ids.map(async (id) => {
      const res = await fetch(`https://dummyjson.com/todos/${id}`)
      const json = (await res.json()) as TodoResponseJson

      return json
    }),
  )

  const wipIds = results
    .filter((todo) => !todo.completed)
    .map((todo) => todo.id)
  const completedIds = results
    .filter((todo) => todo.completed)
    .map((todo) => todo.id)

  return {
    wipIds,
    completedIds,
  }
}
