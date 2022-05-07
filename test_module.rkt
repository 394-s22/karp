#lang racket

(module 3sat karp/problem-definition
  (require karp/lib/cnf
           karp/lib/mapping)
  (decision-problem #:name 3sat
                  #:instance ([φ is-a (cnf #:arity 3)])
                  #:certificate (mapping #:from (variables-of φ) #:to (the-set-of boolean)))
  (define-3sat-verifier a-inst c^3sat
    (∀ [c ∈ (clauses-of (φ a-inst))]
       (∃ [l ∈ (literals-of c)]
          (or (and
               (positive-literal? l) (c^3sat (underlying-var l)))
              (and
               (negative-literal? l) (not (c^3sat (underlying-var l)))))))))

(module iset karp/problem-definition
  (require karp/lib/graph)

  (decision-problem
   #:name iset
   #:instance ([G is-a (graph #:undirected)]
               [k is-a natural])
   #:certificate (subset-of (vertices-of G)))

  ; INDEPENDENT-SET verifier definition
  (define-iset-verifier a-inst a-cert 
    (define g (G a-inst)) 
    (and
     (>= (set-size a-cert) (k a-inst))
     (∀ [u ∈ (vertices-of g)]
        (∀ [v ∈ (neighbors g u)]
           (not (and
                 (set-∈ u a-cert)
                 (set-∈ v a-cert))))))))

#;(module iset karp/reduction
  (require karp/lib/graph)
  (decision-problem  #:name 3sat
                     #:instance ([A is-a cnf])
                     #:certificate (subset-of (s))))