import React, { useState } from 'react'
import { Page, PageContent, Title } from '../components'
import { TaskContainer } from '../components/tasks/TaskContainer'
import { tasks as existingTasks } from '../data/tasks'
import { NewForm } from '../components/forms/NewForm'

// 1. Create TasksProvider.tsx.
// 2. Inside TasksProvider.tsx using createContext() create TasksContext.
// 3. Use TasksContext.Provider to provide context for consuming components. Wrap it around <App/> component.
// 4. Using useContext consume context state inside component you want. Use your TasksContext as an argument

// 5. Create Add.tsx page and extract form code to this components.
// 6. Inside App.tsx create new route for the Add.tsx page.
// 7. Inside Home.tsx create link to the Add.tsx.

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
