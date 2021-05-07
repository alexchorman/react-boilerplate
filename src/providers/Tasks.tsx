import React, { useCallback, useState, createContext, ReactNode } from 'react'
import { tasks as existingTasks } from '../data/tasks'
import { Task } from '../models/task'

export const TasksContext = createContext({
  tasks: existingTasks,
  addTask: (task: Task) => {}
})

export const TasksProvider = ({children}: {children: ReactNode}) => {
  const [tasks, setTasks] = useState(existingTasks)
  const addTask = useCallback((task: Task) => (console.log(task), setTasks([task, ...tasks])), [tasks])

  const contextValue = {
    tasks,
    addTask
  }

  return (
    <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>
  )
}
