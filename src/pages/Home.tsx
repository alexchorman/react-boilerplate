import React from 'react'
import { Page, PageContent, Title } from '../components'
import { TaskContainer } from '../components/tasks/TaskContainer'
import { tasks } from '../data/tasks'

// 📦 1. Create TaskContainer component inside src/components/tasks and return div with some text
// ⬇️ 2. Import <TaskContainer/> component into Home.tsx files and check if renders correctly
// ⬇️ 3. Import { tasks } array into Home.tsx
// 👇 4. TaskContainer is going to accept { tasks } array as a props
// 🎨 5. Render list of tasks. Each task should have title, checkbox, description

export function Home() {
  return (
    <Page>
      <PageContent>
        <Title>TODO list</Title>
        <TaskContainer tasks={tasks}/>
      </PageContent>
    </Page>
  )
}
