import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, _setTasks] = useState([
    { id: 1, title: "Estudar", description: "Teste", isCompleted: false },
    { id: 2, title: "Comer", description: "Teste", isCompleted: false },
    { id: 3, title: "Treinar", description: "Teste", isCompleted: false },
  ]);

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
