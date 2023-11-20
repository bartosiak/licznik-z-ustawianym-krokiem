import "./Step.css";

const Step = (props) => {
    return (
        <div className="step-button">
            <p>
                Krok:{" "}
                <input
                    type="number"
                    onChange={(e) => props.updateStep(e)}
                    value={props.step}
                />
            </p>
        </div>
    );
};

export default Step;
