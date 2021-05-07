import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { Button } from './Button'
import { Task } from '../../models/task'

const Container = styled.div`
  margin-bottom: 30px;
`

interface NewFormProps {
  onNewTask(task: Task): void
}

export const NewForm = ({onNewTask}: NewFormProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const isValid = useMemo(() => !!title, [title]);
  const onClick = useCallback(() => {
    onNewTask({
      title,
      description,
      created: new Date(),
      isDone: false
    })
    setTitle('')
    setDescription('')
  }, [title, description])

  return (
    <Container>
      <Input label='Title' onChange={setTitle} value={title}/>
      <Input label='Description' type="textarea" onChange={setDescription} value={description}/>
      <Button onClick={onClick} disabled={!isValid}>Add</Button>
    </Container>
  )
}
