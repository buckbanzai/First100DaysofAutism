var page1 = {
    /* Page */
    id: "FIRST_PAGE",
    header: "Week 1: Organize and Plan",
    overlay: "<strong>Why is it important to get started now?</strong>There may be a waiting list for services and evaluations. Make appointments as soon as possible and follow up as needed. Don&apost hesitate to put your name on multiple lists so you can get the earliest appointment possible.",
    text: "<strong>Schedule Evaluations</strong><br/>If your child has not had a complete workup, schedule the remainder of necessary evaluations.",
    subtext: "Ready to learn more? Go to the <a type=resource>Resource Center: About Autism</a>",

    tasks: [
    {
        /* This item is a single task, there isn't anything else underneath it, I added pagetype=task */
        id: "Action_Week_1_Question1",
        header: "Pediatrician appointment",
        text: "Make an appointment with your child&apos;s pediatrician. [[LINK]]",
        linkId: "Resource_About_Diagnosis_1",
        linkText: "Get more information"
    },
    {
        /* This item goes to another page with several child tasks on it */
        id: "Action_Week_1_Question2",
        header: "Specialist appointment",
        text: "Your pediatrician may recommend appointments with specialists.",
        page: {
            id: "makeAppt",
            subtext: "Make an appointment with a specialist",
            header: "Make an appointment",
            tasks: [
                { id: "CBX1", text: "Early intervention specialist" },
                { id: "CBX2", text: "Developmental pediatrician" },
                { id: "CBX3", text: "Neurologist" },
                { id: "CBX4", text: "Psychiatrist" },
                { id: "CBX5", text: "Psychologist" },
                { id: "CBX6", text: "Audiologist" },
                { id: "CBX7", text: "Speech and Language therapist" },
                { id: "CBX8", text: "Occupational therapist" },
            ]
        }
    }
    ]
}

var page2 = {
    id: "Resource_About_Diagnosis_1",
    header: "Why does my child need a diagnosis of autism?",
    text: "<em>You may wonder: why does my child need a diagnosis of autism? That&apos;s a fair question to ask &mdash; especially when no one is able to offer you a cure.</em>.<br/>A thorough and detailed diagnosis provides important information about your child&apos;s behavior and development. It can help create a roadmap for treatment by identifying your child&apos;s specific strengths and challenges and providing useful information about which needs and skills should be targeted for effective intervention. A diagnosis is often required to access autism-specific services through early intervention programs or your local school district"
}

var page3 = {
    id: "Resource_About_Diagnosis_2",
    header: "How is autism diagnosed?",
    text: "Presently, there is not a medical test for autism a diagnosis is based on observed behavior and educational and psychological testing. As the symptoms of autism vary, so do the routes to obtaining a diagnosis. You may have raised questions with your pediatrician. Some children are identified as having developmental delays before obtaining a diagnosis of autism and may already receive some early intervention or special education services. Unfortunately, parents&apos; concerns are sometimes not taken seriously by their doctor and a diagnosis is delayed. Autism Speaks and other autism-related organizations are working hard to educate parents and physicians, so that children with autism are identified as early as possible.<br/>From birth to at least 36 months of age, every child should be screened for developmental milestones during routine visits. The American Academy of Pediatrics recommends that all children be screened for autism at their 18- and 24-month well-baby checkups. If concerns about a child’s development are raised, his or her doctor should refer the child to Early Intervention and a specialist for a developmental evaluation. Lead exposure and hearing screenings should also be performed. Following the results, your child may be referred to a specialist, usually a <strong>Developmental Pediatrician</strong>, a <strong>Neurologist</strong>, a <strong>Psychiatrist</strong> or a <strong>Psychologist</strong>, for further evaluation. The team of specialists that evaluate your child’s condition may also include an Audiologist, to rule out hearing loss, a <strong>Speech & Language Therapist</strong>, to determine language skills and needs, and an <strong>Occupational Therapist</strong> to evaluate physical and motor skills.<br/>A multi-disciplinary evaluation is important for diagnosing autism and other challenges that often accompany autism, such as delays in motor skills. If your child has not been evaluated by a multi-disciplinary team, you will want to make sure further evaluations are conducted so that you can learn as much as possible about your child’s individual strengths and needs. For more information you can visit the Autism Treatment Network.",
}

var pages = new Array()
pages.push(page1)
pages.push(page2)
pages.push(page3)
