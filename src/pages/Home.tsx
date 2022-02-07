import React from 'react'
import { Page, PageContent, Title } from '../components'
import { TaskContainer } from '../components/tasks/TaskContainer'
import { tasks } from '../data/tasks'

// 🪝 0. Inside Home component add useState hook to track tasks changes. Use your hardcoded task array as an initial value for useState hook.
// 📝 1. Create NewForm component in src/components/forms/.
// 📬 2. <NewForm/> component accepts setTasks() as a prop and update tasks array.
// 🧬 3. <NewForm/> component should include title input, description input and "Add" button.
// 💾 4. Create internal state inside <NewForm/> component to track title and description inputs.
// 🛠 5. On "Add" button click add new task to the tasks array using setTasks() callback.

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
