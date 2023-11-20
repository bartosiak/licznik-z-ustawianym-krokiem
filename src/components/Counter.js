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
    const updateStep = (e) => {
        const newStep = parseInt(e.target.value);
        console.log(newStep);
        if (newStep <= 0) {
            setStep(1);
        } else {
            setStep(newStep);
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
