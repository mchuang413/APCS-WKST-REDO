function injectResubmitDates() {
    const asideElement = document.querySelector('#todo');

    if (asideElement && !document.querySelector('.resubmit-assignments')) {
        const resubmitDiv = document.createElement('div');
        resubmitDiv.classList.add('resubmit-assignments');
        resubmitDiv.textContent = '⚠️ APCS Assignment Resubmit Dates';
        resubmitDiv.style.marginTop = '10px';

        assignments.forEach((assignment) => {
            const assignmentElement = createAssignmentElement(assignment);
            resubmitDiv.appendChild(assignmentElement);
        });

        asideElement.appendChild(resubmitDiv);
    }
}

const assignments = [
    {
        title: "Resubmit: APCS In-Class Lab 13.5 User Input (DEMO DEMO DEMO)",
        dueDate: "Due Friday, November 15, 2024, at 11:59 pm",
        course: "AP Computer Science A"
    },
    {
        title: "Resubmit: APCS Recursion Test (DEMO DEMO DEMO)",
        dueDate: "Due Monday, November 18, 2024, at 10:00 am",
        course: "AP Computer Science A"
    }
];

function createAssignmentElement(assignment) {

    const assignmentDiv = document.createElement('div');
    assignmentDiv.classList.add('assignment-item');

    const titleElement = document.createElement('h4');
    titleElement.textContent = assignment.title;
    titleElement.style.color = '#00b0ff'; 

    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = assignment.dueDate;
    dueDateElement.style.color = '#cccccc'; 

    const courseElement = document.createElement('p');
    courseElement.textContent = assignment.course;
    courseElement.style.color = '#888888';

    assignmentDiv.appendChild(titleElement);
    assignmentDiv.appendChild(dueDateElement);
    assignmentDiv.appendChild(courseElement);

    return assignmentDiv;
}

setTimeout(injectResubmitDates, 1000);