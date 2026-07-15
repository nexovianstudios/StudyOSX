export interface CheatSheet {
  id: string;
  subject:
    | "Mathematics"
    | "Science"
    | "Social Science"
    | "English"
    | "Malayalam"
    | "Hindi";
  chapter: string;
  formulas: string[];
  shortcuts: string[];
  tricks: string[];
  faqs: {
    q: string;
    a: string;
  }[];
  tips: string[];
}

export const CHEAT_SHEETS: CheatSheet[] = [
   {
    id: "math-real-numbers",
    subject: "Mathematics",
    chapter: "Real Numbers",
    formulas: [
      "Fundamental Theorem of Arithmetic: Every composite number has a unique prime factorisation (except order).",
      "HCF = Product of common prime factors with least powers.",
      "LCM = Product of all prime factors with greatest powers.",
      "For two positive integers: HCF × LCM = Product of the numbers.",
      "A rational number p/q (lowest form) terminates iff q = 2^m × 5^n.",
      "If the denominator contains primes other than 2 or 5, the decimal expansion is non-terminating recurring."
    ],
    shortcuts: [
      "Reduce the fraction before checking its decimal expansion.",
      "Use prime factorisation to find HCF and LCM.",
      "Use least powers for HCF and greatest powers for LCM.",
      "Check only the simplified denominator for decimal questions.",
      "Verify HCF × LCM = Product after solving."
    ],
    tricks: [
      "Only 2 and/or 5 → Terminating decimal.",
      "Any other prime factor → Recurring decimal.",
      "Prime numbers have exactly two factors.",
      "Never use an unsimplified denominator for decimal questions.",
      "Don't forget repeated prime factors while factorising."
    ],
    faqs: [
      {
        q: "Should the fraction be simplified first?",
        a: "Yes, always simplify before checking the decimal expansion."
      },
      {
        q: "When is a decimal terminating?",
        a: "When the simplified denominator has only 2 and/or 5 as prime factors."
      },
      {
        q: "Is prime factorisation unique?",
        a: "Yes, except for the order of the prime factors."
      },
      {
        q: "Can HCF be greater than either number?",
        a: "No, it cannot."
      }
    ],
    tips: [
      "Memorise the Fundamental Theorem of Arithmetic.",
      "Show complete prime factorisation in board exams.",
      "Simplify fractions before checking decimal nature.",
      "Double-check HCF and LCM calculations.",
      "Solve NCERT examples and exercises thoroughly."
    ]
  },
  {
  id: "math-polynomials",
  subject: "Mathematics",
  chapter: "Polynomials",
  formulas: [
    "Sum of zeroes = -b/a (for ax² + bx + c).",
    "Product of zeroes = c/a (for ax² + bx + c).",
    "Dividend = Divisor × Quotient + Remainder.",
    "Remainder Theorem: Remainder when p(x) is divided by (x − a) is p(a).",
    "Factor Theorem: (x − a) is a factor iff p(a)=0.",
    "Linear polynomial has one zero.",
    "Quadratic polynomial has at most two zeroes."
  ],
  shortcuts: [
    "Use p(a)=0 to test factors quickly.",
    "Write polynomials in descending powers.",
    "Use coefficient relations to verify zeroes.",
    "Zeroes are the x-intercepts of the graph.",
    "Use the Remainder Theorem instead of long division when possible."
  ],
  tricks: [
    "If remainder is 0, the divisor is a factor.",
    "Number of x-axis intersections equals the number of real zeroes.",
    "Degree = highest power of x.",
    "A constant non-zero polynomial has no zeroes.",
    "Always substitute carefully while evaluating p(a)."
  ],
  faqs: [
    {
      q: "What is a zero of a polynomial?",
      a: "A value of x that makes p(x)=0."
    },
    {
      q: "How do you check whether (x−a) is a factor?",
      a: "Substitute x=a. If p(a)=0, it is a factor."
    },
    {
      q: "What does the Remainder Theorem state?",
      a: "The remainder obtained on dividing p(x) by (x−a) is p(a)."
    },
    {
      q: "Can a quadratic polynomial have three zeroes?",
      a: "No. It can have at most two."
    }
  ],
  tips: [
    "State the theorem before applying it.",
    "Show substitutions clearly.",
    "Avoid sign errors while finding zeroes.",
    "Label graphs neatly.",
    "Practice NCERT graph-based questions."
  ]
},
{
  id: "math-pair-linear-equations",
  subject: "Mathematics",
  chapter: "Pair of Linear Equations in Two Variables",
  formulas: [
    "General form: a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0.",
    "Unique solution: a₁/a₂ ≠ b₁/b₂.",
    "No solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "Infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "Cross multiplication: x/(b₁c₂−b₂c₁) = y/(c₁a₂−c₂a₁) = (a₁b₂−a₂b₁)."
  ],
  shortcuts: [
    "Compare coefficient ratios first to identify the type of solution.",
    "Use elimination when coefficients are easy to match.",
    "Use substitution when one variable has coefficient 1.",
    "Cross multiplication is useful for direct solving.",
    "Always verify the obtained solution in both equations."
  ],
  tricks: [
    "Intersecting lines → one solution.",
    "Parallel lines → no solution.",
    "Coincident lines → infinitely many solutions.",
    "Multiply equations to make one variable cancel quickly.",
    "Write equations in standard form before solving."
  ],
  faqs: [
    {
      q: "When does a pair of equations have one solution?",
      a: "When a₁/a₂ ≠ b₁/b₂."
    },
    {
      q: "What do parallel lines represent?",
      a: "No solution."
    },
    {
      q: "What do coincident lines represent?",
      a: "Infinitely many solutions."
    },
    {
      q: "Which methods are used to solve linear equations?",
      a: "Graphical, substitution, elimination and cross multiplication."
    }
  ],
  tips: [
    "Choose the easiest solving method.",
    "Write every algebraic step clearly.",
    "Avoid sign mistakes during elimination.",
    "Check the final answer by substitution.",
    "Practice NCERT word problems carefully."
  ]
},
{
  id: "math-quadratic-equations",
  subject: "Mathematics",
  chapter: "Quadratic Equations",
  formulas: [
    "Standard form: ax² + bx + c = 0, where a ≠ 0.",
    "Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a.",
    "Discriminant: D = b² - 4ac.",
    "If D > 0 → two distinct real roots.",
    "If D = 0 → two equal real roots.",
    "If D < 0 → no real roots."
  ],
  shortcuts: [
    "Simplify the equation before applying the quadratic formula.",
    "Check if the equation can be factorised first.",
    "Calculate the discriminant before solving.",
    "Use the square root method when x² = k.",
    "Verify roots by substitution."
  ],
  tricks: [
    "D tells the nature of roots instantly.",
    "Perfect square trinomials are easy to factorise.",
    "Factorisation is usually faster than the quadratic formula.",
    "Always write the equation in standard form first.",
    "Don't forget ± while taking square roots."
  ],
  faqs: [
    {
      q: "What is a quadratic equation?",
      a: "An equation of degree 2 in one variable."
    },
    {
      q: "What is the discriminant?",
      a: "The value b² - 4ac used to determine the nature of roots."
    },
    {
      q: "When are the roots equal?",
      a: "When the discriminant is zero."
    },
    {
      q: "Can a quadratic equation have no real roots?",
      a: "Yes, when the discriminant is negative."
    }
  ],
  tips: [
    "Write the equation in standard form before solving.",
    "Show discriminant calculation clearly.",
    "Use factorisation whenever possible.",
    "Avoid sign errors while substituting values.",
    "Practice all three solving methods from NCERT."
  ]
},
{
  id: "math-arithmetic-progressions",
  subject: "Mathematics",
  chapter: "Arithmetic Progressions",
  formulas: [
    "nth term: aₙ = a + (n − 1)d.",
    "Sum of first n terms: Sₙ = n/2 [2a + (n − 1)d].",
    "Alternative sum formula: Sₙ = n/2 (first term + last term).",
    "Common difference: d = aₙ₊₁ − aₙ.",
    "Last term: l = a + (n − 1)d."
  ],
  shortcuts: [
    "Find the common difference first.",
    "Use the nth term formula to find any term quickly.",
    "Use the second sum formula if the last term is given.",
    "Check whether d is constant before treating a sequence as an AP.",
    "Write the first few terms if the sequence is given in a formula."
  ],
  tricks: [
    "Positive d → increasing AP.",
    "Negative d → decreasing AP.",
    "If d = 0, all terms are equal.",
    "For three consecutive AP terms, write them as a−d, a, a+d.",
    "Always identify a and d before solving."
  ],
  faqs: [
    {
      q: "What is an Arithmetic Progression?",
      a: "A sequence in which the difference between consecutive terms is constant."
    },
    {
      q: "What is the common difference?",
      a: "The difference between two consecutive terms."
    },
    {
      q: "How do you find the nth term?",
      a: "Use aₙ = a + (n − 1)d."
    },
    {
      q: "Which formula is used to find the sum of n terms?",
      a: "Sₙ = n/2 [2a + (n − 1)d]."
    }
  ],
  tips: [
    "Write the values of a, d and n before substituting.",
    "Use brackets carefully while calculating.",
    "Check signs when d is negative.",
    "Verify the final answer with the given sequence.",
    "Practice NCERT word problems thoroughly."
  ]
},
{
  id: "math-triangles",
  subject: "Mathematics",
  chapter: "Triangles",
  formulas: [
    "Basic Proportionality Theorem (BPT): If a line is parallel to one side of a triangle, it divides the other two sides proportionally.",
    "Converse of BPT: If a line divides two sides proportionally, it is parallel to the third side.",
    "Ratio of areas of similar triangles = Square of the ratio of corresponding sides.",
    "Corresponding sides of similar triangles are proportional.",
    "Corresponding angles of similar triangles are equal.",
    "Pythagoras Theorem: c² = a² + b².",
    "Converse of Pythagoras Theorem: If c² = a² + b², the triangle is right-angled."
  ],
  shortcuts: [
    "Check angle equality first to prove similarity.",
    "Use AA similarity whenever possible.",
    "Write corresponding vertices in the same order.",
    "Use side ratios to verify similarity.",
    "Remember common Pythagorean triples like (3,4,5) and (5,12,13)."
  ],
  tricks: [
    "Equal angles usually indicate similar triangles.",
    "Similar triangles have equal shape, not necessarily equal size.",
    "Area ratio = (side ratio)².",
    "Don't confuse congruent triangles with similar triangles.",
    "Always match corresponding sides correctly."
  ],
  faqs: [
    {
      q: "What is the Basic Proportionality Theorem?",
      a: "A line parallel to one side of a triangle divides the other two sides in the same ratio."
    },
    {
      q: "How can two triangles be proved similar?",
      a: "Using AA, SAS or SSS similarity criteria."
    },
    {
      q: "When is the Pythagoras Theorem applicable?",
      a: "Only for right-angled triangles."
    },
    {
      q: "What is the ratio of areas of similar triangles?",
      a: "It is the square of the ratio of corresponding sides."
    }
  ],
  tips: [
    "Draw neat diagrams wherever required.",
    "State the theorem before using it.",
    "Maintain correct correspondence while writing ratios.",
    "Show every algebraic step clearly.",
    "Practice NCERT proof-based questions."
  ]
},
{
  id: "math-coordinate-geometry",
  subject: "Mathematics",
  chapter: "Coordinate Geometry",
  formulas: [
    "Distance Formula: d = √[(x₂ − x₁)² + (y₂ − y₁)²].",
    "Section Formula (Internal): ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n)).",
    "Midpoint Formula: ((x₁ + x₂)/2, (y₁ + y₂)/2).",
    "A point dividing a line internally is found using the section formula.",
    "Equal ratio (1:1) gives the midpoint."
  ],
  shortcuts: [
    "Use the midpoint formula when the ratio is 1:1.",
    "Subtract coordinates carefully while using the distance formula.",
    "Write coordinates in the correct order.",
    "Square first, then add, then take the square root.",
    "Use the section formula only after identifying m:n correctly."
  ],
  tricks: [
    "Distance is always non-negative.",
    "Midpoint is simply the average of the coordinates.",
    "Interchanging points gives the same distance.",
    "Keep brackets while subtracting negative coordinates.",
    "Check units if mentioned in word problems."
  ],
  faqs: [
    {
      q: "When is the midpoint formula used?",
      a: "To find the point exactly halfway between two given points."
    },
    {
      q: "Can distance between two points be negative?",
      a: "No, distance is always positive or zero."
    },
    {
      q: "What is the section formula used for?",
      a: "To find the coordinates of a point dividing a line segment in a given ratio."
    },
    {
      q: "What ratio gives the midpoint?",
      a: "1:1."
    }
  ],
  tips: [
    "Write coordinates neatly before substituting.",
    "Avoid sign errors while subtracting negative numbers.",
    "Show complete calculation for board marks.",
    "Memorise all three formulas.",
    "Practice NCERT numerical problems."
  ]
},
{
  id: "math-introduction-to-trigonometry",
  subject: "Mathematics",
  chapter: "Introduction to Trigonometry",
  formulas: [
    "sinθ = Perpendicular / Hypotenuse.",
    "cosθ = Base / Hypotenuse.",
    "tanθ = Perpendicular / Base.",
    "cotθ = Base / Perpendicular.",
    "secθ = Hypotenuse / Base.",
    "cosecθ = Hypotenuse / Perpendicular.",
    "sin²θ + cos²θ = 1.",
    "1 + tan²θ = sec²θ.",
    "1 + cot²θ = cosec²θ."
  ],
  shortcuts: [
    "Memorise the standard values for 0°, 30°, 45°, 60° and 90°.",
    "Remember SOH-CAH-TOA for sin, cos and tan.",
    "Use reciprocal identities to find sec, cosec and cot.",
    "Simplify expressions using identities before substituting values.",
    "Draw a right triangle whenever possible."
  ],
  tricks: [
    "sin(90° − θ) = cosθ.",
    "cos(90° − θ) = sinθ.",
    "tan(90° − θ) = cotθ.",
    "If one ratio is known, find others using identities.",
    "Trigonometric ratios are defined only for right-angled triangles in this chapter."
  ],
  faqs: [
    {
      q: "What is trigonometry?",
      a: "It is the study of relationships between the sides and angles of a right triangle."
    },
    {
      q: "What does SOH-CAH-TOA mean?",
      a: "SOH: sin = Perpendicular/Hypotenuse, CAH: cos = Base/Hypotenuse, TOA: tan = Perpendicular/Base."
    },
    {
      q: "Which identity is used most often?",
      a: "sin²θ + cos²θ = 1."
    },
    {
      q: "Can trigonometric ratios be used for any triangle?",
      a: "In Class 10, they are defined only for right-angled triangles."
    }
  ],
  tips: [
    "Memorise all standard trigonometric values.",
    "Write identities correctly before using them.",
    "Avoid confusing perpendicular and base.",
    "Use identities to simplify expressions step by step.",
    "Practice NCERT identity-based questions regularly."
  ]
},
{
  id: "math-applications-of-trigonometry",
  subject: "Mathematics",
  chapter: "Some Applications of Trigonometry",
  formulas: [
    "tanθ = Height / Distance.",
    "Height = Distance × tanθ.",
    "Distance = Height / tanθ.",
    "Angle of Elevation: Angle between the horizontal and the line of sight above the observer.",
    "Angle of Depression: Angle between the horizontal and the line of sight below the observer."
  ],
  shortcuts: [
    "Draw a labelled diagram before solving.",
    "Use tanθ for most Class 10 application problems.",
    "Identify whether the angle is elevation or depression.",
    "Keep units the same throughout the calculation.",
    "Use standard trigonometric values whenever possible."
  ],
  tricks: [
    "Angle of elevation is always measured upward.",
    "Angle of depression is always measured downward.",
    "The angle of elevation from one point equals the angle of depression from the other (alternate interior angles).",
    "Height is usually the perpendicular side.",
    "Distance along the ground is usually the base."
  ],
  faqs: [
    {
      q: "What is the angle of elevation?",
      a: "The angle between the horizontal and the line of sight when looking upward."
    },
    {
      q: "What is the angle of depression?",
      a: "The angle between the horizontal and the line of sight when looking downward."
    },
    {
      q: "Which trigonometric ratio is used most often?",
      a: "tanθ."
    },
    {
      q: "Why should a diagram be drawn?",
      a: "It helps identify the correct sides and angle before applying formulas."
    }
  ],
  tips: [
    "Always draw a neat right-angled triangle.",
    "Write the given values before solving.",
    "Mention the trigonometric ratio used.",
    "Check the final answer with correct units.",
    "Practice NCERT height and distance problems."
  ]
},{
  id: "math-circles",
  subject: "Mathematics",
  chapter: "Circles",
  formulas: [
    "The tangent at any point of a circle is perpendicular to the radius through the point of contact.",
    "Lengths of tangents drawn from an external point to a circle are equal.",
    "A tangent touches a circle at exactly one point.",
    "A radius drawn to the point of contact is always perpendicular to the tangent."
  ],
  shortcuts: [
    "Join the centre to the point of contact first.",
    "Use equal tangents from the same external point.",
    "Mark the 90° angle wherever a tangent meets the radius.",
    "Identify the point of contact before applying the theorem.",
    "Draw neat diagrams for proof questions."
  ],
  tricks: [
    "One point → Tangent, Two points → Secant.",
    "Radius ⟂ Tangent is the most important theorem.",
    "Tangents from one external point are always equal.",
    "The centre never lies on the tangent.",
    "Most board questions are proof-based."
  ],
  faqs: [
    {
      q: "How many tangents can be drawn from an external point?",
      a: "Exactly two."
    },
    {
      q: "Can a tangent intersect a circle at two points?",
      a: "No, it touches the circle at only one point."
    },
    {
      q: "What is the angle between a tangent and the radius at the point of contact?",
      a: "90°."
    },
    {
      q: "Are tangents from the same external point equal?",
      a: "Yes, their lengths are always equal."
    }
  ],
  tips: [
    "Always mention the theorem before using it.",
    "Draw the radius to the point of contact.",
    "Mark right angles clearly in diagrams.",
    "Write proof steps logically.",
    "Practice all NCERT theorem questions."
  ]
},
{
  id: "math-area-related-to-circles",
  subject: "Mathematics",
  chapter: "Area Related to Circles",
  formulas: [
    "Circumference = 2πr.",
    "Area of Circle = πr².",
    "Length of Arc = (θ/360) × 2πr.",
    "Area of Sector = (θ/360) × πr².",
    "Area of Segment = Area of Sector − Area of Triangle."
  ],
  shortcuts: [
    "Use π = 22/7 unless another value is given.",
    "Convert diameter to radius before applying formulas.",
    "Use θ/360 for every sector or arc problem.",
    "Keep all measurements in the same unit.",
    "Find the sector first, then subtract the triangle for segment questions."
  ],
  tricks: [
    "Full circle = 360°.",
    "Semicircle = 180°.",
    "Quarter circle = 90°.",
    "Arc length uses circumference; sector uses area.",
    "Always square the radius while finding area."
  ],
  faqs: [
    {
      q: "What is a sector?",
      a: "The region enclosed by two radii and the intercepted arc."
    },
    {
      q: "What is a segment?",
      a: "The region enclosed by a chord and its corresponding arc."
    },
    {
      q: "When do we subtract the triangle area?",
      a: "While finding the area of a segment."
    },
    {
      q: "Can π be taken as 3.14?",
      a: "Yes, if the question requires it or no value is specified."
    }
  ],
  tips: [
    "Write the correct formula before substitution.",
    "Draw a diagram whenever possible.",
    "Use the given angle carefully.",
    "Check units in the final answer.",
    "Practise mixed area questions from NCERT."
  ]
},
  {
  id: "math-surface-areas-and-volumes",
  subject: "Mathematics",
  chapter: "Surface Areas and Volumes",
  formulas: [
    "Cube: TSA = 6a², Volume = a³.",
    "Cuboid: TSA = 2(lb + bh + hl), Volume = lbh.",
    "Cylinder: CSA = 2πrh, TSA = 2πr(r+h), Volume = πr²h.",
    "Cone: l = √(r²+h²), CSA = πrl, TSA = πr(l+r), Volume = (1/3)πr²h.",
    "Sphere: Surface Area = 4πr², Volume = (4/3)πr³.",
    "Hemisphere: CSA = 2πr², TSA = 3πr², Volume = (2/3)πr³."
  ],
  shortcuts: [
    "Find slant height before solving cone questions.",
    "Use the same unit throughout the calculation.",
    "Convert diameter into radius first.",
    "Remember TSA = CSA + Base Area wherever applicable.",
    "Write formulas before substitution."
  ],
  tricks: [
    "CSA means curved surface only.",
    "TSA includes every exposed surface.",
    "Sphere has no curved and flat surface separately.",
    "Always cube the radius while finding volume.",
    "Square units for area, cubic units for volume."
  ],
  faqs: [
    {
      q: "What is the difference between CSA and TSA?",
      a: "CSA excludes the base(s), while TSA includes all surfaces."
    },
    {
      q: "What is slant height?",
      a: "The inclined height of a cone."
    },
    {
      q: "What are the units of volume?",
      a: "Cubic units."
    },
    {
      q: "What are the units of surface area?",
      a: "Square units."
    }
  ],
  tips: [
    "Draw the solid before solving.",
    "Use correct units in the final answer.",
    "Check whether CSA or TSA is asked.",
    "Practice conversion between litres and cubic centimetres.",
    "Memorise all standard formulas."
  ]
},
{
  id: "math-statistics",
  subject: "Mathematics",
  chapter: "Statistics",
  formulas: [
    "Mean = Σ(fi × xi) / Σfi.",
    "Median = l + [(N/2 − cf)/f] × h.",
    "Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h.",
    "Empirical Relation: Mode = 3Median − 2Mean."
  ],
  shortcuts: [
    "Arrange class intervals in ascending order.",
    "Find cumulative frequency before solving median.",
    "Locate the median class using N/2.",
    "Use class marks while finding the mean.",
    "Identify the modal class as the class with the highest frequency."
  ],
  tricks: [
    "Mean uses all observations.",
    "Median depends on cumulative frequency.",
    "Mode is the most frequent value.",
    "Always use class boundaries if required.",
    "Check calculations carefully while adding frequencies."
  ],
  faqs: [
    {
      q: "What is cumulative frequency?",
      a: "The running total of frequencies."
    },
    {
      q: "What is the modal class?",
      a: "The class interval with the highest frequency."
    },
    {
      q: "What is class mark?",
      a: "The midpoint of a class interval."
    },
    {
      q: "When is the empirical relation used?",
      a: "To find one measure when the other two are known."
    }
  ],
  tips: [
    "Prepare the frequency table neatly.",
    "Show cumulative frequency separately.",
    "Write the formula before substitution.",
    "Check the median class correctly.",
    "Practice grouped data questions from NCERT."
  ]
},
{
  id: "math-probability",
  subject: "Mathematics",
  chapter: "Probability",
  formulas: [
    "Probability = Number of favourable outcomes / Total number of outcomes.",
    "P(E) = n(E) / n(S).",
    "P(Not E) = 1 − P(E).",
    "0 ≤ P(E) ≤ 1.",
    "Probability of a sure event = 1.",
    "Probability of an impossible event = 0."
  ],
  shortcuts: [
    "Write the sample space first.",
    "Count favourable outcomes carefully.",
    "Simplify the probability to lowest terms.",
    "Use complement when easier: P(Not E) = 1 − P(E).",
    "Every outcome in the sample space should be equally likely."
  ],
  tricks: [
    "Probability can never be negative.",
    "Probability can never be greater than 1.",
    "Sure event → 1.",
    "Impossible event → 0.",
    "Probability of all outcomes together equals 1."
  ],
  faqs: [
    {
      q: "What is a sample space?",
      a: "The set of all possible outcomes of an experiment."
    },
    {
      q: "What is a favourable outcome?",
      a: "An outcome that satisfies the given event."
    },
    {
      q: "Can probability be greater than 1?",
      a: "No, it always lies between 0 and 1."
    },
    {
      q: "When are outcomes equally likely?",
      a: "When each outcome has the same chance of occurring."
    }
  ],
  tips: [
    "Always list the sample space neatly.",
    "Read the event carefully before counting outcomes.",
    "Reduce fractions to simplest form.",
    "Practice dice, coin and card questions.",
    "Verify that favourable outcomes are part of the sample space."
  ]
},
{
  id: "science-chemical-reactions-and-equations",
  subject: "Science",
  chapter: "Chemical Reactions and Equations",
  formulas: [
    "Combination: A + B → AB.",
    "Decomposition: AB → A + B.",
    "Displacement: A + BC → AC + B.",
    "Double Displacement: AB + CD → AD + CB.",
    "Oxidation = Addition of oxygen / Removal of hydrogen.",
    "Reduction = Removal of oxygen / Addition of hydrogen."
  ],
  shortcuts: [
    "Balance equations before solving.",
    "Remember state symbols (s), (l), (g), (aq).",
    "Identify oxidised and reduced substances separately.",
    "Observe colour change and gas evolution.",
    "Check conservation of atoms."
  ],
  tricks: [
    "Oxidation and reduction occur together in redox reactions.",
    "More reactive metals displace less reactive metals.",
    "Heat symbol (Δ) indicates decomposition by heating.",
    "Catalyst is written above the arrow.",
    "Balanced equation follows the law of conservation of mass."
  ],
  faqs: [
    { q: "What is a balanced equation?", a: "An equation with equal atoms on both sides." },
    { q: "What is oxidation?", a: "Addition of oxygen or removal of hydrogen." },
    { q: "What is reduction?", a: "Removal of oxygen or addition of hydrogen." },
    { q: "What is a catalyst?", a: "A substance that changes reaction speed without being consumed." }
  ],
  tips: [
    "Balance every equation stepwise.",
    "Memorise reaction types.",
    "Practice identifying redox reactions.",
    "Write state symbols correctly.",
    "Learn important NCERT reactions."
  ]
},
{
  id: "science-acids-bases-and-salts",
  subject: "Science",
  chapter: "Acids, Bases and Salts",
  formulas: [
    "Acid + Base → Salt + Water.",
    "pH = −log[H⁺].",
    "Strong acids have lower pH.",
    "Strong bases have higher pH.",
    "Neutral solution has pH = 7."
  ],
  shortcuts: [
    "Blue litmus → Red in acid.",
    "Red litmus → Blue in base.",
    "Universal indicator gives pH.",
    "Phenolphthalein: Colourless in acid, Pink in base.",
    "Methyl orange: Red in acid, Yellow in base."
  ],
  tricks: [
    "Lower pH means stronger acid.",
    "Higher pH means stronger base.",
    "Neutralisation always produces salt and water.",
    "Remember common salts and their formulas.",
    "Know uses of baking soda and bleaching powder."
  ],
  faqs: [
    { q: "What is pH?", a: "A measure of acidity or basicity." },
    { q: "What is neutralisation?", a: "Reaction between an acid and a base." },
    { q: "What is a universal indicator?", a: "An indicator showing different colours for different pH values." },
    { q: "What is baking soda?", a: "Sodium hydrogen carbonate (NaHCO₃)." }
  ],
  tips: [
    "Learn all indicators.",
    "Memorise important salt formulas.",
    "Practice pH questions.",
    "Know industrial uses of salts.",
    "Revise NCERT activities."
  ]
},
{
  id: "science-metals-and-non-metals",
  subject: "Science",
  chapter: "Metals and Non-Metals",
  formulas: [
    "Metal + Oxygen → Metal Oxide.",
    "Metal + Acid → Salt + Hydrogen.",
    "Metal + Water → Metal Hydroxide + Hydrogen.",
    "More reactive metal displaces less reactive metal."
  ],
  shortcuts: [
    "Learn the reactivity series.",
    "Remember amphoteric oxides.",
    "Use displacement rule for reactions.",
    "Metals lose electrons.",
    "Non-metals gain electrons."
  ],
  tricks: [
    "Potassium and sodium react vigorously with water.",
    "Copper does not react with dilute HCl.",
    "Aluminium oxide is amphoteric.",
    "Corrosion can be prevented by painting or galvanising.",
    "Extraction depends on reactivity."
  ],
  faqs: [
    { q: "What is corrosion?", a: "Slow destruction of metals due to chemical reactions." },
    { q: "What is galvanisation?", a: "Coating iron with zinc to prevent rusting." },
    { q: "What is an amphoteric oxide?", a: "An oxide reacting with both acids and bases." },
    { q: "Why are metals good conductors?", a: "Because of free electrons." }
  ],
  tips: [
    "Memorise the reactivity series.",
    "Learn extraction methods.",
    "Know important alloys.",
    "Practice displacement reactions.",
    "Revise corrosion prevention methods."
  ]
},
{
  id: "science-carbon-and-its-compounds",
  subject: "Science",
  chapter: "Carbon and Its Compounds",
  formulas: [
    "Alkane: CₙH₂ₙ₊₂.",
    "Alkene: CₙH₂ₙ.",
    "Alkyne: CₙH₂ₙ₋₂.",
    "Ethanol: C₂H₅OH.",
    "Ethanoic Acid: CH₃COOH."
  ],
  shortcuts: [
    "Longest chain gets priority in IUPAC naming.",
    "Remember common functional groups.",
    "Count carbon atoms carefully.",
    "Lowest locant rule applies.",
    "Learn homologous series."
  ],
  tricks: [
    "Carbon is tetravalent.",
    "Catenation is a unique property of carbon.",
    "Soap forms micelles.",
    "Unsaturated compounds undergo addition reactions.",
    "Saturated compounds undergo substitution reactions."
  ],
  faqs: [
    { q: "What is catenation?", a: "Ability of carbon to form long chains." },
    { q: "What is a homologous series?", a: "Compounds with similar properties differing by CH₂." },
    { q: "Why does carbon form many compounds?", a: "Due to tetravalency and catenation." },
    { q: "What is ethanol?", a: "A commonly used alcohol." }
  ],
  tips: [
    "Practise IUPAC nomenclature.",
    "Memorise functional groups.",
    "Learn soap and detergent differences.",
    "Know important reactions.",
    "Revise NCERT examples."
  ]
},
{
  id: "science-life-processes",
  subject: "Science",
  chapter: "Life Processes",
  formulas: [
    "Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.",
    "Aerobic Respiration: Glucose + O₂ → CO₂ + H₂O + Energy.",
    "Anaerobic Respiration: Glucose → Alcohol/Lactic Acid + Energy."
  ],
  shortcuts: [
    "Remember nutrition, respiration, transport and excretion.",
    "Plants transport through xylem and phloem.",
    "Blood carries oxygen using haemoglobin.",
    "Nephrons filter blood.",
    "Stomata control gas exchange."
  ],
  tricks: [
    "Photosynthesis occurs in chloroplasts.",
    "Respiration occurs in mitochondria.",
    "Arteries carry blood away from the heart.",
    "Veins carry blood towards the heart.",
    "Kidneys remove nitrogenous wastes."
  ],
  faqs: [
    { q: "Where does photosynthesis occur?", a: "In chloroplasts." },
    { q: "What is the function of xylem?", a: "Transport of water and minerals." },
    { q: "What is the function of phloem?", a: "Transport of food." },
    { q: "What is the functional unit of the kidney?", a: "Nephron." }
  ],
  tips: [
    "Practise labelled diagrams.",
    "Memorise all life processes.",
    "Know differences between arteries and veins.",
    "Revise digestive enzymes.",
    "Practise NCERT diagrams."
  ]
},
{
  id: "science-control-and-coordination",
  subject: "Science",
  chapter: "Control and Coordination",
  formulas: [
    "Neuron = Dendrite + Cell Body + Axon.",
    "Reflex Action → Spinal Cord Response.",
    "Plant hormones regulate growth.",
    "Endocrine glands secrete hormones.",
    "Nervous system controls rapid responses."
  ],
  shortcuts: [
    "Brain → Thinking.",
    "Spinal cord → Reflex actions.",
    "Auxin → Growth.",
    "Insulin → Blood sugar.",
    "Adrenaline → Emergency hormone."
  ],
  tricks: [
    "Reflex actions are involuntary.",
    "Hormones act slower than nerves.",
    "Pituitary is the master gland.",
    "Phototropism is growth towards light.",
    "Geotropism is growth due to gravity."
  ],
  faqs: [
    { q: "What controls reflex action?", a: "The spinal cord." },
    { q: "Which hormone controls blood sugar?", a: "Insulin." },
    { q: "Which gland is called the master gland?", a: "Pituitary gland." },
    { q: "What is phototropism?", a: "Growth of plants towards light." }
  ],
  tips: [
    "Practice labelled diagrams of neuron and brain.",
    "Learn plant hormones.",
    "Know endocrine glands.",
    "Revise tropic movements.",
    "Differentiate hormones and nerves."
  ]
},

{
  id: "science-how-do-organisms-reproduce",
  subject: "Science",
  chapter: "How do Organisms Reproduce?",
  formulas: [
    "Asexual reproduction involves one parent.",
    "Sexual reproduction involves two parents.",
    "DNA copies during reproduction.",
    "Fertilisation forms a zygote.",
    "Pollination precedes fertilisation in flowering plants."
  ],
  shortcuts: [
    "Binary fission → Amoeba.",
    "Budding → Yeast.",
    "Spore formation → Rhizopus.",
    "Vegetative propagation → Potato, Bryophyllum.",
    "Pollination → Fertilisation → Seed."
  ],
  tricks: [
    "Variation occurs mainly in sexual reproduction.",
    "Pollen reaches stigma during pollination.",
    "Ovule becomes seed.",
    "Ovary becomes fruit.",
    "DNA carries hereditary information."
  ],
  faqs: [
    { q: "What is binary fission?", a: "One cell divides into two identical cells." },
    { q: "What is fertilisation?", a: "Fusion of male and female gametes." },
    { q: "Why is variation important?", a: "It helps organisms adapt and survive." },
    { q: "What becomes the fruit?", a: "The ovary." }
  ],
  tips: [
    "Practice reproductive system diagrams.",
    "Learn plant reproduction.",
    "Know reproductive methods.",
    "Revise NCERT activities.",
    "Understand heredity basics."
  ]
},

{
  id: "science-heredity",
  subject: "Science",
  chapter: "Heredity",
  formulas: [
    "Genes are units of heredity.",
    "Traits are inherited through genes.",
    "Dominant traits mask recessive traits.",
    "Variation arises during reproduction.",
    "Sex determination in humans: XX (female), XY (male)."
  ],
  shortcuts: [
    "Father decides child's sex.",
    "Dominant allele → Capital letter.",
    "Recessive allele → Small letter.",
    "Use Punnett square for crosses.",
    "Genes are present on chromosomes."
  ],
  tricks: [
    "Inherited traits pass to offspring.",
    "Acquired traits are not inherited.",
    "Mendel is the Father of Genetics.",
    "Variation helps evolution.",
    "Chromosomes carry genes."
  ],
  faqs: [
    { q: "Who discovered the laws of inheritance?", a: "Gregor Mendel." },
    { q: "What is a gene?", a: "A unit of heredity." },
    { q: "Are acquired traits inherited?", a: "No." },
    { q: "Who determines the sex of a child?", a: "The father." }
  ],
  tips: [
    "Practice Punnett squares.",
    "Learn Mendel's experiments.",
    "Understand dominant and recessive traits.",
    "Revise chromosome concepts.",
    "Know examples of inherited traits."
  ]
},

{
  id: "science-light-reflection-and-refraction",
  subject: "Science",
  chapter: "Light - Reflection and Refraction",
  formulas: [
    "Mirror Formula: 1/f = 1/v + 1/u.",
    "Lens Formula: 1/f = 1/v − 1/u.",
    "Magnification (Mirror): m = -v/u.",
    "Magnification (Lens): m = v/u.",
    "Refractive Index = sin i / sin r."
  ],
  shortcuts: [
    "Convex mirror → Always virtual.",
    "Concave mirror → Can form real or virtual image.",
    "Convex lens → Can form real or virtual image.",
    "Concave lens → Always virtual.",
    "Follow sign convention carefully."
  ],
  tricks: [
    "Remember New Cartesian sign convention.",
    "Focal length of plane mirror is infinite.",
    "Convex mirror always gives diminished image.",
    "Refraction bends light at boundary.",
    "Practice ray diagrams."
  ],
  faqs: [
    { q: "What is refraction?", a: "Bending of light when it enters another medium." },
    { q: "Which mirror is used in vehicles?", a: "Convex mirror." },
    { q: "Which lens corrects myopia?", a: "Concave lens." },
    { q: "What is magnification?", a: "Ratio of image height to object height." }
  ],
  tips: [
    "Practice numerical problems.",
    "Draw ray diagrams neatly.",
    "Learn sign convention.",
    "Memorise formulas.",
    "Revise image formation cases."
  ]
},

{
  id: "science-human-eye-and-colourful-world",
  subject: "Science",
  chapter: "The Human Eye and the Colourful World",
  formulas: [
    "Power of Lens (P) = 1/f (metre).",
    "Power Unit = Dioptre (D).",
    "Myopia → Concave lens.",
    "Hypermetropia → Convex lens.",
    "Presbyopia occurs due to ageing."
  ],
  shortcuts: [
    "Blue light scatters most.",
    "Sky appears blue due to scattering.",
    "Sun appears reddish during sunrise and sunset.",
    "Near point = 25 cm.",
    "Far point = Infinity."
  ],
  tricks: [
    "Ciliary muscles adjust focal length.",
    "Retina forms the image.",
    "Persistence of vision ≈ 1/16 s.",
    "Rainbow forms due to dispersion.",
    "Atmospheric refraction causes twinkling."
  ],
  faqs: [
    { q: "Why is the sky blue?", a: "Due to Rayleigh scattering." },
    { q: "Which lens corrects hypermetropia?", a: "Convex lens." },
    { q: "What is the SI unit of power?", a: "Dioptre." },
    { q: "Why do stars twinkle?", a: "Atmospheric refraction." }
  ],
  tips: [
    "Practice eye defect diagrams.",
    "Learn scattering concepts.",
    "Memorise lens corrections.",
    "Revise atmospheric refraction.",
    "Practice NCERT numericals."
  ]
},{
  id: "science-electricity",
  subject: "Science",
  chapter: "Electricity",
  formulas: [
    "Current: I = Q/t",
    "Ohm's Law: V = IR",
    "Resistance: R = ρL/A",
    "Power: P = VI",
    "Power: P = I²R",
    "Power: P = V²/R",
    "Electrical Energy: E = Pt",
    "Commercial Unit: 1 kWh = 3.6 × 10⁶ J"
  ],
  shortcuts: [
    "Ammeter is connected in series.",
    "Voltmeter is connected in parallel.",
    "Series → Current same, Voltage divides.",
    "Parallel → Voltage same, Current divides.",
    "Copper has low resistance and is a good conductor."
  ],
  tricks: [
    "Higher resistance means lower current.",
    "Thicker wire has lower resistance.",
    "Longer wire has higher resistance.",
    "Remember: Series adds resistance, Parallel reduces resistance.",
    "Always convert time into seconds while using SI units."
  ],
  faqs: [
    {
      q: "What is one commercial unit of electricity?",
      a: "1 kilowatt-hour (kWh)."
    },
    {
      q: "Why is tungsten used in bulbs?",
      a: "It has a very high melting point."
    },
    {
      q: "Why is fuse wire thin?",
      a: "It melts quickly due to heating effect."
    },
    {
      q: "Which connection is used in homes?",
      a: "Parallel connection."
    }
  ],
  tips: [
    "Memorise all power formulas.",
    "Draw circuit diagrams neatly.",
    "Know the difference between series and parallel circuits.",
    "Always write SI units.",
    "Practise numerical problems from NCERT."
  ]
},

{
  id: "science-magnetic-effects",
  subject: "Science",
  chapter: "Magnetic Effects of Electric Current",
  formulas: [
    "Force on conductor: F = BIL sinθ",
    "Magnetic field around straight conductor: B ∝ I/r",
    "Force increases with current.",
    "Force increases with magnetic field strength.",
    "Electromagnetic induction occurs due to changing magnetic field."
  ],
  shortcuts: [
    "Right-Hand Thumb Rule → Direction of magnetic field.",
    "Fleming's Left-Hand Rule → Motor.",
    "Fleming's Right-Hand Rule → Generator.",
    "Motor converts electrical energy into mechanical energy.",
    "Generator converts mechanical energy into electrical energy."
  ],
  tricks: [
    "Thumb = Current, Fingers = Magnetic Field.",
    "Left hand = Motor.",
    "Right hand = Generator.",
    "AC changes direction periodically.",
    "DC flows only in one direction."
  ],
  faqs: [
    {
      q: "Who discovered electromagnetic induction?",
      a: "Michael Faraday."
    },
    {
      q: "What is an electromagnet?",
      a: "A temporary magnet produced by electric current."
    },
    {
      q: "Which device converts electrical energy into mechanical energy?",
      a: "Electric motor."
    },
    {
      q: "Which current is supplied to homes?",
      a: "Alternating Current (AC)."
    }
  ],
  tips: [
    "Learn all hand rules.",
    "Practice motor and generator diagrams.",
    "Know differences between AC and DC.",
    "Revise domestic electric circuit.",
    "Label diagrams properly."
  ]
},

{
  id: "science-our-environment",
  subject: "Science",
  chapter: "Our Environment",
  formulas: [
    "Food Chain: Producer → Consumer → Decomposer",
    "Energy transferred ≈ 10% to next trophic level.",
    "Ozone (O₃) protects Earth from UV radiation.",
    "Biodegradable waste decomposes naturally.",
    "Non-biodegradable waste persists for years."
  ],
  shortcuts: [
    "Sun is the ultimate source of energy.",
    "Food web is a network of food chains.",
    "Biomagnification increases toxin concentration upward.",
    "Reduce, Reuse, Recycle.",
    "Decomposers recycle nutrients."
  ],
  tricks: [
    "Only about 10% energy passes to the next trophic level.",
    "Plastic causes non-biodegradable pollution.",
    "Ozone is beneficial high in atmosphere.",
    "Food chains rarely exceed 4–5 trophic levels.",
    "Remember the 3Rs for waste management."
  ],
  faqs: [
    {
      q: "What is biomagnification?",
      a: "Increase in concentration of harmful chemicals along a food chain."
    },
    {
      q: "Who are decomposers?",
      a: "Bacteria and fungi."
    },
    {
      q: "Why are plastics harmful?",
      a: "They are non-biodegradable."
    },
    {
      q: "What is the role of ozone?",
      a: "It protects living organisms from harmful UV rays."
    }
  ],
  tips: [
    "Draw food chains correctly.",
    "Differentiate biodegradable and non-biodegradable waste.",
    "Revise ozone layer importance.",
    "Remember the 10% law.",
    "Practise competency-based environmental questions."
  ]
},
{
  id: "history-rise-nationalism-europe",
  subject: "Social Science",
  chapter: "The Rise of Nationalism in Europe",
  formulas: [
    "French Revolution (1789) spread ideas of liberty, equality and fraternity.",
    "Napoleon introduced the Civil Code (1804).",
    "Congress of Vienna (1815) restored conservative rule.",
    "Unification of Germany completed in 1871.",
    "Unification of Italy completed in 1870.",
    "Nationalism became a powerful force in 19th century Europe."
  ],
  shortcuts: [
    "1789 → French Revolution",
    "1815 → Congress of Vienna",
    "1834 → Zollverein",
    "1848 → Revolutions in Europe",
    "1871 → German Unification"
  ],
  tricks: [
    "Remember: France inspired nationalism across Europe.",
    "Zollverein = Economic unity before political unity.",
    "Bismarck united Germany through 'Blood and Iron'.",
    "Mazzini inspired Italian nationalism.",
    "Vienna Settlement aimed to suppress nationalism."
  ],
  faqs: [
    {
      q: "Who unified Germany?",
      a: "Otto von Bismarck."
    },
    {
      q: "Who introduced the Civil Code?",
      a: "Napoleon Bonaparte."
    },
    {
      q: "What was Zollverein?",
      a: "A customs union of German states."
    },
    {
      q: "Who was Giuseppe Mazzini?",
      a: "An Italian revolutionary who promoted nationalism."
    }
  ],
  tips: [
    "Memorise important years.",
    "Know leaders of Germany and Italy.",
    "Practice map work.",
    "Revise French Revolution's impact.",
    "Prepare timeline questions."
  ]
},

{
  id: "history-nationalism-india",
  subject: "Social Science",
  chapter: "Nationalism in India",
  formulas: [
    "Rowlatt Act (1919).",
    "Jallianwala Bagh Massacre (1919).",
    "Non-Cooperation Movement (1920).",
    "Civil Disobedience Movement (1930).",
    "Dandi March began on 12 March 1930.",
    "Quit India Movement (1942)."
  ],
  shortcuts: [
    "1919 → Rowlatt Act",
    "1920 → Non-Cooperation",
    "1930 → Dandi March",
    "1931 → Gandhi-Irwin Pact",
    "1942 → Quit India"
  ],
  tricks: [
    "Remember the sequence: Rowlatt → NCM → CDM → Quit India.",
    "Salt became the symbol of protest.",
    "Swaraj means self-rule.",
    "Gandhi promoted non-violence.",
    "Timeline questions are common."
  ],
  faqs: [
    {
      q: "Who led the Dandi March?",
      a: "Mahatma Gandhi."
    },
    {
      q: "What was the Rowlatt Act?",
      a: "A law allowing detention without trial."
    },
    {
      q: "Where did the Jallianwala Bagh Massacre occur?",
      a: "Amritsar."
    },
    {
      q: "When was the Quit India Movement launched?",
      a: "1942."
    }
  ],
  tips: [
    "Learn important dates.",
    "Practice map-based questions.",
    "Know causes and outcomes of each movement.",
    "Revise Gandhi's role.",
    "Write events in chronological order."
  ]
},

{
  id: "history-making-global-world",
  subject: "Social Science",
  chapter: "The Making of a Global World",
  formulas: [
    "Globalisation means increasing integration of economies.",
    "Silk Routes connected Asia, Europe and Africa.",
    "The First World War began in 1914.",
    "The Great Depression started in 1929.",
    "Post-war trade expanded rapidly after 1945.",
    "Technology accelerated global connections."
  ],
  shortcuts: [
    "Silk Routes → Ancient trade.",
    "1914 → First World War.",
    "1929 → Great Depression.",
    "1945 → End of Second World War.",
    "Container transport boosted trade."
  ],
  tricks: [
    "Remember trade, migration and technology together.",
    "Depression reduced global trade.",
    "Indentured labour replaced slavery in many colonies.",
    "Colonialism shaped global markets.",
    "Globalisation is not a modern concept only."
  ],
  faqs: [
    {
      q: "What were the Silk Routes?",
      a: "Ancient trade routes connecting different regions."
    },
    {
      q: "When did the Great Depression begin?",
      a: "1929."
    },
    {
      q: "What is globalisation?",
      a: "Increasing integration of countries through trade, technology and communication."
    },
    {
      q: "Why did global trade increase after 1945?",
      a: "Improved transport, technology and international cooperation."
    }
  ],
  tips: [
    "Revise timeline carefully.",
    "Focus on causes of globalisation.",
    "Remember important economic events.",
    "Practice competency-based questions.",
    "Understand links between trade and technology."
  ]
},
{
  id: "history-age-industrialisation",
  subject: "Social Science",
  chapter: "The Age of Industrialisation",
  formulas: [
    "Industrial Revolution began in Britain during the 18th century.",
    "Factories replaced domestic production.",
    "Steam engine accelerated industrial growth.",
    "Industrialisation increased mass production.",
    "Machine production reduced manufacturing time.",
    "India became a supplier of raw materials under British rule."
  ],
  shortcuts: [
    "Britain → First Industrial Nation.",
    "Steam Engine → James Watt.",
    "Factories → Mass Production.",
    "Raw Materials → India.",
    "Industrialisation → Urbanisation."
  ],
  tricks: [
    "Remember Britain was the birthplace of the Industrial Revolution.",
    "Machines increased productivity.",
    "Factories created new employment opportunities.",
    "Colonies supplied raw materials.",
    "Industrialisation changed transport and communication."
  ],
  faqs: [
    {
      q: "Who improved the steam engine?",
      a: "James Watt."
    },
    {
      q: "Why did factories replace cottage industries?",
      a: "Factories produced goods faster and in larger quantities."
    },
    {
      q: "What was India's role during British industrialisation?",
      a: "India supplied raw materials and became a market for British goods."
    },
    {
      q: "What was industrialisation?",
      a: "The large-scale production of goods using machines."
    }
  ],
  tips: [
    "Remember important inventions.",
    "Know the impact on India.",
    "Practice source-based questions.",
    "Revise important personalities.",
    "Focus on effects of industrialisation."
  ]
},

{
  id: "history-print-culture-modern-world",
  subject: "Social Science",
  chapter: "Print Culture and the Modern World",
  formulas: [
    "Johann Gutenberg developed the printing press.",
    "Printing revolution spread knowledge rapidly.",
    "Books became cheaper after printing.",
    "Print encouraged the spread of nationalism.",
    "Newspapers increased public awareness.",
    "Printing promoted education and reforms."
  ],
  shortcuts: [
    "Gutenberg → Printing Press.",
    "China → Earliest printing.",
    "Books → Knowledge.",
    "Newspapers → Public Opinion.",
    "Print → Nationalism."
  ],
  tricks: [
    "Printing made ideas spread faster.",
    "Cheaper books increased literacy.",
    "Newspapers influenced society.",
    "Print supported reform movements.",
    "Printing revolution transformed education."
  ],
  faqs: [
    {
      q: "Who invented the printing press?",
      a: "Johann Gutenberg."
    },
    {
      q: "Why was print culture important?",
      a: "It spread knowledge, education and new ideas."
    },
    {
      q: "How did print help nationalism?",
      a: "It spread patriotic ideas among people."
    },
    {
      q: "Where did printing first develop?",
      a: "China."
    }
  ],
  tips: [
    "Learn Gutenberg's contribution.",
    "Remember effects of printing.",
    "Practice chronology questions.",
    "Revise important terms.",
    "Read NCERT examples carefully."
  ]
},

{
  id: "geography-resources-development",
  subject: "Social Science",
  chapter: "Resources and Development",
  formulas: [
    "Resources are classified as Natural, Human and Human-made.",
    "Resources can be Renewable or Non-renewable.",
    "Sustainable development meets present needs without harming future generations.",
    "Resource planning ensures balanced development.",
    "Land is an important natural resource.",
    "Conservation prevents resource depletion."
  ],
  shortcuts: [
    "Renewable → Solar, Wind.",
    "Non-renewable → Coal, Petroleum.",
    "Conservation → Sustainable Use.",
    "Land Degradation → Overgrazing, Mining.",
    "Afforestation prevents soil erosion."
  ],
  tricks: [
    "Remember the 3Rs: Reduce, Reuse, Recycle.",
    "Sustainable development is a favourite board topic.",
    "Match soil types with crops.",
    "Land degradation questions are common.",
    "Conservation methods are frequently asked."
  ],
  faqs: [
    {
      q: "What is sustainable development?",
      a: "Development that meets present needs without compromising future generations."
    },
    {
      q: "What are renewable resources?",
      a: "Resources that can be replenished naturally."
    },
    {
      q: "Why is resource planning necessary?",
      a: "To ensure balanced and sustainable use of resources."
    },
    {
      q: "How can soil erosion be controlled?",
      a: "Afforestation, contour ploughing and terrace farming."
    }
  ],
  tips: [
    "Practice map questions.",
    "Learn soil conservation methods.",
    "Revise resource classifications.",
    "Know examples of each resource type.",
    "Focus on sustainable development."
  ]
},

{
  id: "geography-forest-wildlife-resources",
  subject: "Social Science",
  chapter: "Forest and Wildlife Resources",
  formulas: [
    "Forests maintain ecological balance.",
    "Biodiversity includes plants, animals and microorganisms.",
    "Wildlife conservation protects endangered species.",
    "Deforestation causes ecological imbalance.",
    "Protected Areas include National Parks, Wildlife Sanctuaries and Biosphere Reserves.",
    "Chipko Movement promoted forest conservation."
  ],
  shortcuts: [
    "National Park → Highest protection.",
    "Sanctuary → Wildlife protection.",
    "Biosphere Reserve → Large conservation area.",
    "Chipko → Forest conservation.",
    "Red Data Book → Endangered species."
  ],
  tricks: [
    "Remember categories of protected areas.",
    "Chipko Movement is a frequently asked topic.",
    "Know causes of deforestation.",
    "Biodiversity maintains ecosystem stability.",
    "Conservation is better than restoration."
  ],
  faqs: [
    {
      q: "What is biodiversity?",
      a: "The variety of living organisms in an area."
    },
    {
      q: "What is deforestation?",
      a: "Large-scale cutting of forests."
    },
    {
      q: "What was the Chipko Movement?",
      a: "A movement to protect trees by hugging them."
    },
    {
      q: "What is a National Park?",
      a: "A protected area for conserving wildlife and ecosystems."
    }
  ],
  tips: [
    "Revise conservation movements.",
    "Practice map-based questions.",
    "Know endangered species examples.",
    "Learn protected area types.",
    "Read NCERT case studies."
  ]
},
{
  id: "geography-water-resources",
  subject: "Social Science",
  chapter: "Water Resources",
  formulas: [
    "Fresh water is a limited natural resource.",
    "Rainwater harvesting conserves water.",
    "Multipurpose river projects provide irrigation, electricity and flood control.",
    "Groundwater recharge increases water availability.",
    "Water conservation ensures sustainable development."
  ],
  shortcuts: [
    "Dams → Irrigation + Hydroelectricity.",
    "Rainwater Harvesting → Saves groundwater.",
    "Drip Irrigation → Saves water.",
    "Watershed Management → Conserves water.",
    "Water Scarcity → Overuse + Pollution."
  ],
  tricks: [
    "Remember advantages and disadvantages of dams.",
    "Rainwater harvesting is frequently asked.",
    "Water conservation = Sustainable future.",
    "Groundwater must be recharged regularly.",
    "Use examples from your state."
  ],
  faqs: [
    {
      q: "Why is rainwater harvesting important?",
      a: "It conserves water and recharges groundwater."
    },
    {
      q: "What is water scarcity?",
      a: "Shortage of usable water due to overuse and pollution."
    },
    {
      q: "Name one multipurpose river project.",
      a: "Bhakra Nangal Project."
    },
    {
      q: "What is watershed management?",
      a: "Managing land and water resources together."
    }
  ],
  tips: [
    "Learn important dams.",
    "Practice map questions.",
    "Revise water conservation methods.",
    "Know causes of water scarcity.",
    "Read NCERT case studies."
  ]
},

{
  id: "geography-agriculture",
  subject: "Social Science",
  chapter: "Agriculture",
  formulas: [
    "Agriculture is India's primary occupation.",
    "Kharif crops are sown in monsoon.",
    "Rabi crops are sown in winter.",
    "Zaid crops are grown between Kharif and Rabi.",
    "Green Revolution increased food production."
  ],
  shortcuts: [
    "Kharif → Rice, Maize, Cotton.",
    "Rabi → Wheat, Gram, Mustard.",
    "Zaid → Watermelon, Cucumber.",
    "Tea → Assam.",
    "Coffee → Karnataka."
  ],
  tricks: [
    "Remember crop seasons with examples.",
    "Rice needs high rainfall.",
    "Wheat grows in cool climate.",
    "Tea prefers hill slopes.",
    "Cotton requires black soil."
  ],
  faqs: [
    {
      q: "What are Kharif crops?",
      a: "Crops grown during the monsoon season."
    },
    {
      q: "Which state produces the most coffee?",
      a: "Karnataka."
    },
    {
      q: "Which soil is best for cotton?",
      a: "Black soil."
    },
    {
      q: "What was the Green Revolution?",
      a: "Increase in agricultural production using improved technology."
    }
  ],
  tips: [
    "Practice crop-state matching.",
    "Revise cropping seasons.",
    "Remember major producing states.",
    "Know irrigation methods.",
    "Prepare map work."
  ]
},

{
  id: "geography-minerals-energy",
  subject: "Social Science",
  chapter: "Minerals and Energy Resources",
  formulas: [
    "Minerals are exhaustible resources.",
    "Coal and petroleum are non-renewable resources.",
    "Solar and wind are renewable resources.",
    "Conservation ensures sustainable use.",
    "Minerals are unevenly distributed."
  ],
  shortcuts: [
    "Coal → Thermal Power.",
    "Petroleum → Fuel.",
    "Solar → Renewable.",
    "Wind → Renewable.",
    "Iron Ore → Steel Industry."
  ],
  tricks: [
    "Remember renewable vs non-renewable.",
    "Coal is India's major energy source.",
    "Petroleum is called black gold.",
    "Solar energy is pollution free.",
    "Know important mining states."
  ],
  faqs: [
    {
      q: "What is a renewable resource?",
      a: "A resource that can be replenished naturally."
    },
    {
      q: "Why is petroleum called black gold?",
      a: "Because of its high economic value."
    },
    {
      q: "Which mineral is used in steel production?",
      a: "Iron ore."
    },
    {
      q: "Why should minerals be conserved?",
      a: "They are exhaustible resources."
    }
  ],
  tips: [
    "Learn important minerals and states.",
    "Practice map questions.",
    "Know renewable energy sources.",
    "Revise conservation methods.",
    "Study NCERT tables carefully."
  ]
},
{
  id: "geography-manufacturing-industries",
  subject: "Social Science",
  chapter: "Manufacturing Industries",
  formulas: [
    "Manufacturing adds value to raw materials.",
    "Agro-based industries use agricultural products.",
    "Mineral-based industries use mineral resources.",
    "Industrial pollution affects air, water and land.",
    "Industrial growth increases employment."
  ],
  shortcuts: [
    "Cotton Textile → Maharashtra, Gujarat.",
    "Iron & Steel → Chhattisgarh, Jharkhand.",
    "Sugar → Uttar Pradesh.",
    "Jute → West Bengal.",
    "Cement → Rajasthan."
  ],
  tricks: [
    "Remember industry-state pairs.",
    "Agro-based = Agriculture.",
    "Mineral-based = Mining.",
    "Locate industries near raw materials.",
    "Pollution control is an important topic."
  ],
  faqs: [
    {
      q: "What is manufacturing?",
      a: "Producing finished goods from raw materials."
    },
    {
      q: "Why are industries located near raw materials?",
      a: "To reduce transportation cost."
    },
    {
      q: "What is an agro-based industry?",
      a: "An industry that uses agricultural products as raw materials."
    },
    {
      q: "Name one major iron and steel centre.",
      a: "Bhilai."
    }
  ],
  tips: [
    "Practice map work.",
    "Learn important industrial centres.",
    "Know types of industries.",
    "Revise pollution control measures.",
    "Read NCERT tables carefully."
  ]
},

{
  id: "geography-lifelines-national-economy",
  subject: "Social Science",
  chapter: "Lifelines of National Economy",
  formulas: [
    "Transport and communication are lifelines of an economy.",
    "Roadways provide door-to-door service.",
    "Railways are India's major transport system.",
    "Waterways are the cheapest mode of transport.",
    "Airways are the fastest mode of transport."
  ],
  shortcuts: [
    "Road → Flexible.",
    "Rail → Bulk transport.",
    "Water → Cheapest.",
    "Air → Fastest.",
    "Pipelines → Petroleum & Gas."
  ],
  tricks: [
    "Compare all transport modes.",
    "Roads are best for short distances.",
    "Railways carry heavy goods.",
    "Waterways are economical.",
    "Communication supports trade and development."
  ],
  faqs: [
    {
      q: "Which is the cheapest mode of transport?",
      a: "Water transport."
    },
    {
      q: "Which is the fastest mode of transport?",
      a: "Air transport."
    },
    {
      q: "Why are transport systems called lifelines?",
      a: "They connect people, markets and industries."
    },
    {
      q: "What do pipelines transport?",
      a: "Petroleum, natural gas and slurry."
    }
  ],
  tips: [
    "Practice map questions.",
    "Compare transport modes.",
    "Remember major ports.",
    "Learn communication systems.",
    "Revise advantages of each transport mode."
  ]
},

{
  id: "political-power-sharing",
  subject: "Social Science",
  chapter: "Power Sharing",
  formulas: [
    "Power sharing reduces social conflict.",
    "Belgium adopted accommodation policies.",
    "Sri Lanka followed majoritarian policies.",
    "Power sharing strengthens democracy.",
    "Power can be shared horizontally and vertically."
  ],
  shortcuts: [
    "Belgium → Accommodation.",
    "Sri Lanka → Majoritarianism.",
    "Horizontal → Legislature, Executive, Judiciary.",
    "Vertical → Union, State, Local.",
    "Community Government → Belgium."
  ],
  tricks: [
    "Remember Belgium vs Sri Lanka comparison.",
    "Horizontal = Same level.",
    "Vertical = Different levels.",
    "Power sharing promotes unity.",
    "Democracy works best through participation."
  ],
  faqs: [
    {
      q: "Why is power sharing important?",
      a: "It reduces conflict and strengthens democracy."
    },
    {
      q: "What is horizontal power sharing?",
      a: "Sharing power among different organs of government."
    },
    {
      q: "What is vertical power sharing?",
      a: "Sharing power among different levels of government."
    },
    {
      q: "Which country adopted community government?",
      a: "Belgium."
    }
  ],
  tips: [
    "Learn Belgium and Sri Lanka comparison.",
    "Know all forms of power sharing.",
    "Practice assertion-reason questions.",
    "Use proper political terms.",
    "Revise NCERT examples."
  ]
},
{
  id: "political-federalism",
  subject: "Social Science",
  chapter: "Federalism",
  formulas: [
    "Federalism is a system with two or more levels of government.",
    "India has Union, State and Local Governments.",
    "The Constitution divides powers between different levels.",
    "The Union List, State List and Concurrent List define subjects.",
    "Decentralisation strengthens democracy."
  ],
  shortcuts: [
    "Union List → Central Government.",
    "State List → State Governments.",
    "Concurrent List → Both Governments.",
    "73rd Amendment → Panchayats.",
    "74th Amendment → Municipalities."
  ],
  tricks: [
    "Remember the three lists.",
    "Decentralisation means more local power.",
    "Panchayats work in villages.",
    "Municipalities govern urban areas.",
    "Federalism promotes unity in diversity."
  ],
  faqs: [
    {
      q: "What is federalism?",
      a: "A system where powers are shared between different levels of government."
    },
    {
      q: "What is decentralisation?",
      a: "Transfer of powers to local governments."
    },
    {
      q: "How many levels of government exist in India?",
      a: "Three levels."
    },
    {
      q: "Which amendments strengthened local self-government?",
      a: "73rd and 74th Constitutional Amendments."
    }
  ],
  tips: [
    "Learn the three lists.",
    "Revise constitutional amendments.",
    "Know village and urban local bodies.",
    "Practice comparison questions.",
    "Read NCERT examples."
  ]
},

{
  id: "political-gender-religion-caste",
  subject: "Social Science",
  chapter: "Gender, Religion and Caste",
  formulas: [
    "Democracy promotes equality.",
    "Gender discrimination reduces equal opportunities.",
    "Communalism harms national unity.",
    "Caste inequalities still exist in society.",
    "Constitution guarantees equality before law."
  ],
  shortcuts: [
    "Gender → Equality.",
    "Religion → Secularism.",
    "Caste → Social Justice.",
    "Communalism → Negative.",
    "Reservation → Social Equality."
  ],
  tricks: [
    "Equality is a Fundamental Right.",
    "Secularism means equal respect for all religions.",
    "Communal politics divides society.",
    "Reservation aims at social justice.",
    "Remember constitutional values."
  ],
  faqs: [
    {
      q: "What is communalism?",
      a: "Using religion for political gain."
    },
    {
      q: "What is secularism?",
      a: "Equal respect for all religions."
    },
    {
      q: "Why is reservation provided?",
      a: "To promote social equality and justice."
    },
    {
      q: "Does the Constitution prohibit discrimination?",
      a: "Yes."
    }
  ],
  tips: [
    "Use constitutional terms.",
    "Revise Fundamental Rights.",
    "Practice case-based questions.",
    "Know examples from NCERT.",
    "Focus on equality concepts."
  ]
},

{
  id: "political-political-parties",
  subject: "Social Science",
  chapter: "Political Parties",
  formulas: [
    "Political parties contest elections.",
    "National parties work across multiple states.",
    "Regional parties work mainly within states.",
    "Election Commission recognises political parties.",
    "Political parties are essential for democracy."
  ],
  shortcuts: [
    "ECI → Election Commission of India.",
    "National Party → Multiple States.",
    "Regional Party → One/Few States.",
    "Manifesto → Election Promises.",
    "Opposition → Holds government accountable."
  ],
  tricks: [
    "Remember national party criteria.",
    "Manifesto is released before elections.",
    "Opposition strengthens democracy.",
    "Political parties connect people and government.",
    "Election Commission conducts free elections."
  ],
  faqs: [
    {
      q: "Why are political parties important?",
      a: "They help form governments and represent people."
    },
    {
      q: "Who conducts elections in India?",
      a: "The Election Commission of India."
    },
    {
      q: "What is an election manifesto?",
      a: "A document containing promises made by a political party."
    },
    {
      q: "What is the role of the opposition?",
      a: "To question and monitor the government."
    }
  ],
  tips: [
    "Learn functions of political parties.",
    "Revise national vs regional parties.",
    "Practice competency questions.",
    "Know Election Commission's role.",
    "Read NCERT examples carefully."
  ]
},
{
  id: "political-outcomes-democracy",
  subject: "Social Science",
  chapter: "Outcomes of Democracy",
  formulas: [
    "Democracy is accountable, responsive and legitimate.",
    "Democracy promotes equality and dignity.",
    "Free and fair elections strengthen democracy.",
    "Transparency improves good governance.",
    "Citizen participation is essential for democracy."
  ],
  shortcuts: [
    "Democracy → People Rule.",
    "Accountability → Government Answerable.",
    "Transparency → Open Decisions.",
    "Equality → Equal Rights.",
    "Participation → Strong Democracy."
  ],
  tricks: [
    "Remember democracy improves dignity.",
    "Economic equality may still remain a challenge.",
    "Democracy allows peaceful transfer of power.",
    "Transparency builds public trust.",
    "Participation strengthens governance."
  ],
  faqs: [
    {
      q: "What is the main outcome of democracy?",
      a: "An accountable, responsive and legitimate government."
    },
    {
      q: "Does democracy guarantee economic equality?",
      a: "No, but it provides opportunities to reduce inequality."
    },
    {
      q: "Why is transparency important?",
      a: "It increases accountability and public trust."
    },
    {
      q: "How do citizens strengthen democracy?",
      a: "By voting and participating in public affairs."
    }
  ],
  tips: [
    "Learn the expected outcomes of democracy.",
    "Use NCERT examples in answers.",
    "Remember accountability and transparency.",
    "Practice competency-based questions.",
    "Revise advantages and limitations."
  ]
},

{
  id: "economics-development",
  subject: "Social Science",
  chapter: "Development",
  formulas: [
    "Development means improvement in quality of life.",
    "Per Capita Income = National Income ÷ Population.",
    "Human Development Index (HDI) considers health, education and income.",
    "Sustainable development protects future resources.",
    "Development differs for different people."
  ],
  shortcuts: [
    "PCI = Income ÷ Population.",
    "HDI → Health + Education + Income.",
    "Sustainable → Present + Future.",
    "Literacy → Development.",
    "Life Expectancy → Development."
  ],
  tricks: [
    "Remember income alone doesn't measure development.",
    "HDI is more reliable than PCI.",
    "Clean environment is also development.",
    "Development varies from person to person.",
    "Sustainability is a favourite board topic."
  ],
  faqs: [
    {
      q: "What is per capita income?",
      a: "National income divided by total population."
    },
    {
      q: "What is HDI?",
      a: "Human Development Index measuring health, education and income."
    },
    {
      q: "Why is sustainable development important?",
      a: "It protects resources for future generations."
    },
    {
      q: "Is income the only measure of development?",
      a: "No, education, health and equality also matter."
    }
  ],
  tips: [
    "Memorise HDI components.",
    "Practice comparison questions.",
    "Revise sustainable development.",
    "Use examples in answers.",
    "Read NCERT tables carefully."
  ]
},

{
  id: "economics-sectors-indian-economy",
  subject: "Social Science",
  chapter: "Sectors of the Indian Economy",
  formulas: [
    "Primary sector depends on natural resources.",
    "Secondary sector involves manufacturing.",
    "Tertiary sector provides services.",
    "Organised sector follows government rules.",
    "Unorganised sector has limited job security."
  ],
  shortcuts: [
    "Primary → Agriculture.",
    "Secondary → Industry.",
    "Tertiary → Services.",
    "Organised → Fixed Salary.",
    "Unorganised → Daily Wage."
  ],
  tricks: [
    "Remember sector examples.",
    "Service sector contributes most to GDP.",
    "Agriculture employs many people.",
    "Organised sector provides benefits.",
    "Differentiate employment from contribution."
  ],
  faqs: [
    {
      q: "What is the primary sector?",
      a: "Activities based on natural resources like farming."
    },
    {
      q: "Which sector provides services?",
      a: "The tertiary sector."
    },
    {
      q: "What is an organised sector?",
      a: "A sector regulated by government rules."
    },
    {
      q: "Which sector includes factories?",
      a: "The secondary sector."
    }
  ],
  tips: [
    "Remember sector examples.",
    "Practice comparison questions.",
    "Revise organised vs unorganised.",
    "Know GDP contribution.",
    "Study NCERT graphs."
  ]
},
{
  id: "economics-money-credit",
  subject: "Social Science",
  chapter: "Money and Credit",
  formulas: [
    "Money acts as a medium of exchange.",
    "Banks accept deposits and provide loans.",
    "Credit helps in economic activities.",
    "Collateral is an asset pledged against a loan.",
    "Self Help Groups (SHGs) improve rural credit."
  ],
  shortcuts: [
    "Money → Exchange.",
    "Bank → Deposit + Loan.",
    "Credit → Borrowing.",
    "Collateral → Security.",
    "SHG → Rural Finance."
  ],
  tricks: [
    "Remember modern money = currency issued by RBI.",
    "Banks earn through interest.",
    "Credit can be useful or harmful depending on repayment.",
    "Collateral reduces lending risk.",
    "SHGs help people without formal banking access."
  ],
  faqs: [
    {
      q: "What is collateral?",
      a: "An asset kept as security while taking a loan."
    },
    {
      q: "Who issues currency notes in India?",
      a: "The Reserve Bank of India (RBI)."
    },
    {
      q: "What is the main function of money?",
      a: "It acts as a medium of exchange."
    },
    {
      q: "What are Self Help Groups?",
      a: "Small groups that save together and provide loans to members."
    }
  ],
  tips: [
    "Differentiate formal and informal credit.",
    "Remember the role of RBI.",
    "Practice case-based questions.",
    "Use examples while writing answers.",
    "Revise banking functions."
  ]
},

{
  id: "economics-globalisation-indian-economy",
  subject: "Social Science",
  chapter: "Globalisation and the Indian Economy",
  formulas: [
    "Globalisation increases economic integration among countries.",
    "Multinational Companies (MNCs) operate in multiple countries.",
    "Foreign investment promotes industrial growth.",
    "Liberalisation removes trade restrictions.",
    "Technology has accelerated globalisation."
  ],
  shortcuts: [
    "MNC → Multiple Countries.",
    "FDI → Foreign Investment.",
    "Liberalisation → Fewer Restrictions.",
    "Globalisation → World Market.",
    "WTO → International Trade."
  ],
  tricks: [
    "Remember MNC characteristics.",
    "Technology connects global markets.",
    "Trade barriers reduce imports.",
    "Globalisation creates both opportunities and challenges.",
    "WTO promotes international trade."
  ],
  faqs: [
    {
      q: "What is globalisation?",
      a: "The integration of economies through trade, investment and technology."
    },
    {
      q: "What is an MNC?",
      a: "A company operating in more than one country."
    },
    {
      q: "What is liberalisation?",
      a: "Removal of government restrictions on trade and business."
    },
    {
      q: "What is WTO?",
      a: "The World Trade Organization regulating global trade."
    }
  ],
  tips: [
    "Learn WTO functions.",
    "Know advantages and disadvantages of globalisation.",
    "Revise important NCERT examples.",
    "Practice competency questions.",
    "Remember MNC features."
  ]
},

{
  id: "economics-consumer-rights",
  subject: "Social Science",
  chapter: "Consumer Rights",
  formulas: [
    "Consumers have six basic rights.",
    "Consumer Protection Act protects consumers.",
    "ISI, AGMARK and Hallmark indicate quality certification.",
    "Consumer Courts resolve disputes.",
    "Every consumer has the right to seek redressal."
  ],
  shortcuts: [
    "ISI → Industrial Products.",
    "AGMARK → Agricultural Products.",
    "Hallmark → Gold Jewellery.",
    "MRP → Maximum Retail Price.",
    "COPRA → Consumer Protection."
  ],
  tricks: [
    "Remember all six consumer rights.",
    "Always check quality marks before buying.",
    "Keep purchase bills safely.",
    "Consumer courts provide legal protection.",
    "Read labels before purchasing products."
  ],
  faqs: [
    {
      q: "What is the Consumer Protection Act?",
      a: "A law protecting consumers against unfair trade practices."
    },
    {
      q: "What does ISI mark indicate?",
      a: "Certified quality of industrial products."
    },
    {
      q: "Why is the MRP important?",
      a: "It is the maximum price a seller can charge."
    },
    {
      q: "Where can consumers file complaints?",
      a: "In Consumer Courts."
    }
  ],
  tips: [
    "Learn all consumer rights.",
    "Remember quality certification marks.",
    "Practice case-study questions.",
    "Keep examples ready.",
    "Revise important consumer laws."
  ]
},
{
  id: "english-a-letter-to-god",
  subject: "English",
  chapter: "A Letter to God",
  formulas: [
    "Author: G.L. Fuentes.",
    "Theme: Faith, hope and irony.",
    "Lencho had complete faith in God.",
    "The postmaster helped Lencho secretly.",
    "Irony is the central literary device."
  ],
  shortcuts: [
    "Lencho → Farmer.",
    "God → Symbol of faith.",
    "Postmaster → Kind-hearted.",
    "Hailstorm → Destroys crops.",
    "Ending → Dramatic irony."
  ],
  tricks: [
    "Remember characters and their qualities.",
    "Focus on irony questions.",
    "Learn important themes.",
    "Prepare character sketch of Lencho.",
    "Revise important quotations."
  ],
  faqs: [
    {
      q: "Why did Lencho write to God?",
      a: "He needed money after his crops were destroyed."
    },
    {
      q: "Who sent the money?",
      a: "The postmaster and his colleagues."
    },
    {
      q: "Why did Lencho call the post office employees crooks?",
      a: "He believed they had stolen part of the money."
    },
    {
      q: "What is the main theme?",
      a: "Faith in God and human kindness."
    }
  ],
  tips: [
    "Learn the irony in the ending.",
    "Prepare character sketches.",
    "Revise important themes.",
    "Practice extract-based questions.",
    "Use simple language in answers."
  ]
},

{
  id: "english-nelson-mandela",
  subject: "English",
  chapter: "Nelson Mandela: Long Walk to Freedom",
  formulas: [
    "Author: Nelson Mandela.",
    "Theme: Freedom, equality and courage.",
    "Mandela became South Africa's first Black President.",
    "Apartheid was racial discrimination.",
    "Freedom comes with responsibility."
  ],
  shortcuts: [
    "Apartheid → Racial discrimination.",
    "1994 → Democratic election.",
    "Mandela → First Black President.",
    "Freedom → Responsibility.",
    "Courage → Victory over fear."
  ],
  tricks: [
    "Remember inauguration details.",
    "Learn definitions of courage and freedom.",
    "Know apartheid policies.",
    "Revise important quotations.",
    "Prepare theme-based answers."
  ],
  faqs: [
    {
      q: "What is apartheid?",
      a: "A policy of racial discrimination."
    },
    {
      q: "Who became South Africa's first Black President?",
      a: "Nelson Mandela."
    },
    {
      q: "What is courage according to Mandela?",
      a: "Triumph over fear, not absence of fear."
    },
    {
      q: "What is the central theme?",
      a: "Freedom, equality and justice."
    }
  ],
  tips: [
    "Remember important dates.",
    "Prepare character-based answers.",
    "Revise themes.",
    "Practice extract questions.",
    "Use NCERT keywords."
  ]
},

{
  id: "english-two-stories-about-flying",
  subject: "English",
  chapter: "Two Stories about Flying",
  formulas: [
    "Part I: His First Flight.",
    "Part II: Black Aeroplane.",
    "Themes: Courage, confidence and mystery.",
    "The young seagull overcame fear.",
    "The mysterious pilot saved the narrator."
  ],
  shortcuts: [
    "Seagull → Confidence.",
    "Mother → Motivation.",
    "Pilot → Mystery.",
    "Storm → Danger.",
    "Landing → Safety."
  ],
  tricks: [
    "Separate both stories while answering.",
    "Remember themes individually.",
    "Learn character traits.",
    "Prepare important incidents.",
    "Revise symbolism."
  ],
  faqs: [
    {
      q: "Why was the young seagull afraid?",
      a: "He feared flying for the first time."
    },
    {
      q: "How did he finally fly?",
      a: "His mother tempted him with food."
    },
    {
      q: "Who helped the narrator in Black Aeroplane?",
      a: "A mysterious pilot."
    },
    {
      q: "What is the mystery in the story?",
      a: "The control tower never saw another plane."
    }
  ],
  tips: [
    "Don't mix the two stories.",
    "Revise themes carefully.",
    "Practice extract questions.",
    "Learn character sketches.",
    "Remember important events."
  ]
},
{
  id: "english-from-the-diary-of-anne-frank",
  subject: "English",
  chapter: "From the Diary of Anne Frank",
  formulas: [
    "Author: Anne Frank.",
    "Theme: Adolescence, loneliness and self-expression.",
    "Anne treated her diary as her friend 'Kitty'.",
    "The diary reflects her thoughts during World War II.",
    "Writing gave Anne comfort and confidence."
  ],
  shortcuts: [
    "Kitty → Diary.",
    "Anne → Honest & Intelligent.",
    "Diary → Best Friend.",
    "WWII → Background.",
    "Writing → Relief."
  ],
  tricks: [
    "Remember why Anne named her diary Kitty.",
    "Focus on Anne's personality.",
    "Know the importance of diary writing.",
    "Revise themes and values.",
    "Practice extract-based questions."
  ],
  faqs: [
    {
      q: "Why did Anne write a diary?",
      a: "She wanted a true friend to share her feelings."
    },
    {
      q: "Who was Kitty?",
      a: "The name Anne gave to her diary."
    },
    {
      q: "What is the main theme?",
      a: "Self-expression and emotional growth."
    },
    {
      q: "Why is Anne Frank famous?",
      a: "For her diary written during World War II."
    }
  ],
  tips: [
    "Remember Anne's character traits.",
    "Practice extract questions.",
    "Revise important themes.",
    "Use simple language.",
    "Learn NCERT keywords."
  ]
},

{
  id: "english-glimpses-of-india",
  subject: "English",
  chapter: "Glimpses of India",
  formulas: [
    "Contains three travel narratives.",
    "Themes: Culture, diversity and heritage.",
    "Coorg is famous for coffee plantations.",
    "Tea originated in China and became popular in India.",
    "Goa is known for Portuguese influence."
  ],
  shortcuts: [
    "Goa → Baker.",
    "Coorg → Coffee.",
    "Assam → Tea.",
    "Culture → Diversity.",
    "Travel → Heritage."
  ],
  tricks: [
    "Remember all three parts separately.",
    "Learn famous places and specialties.",
    "Revise important facts.",
    "Know the central themes.",
    "Practice short answers."
  ],
  faqs: [
    {
      q: "How many parts are there in Glimpses of India?",
      a: "Three."
    },
    {
      q: "Why is Coorg famous?",
      a: "For coffee plantations and scenic beauty."
    },
    {
      q: "Which state is famous for tea plantations?",
      a: "Assam."
    },
    {
      q: "What is the main theme?",
      a: "India's rich culture and diversity."
    }
  ],
  tips: [
    "Don't confuse the three parts.",
    "Remember important places.",
    "Revise cultural facts.",
    "Practice extract questions.",
    "Prepare map-based references if asked."
  ]
},

{
  id: "english-mijbil-the-otter",
  subject: "English",
  chapter: "Mijbil the Otter",
  formulas: [
    "Author: Gavin Maxwell.",
    "Theme: Love for animals and companionship.",
    "Mij was a playful otter.",
    "The story highlights the bond between humans and animals.",
    "Kindness towards animals is emphasized."
  ],
  shortcuts: [
    "Mij → Otter.",
    "Maxwell → Owner.",
    "Iraq → Origin.",
    "Companionship → Theme.",
    "Playful → Nature."
  ],
  tricks: [
    "Remember Mij's playful habits.",
    "Focus on the human-animal bond.",
    "Prepare character sketch of Mij.",
    "Revise important incidents.",
    "Practice extract questions."
  ],
  faqs: [
    {
      q: "Who wrote Mijbil the Otter?",
      a: "Gavin Maxwell."
    },
    {
      q: "What kind of animal was Mij?",
      a: "An otter."
    },
    {
      q: "What is the central theme?",
      a: "Love and companionship between humans and animals."
    },
    {
      q: "Where did Maxwell get Mij?",
      a: "In Iraq."
    }
  ],
  tips: [
    "Remember character traits.",
    "Revise important events.",
    "Practice extract questions.",
    "Know the central theme.",
    "Use simple explanations."
  ]
},
{
  id: "english-madam-rides-the-bus",
  subject: "English",
  chapter: "Madam Rides the Bus",
  formulas: [
    "Author: Vallikkannan.",
    "Theme: Independence, curiosity and maturity.",
    "Valli planned her journey carefully.",
    "The bus ride fulfilled her dream.",
    "Experience teaches valuable lessons."
  ],
  shortcuts: [
    "Valli → Curious.",
    "Bus Ride → Dream.",
    "Independence → Theme.",
    "Calf → Turning Point.",
    "Experience → Maturity."
  ],
  tricks: [
    "Remember why Valli refused refreshments.",
    "Focus on Valli's confidence.",
    "Learn the importance of the calf incident.",
    "Prepare character sketch.",
    "Revise themes."
  ],
  faqs: [
    {
      q: "Why did Valli travel alone?",
      a: "She wanted to fulfil her dream of riding a bus."
    },
    {
      q: "Why did she refuse refreshments?",
      a: "She wanted to save money and remain independent."
    },
    {
      q: "What saddened Valli?",
      a: "Seeing the dead calf on the return journey."
    },
    {
      q: "What is the main theme?",
      a: "Curiosity, independence and maturity."
    }
  ],
  tips: [
    "Learn Valli's character sketch.",
    "Remember important incidents.",
    "Practice extract questions.",
    "Revise themes.",
    "Use NCERT keywords."
  ]
},

{
  id: "english-the-sermon-at-benares",
  subject: "English",
  chapter: "The Sermon at Benares",
  formulas: [
    "Author: Betty Renshaw.",
    "Theme: Death, wisdom and acceptance.",
    "The story is based on Gautama Buddha.",
    "Death is inevitable.",
    "Wisdom helps overcome sorrow."
  ],
  shortcuts: [
    "Buddha → Wisdom.",
    "Kisa Gotami → Grief.",
    "Mustard Seeds → Lesson.",
    "Death → Universal.",
    "Acceptance → Peace."
  ],
  tricks: [
    "Remember the mustard seed story.",
    "Focus on Buddha's teachings.",
    "Learn the central theme.",
    "Revise important quotations.",
    "Practice extract questions."
  ],
  faqs: [
    {
      q: "Who was Kisa Gotami?",
      a: "A woman grieving the death of her son."
    },
    {
      q: "Why did Buddha ask for mustard seeds?",
      a: "To teach that death comes to every family."
    },
    {
      q: "What is the central message?",
      a: "Death is unavoidable and must be accepted."
    },
    {
      q: "Who wrote the chapter?",
      a: "Betty Renshaw."
    }
  ],
  tips: [
    "Remember Buddha's teachings.",
    "Revise themes carefully.",
    "Practice extract questions.",
    "Prepare value-based answers.",
    "Use simple language."
  ]
},

{
  id: "english-the-proposal",
  subject: "English",
  chapter: "The Proposal",
  formulas: [
    "Author: Anton Chekhov.",
    "Theme: Marriage, pride and humour.",
    "It is a one-act comedy.",
    "Lomov proposes to Natalya.",
    "Arguments arise over trivial matters."
  ],
  shortcuts: [
    "Lomov → Groom.",
    "Natalya → Bride.",
    "Chubukov → Father.",
    "Oxen Meadows → Dispute.",
    "Comedy → Theme."
  ],
  tricks: [
    "Remember both arguments.",
    "Focus on comic situations.",
    "Prepare character sketches.",
    "Revise themes.",
    "Know the ending."
  ],
  faqs: [
    {
      q: "Why did Lomov visit Chubukov?",
      a: "To propose marriage to Natalya."
    },
    {
      q: "What did they first argue about?",
      a: "Ownership of Oxen Meadows."
    },
    {
      q: "Why is the play humorous?",
      a: "Because serious arguments interrupt a marriage proposal."
    },
    {
      q: "Who wrote The Proposal?",
      a: "Anton Chekhov."
    }
  ],
  tips: [
    "Remember both disputes.",
    "Prepare character sketches.",
    "Practice extract questions.",
    "Revise themes.",
    "Focus on humour and satire."
  ]
},
{
  id: "english-a-triumph-of-surgery",
  subject: "English",
  chapter: "A Triumph of Surgery",
  formulas: [
    "Author: James Herriot.",
    "Theme: Love, care and responsible pet ownership.",
    "Tricki became ill due to overfeeding.",
    "Proper diet and exercise restored Tricki's health.",
    "Health depends on a balanced lifestyle."
  ],
  shortcuts: [
    "Tricki → Dog.",
    "Mrs. Pumphrey → Owner.",
    "Dr. Herriot → Vet.",
    "Overfeeding → Illness.",
    "Exercise → Recovery."
  ],
  tricks: [
    "Remember the reason for Tricki's illness.",
    "Focus on Mrs. Pumphrey's affection.",
    "Learn Tricki's recovery process.",
    "Prepare character sketches.",
    "Revise the central theme."
  ],
  faqs: [
    {
      q: "Why did Tricki become ill?",
      a: "Because he was overfed and did not exercise."
    },
    {
      q: "Who treated Tricki?",
      a: "Dr. James Herriot."
    },
    {
      q: "How did Tricki recover?",
      a: "Through a healthy diet and regular exercise."
    },
    {
      q: "What is the main message?",
      a: "Love should be balanced with proper care and discipline."
    }
  ],
  tips: [
    "Learn Tricki's character.",
    "Remember the treatment process.",
    "Practice extract questions.",
    "Revise themes.",
    "Prepare value-based answers."
  ]
},

{
  id: "english-the-thiefs-story",
  subject: "English",
  chapter: "The Thief's Story",
  formulas: [
    "Author: Ruskin Bond.",
    "Theme: Trust, kindness and transformation.",
    "Hari Singh was a young thief.",
    "Anil trusted Hari despite the theft.",
    "Kindness changed Hari's character."
  ],
  shortcuts: [
    "Hari Singh → Thief.",
    "Anil → Kind.",
    "Trust → Change.",
    "Money → Temptation.",
    "Education → New Life."
  ],
  tricks: [
    "Remember why Hari returned the money.",
    "Focus on Anil's trust.",
    "Learn character sketches.",
    "Revise themes.",
    "Practice extract questions."
  ],
  faqs: [
    {
      q: "Why did Hari return the money?",
      a: "He realized Anil's trust and kindness were more valuable."
    },
    {
      q: "Who was Anil?",
      a: "A kind writer who employed Hari."
    },
    {
      q: "What changed Hari?",
      a: "Anil's trust and generosity."
    },
    {
      q: "What is the main theme?",
      a: "Trust can reform a person."
    }
  ],
  tips: [
    "Prepare character sketches.",
    "Remember important events.",
    "Practice extract questions.",
    "Revise the moral.",
    "Use NCERT keywords."
  ]
},

{
  id: "english-the-midnight-visitor",
  subject: "English",
  chapter: "The Midnight Visitor",
  formulas: [
    "Author: Robert Arthur.",
    "Theme: Intelligence, presence of mind and suspense.",
    "Ausable was a secret agent.",
    "Max tried to steal important documents.",
    "Presence of mind defeated the enemy."
  ],
  shortcuts: [
    "Ausable → Spy.",
    "Max → Intruder.",
    "Fowler → Writer.",
    "Balcony → Fake.",
    "Presence of Mind → Victory."
  ],
  tricks: [
    "Remember Ausable's clever plan.",
    "Focus on suspense.",
    "Learn character traits.",
    "Revise the climax.",
    "Practice extract questions."
  ],
  faqs: [
    {
      q: "Who was Ausable?",
      a: "A secret agent."
    },
    {
      q: "Who was Max?",
      a: "An intruder trying to steal secret papers."
    },
    {
      q: "How did Ausable defeat Max?",
      a: "By making him believe there was a balcony outside the window."
    },
    {
      q: "What is the central theme?",
      a: "Intelligence is more powerful than physical strength."
    }
  ],
  tips: [
    "Remember the climax.",
    "Prepare character sketches.",
    "Practice extract questions.",
    "Revise important incidents.",
    "Focus on suspense elements."
  ]
},
{
  id: "english-a-question-of-trust",
  subject: "English",
  chapter: "A Question of Trust",
  formulas: [
    "Author: Victor Canning.",
    "Theme: Crime, intelligence and irony.",
    "Horace Danby was a careful thief.",
    "A clever woman tricked Horace.",
    "Crime does not always succeed."
  ],
  shortcuts: [
    "Horace Danby → Thief.",
    "Lady → Clever Trickster.",
    "Safe → Target.",
    "Gloves → Evidence.",
    "Irony → Ending."
  ],
  tricks: [
    "Remember why Horace was caught.",
    "Focus on the fake lady's trick.",
    "Learn the ironic ending.",
    "Prepare character sketch.",
    "Revise the theme."
  ],
  faqs: [
    {
      q: "Who was Horace Danby?",
      a: "A thief who stole only once every year."
    },
    {
      q: "Why was Horace arrested?",
      a: "His fingerprints were left on the safe."
    },
    {
      q: "Who tricked Horace?",
      a: "A woman pretending to be the owner of the house."
    },
    {
      q: "What is the main theme?",
      a: "Crime eventually leads to failure."
    }
  ],
  tips: [
    "Remember the ironic ending.",
    "Practice extract questions.",
    "Learn character sketches.",
    "Revise important incidents.",
    "Use NCERT keywords."
  ]
},

{
  id: "english-footprints-without-feet",
  subject: "English",
  chapter: "Footprints Without Feet",
  formulas: [
    "Author: H.G. Wells (adapted).",
    "Theme: Science, misuse of power and responsibility.",
    "Griffin discovered invisibility.",
    "He misused his scientific knowledge.",
    "Power without responsibility is dangerous."
  ],
  shortcuts: [
    "Griffin → Scientist.",
    "Invisibility → Discovery.",
    "Misuse → Crime.",
    "Power → Responsibility.",
    "Science → Ethics."
  ],
  tricks: [
    "Remember Griffin's crimes.",
    "Focus on the lesson about responsibility.",
    "Learn character sketch.",
    "Revise important incidents.",
    "Practice extract questions."
  ],
  faqs: [
    {
      q: "Who was Griffin?",
      a: "A scientist who discovered how to become invisible."
    },
    {
      q: "Why did Griffin become a criminal?",
      a: "He misused his scientific discovery."
    },
    {
      q: "What is the central theme?",
      a: "Scientific knowledge should be used responsibly."
    },
    {
      q: "Who wrote the original story?",
      a: "H.G. Wells."
    }
  ],
  tips: [
    "Remember Griffin's actions.",
    "Practice extract questions.",
    "Prepare character sketch.",
    "Revise themes.",
    "Use NCERT keywords."
  ]
},

{
  id: "english-the-making-of-a-scientist",
  subject: "English",
  chapter: "The Making of a Scientist",
  formulas: [
    "Author: Robert W. Peterson.",
    "Theme: Curiosity, hard work and perseverance.",
    "The chapter is about Richard H. Ebright.",
    "Scientific success comes through dedication.",
    "Curiosity leads to discovery."
  ],
  shortcuts: [
    "Richard Ebright → Scientist.",
    "Butterflies → Research.",
    "Curiosity → Success.",
    "Hard Work → Achievement.",
    "Science Fair → Growth."
  ],
  tricks: [
    "Remember Ebright's achievements.",
    "Focus on qualities that made him successful.",
    "Prepare character sketch.",
    "Revise themes.",
    "Practice extract questions."
  ],
  faqs: [
    {
      q: "Who was Richard Ebright?",
      a: "A famous scientist known for his research on butterflies."
    },
    {
      q: "What qualities made him successful?",
      a: "Curiosity, hard work and determination."
    },
    {
      q: "Who inspired Ebright?",
      a: "His mother encouraged his interest in science."
    },
    {
      q: "What is the main message?",
      a: "Success comes through curiosity and consistent effort."
    }
  ],
  tips: [
    "Remember important achievements.",
    "Practice character sketch.",
    "Revise themes.",
    "Prepare extract questions.",
    "Use NCERT keywords."
  ]
},
{
  id: "english-the-necklace",
  subject: "English",
  chapter: "The Necklace",
  formulas: [
    "Author: Guy de Maupassant.",
    "Theme: Vanity, greed and contentment.",
    "Mathilde borrowed a necklace for a party.",
    "The necklace was lost and later replaced.",
    "The original necklace was imitation jewellery."
  ],
  shortcuts: [
    "Mathilde → Main Character.",
    "Mme Forestier → Friend.",
    "Borrowed Necklace → Lost.",
    "Replacement → Years of Hardship.",
    "Irony → Fake Necklace."
  ],
  tricks: [
    "Remember the twist ending.",
    "Focus on irony.",
    "Learn Mathilde's character.",
    "Revise major events.",
    "Practice extract questions."
  ],
  faqs: [
    {
      q: "Who wrote The Necklace?",
      a: "Guy de Maupassant."
    },
    {
      q: "Why did Mathilde suffer for years?",
      a: "She replaced the lost necklace with an expensive one."
    },
    {
      q: "What was the surprise ending?",
      a: "The original necklace was fake."
    },
    {
      q: "What is the main theme?",
      a: "Vanity and greed can lead to unnecessary suffering."
    }
  ],
  tips: [
    "Remember the ending carefully.",
    "Practice character sketches.",
    "Revise themes and irony.",
    "Prepare extract questions.",
    "Use NCERT keywords."
  ]
},

{
  id: "english-bholi",
  subject: "English",
  chapter: "Bholi",
  formulas: [
    "Author: K.A. Abbas.",
    "Theme: Education, self-respect and women empowerment.",
    "Bholi overcame fear through education.",
    "She rejected a greedy marriage proposal.",
    "Education builds confidence and independence."
  ],
  shortcuts: [
    "Bholi → Courage.",
    "Teacher → Inspiration.",
    "Bishamber → Greedy Groom.",
    "Education → Confidence.",
    "Self-Respect → Victory."
  ],
  tricks: [
    "Remember Bholi's transformation.",
    "Focus on the role of education.",
    "Learn character sketches.",
    "Revise the climax.",
    "Practice extract questions."
  ],
  faqs: [
    {
      q: "Why was Bholi neglected?",
      a: "She had facial marks and stammered."
    },
    {
      q: "Who changed Bholi's life?",
      a: "Her school teacher."
    },
    {
      q: "Why did Bholi refuse marriage?",
      a: "Because the groom demanded dowry."
    },
    {
      q: "What is the main message?",
      a: "Education empowers people to make confident decisions."
    }
  ],
  tips: [
    "Prepare character sketches.",
    "Remember important incidents.",
    "Revise themes.",
    "Practice extract questions.",
    "Use NCERT keywords."
  ]
},

{
  id: "english-the-book-that-saved-the-earth",
  subject: "English",
  chapter: "The Book That Saved the Earth",
  formulas: [
    "Author: Claire Boiko.",
    "Theme: Humour, peace and communication.",
    "The play is set in the future.",
    "A nursery rhyme saves the Earth.",
    "Miscommunication leads to comic situations."
  ],
  shortcuts: [
    "Think-Tank → Martian Leader.",
    "Omega → Assistant.",
    "Earth → Saved.",
    "Nursery Rhyme → Confusion.",
    "Humour → Main Element."
  ],
  tricks: [
    "Remember the nursery rhyme.",
    "Focus on humorous scenes.",
    "Learn character names.",
    "Revise the ending.",
    "Practice extract questions."
  ],
  faqs: [
    {
      q: "Who was Think-Tank?",
      a: "The ruler of Mars."
    },
    {
      q: "How was the Earth saved?",
      a: "The Martians misunderstood a nursery rhyme and retreated."
    },
    {
      q: "What type of play is this?",
      a: "A humorous science-fiction play."
    },
    {
      q: "What is the central theme?",
      a: "Peace and intelligence are better than war."
    }
  ],
  tips: [
    "Remember character names.",
    "Practice extract questions.",
    "Revise humorous incidents.",
    "Learn themes.",
    "Use NCERT keywords."
  ]
},
{
  id: "malayalam-mathrubhasha-nammude-ullulozhukunna-jeeva-nadhi",
  subject: "Malayalam",
  chapter: "മാതൃഭാഷ നമ്മുടെ ഉള്ളിലൊഴുകുന്ന ജീവ നദി",
  formulas: [
    "രചയിതാവ്: മാധവിക്കുട്ടി.",
    "പ്രമേയം: മാതൃഭാഷയുടെ മഹത്ത്വം.",
    "മാതൃഭാഷ വ്യക്തിത്വത്തിന്റെ അടയാളമാണ്.",
    "ഭാഷ സംസ്കാരത്തെയും പാരമ്പര്യത്തെയും സംരക്ഷിക്കുന്നു.",
    "മാതൃഭാഷയെ സ്നേഹിക്കുന്നത് സ്വന്തം വേരുകളെ സ്നേഹിക്കുന്നതാണ്."
  ],
  shortcuts: [
    "മാതൃഭാഷ → വ്യക്തിത്വം.",
    "ഭാഷ → സംസ്കാരം.",
    "മലയാളം → പാരമ്പര്യം.",
    "ആശയവിനിമയം → വികാരം.",
    "വേരുകൾ → സംസ്കാരം."
  ],
  tricks: [
    "പാഠത്തിന്റെ പ്രധാന സന്ദേശം ഓർക്കുക.",
    "മാതൃഭാഷയുടെ പ്രാധാന്യം മനസ്സിലാക്കുക.",
    "രചയിതാവിന്റെ ആശയങ്ങൾ പഠിക്കുക.",
    "പ്രധാന വരികൾ ആവർത്തിച്ച് വായിക്കുക.",
    "പ്രമേയത്തെ അടിസ്ഥാനമാക്കിയുള്ള ചോദ്യങ്ങൾ പരിശീലിക്കുക."
  ],
  faqs: [
    {
      q: "പാഠത്തിന്റെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "മാതൃഭാഷയുടെ പ്രാധാന്യവും സംരക്ഷണവുമാണ്."
    },
    {
      q: "മാതൃഭാഷയ്ക്ക് എന്തുകൊണ്ട് പ്രാധാന്യമുണ്ട്?",
      a: "അത് സംസ്കാരത്തെയും വ്യക്തിത്വത്തെയും സംരക്ഷിക്കുന്നു."
    },
    {
      q: "ഈ പാഠത്തിന്റെ രചയിതാവ് ആര്?",
      a: "മാധവിക്കുട്ടി."
    },
    {
      q: "പാഠം നൽകുന്ന സന്ദേശം എന്താണ്?",
      a: "മാതൃഭാഷ നമ്മുടെ ജീവിതത്തിന്റെ അടിസ്ഥാനമാണ്."
    }
  ],
  tips: [
    "പ്രധാന ആശയങ്ങൾ മനഃപാഠമാക്കുക.",
    "രചയിതാവിനെ ഓർക്കുക.",
    "പാഠഭാഗങ്ങൾ വായിച്ച് പരിശീലിക്കുക.",
    "പ്രമേയചോദ്യങ്ങൾ പരിശീലിക്കുക.",
    "പാഠപുസ്തകത്തിലെ പ്രധാന വാക്കുകൾ ഉപയോഗിക്കുക."
  ]
},
{
  id: "malayalam-mannum-manushyanum",
  subject: "Malayalam",
  chapter: "മണ്ണും മനുഷ്യനും",
  formulas: [
    "രചയിതാവ്: എസ്. കെ. പൊറ്റക്കാട്.",
    "പ്രമേയം: മനുഷ്യനും പ്രകൃതിയും തമ്മിലുള്ള അഭേദ്യബന്ധം.",
    "മണ്ണ് മനുഷ്യജീവിതത്തിന്റെ അടിസ്ഥാനമാണ്.",
    "പ്രകൃതിസംരക്ഷണം മനുഷ്യന്റെ കടമയാണ്.",
    "മണ്ണിനെ സംരക്ഷിക്കുന്നത് ഭാവിയെ സംരക്ഷിക്കുന്നതാണ്."
  ],
  shortcuts: [
    "മണ്ണ് → ജീവൻ.",
    "പ്രകൃതി → സംരക്ഷണം.",
    "മനുഷ്യൻ → ഉത്തരവാദിത്വം.",
    "കൃഷി → മണ്ണ്.",
    "പരിസ്ഥിതി → നിലനിൽപ്പ്."
  ],
  tricks: [
    "പ്രമേയം വ്യക്തമായി ഓർക്കുക.",
    "മണ്ണിന്റെ പ്രാധാന്യം മനസ്സിലാക്കുക.",
    "പരിസ്ഥിതി സംരക്ഷണ ആശയങ്ങൾ പഠിക്കുക.",
    "രചയിതാവിന്റെ സന്ദേശം ഓർക്കുക.",
    "പ്രധാന ഭാഗങ്ങൾ ആവർത്തിച്ച് വായിക്കുക."
  ],
  faqs: [
    {
      q: "പാഠത്തിന്റെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "മനുഷ്യനും മണ്ണും തമ്മിലുള്ള അഭേദ്യബന്ധം."
    },
    {
      q: "മണ്ണിനെ സംരക്ഷിക്കേണ്ടത് എന്തുകൊണ്ട്?",
      a: "മനുഷ്യജീവിതത്തിന്റെ നിലനിൽപ്പിനായി."
    },
    {
      q: "ഈ പാഠത്തിന്റെ രചയിതാവ് ആര്?",
      a: "എസ്. കെ. പൊറ്റക്കാട്."
    },
    {
      q: "പാഠം നൽകുന്ന സന്ദേശം എന്താണ്?",
      a: "പ്രകൃതിയെയും മണ്ണിനെയും സംരക്ഷിക്കണം."
    }
  ],
  tips: [
    "പ്രമേയം മനസ്സിലാക്കി പഠിക്കുക.",
    "രചയിതാവിന്റെ പേര് ഓർക്കുക.",
    "പ്രധാന ആശയങ്ങൾ അടിവരയിടുക.",
    "പരിസ്ഥിതി സംബന്ധിച്ച ചോദ്യങ്ങൾ പരിശീലിക്കുക.",
    "പാഠപുസ്തകത്തിലെ പ്രധാന വരികൾ വായിക്കുക."
  ]
},
{
  id: "malayalam-muringamarathoppu",
  subject: "Malayalam",
  chapter: "മുരിങ്ങമരത്തോപ്പ്",
  formulas: [
    "രചയിതാവ്: വൈക്കം മുഹമ്മദ് ബഷീർ.",
    "പ്രമേയം: പ്രകൃതിയോടുള്ള സ്നേഹവും ഗ്രാമീണ ജീവിതവും.",
    "മരങ്ങളും പ്രകൃതിയും മനുഷ്യജീവിതത്തിന്റെ ഭാഗമാണ്.",
    "ലാളിത്യവും നർമ്മവും ഈ പാഠത്തിന്റെ പ്രത്യേകതയാണ്.",
    "പ്രകൃതിയോടുള്ള കരുതൽ മനുഷ്യന്റെ ഉത്തരവാദിത്വമാണ്."
  ],
  shortcuts: [
    "മുരിങ്ങമരം → പ്രകൃതി.",
    "ഗ്രാമം → ലാളിത്യം.",
    "മരം → ജീവൻ.",
    "പ്രകൃതി → സംരക്ഷണം.",
    "ബഷീർ → നർമ്മം."
  ],
  tricks: [
    "പാഠത്തിന്റെ സന്ദേശം മനസ്സിലാക്കുക.",
    "രചയിതാവിന്റെ ശൈലി ഓർക്കുക.",
    "പ്രകൃതിയുമായി ബന്ധപ്പെട്ട ആശയങ്ങൾ പഠിക്കുക.",
    "പ്രധാന സംഭവങ്ങൾ ക്രമത്തിൽ ഓർക്കുക.",
    "നർമ്മത്തിന്റെ ഉപയോഗം ശ്രദ്ധിക്കുക."
  ],
  faqs: [
    {
      q: "പാഠത്തിന്റെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "പ്രകൃതിയോടുള്ള സ്നേഹവും മനുഷ്യബന്ധവുമാണ്."
    },
    {
      q: "ഈ പാഠത്തിന്റെ രചയിതാവ് ആര്?",
      a: "വൈക്കം മുഹമ്മദ് ബഷീർ."
    },
    {
      q: "മുരിങ്ങമരം എന്തിനെ പ്രതിനിധീകരിക്കുന്നു?",
      a: "പ്രകൃതിയെയും ജീവിതത്തെയും."
    },
    {
      q: "പാഠത്തിന്റെ പ്രധാന സന്ദേശം എന്താണ്?",
      a: "പ്രകൃതിയെ സംരക്ഷിക്കുകയും സ്നേഹിക്കുകയും ചെയ്യണം."
    }
  ],
  tips: [
    "രചയിതാവിന്റെ പേര് ഓർക്കുക.",
    "പ്രമേയം വ്യക്തമായി പഠിക്കുക.",
    "പ്രധാന സംഭവങ്ങൾ മനസ്സിലാക്കുക.",
    "പാഠത്തിലെ സന്ദേശം എഴുതാൻ പരിശീലിക്കുക.",
    "പ്രധാന വാക്യങ്ങൾ വായിച്ച് ആവർത്തിക്കുക."
  ]
},
{
  id: "malayalam-charithram-rachicha-nadakam",
  subject: "Malayalam",
  chapter: "ചരിത്രം രചിച്ച നാടകം",
  formulas: [
    "പ്രമേയം: നാടകത്തിന്റെ സാമൂഹിക സ്വാധീനം.",
    "നാടകം സമൂഹമാറ്റത്തിന് ശക്തമായ മാധ്യമമാണ്.",
    "കല സമൂഹത്തിന്റെ കണ്ണാടിയാണ്.",
    "ചരിത്രസംഭവങ്ങൾ കലാരൂപങ്ങളിലൂടെ ജനങ്ങളിലെത്തുന്നു.",
    "നാടകം ബോധവൽക്കരണത്തിനുള്ള ഫലപ്രദമായ ഉപാധിയാണ്."
  ],
  shortcuts: [
    "നാടകം → സമൂഹം.",
    "കല → ബോധവൽക്കരണം.",
    "ചരിത്രം → പാഠം.",
    "അഭിനയം → സന്ദേശം.",
    "വേദി → മാറ്റം."
  ],
  tricks: [
    "പാഠത്തിന്റെ പ്രമേയം വ്യക്തമായി മനസ്സിലാക്കുക.",
    "നാടകത്തിന്റെ സാമൂഹിക പങ്ക് ഓർക്കുക.",
    "പ്രധാന സംഭവങ്ങൾ ക്രമത്തിൽ പഠിക്കുക.",
    "കലയും ചരിത്രവും തമ്മിലുള്ള ബന്ധം മനസ്സിലാക്കുക.",
    "സന്ദേശം സ്വന്തം വാക്കുകളിൽ എഴുതാൻ പരിശീലിക്കുക."
  ],
  faqs: [
    {
      q: "പാഠത്തിന്റെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "നാടകത്തിന്റെ സാമൂഹികവും ചരിത്രപരവുമായ പ്രാധാന്യം."
    },
    {
      q: "നാടകം സമൂഹത്തിന് എങ്ങനെ ഉപകാരപ്പെടുന്നു?",
      a: "ബോധവൽക്കരണത്തിനും മാറ്റത്തിനും സഹായിക്കുന്നു."
    },
    {
      q: "കലയുടെ പ്രധാന ദൗത്യം എന്താണ്?",
      a: "സമൂഹത്തിന് സന്ദേശം നൽകുക."
    },
    {
      q: "പാഠം നൽകുന്ന സന്ദേശം എന്താണ്?",
      a: "കല സമൂഹമാറ്റത്തിന് ശക്തമായ ഉപാധിയാണ്."
    }
  ],
  tips: [
    "പ്രമേയം വ്യക്തമായി പഠിക്കുക.",
    "പ്രധാന സംഭവങ്ങൾ മനസ്സിലാക്കുക.",
    "സാമൂഹിക സന്ദേശം ഓർക്കുക.",
    "പാഠഭാഗങ്ങൾ ആവർത്തിച്ച് വായിക്കുക.",
    "സ്വന്തം ഭാഷയിൽ ഉത്തരമെഴുതാൻ പരിശീലിക്കുക."
  ]
},

{
  id: "malayalam-vijnana-bhashayum-vijnjanika-samoohavum",
  subject: "Malayalam",
  chapter: "വിജ്ഞാനഭാഷയും വിജ്ഞാനിക സമൂഹവും",
  formulas: [
    "പ്രമേയം: വിജ്ഞാനവികസനത്തിൽ ഭാഷയുടെ പങ്ക്.",
    "വിജ്ഞാനഭാഷ അറിവിന്റെ വ്യാപനത്തിന് സഹായിക്കുന്നു.",
    "ശാസ്ത്രവും ഭാഷയും പരസ്പരം ബന്ധപ്പെട്ടതാണ്.",
    "മാതൃഭാഷയിൽ വിജ്ഞാനം ലഭ്യമാകണം.",
    "വിജ്ഞാനസമൂഹത്തിന്റെ വളർച്ചയ്ക്ക് ഭാഷ നിർണായകമാണ്."
  ],
  shortcuts: [
    "ഭാഷ → വിജ്ഞാനം.",
    "ശാസ്ത്രം → പുരോഗതി.",
    "മാതൃഭാഷ → പഠനം.",
    "അറിവ് → സമൂഹവികസനം.",
    "വിജ്ഞാനം → നവോത്ഥാനം."
  ],
  tricks: [
    "ഭാഷയുടെ പ്രാധാന്യം മനസ്സിലാക്കുക.",
    "വിജ്ഞാനസമൂഹം എന്ന ആശയം പഠിക്കുക.",
    "പ്രധാന ആശയങ്ങൾ കുറിപ്പായി തയ്യാറാക്കുക.",
    "ശാസ്ത്രവും ഭാഷയും തമ്മിലുള്ള ബന്ധം ഓർക്കുക.",
    "പ്രമേയം സ്വന്തം വാക്കുകളിൽ എഴുതാൻ പരിശീലിക്കുക."
  ],
  faqs: [
    {
      q: "പാഠത്തിന്റെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "വിജ്ഞാനവികസനത്തിൽ ഭാഷയുടെ പ്രാധാന്യം."
    },
    {
      q: "വിജ്ഞാനഭാഷ എന്തുകൊണ്ട് ആവശ്യമാണ്?",
      a: "അറിവ് എല്ലാവരിലേക്കും എത്തിക്കാൻ."
    },
    {
      q: "മാതൃഭാഷയുടെ പങ്ക് എന്താണ്?",
      a: "വിജ്ഞാനം എളുപ്പത്തിൽ മനസ്സിലാക്കാൻ സഹായിക്കുന്നു."
    },
    {
      q: "പാഠം നൽകുന്ന സന്ദേശം എന്താണ്?",
      a: "ഭാഷയും വിജ്ഞാനവും സമൂഹപുരോഗതിയുടെ അടിസ്ഥാനമാണ്."
    }
  ],
  tips: [
    "പ്രമേയം മനസ്സിലാക്കി പഠിക്കുക.",
    "ഭാഷയും ശാസ്ത്രവും തമ്മിലുള്ള ബന്ധം ഓർക്കുക.",
    "പ്രധാന ആശയങ്ങൾ കുറിച്ചുവെക്കുക.",
    "ചോദ്യോത്തരങ്ങൾ പരിശീലിക്കുക.",
    "സ്വന്തം വാക്കുകളിൽ ഉത്തരമെഴുതാൻ പരിശീലിക്കുക."
  ]
},
{
  id: "malayalam-kathakalathi-mohanam",
  subject: "Malayalam",
  chapter: "കഥകളത്തി മോഹനം",
  formulas: [
    "പ്രമേയം: കലയുടെ സൗന്ദര്യവും സാംസ്കാരിക പൈതൃകവും.",
    "കഥകളി കേരളത്തിന്റെ പ്രധാന ശാസ്ത്രീയ കലാരൂപമാണ്.",
    "കല മനുഷ്യന്റെ വികാരങ്ങളെ പ്രകടിപ്പിക്കുന്നു.",
    "പാരമ്പര്യകലകൾ സംസ്കാരത്തിന്റെ അടയാളമാണ്.",
    "കലയുടെ സംരക്ഷണം സമൂഹത്തിന്റെ ഉത്തരവാദിത്വമാണ്."
  ],
  shortcuts: [
    "കഥകളി → കേരളം.",
    "കല → സംസ്കാരം.",
    "അഭിനയം → വികാരം.",
    "പാരമ്പര്യം → സംരക്ഷണം.",
    "സൗന്ദര്യം → കല."
  ],
  tricks: [
    "പാഠത്തിന്റെ പ്രധാന സന്ദേശം മനസ്സിലാക്കുക.",
    "കഥകളിയുടെ പ്രത്യേകതകൾ ഓർക്കുക.",
    "കലയുടെ സാമൂഹിക പ്രാധാന്യം പഠിക്കുക.",
    "പ്രധാന ആശയങ്ങൾ കുറിപ്പാക്കുക.",
    "പാഠഭാഗങ്ങൾ ആവർത്തിച്ച് വായിക്കുക."
  ],
  faqs: [
    {
      q: "പാഠത്തിന്റെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "കഥകളിയുടെ കലാസൗന്ദര്യവും സാംസ്കാരിക പ്രാധാന്യവും."
    },
    {
      q: "കഥകളി എന്തിന്റെ പ്രതീകമാണ്?",
      a: "കേരളത്തിന്റെ പാരമ്പര്യ കലാസമ്പത്തിന്റെ."
    },
    {
      q: "കലയുടെ പ്രധാന ധർമ്മം എന്താണ്?",
      a: "മനുഷ്യന്റെ വികാരങ്ങളും ആശയങ്ങളും പ്രകടിപ്പിക്കുക."
    },
    {
      q: "പാഠം നൽകുന്ന സന്ദേശം എന്താണ്?",
      a: "പാരമ്പര്യകലകളെ സംരക്ഷിക്കണം."
    }
  ],
  tips: [
    "പ്രമേയം വ്യക്തമായി പഠിക്കുക.",
    "കലാരൂപത്തിന്റെ പ്രത്യേകതകൾ ഓർക്കുക.",
    "പ്രധാന ആശയങ്ങൾ മനസ്സിലാക്കുക.",
    "പാഠഭാഗങ്ങൾ ആവർത്തിച്ച് വായിക്കുക.",
    "സ്വന്തം വാക്കുകളിൽ ഉത്തരമെഴുതാൻ പരിശീലിക്കുക."
  ]
},

{
  id: "malayalam-batherikkaduthu-malankarayil",
  subject: "Malayalam",
  chapter: "ബത്തേരിക്കടുത്ത് മലങ്കരയിൽ",
  formulas: [
    "പ്രമേയം: പ്രകൃതിസൗന്ദര്യവും മനുഷ്യജീവിതവും.",
    "പ്രകൃതി മനുഷ്യന്റെ ആത്മീയ സമ്പത്താണ്.",
    "പരിസ്ഥിതി സംരക്ഷണം എല്ലാവരുടെയും കടമയാണ്.",
    "മനുഷ്യനും പ്രകൃതിയും പരസ്പരാശ്രിതരാണ്.",
    "പ്രകൃതിയെ സ്നേഹിക്കുകയും സംരക്ഷിക്കുകയും വേണം."
  ],
  shortcuts: [
    "പ്രകൃതി → സൗന്ദര്യം.",
    "മലങ്കര → പ്രകൃതി.",
    "പരിസ്ഥിതി → സംരക്ഷണം.",
    "മനുഷ്യൻ → ഉത്തരവാദിത്വം.",
    "സ്നേഹം → പ്രകൃതി."
  ],
  tricks: [
    "പ്രകൃതിവിവരണങ്ങൾ ശ്രദ്ധിക്കുക.",
    "പ്രമേയം മനസ്സിലാക്കുക.",
    "പരിസ്ഥിതി സംരക്ഷണ സന്ദേശം ഓർക്കുക.",
    "പ്രധാന ആശയങ്ങൾ കുറിപ്പാക്കുക.",
    "കവിതയുടെ ഭാവം മനസ്സിലാക്കുക."
  ],
  faqs: [
    {
      q: "കവിതയുടെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "പ്രകൃതിയോടുള്ള സ്നേഹവും സംരക്ഷണവുമാണ്."
    },
    {
      q: "പ്രകൃതിയെ സംരക്ഷിക്കേണ്ടത് എന്തുകൊണ്ട്?",
      a: "മനുഷ്യജീവിതത്തിന്റെ നിലനിൽപ്പിനായി."
    },
    {
      q: "കവിത നൽകുന്ന സന്ദേശം എന്താണ്?",
      a: "പ്രകൃതിയെ സ്നേഹിക്കുകയും സംരക്ഷിക്കുകയും ചെയ്യണം."
    },
    {
      q: "കവിതയിൽ പ്രധാനമായി അവതരിപ്പിക്കുന്നത് എന്താണ്?",
      a: "പ്രകൃതിയുടെ സൗന്ദര്യവും മഹത്വവും."
    }
  ],
  tips: [
    "പ്രധാന ആശയങ്ങൾ മനസ്സിലാക്കുക.",
    "പ്രകൃതിവിവരണങ്ങൾ ശ്രദ്ധിച്ച് പഠിക്കുക.",
    "പ്രമേയം വ്യക്തമായി ഓർക്കുക.",
    "കവിതയുടെ ഭാവം മനസ്സിലാക്കുക.",
    "സ്വന്തം ഭാഷയിൽ ഉത്തരമെഴുതാൻ പരിശീലിക്കുക."
  ]
},
{
  id: "malayalam-prayanam",
  subject: "Malayalam",
  chapter: "പ്രയാണം",
  formulas: [
    "പ്രമേയം: ജീവിതം ഒരു തുടർച്ചയായ യാത്രയാണ്.",
    "ഓരോ അനുഭവവും മനുഷ്യനെ വളർത്തുന്നു.",
    "പ്രതിസന്ധികൾ വിജയത്തിലേക്കുള്ള വഴിയാണ്.",
    "പ്രതീക്ഷ ജീവിതത്തിന് ഊർജം നൽകുന്നു.",
    "യാത്ര ലക്ഷ്യത്തേക്കാൾ അനുഭവങ്ങൾക്ക് പ്രാധാന്യം നൽകുന്നു."
  ],
  shortcuts: [
    "ജീവിതം → യാത്ര.",
    "അനുഭവം → വളർച്ച.",
    "പ്രതീക്ഷ → മുന്നേറ്റം.",
    "പ്രതിസന്ധി → വിജയം.",
    "യാത്ര → പഠനം."
  ],
  tricks: [
    "കവിതയുടെ കേന്ദ്ര ആശയം മനസ്സിലാക്കുക.",
    "യാത്രയുടെ പ്രതീകാത്മക അർത്ഥം ഓർക്കുക.",
    "പ്രധാന വരികളുടെ ആശയം പഠിക്കുക.",
    "ഭാവം സ്വന്തം വാക്കുകളിൽ എഴുതാൻ പരിശീലിക്കുക.",
    "ജീവിതാനുഭവങ്ങളുമായി ബന്ധപ്പെടുത്തി പഠിക്കുക."
  ],
  faqs: [
    {
      q: "കവിതയുടെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "ജീവിതം ഒരു യാത്രയാണെന്നും ഓരോ അനുഭവത്തിനും വിലയുണ്ടെന്നും."
    },
    {
      q: "യാത്ര എന്തിന്റെ പ്രതീകമാണ്?",
      a: "ജീവിതത്തിന്റെ."
    },
    {
      q: "കവിത നൽകുന്ന സന്ദേശം എന്താണ്?",
      a: "പ്രതിസന്ധികളെ ധൈര്യത്തോടെ നേരിട്ട് മുന്നോട്ട് പോകണം."
    },
    {
      q: "അനുഭവങ്ങളുടെ പ്രാധാന്യം എന്താണ്?",
      a: "അവ വ്യക്തിത്വവികസനത്തിന് സഹായിക്കുന്നു."
    }
  ],
  tips: [
    "പ്രമേയം വ്യക്തമായി പഠിക്കുക.",
    "പ്രതീകങ്ങളുടെ അർത്ഥം മനസ്സിലാക്കുക.",
    "കവിതയുടെ ഭാവം ഓർക്കുക.",
    "പ്രധാന വരികൾ വായിച്ച് പരിശീലിക്കുക.",
    "സ്വന്തം ഭാഷയിൽ ഉത്തരമെഴുതുക."
  ]
},

{
  id: "malayalam-vishukkani",
  subject: "Malayalam",
  chapter: "വിഷുക്കണി",
  formulas: [
    "പ്രമേയം: വിഷുവും കേരളത്തിന്റെ സംസ്കാരവും.",
    "വിഷുക്കണി ഐശ്വര്യത്തിന്റെയും പ്രത്യാശയുടെയും പ്രതീകമാണ്.",
    "പാരമ്പര്യ ആചാരങ്ങൾ സംസ്കാരത്തെ സംരക്ഷിക്കുന്നു.",
    "ഉത്സവങ്ങൾ കുടുംബബന്ധങ്ങൾ ശക്തിപ്പെടുത്തുന്നു.",
    "സംസ്കാരപൈതൃകം തലമുറകളിലേക്ക് കൈമാറണം."
  ],
  shortcuts: [
    "വിഷു → ഐശ്വര്യം.",
    "കണി → പ്രത്യാശ.",
    "ഉത്സവം → സംസ്കാരം.",
    "കുടുംബം → ഐക്യം.",
    "പാരമ്പര്യം → സംരക്ഷണം."
  ],
  tricks: [
    "വിഷുക്കണിയുടെ സാംസ്കാരിക പ്രാധാന്യം പഠിക്കുക.",
    "പ്രധാന ആശയങ്ങൾ മനസ്സിലാക്കുക.",
    "ഉത്സവത്തിന്റെ സന്ദേശം ഓർക്കുക.",
    "കേരള സംസ്കാരവുമായി ബന്ധപ്പെടുത്തി പഠിക്കുക.",
    "ഭാവം സ്വന്തം വാക്കുകളിൽ എഴുതാൻ പരിശീലിക്കുക."
  ],
  faqs: [
    {
      q: "കവിതയുടെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "വിഷുവിന്റെ സാംസ്കാരിക പ്രാധാന്യവും ഐശ്വര്യത്തിന്റെ പ്രതീകവുമാണ്."
    },
    {
      q: "വിഷുക്കണി എന്തിന്റെ പ്രതീകമാണ്?",
      a: "പ്രത്യാശയുടെയും സമൃദ്ധിയുടെയും."
    },
    {
      q: "ഉത്സവങ്ങൾ എന്തിന് പ്രധാനമാണ്?",
      a: "സംസ്കാരവും കുടുംബബന്ധങ്ങളും നിലനിർത്താൻ."
    },
    {
      q: "കവിത നൽകുന്ന സന്ദേശം എന്താണ്?",
      a: "പാരമ്പര്യവും സംസ്കാരവും സംരക്ഷിക്കണം."
    }
  ],
  tips: [
    "പ്രമേയം വ്യക്തമായി പഠിക്കുക.",
    "വിഷുവിന്റെ പ്രത്യേകതകൾ ഓർക്കുക.",
    "സാംസ്കാരിക സന്ദേശം മനസ്സിലാക്കുക.",
    "പ്രധാന ആശയങ്ങൾ ആവർത്തിച്ച് വായിക്കുക.",
    "സ്വന്തം ഭാഷയിൽ ഉത്തരമെഴുതാൻ പരിശീലിക്കുക."
  ]
},
{
  id: "malayalam-ente-bhasha",
  subject: "Malayalam",
  chapter: "എന്റെ ഭാഷ",
  formulas: [
    "പ്രമേയം: മാതൃഭാഷയുടെ മഹത്വവും പ്രാധാന്യവും.",
    "ഭാഷ ഒരു ജനതയുടെ സംസ്കാരത്തിന്റെ അടയാളമാണ്.",
    "മാതൃഭാഷ വ്യക്തിത്വ രൂപീകരണത്തിൽ പ്രധാന പങ്ക് വഹിക്കുന്നു.",
    "ഭാഷ പൈതൃകവും ചരിത്രവും തലമുറകളിലേക്ക് കൈമാറുന്നു.",
    "മാതൃഭാഷയെ സ്നേഹിക്കുകയും സംരക്ഷിക്കുകയും വേണം."
  ],
  shortcuts: [
    "മാതൃഭാഷ → വ്യക്തിത്വം.",
    "ഭാഷ → സംസ്കാരം.",
    "ഭാഷ → പൈതൃകം.",
    "മലയാളം → അഭിമാനം.",
    "സംരക്ഷണം → ഉത്തരവാദിത്വം."
  ],
  tricks: [
    "കവിതയുടെ മുഖ്യ ആശയം വ്യക്തമായി പഠിക്കുക.",
    "മാതൃഭാഷയുടെ പ്രാധാന്യം ഉദാഹരണങ്ങളോടെ ഓർക്കുക.",
    "കവിയുടെ സന്ദേശം സ്വന്തം വാക്കുകളിൽ എഴുതാൻ പരിശീലിക്കുക.",
    "സംസ്കാരവും ഭാഷയും തമ്മിലുള്ള ബന്ധം മനസ്സിലാക്കുക.",
    "പ്രധാന വരികളുടെ ആശയം ആവർത്തിച്ച് വായിക്കുക."
  ],
  faqs: [
    {
      q: "കവിതയുടെ പ്രധാന പ്രമേയം എന്താണ്?",
      a: "മാതൃഭാഷയുടെ മഹത്വവും അതിനെ സംരക്ഷിക്കേണ്ടതിന്റെ ആവശ്യകതയും."
    },
    {
      q: "മാതൃഭാഷയ്ക്ക് എന്തുകൊണ്ട് പ്രാധാന്യമുണ്ട്?",
      a: "അത് വ്യക്തിത്വവും സംസ്കാരവും രൂപപ്പെടുത്തുന്നു."
    },
    {
      q: "ഭാഷ എന്തിന്റെ പ്രതീകമാണ്?",
      a: "ഒരു ജനതയുടെ സംസ്കാരത്തിന്റെയും പൈതൃകത്തിന്റെയും."
    },
    {
      q: "കവിത നൽകുന്ന സന്ദേശം എന്താണ്?",
      a: "മാതൃഭാഷയെ സ്നേഹിക്കുകയും സംരക്ഷിക്കുകയും വേണം."
    }
  ],
  tips: [
    "പ്രമേയം വ്യക്തമായി മനസ്സിലാക്കുക.",
    "മാതൃഭാഷയുടെ പ്രാധാന്യം ഓർക്കുക.",
    "കവിയുടെ സന്ദേശം ലളിതമായി എഴുതാൻ പരിശീലിക്കുക.",
    "പ്രധാന ആശയങ്ങൾ ആവർത്തിച്ച് വായിക്കുക.",
    "സ്വന്തം ഭാഷയിൽ വ്യക്തമായ ഉത്തരങ്ങൾ എഴുതുക."
  ]
},
]
export const QUOTES = [
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "Strive for progress, not perfection.", author: "Unknown" }
];
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first-session",
    name: "First Steps",
    description: "Complete your first study session",
    icon: "Sparkles",
    requirement: "1 session"
  },
  {
    id: "streak-7",
    name: "Week Warrior",
    description: "Maintain a 7-day study streak",
    icon: "Flame",
    requirement: "7 day streak"
  },
  {
    id: "streak-30",
    name: "Unstoppable",
    description: "Maintain a 30-day study streak",
    icon: "Trophy",
    requirement: "30 day streak"
  },
  {
    id: "revision-beast",
    name: "Revision Beast",
    description: "Study for 10 hours",
    icon: "Clock",
    requirement: "600 minutes studied"
  },
  {
    id: "quiz-master",
    name: "Quiz Master",
    description: "Complete 10 quizzes",
    icon: "Brain",
    requirement: "10 quizzes"
  },
  {
    id: "level-10",
    name: "Level 10",
    description: "Reach Level 10",
    icon: "Star",
    requirement: "5000 XP"
  }
];
export interface Resource {
  name: string;
  url: string;
  category: string;
  desc: string;
}

