const Tasks = ({ tasks }: Props) => {
  return (
    <ul className="space-y-3 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li className="flex" key={"Task-" + task.id}>
          <button className="bg-slate-400 flex-1 text-white p-2 rounded-md">
            {task.title}
          </button>
          <button>Ver Detalhes</button>
        </li>
      ))}
    </ul>
  );
};

interface Props {
  tasks: TypeTasks[];
}

type TypeTasks = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

export default Tasks;
