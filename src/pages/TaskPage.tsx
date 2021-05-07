import React from 'react'
import { useParams } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
import { TaskCard } from '../components/tasks/TaskCard'

export const TaskPage = () => {
  const {tasks} = useTasks()
  const {id} = useParams<{id: string}>()

  return (
    <TaskCard task={tasks[parseInt(id)]} id={parseInt(id)}/>
  )
}
