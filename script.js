document.addEventListener('DOMContentLoaded', function(){

    // Function to handle header animation on scroll
    function handleHeaderAnimation() {
        const header = document.querySelector('header');
        window.addEventListener('scroll', function () {
            const scrollPos = window.scrollY;
            if (scrollPos > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }


    // Function to toggle education details visibility
    function toggleEducationDetails(index) {
        const educationDetails = document.querySelector(`.school[data-index="${index}"] .education-details`);
        if (educationDetails) {
            educationDetails.style.display = educationDetails.style.display === 'none' ? 'block' : 'none';
        }
    }

    // Add click event listeners to education entries
    const educationEntries = document.querySelectorAll('.school');
    educationEntries.forEach(education => {
        education.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            toggleEducationDetails(index);
        });
    });


    // Add click event listeners to job entries
    const jobEntries = document.querySelectorAll('.job');
    jobEntries.forEach(job => {
        job.addEventListener('click', function(){
            const index = this.getAttribute('data-index');
            toggleJobDetails(index);
        });
    });

    // Function to toggle job details visibility
    function toggleJobDetails(index) {
        const jobDetails = document.querySelector(`.job[data-index="${index}"] .job-details`);
        if(jobDetails){
            jobDetails.style.display = jobDetails.style.display === 'none' ? 'block' : 'none';
        }
    }


    // Skills data (replace with your own skills)
    const skills = ['Python', 'SQL', 'JavaScript', 'HTML5', 'CSS3', 'MS Excel (Macros, VBA) ', 'Azure Data Factory', 'Tableau', 'Agile Development', 'Scrum', 'Power Automate Cloud', 'Automation Anywhere AA360'];


    // Function to dynamically add skills to the skills container
    function displaySkills() {
        const skillsContainer = document.querySelector('.skills-container');

        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill');
            skillElement.textContent = skill;
            skillsContainer.appendChild(skillElement);
        });
    }

    // Projects data (replace with your own projects)
    const projects = [
        {
            title: 'Python SQL Server CRUD Interaction',
            description: "Developed a Python project showcasing proficiency in SQL database interaction and data manipulation. Created a custom Python class, 'SQLServerDB', to establish connections with a SQL Server database and perform CRUD operations (Create, Read, Update, Delete) on the  'Customers' table. Leveraged the pyodbc library for seamless database connectivity. The project demonstrates hands-on experience in implementing database-driven applications and handling real-world data scenarios using Python. Skills Demonstrated: Python, SQL Server, pyodbc, CRUD Operations, Data Manipulation, Error Handling.",
            link: 'https://github.com/adityarana99/SQL-Server-CRUD-Operations-with-Python',
        },
        {
            title: 'Library Management System',
            description: "Implemented a Library Management System in Python, showcasing data modeling and interaction with a Microsoft SQL Server database. The system facilitates management of information about authors, books, and library patrons through a user-friendly command-line interface. Key features include data modeling with SQLAlchemy, support for CRUD operations. Skills Demonstrated: Data modeling with SQLAlchemy, CRUD operations, Error handling, Database interaction, Command-line application development.",
            link: 'https://github.com/adityarana99/Library-Management-System',
        },
        // Add more projects as needed
    ];

    
    // Function to dynamically add project cards to the projects section
    function displayProjects() {
        const projectsContainer = document.querySelector('.projects-container');

        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button class="btn" data-index="${index}">View Details</button>
            `;

            projectsContainer.appendChild(projectCard);
        });

        // Add event listener to the projects container for event delegation
        projectsContainer.addEventListener('click', function(event){
            const eventTarget = event.target;
            if (eventTarget.classList.contains('btn')) {
                const index = eventTarget.getAttribute('data-index');
                openModal(index);
            }
        });
    }

    // Function to open a modal window with project details
    function openModal(projectIndex) {
        const project = projects[projectIndex];

        const modalContent = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p><strong>Link:</strong> <a href="${project.link}" target="_blank">${project.link}</a></p>
            <button class="btn close-btn">Close</button>
        `;

        showModal(modalContent);

        // Add event listener for close button clicks after modal is shown
        const closeButton = document.querySelector('.close-btn');
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }
    }

    // Function to show a modal window with content
    function showModal(content) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = content;

        modalContainer.appendChild(modal);
        document.body.appendChild(modalContainer);

        // Close modal on overlay click
        modalContainer.addEventListener('click', closeModal);

        // Prevent clicks inside the modal from closing the modal
        modal.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Function to close the modal window
    function closeModal() {
        const modalContainer = document.querySelector('.modal-container');
        if (modalContainer) {
            document.body.removeChild(modalContainer);
        }
    }

    // Call the functions to display skills and projects
    handleHeaderAnimation();
    displaySkills();
    displayProjects();
});
