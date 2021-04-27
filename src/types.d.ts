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
}


