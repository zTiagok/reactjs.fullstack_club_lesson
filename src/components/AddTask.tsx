import { useState } from "react";

const AddTask = ({ onNewTask }: Props) => {
  const [titleValue, setTitleValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");

  const clearInputValues = () => {
    setTitleValue("");
    setDescriptionValue("");
  };

  return (
    <div className="flex flex-col space-y-3 p-6 *:p-2 bg-slate-200 rounded-md *:rounded-md [&>input]:border-slate-400 [&>input]:outline-slate-400 shadow [&>input]:border">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        value={titleValue}
        onChange={(event) => setTitleValue(event.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={descriptionValue}
        onChange={(event) => setDescriptionValue(event.currentTarget.value)}
      />
      <button
        onClick={() => {
          if (!titleValue.trim()) {
            return alert("Preencha o título da tarefa.");
          }

          onNewTask(titleValue, descriptionValue);
          clearInputValues();
        }}
        className="text-white bg-slate-500"
      >
        Adicionar
      </button>
    </div>
  );
};

interface Props {
  onNewTask: (title: string, description: string) => void;
}

export default AddTask;
