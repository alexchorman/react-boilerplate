import React, { useState } from 'react'
import { Page, PageContent, Title } from '../components'
import { TaskContainer } from '../components/tasks/TaskContainer'
import { tasks as existingTasks } from '../data/tasks'
import { NewForm } from '../components/forms/NewForm'

export function Home() {
  const [tasks, setTasks] = useState(existingTasks)
  return (
    <Page>
      <PageContent>
        <Title>TODO list</Title>
        <NewForm onNewTask={newTask =>setTasks([newTask, ...tasks])}/>
        <TaskContainer tasks={tasks}/>
      </PageContent>
    </Page>
  )
}
