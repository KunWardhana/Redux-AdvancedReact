const initialState = {
    tasks: [

        {
            id: 1,
            title: "Membaca buku",
        },
        {
            id: 2,
            title: "Cook my Sock"
        },
        {
            id: 3,
            title: "Sandy Loam",
        },
    ],

};

const TaskReducer = (state = initialState, action) => {
    const { type, payload } = action;


    switch (type) {
        default:
            return state;
        case "UPDATE":
            const { id, title } = payload;
            const updatedData = { id, title };

            const newTodos = state.tasks;

            newTodos.splice(id - 1, 1, updatedData)
            return {
                ...state,
                tasks: newTodos,
            }
        case "DELETE":
            return {
                ...state,
                // setTodos(todos.filter((item) => item.id !== id));
                tasks: state.tasks.filter((item) => item.id !== payload),
            }
        case "ADD":
            const newData = {
                id: state.tasks.length + 1,
                title: payload,
            };

            return {
                ...state,
                tasks: [...state.tasks, newData],
            }



    }
}

export default TaskReducer;