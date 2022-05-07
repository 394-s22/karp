#lang racket

(module 3sat karp/problem-definition
  (require karp/lib/cnf
         karp/lib/mapping)

  )

(module iset karp/problem-definition
  (require karp/lib/graph)


  )

(module 3sat-to-iset-bwd karp/reduction
  (require (submod ".." 3sat)
           (submod ".." iset)
           karp/lib/cnf
           karp/lib/graph
           karp/lib/mapping-reduction)
  (provide 3sat->iset-<<-cert)

  )

(module 3sat-to-iset-fwd karp/reduction
  (require (submod ".." 3sat)
           (submod ".." iset)
           karp/lib/cnf
           karp/lib/graph
           karp/lib/mapping-reduction)
  (provide 3sat->iset->>-cert)

  )

(module 3sat-to-iset-inst karp/reduction
  (require (submod ".." 3sat)
         (submod ".." iset)
         karp/lib/cnf
         karp/lib/graph
         karp/lib/mapping-reduction)

(provide 3sat->iset)

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


