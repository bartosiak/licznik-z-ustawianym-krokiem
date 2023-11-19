import "./Display.css";

const Display = (props) => {
    return (
        <p>
            Licznik: <span>{props.counter}</span>
        </p>
    );
};

export default Display;
