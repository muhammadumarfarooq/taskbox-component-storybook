interface TaskInterface {
  id: string
  title: string
  state: string
  updatedAt: Date
}

interface TaskComponentProps {
  task: TaskInterface
  onArchiveTask: (id: string) => void
  onPinTask: (id: string) => void
  key?: string
}

interface TaskListProps {
  loading: boolean
  tasks: TaskInterface[]
  onPinTask: (id: string) => void
  onArchiveTask: (id: string) => void
}


