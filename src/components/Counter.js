import { useState } from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Step from "./Step";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);

    const updateCounter = (action) => {
        if (action === "add") {
            setCounter(counter + 1);
        } else if (action === "relnit") {
            setCounter(counter + step);
        } else {
            setCounter(0);
        }
    };
    const updateStep = (val) => {
        if (val === "add") {
            setStep(step + 1);
        } else {
            setStep(step - 1);
        }
    };

    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel updateCounter={updateCounter} />
            <Step updateStep={updateStep} step={step} />
        </div>
    );
};

export default Counter;
