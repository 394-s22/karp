const EXPR_INFO =
    [
        {
            name: 'Variables',
            exprs: [
                {
                    display: 'x',
                    description: 'an variable',
                    exprProps: {
                        noParentheses: true
                    },
                    exprType: 'VariableExpr'
                },
                {
                    display: '<i>a</i>',
                    description: 'an abstract object with a name',
                    exprProps: {
                        noParentheses: true
                    },
                    exprType: 'SymbolExpr'
                }
            ]
        },
        {
            name: 'Number',
            exprs: [
                {
                    display: 'n',
                    description: 'a number',
                    exprProps: {
                        noParentheses: true
                    },
                    exprType: 'NumberExpr'
                },
                {
                    display: 'm + n',
                    description: 'plus (+)',
                    exprProps: {
                        op: '+',
                        opDisplay: '+',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'm − n',
                    description: 'minus (-)',
                    exprProps: {
                        op: '-',
                        opDisplay: '−',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'm ⋅ n',
                    description: 'times (⋅ , * , ×)',
                    exprProps: {
                        op: '*',
                        opDisplay: '⋅',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'm &gt; n',
                    description: 'greater than, >',
                    exprProps: {
                        op: '>',
                        opDisplay: '>',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'm &ge; n',
                    description: 'greater than or equals to, >=',
                    exprProps: {
                        op: '>=',
                        opDisplay: '≥',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'm &lt; n',
                    description: 'less than, <',
                    exprProps: {
                        op: '<',
                        opDisplay: '<',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'm &le; n',
                    description: 'less than or equals to, <=',
                    exprProps: {
                        op: '<=',
                        opDisplay: '≤',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
            ]
        },
        {
            name: 'Logic',
            exprs: [
                {
                    display: '<i>True</i>',
                    description: 'boolean value true',
                    exprProps: {
                        theConst: '#t',
                        constDisplay: 'True',
                        noParentheses: true,
                    },
                    exprType: 'ConstantExpr'
                },
                {
                    display: '<i>False</i>',
                    description: 'boolean value false',
                    exprProps: {
                        theConst: '#f',
                        constDisplay: 'False',
                        noParentheses: true
                    },
                    exprType: 'ConstantExpr'
                },
                {
                    display: 'm = n',
                    description: 'equals, ==',
                    exprProps: {
                        op: 'equal?',
                        opDisplay: '=',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'P ∧ Q',
                    description: 'logical and (conjunction)',
                    exprProps: {
                        op: 'and',
                        opDisplay: '∧',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'P ∨ Q',
                    description: 'logical or (disjunction)',
                    exprProps: {
                        op: 'or',
                        opDisplay: '∨',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: '¬P',
                    description: 'logical not (negation)',
                    exprProps: {
                        op: 'not',
                        opDisplay: '¬',
                        lBracket: '',
                        rBracket: ''
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: '⎧a if P,<br>⎩b o.w.',
                    description: 'conditional value, if P then a otherwise b',
                    exprProps: {
                        noParentheses: true
                    },
                    exprType: 'IfOtherwiseExpr'
                }
            ]
        },
        {
            name: 'CNF',
            exprs: [
                {
                    display: 'Clauses(φ)',
                    description: 'get the set of clauses of a CNF',
                    exprProps: {
                        op: 'clauses-of',
                        opDisplay: 'Clauses',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: 'Vars(φ)',
                    description: 'the set of all variables of a CNF',
                    exprProps: {
                        op: 'vars-of',
                        opDisplay: 'Vars',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: 'Literals(C)',
                    description: 'get the set of literals of a clause, i.e. {¬x₁,x₂,x₃}',
                    exprProps: {
                        op: 'literals-of',
                        opDisplay: 'Literals',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: 'l₁ ≟ ¬l₂',
                    description: 'test if two literal are the negation of each other',
                    exprProps: {
                        op: 'literal-neg-of?',
                        opDisplay: 'IsNegationOf?',
                        noParentheses: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'l ≟ x',
                    description: 'test if a literal is a positive literal',
                    exprProps: {
                        op: 'positive-literal?',
                        opDisplay: 'Positve?',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: 'l ≟ ¬x',
                    description: 'test if a literal is a negative literal',
                    exprProps: {
                        op: 'negative-literal?',
                        opDisplay: 'Negative?',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: '¬x₁ ---&gt; x₁',
                    description: 'the underlying variable of a literal',
                    exprProps: {
                        op: 'underlying-var',
                        opDisplay: 'Var',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                }
            ]
        },
        {
            name: 'Pair',
            exprs: [
                {
                    display: '(a, b)',
                    description: 'create a ordered pair of two elements',
                    exprProps: {
                        op: 'tuple',
                        opDisplay: '',
                        noParentheses: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: '(a, b) ---&gt; a',
                    description: 'get the first element of a pair',
                    exprProps: {
                        op: 'fst',
                        opDisplay: 'first',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: '(a, b) ---&gt; b',
                    description: 'get the second element of a pair',
                    exprProps: {
                        op: 'snd',
                        opDisplay: 'second',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: '{a,b,c} ---&gt; {(a,b),(a,c),(b,c)}',
                    description: 'get the set of all pairs of distinct elemtents of two sets',
                    exprProps: {
                        op: 'all-pairs-in',
                        opDisplay: 'AllPairsIn',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                }
            ],
        },
        {
            name: 'Set',
            exprs: [
                {
                    display: '{ f(x) | x ∈ S, P(x) }',
                    description: 'describe a set by stating the properties of the members',
                    exprType: 'SetBuilderExpr',
                    exprProps: {
                        noParentheses: true
                    }
                },
                {
                    display: 'f(x) ∈ { f(x) | x ∈ S, P(x) } ---&gt; x',
                    description: 'find one x where the set element f(x) is created from',
                    exprProps: {
                        op: 'corr',
                        opDisplay: 'corr',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: '|S|',
                    description: 'get the size (cardinality) of a set',
                    exprProps: {
                        op: 'set-size',
                        opDisplay: '',
                        lBracket: '|',
                        rBracket: '|',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: 'S1 ∪ S2',
                    description: 'union of two sets',
                    exprProps: {
                        op: 'set-∪',
                        opDisplay: '∪',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'S1 ∩ S2',
                    description: 'intersection of two sets',
                    exprProps: {
                        op: 'set-∩',
                        opDisplay: '∩',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'S1 \\ S2',
                    description: 'set difference of two sets',
                    exprProps: {
                        op: 'set-minus',
                        opDisplay: '\\',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'x ∈ S',
                    description: 'test if x is a member of the set S',
                    exprProps: {
                        op: 'set-∈',
                        opDisplay: '∈',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'find-one x ∈ S s.t. P(x)',
                    description: 'find an element from a set',
                    exprProps: {},
                    exprType: 'FindOneExpr'
                },
                {
                    display: '∀ x ∈ S, P(x)',
                    description: 'test if all elements of set S satisfying P (forall)',
                    exprProps: {
                        op: '∀',
                        opDisplay: '∀'
                    },
                    exprType: 'QuantifierExpr'
                },
                {
                    display: '∃ x ∈ S, P(x)',
                    description: 'test if there exists some element of set S satisfying P',
                    exprProps: {
                        op: '∃',
                        opDisplay: '∃'
                    },
                    exprType: 'QuantifierExpr'
                },
                {
                    display: 'x<sup>i</sup> ∈ S ---&gt; i ',
                    description: 'get the index of an element in a set',
                    exprProps: {
                        op: 'index-in',
                        opDisplay: 'IndexIn',
                        noParentheses: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: '{x}',
                    description: 'create a singleton set',
                    exprProps: {
                        op: 'set',
                        opDisplay: '',
                        lBracket: '{',
                        rBracket: '}'
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: '{x, y}',
                    description: 'create a set with two elements',
                    exprProps: {
                        op: 'set',
                        opDisplay: '',
                        lBracket: '{',
                        rBracket: '}'
                    },
                    exprType: 'BinaryOpExpr'
                }
            ]
        },
        {
            name: 'Mapping',
            exprs: [
                {
                    display: '[x -&gt; f(x) | x ∈ S ]',
                    description: 'describe a mapping',
                    exprProps: {},
                    exprType: 'MappingBuilderExpr'
                },
                {
                    display: 'f(x)',
                    description: 'lookup the image of an element in a mapping',
                    exprProps: {},
                    exprType: 'MappingLookupExpr'
                }
            ]
        },
        {
            name: 'Graph',
            exprs: [
                {
                    display: 'V(G)',
                    description: 'Get the set of vertices of a graph',
                    exprProps: {
                        op: 'vertices-of',
                        opDisplay: 'V'
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: 'E(G)',
                    description: 'Get the set of edges of a graph',
                    exprProps: {
                        op: 'edges-of',
                        opDisplay: 'E'
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: '&lt;V,E&gt;',
                    description: 'create a graph with vertex set and edge set',
                    exprProps: {
                        op: 'create-graph',
                        opDisplay: '',
                        lBracket: '<',
                        rBracket: '>'
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: '{u, v}',
                    description: 'create an undirected edge (set) with two vertices',
                    exprProps: {
                        op: '-e-',
                        opDisplay: '--',
                        infix: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'endpoints(e)',
                    description: 'the set of endpoints of an edge',
                    exprProps: {
                        op: 'endpoints',
                        opDisplay: 'endpoints',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: 'incident?(e, v)',
                    description: 'if v is an endpoint of e',
                    exprProps: {
                        op: 'incident?',
                        opDisplay: 'incident?',
                        noParentheses: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'N(G, v)',
                    description: 'the set of neighbors of a vertex in a graph',
                    exprProps: {
                        op: 'neighbors',
                        opDisplay: 'N',
                        noParentheses: true
                    },
                    exprType: 'BinaryOpExpr'
                },
                {
                    display: 'v(e)',
                    description: 'one endpoint of an edge',
                    exprProps: {
                        op: 'e-u',
                        opDisplay: 'u',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                },
                {
                    display: 'v&#39;(e)',
                    description: 'the other endpoint of an edge, different from v(e)',
                    exprProps: {
                        op: 'e-v',
                        opDisplay: 'v&#39;',
                        noParentheses: true
                    },
                    exprType: 'UnaryOpExpr'
                }
            ]
        }
    ];

export { EXPR_INFO };