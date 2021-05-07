import { useContext } from 'react'
import { TasksContext } from '../providers/Tasks'

export const useTasks = () => useContext(TasksContext)

