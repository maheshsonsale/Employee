const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}]
const employees = [
    {
        id: 101,
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                title: "Complete report",
                description: "Finish and submit the Q2 financial report.",
                date: "2025-05-27",
                category: "Finance",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Attend meeting",
                description: "Weekly team sync-up.",
                date: "2025-05-28",
                category: "Meetings",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Update client list",
                description: "Ensure all client records are up to date.",
                date: "2025-05-25",
                category: "Admin",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 102,
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "Bug Fixing",
                description: "Fix login bug on portal.",
                date: "2025-05-26",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Code Review",
                description: "Review teammate's pull request.",
                date: "2025-05-27",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Research API",
                description: "Find suitable APIs for integration.",
                date: "2025-05-28",
                category: "Research",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Write Documentation",
                description: "Document backend endpoints.",
                date: "2025-05-24",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 103,
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                title: "Design Logo",
                description: "Create logo for new client.",
                date: "2025-05-29",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Create Wireframes",
                description: "Design app wireframes.",
                date: "2025-05-27",
                category: "Design",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Color Scheme Review",
                description: "Choose final colors for project.",
                date: "2025-05-25",
                category: "Design",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "UI Feedback",
                description: "Gather and act on feedback for UI.",
                date: "2025-05-30",
                category: "UX",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 104,
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                title: "Client Follow-up",
                description: "Call 3 clients for feedback.",
                date: "2025-05-26",
                category: "Sales",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "CRM Update",
                description: "Update lead status in CRM.",
                date: "2025-05-27",
                category: "Sales",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Pitch Deck",
                description: "Create deck for new proposal.",
                date: "2025-05-28",
                category: "Sales",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 105,
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                title: "Inventory Audit",
                description: "Check and report current stock.",
                date: "2025-05-26",
                category: "Operations",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Vendor Meeting",
                description: "Discuss delivery delays with supplier.",
                date: "2025-05-27",
                category: "Operations",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Update SOPs",
                description: "Revise operational guidelines.",
                date: "2025-05-28",
                category: "Documentation",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Safety Drill",
                description: "Conduct fire safety drill.",
                date: "2025-05-25",
                category: "Safety",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Team Training",
                description: "Schedule and run onboarding session.",
                date: "2025-05-30",
                category: "HR",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
const employees= JSON.parse(localStorage.getItem('employees'))
const admin= JSON.parse(localStorage.getItem('admin'))
return (employees,admin)

}



