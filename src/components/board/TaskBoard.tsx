import type { TaskStatus } from "../../data/tasks";

import useApp from "../../contexts/useApp";

import BoardColumn from "./BoardColumn";

function TaskBoard() {
  const { tasks, setTasks } = useApp();

  function handleDeleteTask(id: number) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  function handleDropTask(taskId: number, newStatus: TaskStatus) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task,
      ),
    );
  }

  const todoTasks = tasks.filter((task) => task.status === "Todo");

  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");

  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <BoardColumn
        title="Todo"
        status="Todo"
        tasks={todoTasks}
        onDelete={handleDeleteTask}
        onDropTask={handleDropTask}
      />

      <BoardColumn
        title="In Progress"
        status="In Progress"
        tasks={inProgressTasks}
        onDelete={handleDeleteTask}
        onDropTask={handleDropTask}
      />

      <BoardColumn
        title="Done"
        status="Done"
        tasks={doneTasks}
        onDelete={handleDeleteTask}
        onDropTask={handleDropTask}
      />
    </div>
  );
}

export default TaskBoard;
