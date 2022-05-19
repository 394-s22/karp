import React, { useEffect, useState } from "react";
import DecisionProblem from "./DecisionProblem";
import Verifier from "./Verifier";

const ProblemDefinition = ({ fileHeader, formInput, setFormInput }) => {
  const [decisionProblem, setDecisionProblem] = useState([]);
  const [verifier, setVerifier] = useState([]);
  let problemDefinition =
    "(" + `${fileHeader}` + decisionProblem + verifier + ")";

  useEffect(() => {
    problemDefinition =
      "(" + `${fileHeader}` + decisionProblem + verifier + ")";
    setFormInput(problemDefinition);
  }, [decisionProblem, verifier]);

  return (
    <div>
      <DecisionProblem setFormInput={setDecisionProblem} />
      <Verifier setFormInput={setVerifier} />
    </div>
  );
};

export default ProblemDefinition;
