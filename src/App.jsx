import { useState } from "react";
import './App.css'

function App() {
    const [todos, setTodos] = useState([
        {
            todo: 'Do the laundry',
            description: ''
        },
        {
            todo: 'Old friends hangout',
            description: 'Rekindling some good old school memories with some friends. It\'s been a while'
        },
        {
            todo: 'Go shopping',
            description: ''
        },
        {
            todo: 'Hit the gym',
            description: 'The urgent need to burn some calories cause at this point it can only get worse.'
        }
    ]);
    const [searchText, setSearchText] = useState('');
    const [newTodo, setNewTodo] = useState({
        todo: '',
        description: ''
    });

    function deleteTodo(e) {
        const newTodos = [...todos];
        const indexOfTodoToBeDeleted = Array.from(e.target.parentElement.parentElement.parentElement.parentElement.childNodes).indexOf(e.target.parentElement.parentElement.parentElement);
        newTodos.splice(indexOfTodoToBeDeleted, 1);
        setTodos(newTodos);
    }

    function expand(e) {
        e.target.classList.add('rotate-180');
        e.target.setAttribute('id', 'collapse');
        e.target.parentElement.parentElement.parentElement.querySelector('#description').style.display = 'block';
    }

    function collapse(e) {
        e.target.classList.remove('rotate-180');
        e.target.setAttribute('id', 'expand');
        e.target.parentElement.parentElement.parentElement.querySelector('#description').style.display = 'none';
    }
    
    function checkAction(e) {
        if(e.target.getAttribute('id') === 'delete-todo') deleteTodo(e);
        else if(e.target.getAttribute('id') === 'expand') expand(e);
        else if(e.target.getAttribute('id') === 'collapse') collapse(e);
    }

    function handleInput(e) {
        const {name, value} = e.target;
        setNewTodo({...newTodo, [name]: value});
    }
    
    function addTodo (e) {
      e.preventDefault();
      if(newTodo.todo.length) {
        setTodos([...todos, newTodo]);
        e.target.reset();
      };
    }

    return ( 
        <div className="bg-[#352f5b] h-screen overflow-y-auto">
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-5xl my-6 text-white mobile_i:text-4xl">My Todo App</h1>
                <input type="text" placeholder="Search Todos" className="w-[30%] p-2 outline-none text-white text-lg bg-[rgba(0,0,0,0.2)] rounded-lg laptop_s:w-[40%] tablet:w-1/2 mobile:w-[55%] mobile_i:w-[65%]" value={searchText} onChange={e => setSearchText(e.target.value)} />
            </div>
        
            <ul className="w-[50%] mx-auto flex flex-col gap-y-2 justify-center mb-10 laptop_s:w-[60%] tablet:w-[75%] mobile:w-[85%] mobile:gap-y-3 mobile_i:w-[90%]">
                {todos.filter(todo => todo.todo.toLowerCase().includes(searchText.toLowerCase())).length ? 
                todos.filter(todo => todo.todo.toLowerCase().includes(searchText.toLowerCase())).map((todo, index) => (
                    <li key={index} className="bg-[#423a6f]" onClick={checkAction}>
                        <div className="flex font-bold items-center justify-between p-3 text-lg text-[#ddd] rounded-lg mb-1 tablet:text-xl mobile:py-4">
                            <span className="mobile:text-2xl mobile_m:text-xl mobile_s:text-lg">{todo.todo}</span>
                            <div className="flex gap-x-5 items-center mobile:gap-x-7">
                                {todo.description ? <i id="expand" className="fa-solid fa-circle-chevron-down cursor-pointer" /> : null}
                                <i id="delete-todo" className="fa-solid fa-trash-can cursor-pointer" />
                            </div>
                        </div>
                        <p id="description" className="px-2 text-gray-300 hidden pb-1 tablet:text-xl">{todo.description}</p>
                    </li>
                )) : <span className="text-center text-xl text-gray-200">No match found</span>}
            </ul>
        
            <form className="flex flex-col justify-center items-center gap-3 text-[#eee] pb-5" onSubmit={addTodo}>
                <h1 className="text-4xl">Add a new todo</h1>
                <div className="flex flex-col justify-center items-center gap-y-4 mobile:gap-y-5">
                    <input type="text" name="todo" placeholder="Add new" className="w-[70%] p-2 outline-none text-lg bg-[rgba(0,0,0,0.2)] rounded-lg tablet:w-[60%] mobile_i:w-[70%]" onChange={handleInput} />
                    <textarea name="description" placeholder="Description (Optional)" cols="60" rows="6" className="bg-[rgba(0,0,0,0.2)] outline-none rounded-xl tablet:text-2xl" onChange={handleInput} />
                </div>
                <button type="submit" className="bg-[#423a6f] py-1 px-2 cursor-pointer rounded-md tablet:text-2xl tablet:px-3 mobile:px-4 mobile:mt-3">Add</button>
            </form>
        </div>  
    );

}

export default App
