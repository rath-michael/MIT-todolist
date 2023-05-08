function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react', 
            isComplete: false
        },
        {
            text: 'meet friend for lunch',
            isComplete: false
        },
        {
            text: 'build to do app',
            isComplete: false
        }
    ]);

    
    const addTodo = text => {
        const newTodos = [...todos, {text: text, isComplete: false}];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }

    return (<>
        {
            todos.map((todo, i) => (
                <ToDo index={i} key={i} todo={todo} remove={removeTodo}/>
            ))
        }
        <ToDoForm addTodo={addTodo} />
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)