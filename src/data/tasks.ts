import { Task } from "../models/task";

export const tasks: Task[] = [
  {
    title: 'Throw out garbage',
    description: "Don't forget to recycle!",
    created: new Date(),
    isDone: true,
  },
  {
    title: 'Trim the grass',
    description: 'Use scissors',
    created: new Date(),
    isDone: false,
  },
]
