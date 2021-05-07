import React from 'react'
import { Title } from '../components'
import { TaskContainer } from '../components/tasks/TaskContainer'
import { Button } from '../components/forms/Button'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <Title>TODO list</Title>
      <Link to='/add'>
        <Button>Add new task</Button>
      </Link>
      <TaskContainer />
    </>
  )
}
