import React from "react";
import "react-step-progress-bar/styles.css";
import "./ProgressBar.css"
import { ProgressBar, Step } from "react-step-progress-bar";

export const StepProgressBar = (props) => {
    return(
        <ProgressBar
            percent={((props.step-1)*100)/2}
            filledBackground="linear-gradient(to right, #f9d4b4, #ffb500)"
        >
            <Step transition="scale">
                {({ accomplished, step}) => (
                    <div className={ accomplished ? "step completed" : "step"}>
                        1
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished, step}) => (
                    <div className={ accomplished ? "step completed" : "step"}>
                        2
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished, step }) => (
                    <div className={ accomplished ? "step completed" : "step"}>
                        3
                    </div>
                )}
            </Step>
        </ProgressBar>
    )
}
export default StepProgressBar