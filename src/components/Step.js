import "./Step.css";

const Step = (props) => {
    return (
        <div className="step-button">
            <p>
                Krok: <input value={props.step} />
            </p>
            <button onClick={() => props.updateStep("add")}>+</button>
            <button onClick={() => props.updateStep("subtract")}>-</button>
        </div>
    );
};

export default Step;
