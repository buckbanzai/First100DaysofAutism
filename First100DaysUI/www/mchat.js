var mchat = {
    survey: [
        {question: "Does your child enjoy being swung, bounced on your knee, etc.?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child take an interest in other children?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child like climbing on things such as stairs?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child enjoy playing peek-a-boo/hide-and-seek?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child ever pretend, for example, to talk on the phone or take care of a doll or other pretend things?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child ever use an index finger to point, to ask for something?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child ever use an index finger to point, to indicate interest in something?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Can your child play properly with small toys (e.g. cars or blocks) without just mouthing, fiddling, or dropping them?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child ever bring objects over to you (parent) to show you something?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child look you in the eye for more than a second or two?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child ever seem oversensitive to noise? (e.g., plugging ears)", answers: [
            {text: "Yes", score: 1},
            {text: "No", score: 0}
        ]},
        {question: "Does your child smile in response to your face or your smile?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child imitate you? (e.g. If you make a face, will your child do so?)", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child respond to his/her name when you call?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "If you point at a toy across the room, does your child look at it?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child walk?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child look at things you are looking at?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child make unusual finger movements near his/her face?", answers: [
            {text: "Yes", score: 1},
            {text: "No", score: 0}
        ]},
        {question: "Does your child try to attract your attention to his/her own activity?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Have you ever wondered if your child is deaf?", answers: [
            {text: "Yes", score: 1},
            {text: "No", score: 0}
        ]},
        {question: "Does your child understand what people say?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]},
        {question: "Does your child sometimes stare at nothing or wander with no purpose?", answers: [
            {text: "Yes", score: 1},
            {text: "No", score: 0}
        ]},
        {question: "Does your child look at your face to check your reaction when faced with the unfamiliar?", answers: [
            {text: "Yes", score: 0},
            {text: "No", score: 1}
        ]}
    ],
    scoreRanges: [
        {minScore: 0, maxScore: 2, message: "Low" },
        {minScore: 3, maxScore: 6, message: "Elevated" },
        {minScore: 7, maxScore: 50000, message: "High" }
    ]
};