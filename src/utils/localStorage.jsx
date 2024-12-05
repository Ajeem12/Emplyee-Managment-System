const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      complete: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Implement the user authentication system using JWT.",
        active: true,
        newTask: false,
        complete: true,
        failed: false,
        date: "2024-12-04",
        category: "Development",
      },
      {
        title: "Task 2",
        description: "Create wireframes for the upcoming mobile application.",
        active: false,
        newTask: true,
        complete: false,
        failed: true,
        date: "2024-12-04",
        category: "Design",
      },
    ],
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 0,
      newTask: 1,
      complete: 0,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Test the login and registration functionality for bugs.",
        active: false,
        newTask: true,
        complete: false,
        failed: true,
        date: "2024-12-04",
        category: "Testing",
      },
      {
        title: "Task 2",
        description: "Document the REST API endpoints for developers.",
        active: true,
        newTask: false,
        complete: true,
        failed: false,
        date: "2024-12-04",
        category: "Documentation",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      complete: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Conduct market research for the upcoming product launch.",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        date: "2024-12-04",
        category: "Research",
      },
      {
        title: "Task 2",
        description: "Design the user interface for the dashboard.",
        active: false,
        newTask: false,
        complete: true,
        failed: true,
        date: "2024-12-04",
        category: "Design",
      },
    ],
  },
  {
    id: 4,
    firstName: "Aditya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 0,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Develop the backend logic for processing payments.",
        active: false,
        newTask: true,
        complete: true,
        failed: false,
        date: "2024-12-04",
        category: "Development",
      },
      {
        title: "Task 2",
        description: "Perform regression testing on the billing module.",
        active: true,
        newTask: false,
        complete: false,
        failed: true,
        date: "2024-12-04",
        category: "Testing",
      },
    ],
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      complete: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Write detailed documentation for the onboarding process.",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        date: "2024-12-04",
        category: "Documentation",
      },
      {
        title: "Task 2",
        description:
          "Analyze competitor strategies for improving user engagement.",
        active: false,
        newTask: false,
        complete: true,
        failed: true,
        date: "2024-12-04",
        category: "Research",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
