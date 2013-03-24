var progress = {
    fields: [
            { type: "notes" },
            { type: "todo" },
            { type: "inprog" },
            { type: "completed" },
            { type: "na" }
        ]
}

var week1 = {
    data: [
        {
            id: "1",
            header: "Make a doctor's appointment",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh tellus, iaculis vitae blandit id, adipiscing dignissim lectus. Maecenas purus elit, ultricies vel gravida vitae, auctor id leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac nisi enim, sit amet consequat velit. Morbi ac massa velit, in facilisis sem. Suspendisse ante metus, fermentum nec tempus in, fermentum ac lorem. Fusce eget consequat tortor.",
            subtext: "Some footer note",
            pagetype: "action",
            children : [
                {
                    id: "1.1",
                    header: "Make a doctor's appointment",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh tellus, iaculis vitae blandit id, adipiscing dignissim lectus. Maecenas purus elit, ultricies vel gravida vitae, auctor id leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac nisi enim, sit amet consequat velit. Morbi ac massa velit, in facilisis sem. Suspendisse ante metus, fermentum nec tempus in, fermentum ac lorem. Fusce eget consequat tortor.",
                    subtext: "Some footer note",
                    pagetype: "resource",
                }, 
                {
                    id: "1.2",
                    header: "Make a doctor's appointment",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh tellus, iaculis vitae blandit id, adipiscing dignissim lectus. Maecenas purus elit, ultricies vel gravida vitae, auctor id leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac nisi enim, sit amet consequat velit. Morbi ac massa velit, in facilisis sem. Suspendisse ante metus, fermentum nec tempus in, fermentum ac lorem. Fusce eget consequat tortor.",
                    subtext: "Some footer note",
                    pagetype: "resource",
                },
               ]

        },
        {
            id: "2",
            header: "Something Else",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh tellus, iaculis vitae blandit id, adipiscing dignissim lectus. Maecenas purus elit, ultricies vel gravida vitae, auctor id leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac nisi enim, sit amet consequat velit. Morbi ac massa velit, in facilisis sem. Suspendisse ante metus, fermentum nec tempus in, fermentum ac lorem. Fusce eget consequat tortor.",
            subtext: "Some footer note"
    },
    ]
}

