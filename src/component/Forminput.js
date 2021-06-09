import TodoButton from "./TodoButton"
import styled from "styled-components"
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const Forminput = ({ addTask }) => {

    const [task, setTask] = useState("")

    // useEffect(() => {
    //     console.log(task)
    // }, [task])

    const submitform = (e) => {
        e.preventDefault()

        if (task !== "") {
            addTask(task);
        }

        setTask("")
    };

    return (
        <StyledForm onSubmit={(e) => submitform(e)}>
            <TextField id="outlined-basic"
                variant="outlined"
                label="ketikan todo disini"
                size="small"
                className="input"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <TodoButton text="Add" color="primary" type="submit" />
        </StyledForm>
    )
}

const StyledForm = styled.form`
    background-color: #fff;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 3rem; */
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;

    .input{
        width: 70%;
    }
`;

export default Forminput
