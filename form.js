function ToDoForm({addTodo}){
    const [value, setValue] = React.useState('');

    const handleSubmit = e  => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="inputClass" 
                value={value} 
                placeholder="Add item..." 
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}