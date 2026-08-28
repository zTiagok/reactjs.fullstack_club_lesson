import { ChevronRightIcon, TrashIcon } from "lucide-react";
import type { TypeTasks } from "../types";

const Tasks = ({ tasks, onTaskClick, onDeleteClick }: Props) => {
  return (
    <ul className="space-y-3 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li
          className="flex *:p-2 gap-2 *:text-white *:bg-slate-400 *:rounded-md"
          key={"Task-" + task.id}
        >
          <button
            className={`flex-1 text-start ${task.isCompleted && "line-through"}`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </button>

          <button onClick={() => onDeleteClick(task.id)}>
            <TrashIcon />
          </button>

          <button>
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
};

interface Props {
  tasks: TypeTasks[];
  onTaskClick: (taskId: number) => void;
  onDeleteClick: (taskId: number) => void;
}

export default Tasks;
