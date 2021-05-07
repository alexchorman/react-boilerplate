import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { Button } from './Button'
import { useTasks } from '../../hooks/useTasks'
import { useHistory } from 'react-router-dom'
import { TextArea } from './TextArea'

const Container = styled.div`
  margin-bottom: 30px;
`

export const NewForm = () => {
  const {addTask} = useTasks()
  const history = useHistory();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const isValid = useMemo(() => !!title, [title]);
  const onClick = useCallback(() => {
    addTask({
      title,
      description,
      created: new Date(),
      isDone: false
    })
    history.push('/')
  }, [title, description])

  return (
    <Container>
      <Input label='Title' onChange={setTitle} value={title}/>
      <TextArea label='Description' rows={5} onChange={setDescription} value={description}/>
      <Button onClick={onClick} disabled={!isValid}>Add</Button>
    </Container>
  )
}
