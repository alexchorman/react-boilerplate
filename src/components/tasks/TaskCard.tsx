import React from 'react'
import { Task } from '../../models/task'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface TaskCardProps {
  task: Task
  id: number
}

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: #999 1px solid;
  border-radius: 5px;
  padding: 5px;
`

const TaskTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  a {
    color: black !important;
    text-decoration: none;
  }
`

const TaskDescription = styled.p`
  margin-top: 0;
  font-size: 16px;
  color: #555;
`

export const TaskCard = ({task, id}: TaskCardProps) => {
  return (
    <TaskContainer>
      <TaskTitle><Link to={`/tasks/${id}`}>{task.title}</Link> <input type='checkbox' defaultChecked={task.isDone}/></TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskContainer>
  )
}
