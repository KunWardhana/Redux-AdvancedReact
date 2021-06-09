import TextField from "@material-ui/core/TextField";
import TodoButton from "./TodoButton"
import styled, { keyframes } from "styled-components"

const EditModal = ({ closeEditModal, edit, editTask, updateTask }) => {
    return (
        <ModalContainer>
            <ModalBox>
                <h3>
                    edit task
                </h3>
                <TextField id="outlined-basic"
                    variant="outlined"
                    label="ketikan todo disini"
                    size="small"
                    className="input"
                    defaultValue={edit.title}
                    onChange={editTask}
                />

                <ModalButtons>
                    <TodoButton color="primary" text="Submit" onClick={updateTask} />
                    <TodoButton color="secondary" text="Cancel" onClick={closeEditModal} />
                </ModalButtons>

            </ModalBox>
        </ModalContainer>
    )
}

const animate = keyframes`
    from{
        top: -100px;
    }
    to{
        transform: translate(-50%. -50%)
    }
`;

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`

const ModalBox = styled.div`
    width: 40%;
    height: 10rem;
    background: #fff;
    position: absolute;
    top: 40%;
    left: 50%;
    padding: 23px;
    text-align: center;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    border: solid 3px lightblue;
    animation: ${animate};
    animation-duration: 0.8s;
    h3{
        color: #2da4f8;
    }

    .input {
        width: 80%;
        height: 2rem;
        margin: 0.5rem 0;
        padding: 0 0.5rem;
    }
`;



const ModalButtons = styled.div`
    margin: 1rem 0;

`;


export default EditModal
