var progress = {
    fields: [
        { type: "notes" },
        { type: "todo" },
        { type: "inprog" },
        { type: "completed" }
    ]
};

var week1 = {
    /* Page */
    id: "Action.Week.1",
    header: "Week1: Organize and Plan",
    overlay: "<strong>Why is it important to get started now?</strong> There may be a waiting list for services and evaluations. Make appointments as soon as possible and follow up as needed.     Don&apost hesitate to put your name on multiple lists so you can get the earliest appointment possible.",
    text: "<strong>Schedule Evaluations</strong><br/>If your child has not had a complete workup, schedule the remainder of necessary evaluations.",
    subtext: "Ready to learn more? Go to the <a type=resource>Resource Center: About Autism</a>",

    tasks: [
        {
            /* This item is a single task, there isn't anything else underneath it, I added pagetype=task */
            id: "Action.Week.1.Question1",
            header: "Make an appointment with your child&apos;s pediatrician",
            text: "Make an appointment with your child&apos;s pediatrician"
        },
        {
            /* This item goes to another page with several child tasks on it */
            id: "Action.Week.1.Question2",
            header: "Make an appointment with a specialist",
            text: "Your pediatrician may recommend appointments with specialists.",
            page: {
                header: "Make an appointment",
                tasks: [
                    {
                        text: "Early intervention specialist"
                    },
                    {
                        text: "Developmental pediatrician"
                    }
                    ,
                    {
                        text: "Neurologist"
                    }
                    ,
                    {
                        text: "Psychiatrist"
                    }
                    ,
                    {
                        text: "Psychologist"
                    }
                    ,
                    {
                        text: "Audiologist"
                    }
                    ,
                    {
                        text: "Speech and Language therapist"
                    }
                    ,
                    {
                        text: "Occupational therapist"
                    }]
            }
       }
    ]
};
