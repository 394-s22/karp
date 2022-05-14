import React from "react"
import DecisionProblem from "./DecisionProblem";
import Verifier from "./Verifier";

const ProblemDefinition = ({ fileHeader, formInput, setFormInput }) => {

    /**
     * (module 3sat...
     *      (require karp...
     *               karp..)
     *      {decision-problem}
     *      {verifier}
     * )
     */

    return (
        <div>
            <DecisionProblem setFormInput={setFormInput} />
            <Verifier />
        </div>
    );
}

export default ProblemDefinition;