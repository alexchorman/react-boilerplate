import React from 'react'
import { Page, PageContent, Title } from '../components'

// 📦 1. Create TaskContainer component inside src/components/tasks/ and return div with some text
// ⬇️ 2. Import <TaskContainer/> component into Home.tsx files and check if renders correctly
// ⬇️ 3. Import { tasks } array into Home.tsx
// 👇 4. TaskContainer is going to accept `tasks` array as a props
// 🎨 5. Display list of tasks on the page. Each task should have title, checkbox, description

export function Home() {
  return (
    <Page>
      <PageContent>
        <Title>Title</Title>
      </PageContent>
    </Page>
  )
}
