import { ChevronRightIcon, TrashIcon } from "lucide-react";
import type { TypeTasks } from "../types";

const Tasks = ({ tasks, onTaskClick, onDeleteClick }: Props) => {
  return (
    <ul className="space-y-3 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li
          className="flex *:bg-slate-400 *:text-white *:p-2 gap-2 *:rounded-md"
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
  onTaskClick: Function;
  onDeleteClick: Function;
}

export default Tasks;
