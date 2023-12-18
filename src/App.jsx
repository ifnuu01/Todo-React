import React, { useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleEditTodo = (index, newValue) => {
        const updatedTodos = [...todos];
        setInputValue('')
        if (newValue.trim() !== '') {
            updatedTodos[index] = newValue;
            setTodos(updatedTodos);run 
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="container mx-auto grid place-content-center min-h-screen">
            <h1 className="text-blue-500 shadow-md shadow-black rounded-lg p-4 text-2xl font-bold mb-4 text-center">To Do List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded-l px-4 py-2 w-full"
                    placeholder="Enter a to do list"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded ml-4"
                    onClick={handleAddTodo}
                >
                    Add
                </button>
            </div>
            <ul className="bg-blue-500 list-disc pl-8 rounded-lg shadow-md shadow-black mb-4 justify-between ">
                {todos.map((todo, index) => (
                    <li key={index} className="mb-2 mt-2 flex justify-between items-center">
                        <span className="flex-grow font-bold text-white">
                            {index + 1} . {todo}
                        </span>
                        <div className="flex space-x-2 ml-4">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded-lg pl-4 mr-2 inline-flex"
                            onClick={() => handleEditTodo(index,prompt('Edit List:', todos[index]))}>
                                Edit
                            </button>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg pl-4 pr-4 mr-2 inline-flex"
                                onClick={() => handleDeleteTodo(index)}>
                                Clear
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
