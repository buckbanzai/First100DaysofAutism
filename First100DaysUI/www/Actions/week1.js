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
            text: "Make an appointment with your child&apos;s pediatrician",
            pagetype: "action"
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
                    }
                ]
            },
            children: [
                {
                    /* This item is a single task, there isn't anything else underneath it, I added pagetype=task */
                    id: "Action.Week.1.Question1",
                    header: "",
                    text: "Make an appointment with your child&apos;s pediatrician",
                    subtext: "",
                    pagetype: "task"
                },
                {
                    header: "Something Else",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh tellus, iaculis vitae blandit id, adipiscing dignissim lectus. Maecenas purus elit, ultricies vel gravida vitae, auctor id leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac nisi enim, sit amet consequat velit. Morbi ac massa velit, in facilisis sem. Suspendisse ante metus, fermentum nec tempus in, fermentum ac lorem. Fusce eget consequat tortor.",
                    subtext: "Some footer note"
                }
            ]

        }
    ]
};
