import type { Task, TaskStatus } from "../../data/tasks";
import BoardColumn from "./BoardColumn";

interface TaskBoardProps {
  tasks: Task[];
}

const columns: TaskStatus[] = ["To Do", "In Progress", "Review", "Done"];

function TaskBoard({ tasks }: TaskBoardProps) {
  const getTasksByStatus = (status: TaskStatus) =>
    tasks.filter((task) => task.status === status);

  return (
    <div className="grid gap-6 xl:grid-cols-4">
      {columns.map((column) => (
        <BoardColumn
          key={column}
          title={column}
          tasks={getTasksByStatus(column)}
        />
      ))}
    </div>
  );
}

export default TaskBoard;
