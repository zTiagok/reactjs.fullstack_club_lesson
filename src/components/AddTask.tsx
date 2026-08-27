const AddTask = () => {
  return (
    <div className="space-y-3 p-6 bg-slate-200 rounded-md shadow flex flex-col [&>input]:p-2 [&>input]:rounded-md [&>input]:border [&>input]:border-slate-400 [&>input]:outline-slate-400">
      <input type="text" placeholder="Digite o título da tarefa" />
      <input type="text" placeholder="Digite a descrição da tarefa" />
      <button className="">Adicionar</button>
    </div>
  );
};

export default AddTask;
