document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form submission
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });

  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelectorAll(".nav-link");

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    navToggle.checked = false;
  };

  // Add click event listeners to all nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Close mobile menu when clicking outside of it
  document.addEventListener("click", (event) => {
    const isClickInsideNav = event.target.closest("nav");
    if (!isClickInsideNav && navToggle.checked) {
      closeMobileMenu();
    }
  });

  // Add theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function toggleTheme() {
    document.body.dataset.theme =
      document.body.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", document.body.dataset.theme);
  }

  themeToggle.addEventListener("click", toggleTheme);

  // Set initial theme
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.body.dataset.theme = currentTheme;
  } else if (prefersDarkScheme.matches) {
    document.body.dataset.theme = "dark";
  }

  // Skills chart
  const skills = [
    { name: "HTML5", level: 90, icon: "fab fa-html5" },
    { name: "CSS3", level: 85, icon: "fab fa-css3-alt" },
    { name: "JavaScript", level: 80, icon: "fab fa-js" },
    { name: "React", level: 75, icon: "fab fa-react" },
    { name: "Node.js", level: 70, icon: "fab fa-node-js" },
    { name: "Python", level: 65, icon: "fab fa-python" },
    { name: "Git", level: 85, icon: "fab fa-git-alt" },
    { name: "Responsive Design", level: 90, icon: "fas fa-mobile-alt" },
    { name: "RESTful APIs", level: 75, icon: "fas fa-exchange-alt" },
    { name: "SQL", level: 70, icon: "fas fa-database" },
    { name: "Agile/Scrum", level: 80, icon: "fas fa-users" },
    { name: "UI/UX Design", level: 65, icon: "fas fa-pencil-ruler" },
  ];

  const skillsChart = document.querySelector(".skills-chart");
  skills.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.classList.add("skill-item");
    skillItem.innerHTML = `
      <i class="${skill.icon}"></i>
      <h3>${skill.name}</h3>
      <div class="skill-bar-container">
        <div class="skill-bar" style="width: ${skill.level}%"></div>
      </div>
      <span class="skill-level">${skill.level}%</span>
    `;
    skillsChart.appendChild(skillItem);
  });

  // Projects
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "path/to/ecommerce-project-image.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      link: "#",
      github: "https://github.com/yourusername/ecommerce-project",
    },
    {
      title: "Task Management App",
      description:
        "A responsive task management application with real-time updates. Users can create, assign, and track tasks across teams.",
      image: "path/to/task-management-image.jpg",
      technologies: ["Vue.js", "Firebase", "Vuex", "Bootstrap"],
      link: "#",
      github: "https://github.com/yourusername/task-management-app",
    },
    {
      title: "Weather Forecast Dashboard",
      description:
        "An interactive weather dashboard that provides real-time weather information and forecasts for multiple cities.",
      image: "path/to/weather-dashboard-image.jpg",
      technologies: [
        "JavaScript",
        "OpenWeatherMap API",
        "Chart.js",
        "HTML5",
        "CSS3",
      ],
      link: "#",
      github: "https://github.com/yourusername/weather-dashboard",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A mobile-responsive web app for tracking personal finances, including income, expenses, and savings goals.",
      image: "path/to/finance-tracker-image.jpg",
      technologies: ["React Native", "Redux", "Node.js", "PostgreSQL"],
      link: "#",
      github: "https://github.com/yourusername/finance-tracker",
    },
  ];

  const projectGrid = document.querySelector(".project-grid");
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="technologies">
          ${project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
        <div class="project-links">
          <a href="${
            project.link
          }" class="cta-button" target="_blank">View Project</a>
          <a href="${
            project.github
          }" class="github-link" target="_blank"><i class="fab fa-github"></i> View Code</a>
        </div>
      </div>
    `;
    projectGrid.appendChild(projectCard);
  });

  // Form submission functionality (keep as is)
  // ...
});
