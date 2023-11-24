document.addEventListener('DOMContentLoaded', function(){

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
    const skills = ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Azure Data Factory', 'Tableau'];


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
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: '#',
        },
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: '#',
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
    displaySkills();
    displayProjects();
});
