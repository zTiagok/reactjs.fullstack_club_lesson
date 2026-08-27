import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar", description: "Teste", isCompleted: false },
    { id: 2, title: "Comer", description: "Teste", isCompleted: false },
    { id: 3, title: "Treinar", description: "Teste", isCompleted: false },
  ]);

  const onTaskClick = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const onDeleteClick = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(updatedTasks);
  };

  return (
    <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
      <div className="w-[500px] space-y-3">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
};

export default App;
