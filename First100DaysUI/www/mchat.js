var mchat = {
    survey: [
        {question: "Does your child enjoy being swung, bounced on your knee, etc.?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child take an interest in other children?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]}
    ],
    scoreRanges: [
        {minScore: 0, maxScore: 2, message: "Low" },
        {minScore: 3, maxScore: 6, message: "Elevated" },
        {minScore: 7, maxScore: 50000, message: "Hgh" }
    ]
};