export const RESOURCES: Resource[] = [
  {
    name: "NCERT Textbooks",
    url: "https://ncert.nic.in/textbook.php",
    category: "Books",
    desc: "Official NCERT Class 10 textbooks"
  },
  {
    name: "NCERT Exemplar",
    url: "https://ncert.nic.in/exemplar-problems.php",
    category: "Practice",
    desc: "Official exemplar questions"
  },
  {
    name: "CBSE Academic",
    url: "https://cbseacademic.nic.in",
    category: "CBSE",
    desc: "Sample papers, syllabus and official resources"
  },
  {
    name: "DIKSHA",
    url: "https://diksha.gov.in",
    category: "Learning",
    desc: "Government digital learning platform"
  },
  {
    name: "ePathshala",
    url: "https://epathshala.nic.in",
    category: "Books",
    desc: "Free NCERT eBooks and study material"
  },
  {
    name: "Khan Academy",
    url: "https://www.khanacademy.org",
    category: "Videos",
    desc: "Free lessons for Maths and Science"
  },
  {
    name: "Physics Wallah",
    url: "https://www.pw.live",
    category: "Videos",
    desc: "Video lectures and revision"
  },
  {
    name: "Vedantu",
    url: "https://www.vedantu.com",
    category: "Learning",
    desc: "Interactive learning platform"
  }
];