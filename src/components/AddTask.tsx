const AddTask = () => {
  return (
    <div className="flex flex-col space-y-3 p-6 [&>input]:p-2 bg-slate-200 rounded-md [&>input]:rounded-md [&>input]:border-slate-400 [&>input]:outline-slate-400 shadow [&>input]:border">
      <input type="text" placeholder="Digite o título da tarefa" />
      <input type="text" placeholder="Digite a descrição da tarefa" />
      <button className="">Adicionar</button>
    </div>
  );
};

export default AddTask;
