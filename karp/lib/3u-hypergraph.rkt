#lang racket

(require
  (prefix-in r: rosette/safe))

(provide
  3u-hyperedge/c
  3u-hypergraph/c
  make-empty-3u-hypergraph
  edges-3u-hypergraph
  union-3u-hypergraph
  append-3u-hypergraph)

(define 3u-hyperedge/c (list/c symbol? symbol? symbol?))
(define 3u-hypergraph/c
  (and/c
   (list/c (listof symbol?)
           (listof symbol?)
           (listof symbol?)
           (listof 3u-hyperedge/c))
   (λ (g)
     (for/and ([edge (in-list (fourth g))])
       (and (member (first edge) (first g))
            (member (second edge) (second g))
            (member (third edge) (third g)))))))

(define (make-empty-3u-hypergraph) (list '() '() '() '()))

(define (edges-3u-hypergraph g) (fourth g))

(define (union-3u-hypergraph g1 g2)
  (list (remove-duplicates (append (first g1) (first g2)))
        (remove-duplicates (append (second g1) (second g2)))
        (remove-duplicates (append (third g1) (third g2)))
        (remove-duplicates (append (fourth g1) (fourth g2)))))

(define (append-3u-hypergraph g1 #:x [x '()] #:y [y '()] #:z [z '()] #:e [e '()])
  (list (if (or (equal? x '()) (member x (first g1)))
            (first g1)
            (cons x (first g1)))
        (if (or (equal? y '()) (member y (second g1)))
            (second g1)
            (cons y (second g1)))
        (if (or (equal? z '()) (member z (third g1)))
            (third g1)
            (cons z (third g1)))
        (if (or (equal? e '()) (member e (fourth g1)))
            (fourth g1)
            (cons e (fourth g1)))))
