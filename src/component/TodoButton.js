import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const TodoButton = ({ text, color, ...rest }) => {
    return (
        <Button {...rest} variant="contained" color={color}
            style={{
                margin: "0 0.2rem",
                width: "5rem",
            }}>
            {text}
        </Button>
    )
}

TodoButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}


export default TodoButton
