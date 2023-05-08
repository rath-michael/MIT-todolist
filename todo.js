function ToDo({todo, index, remove}){
    function handle(){
        remove(index);
    }
    return (
        <div className="todo-item" onClick={handle}>{todo.text} (-)</div>
    );
}