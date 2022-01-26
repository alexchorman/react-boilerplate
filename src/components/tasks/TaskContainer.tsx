import React from 'react'
import { Task } from '../../models/task'
import { TaskCard } from './TaskCard'
import styled from 'styled-components'

interface TaskContainerProps {
  tasks: Task[]
  className?: string
}

export function TaskContainer({ tasks, className }: TaskContainerProps ) {
  return (
    <StyledContainer className={className}>
      {tasks.map(task => <TaskCard task={task}/>)}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`
