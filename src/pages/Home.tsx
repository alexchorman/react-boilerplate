import React, { useState } from 'react'
import { Page, PageContent, Title } from '../components'
import { TaskContainer } from '../components/tasks/TaskContainer'
import { tasks as existingTasks } from '../data/tasks'
import { NewForm } from '../components/forms/NewForm'

// 📝 1. Create NewForm component in src/components/forms/
// 📬 2. <NewForm/> component should accept setTasks() as a prop and update tasks array
// 🧬 3. <NewForm/> component should include title input, description input and "Add" button which adds new tasks to the tasks array

export function Home() {
  const [tasks, setTasks] = useState(existingTasks)

  return (
    <Page>
      <PageContent>
        <Title>TODO list</Title>
        <NewForm onNewTask={newTask => setTasks([newTask, ...tasks])}/>
        <TaskContainer tasks={tasks}/>
      </PageContent>
    </Page>
  )
}
