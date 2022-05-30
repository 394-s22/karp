#lang racket (module 3sat karp/problem-definition (require karp/lib/cnf karp/lib/mapping) (decision-problem #:name 3sat #:instance ( [φ is-a (cnf #:arity 3)]  ) #:certificate (mapping
                #:from (variables-of φ)
                #:to (the-set-of boolean)))(define-3sat-verifier a-inst c^3sat
 (∀ [c ∈ (clauses-of (φ a-inst))]
  (∃ [l ∈ (literals-of c)]
    (or
     (and
      (positive-literal? l)
      (c^3sat (underlying-var l)))
     (and
      (negative-literal? l)
      (not (c^3sat (underlying-var l)))))))))(module iset karp/problem-definition (require karp/lib/graph) (decision-problem #:name iset #:instance ( [G is-a (graph #:undirected)] [k is-a natural]  ) #:certificate (subset-of (vertices-of G)))(define-iset-verifier a-inst a-cert 
 (define g (G a-inst)) 
 (and
  (>= (set-size a-cert) (k a-inst))
  (∀ [u ∈ (vertices-of g)]
   (∀ [v ∈ (neighbors g u)]
     (not (and
           (set-∈ u a-cert)
           (set-∈ v a-cert))))))))(module 3sat-to-iset-bwd karp/reduction
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
     [x ∈ (set-minus X X-True)] ~> #f))
  )

(module 3sat-to-iset-fwd karp/reduction
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
              for [(C #:index i) in (φ a-3sat-inst)]})
    )
  )

(module 3sat-to-iset-inst karp/reduction
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
  
 (create-iset-instance ([G (create-graph V (set-∪ E1 E2))]
                        [k (set-size Cs)])))
  )

(require karp/reduction
         (submod "." 3sat)
         (submod "." iset)
         karp/lib/cnf
         karp/lib/graph
         karp/lib/mapping-reduction
         (submod "." 3sat-to-iset-inst)
         (submod "." 3sat-to-iset-fwd)
         (submod "." 3sat-to-iset-bwd)
         )

(check-reduction #:from 3sat #:to iset
                 3sat->iset 3sat->iset->>-cert 3sat->iset-<<-cert)

