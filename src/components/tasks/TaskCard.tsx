import React from 'react'
import { Task } from '../../models/task'
import styled from 'styled-components'

interface TaskCardProps {
  task: Task
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
`

const TaskDescription = styled.p`
  margin-top: 0;
  font-size: 16px;
  color: #555;
`

export const TaskCard = ({task}: TaskCardProps) => {
  return (
    <TaskContainer>
      <TaskTitle>{task.title} <input type='checkbox' defaultChecked={task.isDone}/></TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskContainer>
  )
}
