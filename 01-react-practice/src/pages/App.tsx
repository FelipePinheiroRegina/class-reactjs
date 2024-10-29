import styles from './App.module.css'
import { Header } from "../components/Header"
import { PlusCircle } from '@phosphor-icons/react'
import { CaseNotTasks } from '../components/CaseNotTasks'
import { Card } from '../components/Card'
import { ChangeEvent, FormEvent, useState } from 'react'

export interface PropsTask {
  completed: boolean,
  description: string
}

export function App() {
  const [ task, setTask ] = useState<PropsTask>({completed: false, description: ''})
  const [ tasks, setTasks ] = useState<PropsTask[]>([])

  function handleWriteTask(event: ChangeEvent<HTMLInputElement>) {

    setTask({completed: false, description: event.target.value})
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, task])
    setTask({completed: false, description: ''})
  }

  function handleCheckTask(description: string) {
    // primeiro, eu filtro a tarefa e inverto o booleano dela
    const [ taskUpdate ] = tasks.filter(task => task.description === description)
    taskUpdate.completed = !taskUpdate.completed

    // segundo, eu tiro ela da minha nova lista
    const newListTask = tasks.filter(task => task.description !== description)

    // terceiro, eu insiro ela com o novo valor na nova lista
    newListTask.push(taskUpdate)

    // quarto, eu insiro o meu novo array dentro de tasks, conservando o conceito de imutabilidade
    setTasks(newListTask)
  }

  function handleRemoveTask(description: string) {
    const newList = tasks.filter(task => task.description !== description)
    setTasks(newList)
  }

  function fetchTasksChecked(tasks: PropsTask[]) {
    const tasksChecked = tasks.reduce((count, task) => {
      return task.completed ? count + 1 : count
    }, 0);

    return String(tasksChecked)
  }

  return (
    <main className={styles.main}>
      <Header/>
      <form 
        onSubmit={handleAddNewTask}
        className={styles.form}
      >
        <input
          placeholder='Adicione uma nova tarefa' 
          type="text"
          name="task" 
          id="task" 
          className={styles.task}
          value={task.description}
          onChange={handleWriteTask}
        />

        <button 
          className={styles.create}
          type='submit'
          disabled={task.description.length === 0}
        >
          <span>Criar</span>
          <PlusCircle/>
        </button>
      </form>

      <section className={styles.list}>
        <header>
          <span className={styles.countCreate}>
            <strong>Tarefas criadas</strong>
            <span className={styles.countNumber}>{tasks.length}</span>
          </span>

          <span className={styles.countConclude}>
            <strong>Concluídas</strong>
            <span className={styles.countNumber}>{fetchTasksChecked(tasks)} de {tasks.length}</span>
          </span>
        </header>

        { tasks.length > 0 &&
          <article className={styles.article}>
            {
              tasks.map(task => (
                <Card
                  key={task.description}
                  task={task}
                  handleCheckTask={handleCheckTask}
                  handleRemoveTask={handleRemoveTask}
                />
              ))
            }
          </article>
        }

        { tasks.length === 0 &&
          <CaseNotTasks/>
        }
        
      </section>
    </main>
  )
}