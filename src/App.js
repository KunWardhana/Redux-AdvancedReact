import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import styled from "styled-components";
import Todoitem from './component/Todoitem';
import Forminput from './component/Forminput';
import EditModal from './component/EditModal';
import { useSelector, useDispatch } from 'react-redux'
import { Add, Delete, Update } from "./redux/actions/TaskActions"

function App() {

  const todos = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch()

  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState({
    id: "",
    title: "",
  })

  const deleteTask = (id) => {
    dispatch(Delete(id));
  };

  const addTask = (data) => {
    dispatch(Add(data));
  };

  const openEditModal = (id, data) => {
    setIsEdit(true);

    setEdit({
      id,
      title: data,
    });
  }

  const closeEditModal = () => {
    setIsEdit(false);
  }

  const editTask = (e) => {
    setEdit({ ...edit, title: e.target.value })
  };

  const updateTask = () => {
    dispatch(Update(edit));
    setIsEdit(false);
    setEdit({
      id: "",
      title: "",
    });
  };

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        <h3>Todo List</h3>
      </Logo>

      {todos.map((todo) => (
        <Todoitem key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          setIsEdit={openEditModal}
        />
      ))}

      <Forminput addTask={addTask} />

      {
        isEdit &&
        <EditModal closeEditModal={closeEditModal}
          edit={edit}
          editTask={editTask}
          updateTask={updateTask}
        />
      }

    </Container>
  );
}

const Container = styled.section`
  width: 40%;
  margin:0 auto;
  height: 100vh;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  img {
    width: 100px;
  }

  h3{
    color: #2da4fd;
  }
`




export default App;
