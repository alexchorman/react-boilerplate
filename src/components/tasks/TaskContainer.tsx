import React from 'react'
import { TaskCard } from './TaskCard'
import styled from 'styled-components'
import { useTasks } from '../../hooks/useTasks'

interface TaskContainerProps {
  className?: string
}

export function TaskContainer({ className }: TaskContainerProps ) {
  const { tasks } = useTasks()
  return (
    <StyledContainer className={className}>
      {tasks.map((task, id) => <TaskCard key={task.title} task={task} id={id}/>)}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 5px;
`
