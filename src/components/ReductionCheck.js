import React, { useReducer, useState } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/ReductionCheck.css";
import ProblemDefinition from "./ProblemDefinition";

const ReductionCheck = ({ output, setOutput }) => {

  const [reducedFrom, setReducedFrom] = useState([]);
  const [reducedTo, setReducedTo] = useState([]);
  //const [forward, setForward] = useState([]);
  //const [backward, setBackward] = useState([]);
  //const [instance, setInstance] = useState([]);

  const lang = '#lang racket ';
  const reducedFromHeader = 'module 3sat karp/problem-definition (require karp/lib/cnf karp/lib/mapping) ';
  const reducedToHeader = 'module iset karp/problem-definition (require karp/lib/graph) ';
  const backward = `(module 3sat-to-iset-bwd karp/reduction
  (require (submod ".." 3sat)
           (submod ".." iset)
           karp/lib/cnf
           karp/lib/graph
           karp/lib/mapping-reduction)

(provide 3sat->iset-<<-cert)

(define-backward-certificate-construction
  #:from 3sat #:to iset
  (3sat->iset-<<-cert s->t-constr a-3sat-inst c^iset)

  (define X (vars-of (φ a-3sat-inst)))
  (define X-True
    (for/set {x for [x ∈ X]
                if (∃ [v in c^iset]
                      (and
                       (positive-literal? (_1s v))
                       (equal? (underlying-var (_1s v)) x)))}))
  (mapping
   [x ∈ X-True] ~> #t
   [x ∈ (set-minus X X-True)] ~> #f)))
`;

const forward = `(module 3sat-to-iset-fwd karp/reduction
  (require (submod ".." 3sat)
          (submod ".." iset)
       karp/lib/cnf
       karp/lib/graph
       karp/lib/mapping-reduction)
(provide 3sat->iset->>-cert)

(define-forward-certificate-construction
#:from 3sat #:to iset
(3sat->iset->>-cert s->t-constr a-3sat-inst c^3sat)

(for/set {(el
            (find-one [l ∈ C] s.t.
              (or (and (positive-literal? l)
                       (c^3sat (underlying-var l)))
                  (and (negative-literal? l)
                       (not (c^3sat (underlying-var l))))))
            i)
           for [(C #:index i) in (φ a-3sat-inst)]})))
  `
const instance = `(module 3sat-to-iset-inst karp/reduction
(require (submod ".." 3sat)
         (submod ".." iset)
         karp/lib/cnf
         karp/lib/graph
         karp/lib/mapping-reduction)

(provide 3sat->iset)

(define-forward-instance-construction
#:from 3sat #:to iset
(3sat->iset a-3sat-inst)

(define Cs (clauses-of (φ a-3sat-inst)))
; creating the node for the graph (Fig. 2)
(define V (for/set {(el l i) for [l ∈ C] for [(C #:index i) ∈ Cs]}))
; creating the set E1 for the graph (Fig. 3)
(define E1
 (for/set {((el l1 i) . -e- . (el l2 j))
           for [l1 ∈ (literals-of C1)] for [l2 ∈ (literals-of C2)]
           for [(C1 #:index i) ∈ Cs] for [(C2 #:index j) ∈ Cs]
           if (literal-neg-of? l1 l2)}))
; creating the set E2 for the graph (Fig. 4)
(define E2
 (for/set {((el (fst p) i) . -e- . (el (snd p) i))
           for [p ∈ (all-pairs-in (literals-of C))]
           for [(C #:index i) ∈ Cs]}))

(create-iset-instance ([G (create-graph V (set-∪ E1 ))]
                      [k (set-size Cs)]))))


(require karp/reduction
       (submod "." 3sat)
       (submod "." iset)
       karp/lib/cnf
       karp/lib/graph
       karp/lib/mapping-reduction
       karp/reduction
       (submod "." 3sat-to-iset-inst)
       (submod "." 3sat-to-iset-fwd)
       (submod "." 3sat-to-iset-bwd))

(check-reduction #:from 3sat #:to iset
               3sat->iset 3sat->iset->>-cert 3sat->iset-<<-cert)`
  
  


  const handleSubmit = (evt) => {
    evt.preventDefault();
    let combinedData = lang 
                      + reducedFrom 
                      + reducedTo 
                      + backward 
                      + forward 
                      + instance;

    console.log(combinedData);

    // add "await" and deal with async code!
    fetch("http://localhost:3001/", {
      method: "POST",
      body: combinedData,
    })
      .then((response) => response.text())
      .then((result) => {
        setOutput(result);
        console.log("Success:", combinedData);
      });
  };

  const handleInput = (evt) => {
    switch (evt.target.name) {
      case "reduced-from":
        setReducedFrom(evt.target.value);
        break;
      case "reduced-to":
        setReducedTo(evt.target.value);
        break;
      //case "backward":
        //setBackward(evt.target.value);
        //break;
      //case "forward":
        //setForward(evt.target.value);
        //break;
      //case "instance":
        //setInstance(evt.target.value);
       // break;
    }
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <div className="reduced-from">
          <ProblemDefinition
            fileHeader={reducedFromHeader}
            formInput={reducedFrom}
            setFormInput={setReducedFrom}
          />
        </div>
        <div className="reduced-to">
          <ProblemDefinition
            fileHeader={reducedToHeader}
            formInput={reducedTo}
            setFormInput={setReducedTo}
          />
        </div>
        <TextField
          label="backward"
          name="backward"
          multiline
          minRows={4}
          defaultValue={""}
          //className={classes.textField}
          helperText="Enter Backward"
          onChange={handleInput}
        />
        <TextField
          label="forward"
          name="forward"
          multiline
          minRows={4}
          defaultValue={""}
          helperText="Enter Forward"
          onChange={handleInput}
        />
        <TextField
          label="instance"
          name="instance"
          multiline
          minRows={4}
          defaultValue={""}
          helperText="Enter Instance"
          onChange={handleInput}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReductionCheck;
