document.addEventListener('DOMContentLoaded', () => {
    const projectsBtn = document.getElementById('projectsBtn');
    const backBtn = document.getElementById('backBtn');
    const projectsSection = document.getElementById('projectsSection');
    const mainContent = document.querySelector('.content');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');

    // Ø¥Ø¶Ø§ÙØ© Ø§Ù„ØªÙ…Ø±ÙŠØ± Ø§Ù„Ø³Ù„Ø³ Ù„Ù„Ù…Ø­ØªÙˆÙ‰
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    projectsBtn.addEventListener('click', () => {
        projectsSection.classList.remove('hidden');
        projectsSection.style.transform = 'translateX(0)';
        mainContent.style.transform = 'translateX(-100%)';
        mainContent.style.opacity = '0';
        
        projectsBtn.style.display = 'none';
        backBtn.style.display = 'inline-block';

        // Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø¬Ø§Ù†Ø¨ÙŠØ© ÙÙŠ Ø§Ù„Ø´Ø§Ø´Ø§Øª Ø§Ù„ØµØºÙŠØ±Ø©
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    backBtn.addEventListener('click', () => {
        projectsSection.style.transform = 'translateX(100%)';
        mainContent.style.transform = 'translateX(0)';
        mainContent.style.opacity = '1';
        
        setTimeout(() => {
            projectsSection.classList.add('hidden');
        }, 500);
        
        projectsBtn.style.display = 'inline-block';
        backBtn.style.display = 'none';

        // Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø¬Ø§Ù†Ø¨ÙŠØ© ÙÙŠ Ø§Ù„Ø´Ø§Ø´Ø§Øª Ø§Ù„ØµØºÙŠØ±Ø©
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // ØªÙØ¹ÙŠÙ„/Ø¥Ø®ÙØ§Ø¡ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø¬Ø§Ù†Ø¨ÙŠØ© ÙˆØªØºÙŠÙŠØ± Ø´ÙƒÙ„ Ø§Ù„Ø²Ø±
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø¹Ù†Ø¯ Ø§Ù„Ù†Ù‚Ø± Ø®Ø§Ø±Ø¬Ù‡Ø§
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø¹Ù†Ø¯ Ø§Ù„Ù†Ù‚Ø± Ø¹Ù„Ù‰ Ø£ÙŠ Ø±Ø§Ø¨Ø·
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // ØªØ­Ø¯ÙŠØ« Ø­Ø§Ù„Ø© Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø¹Ù†Ø¯ ØªØºÙŠÙŠØ± Ø­Ø¬Ù… Ø§Ù„Ù†Ø§ÙØ°Ø©
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Ø¥Ø¶Ø§ÙØ© event listeners Ù„Ù„Ù…Ø´Ø§Ø±ÙŠØ¹
    document.querySelectorAll('.project-card').forEach(card => {
        console.log('Adding click listener to project card: - main.js:88', card);
        card.addEventListener('click', function(e) {
            console.log('Project card clicked: - main.js:90', this);
            e.preventDefault();
            e.stopPropagation();
            openModal(this);
        });
    });

    // Ø¥ØºÙ„Ø§Ù‚ Modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('projectModal').style.display = 'none';
    });

    // Ø¥ØºÙ„Ø§Ù‚ Modal Ø¹Ù†Ø¯ Ø§Ù„Ù†Ù‚Ø± Ø®Ø§Ø±Ø¬ Ø§Ù„Ù…Ø­ØªÙˆÙ‰
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

function openModal(project) {
    console.log('openModal called with: - main.js:112', project);
    
    try {
        const modal = document.getElementById('projectModal');
        const modalImage = document.getElementById('modalImage');
        const modalVideo = document.getElementById('modalVideo');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalTech = document.getElementById('modalTech');
        const modalLink = document.getElementById('modalLink');

        console.log('Modal elements found: - main.js:123', { modal, modalImage, modalVideo, modalTitle, modalDescription, modalTech, modalLink });

        // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ù…Ù† Ø§Ù„Ø¨Ø·Ø§Ù‚Ø©
        const projectImage = project.querySelector('img');
        const projectTitle = project.querySelector('h3');
        const projectDescription = project.querySelector('p');
        const projectTechTags = project.querySelectorAll('.tech-tag');
        const documentationLink = project.querySelector('.documentation-btn');
        const projectDetails = project.querySelector('.details');
        const projectVideo = project.querySelector('.video-data');
        console.log('projectVideo: - main.js:133', projectVideo);
        const projectCodeBtn = project.querySelector('a[href*="github.com/Rami-sharif/Eye-controlled-mouse.git"]');

        console.log('Project elements found: - main.js:136', { projectImage, projectTitle, projectDescription, projectTechTags, documentationLink, projectDetails, projectVideo, projectCodeBtn });

        // Ø¥Ø°Ø§ ÙƒØ§Ù† Ù‡Ù†Ø§Ùƒ ÙÙŠØ¯ÙŠÙˆ
        if (projectVideo && projectVideo.dataset.video) {
            modalVideo.pause();
            modalVideo.removeAttribute('src');
            modalVideo.muted = true;
            modalVideo.src = projectVideo.dataset.video;
            console.log('video src: - main.js:144', modalVideo.src);
            modalVideo.style.display = 'block';
            modalVideo.autoplay = true;
            modalVideo.loop = true;
            modalVideo.load();
            setTimeout(() => { modalVideo.play(); }, 200);
            modalImage.style.display = 'none';
            // ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ø´Ø±Ø­ Ø§Ù„Ù…ÙØµÙ„
            if (projectVideo && projectVideo.dataset.description) {
                let desc = projectVideo.dataset.description.trim();
                // ØªÙ‚Ø³ÙŠÙ… Ø§Ù„ÙÙ‚Ø±Ø§Øª Ø¹Ù„Ù‰ Ø£Ø³Ø§Ø³ \n\n
                let paragraphs = desc.split(/\n\n+/).map(par => {
                    // Ø¥Ø¨Ø±Ø§Ø² Ø§Ù„Ø¹Ù†Ø§ÙˆÙŠÙ† Ø§Ù„ÙØ±Ø¹ÙŠØ© (Ø£ÙŠ Ø³Ø·Ø± ÙŠÙ†ØªÙ‡ÙŠ Ø¨Ù€ :)
                    par = par.replace(/^([^\n:]+):/gm, '<b>$1:</b>');
                    // Ø§Ø³ØªØ¨Ø¯Ø§Ù„ \n Ø¨ÙØ§ØµÙ„ Ø³Ø·Ø±
                    par = par.replace(/\n/g, ' ');
                    return `<p>${par}</p>`;
                });
                modalDescription.innerHTML = `<div class='modal-description' style='font-size:1em; line-height:1.7;'>${paragraphs.join('')}</div>`;
            } else {
                modalDescription.textContent = '';
            }
            // Ø¥Ø¶Ø§ÙØ© Ø²Ø± Ø§Ù„ÙƒÙˆØ¯ Ø¨Ø¬Ø§Ù†Ø¨ Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª
            if (documentationLink) {
                const codeBtn = document.createElement('a');
                codeBtn.href = documentationLink.href;
                codeBtn.target = '_blank';
                codeBtn.className = 'documentation-btn';
                codeBtn.textContent = documentationLink.textContent;
                modalTech.appendChild(codeBtn);
            }
        } else {
            console.log('Regular project detected - main.js:176');
            modalVideo.pause();
            modalVideo.removeAttribute('src');
            modalVideo.style.display = 'none';
            modalImage.src = projectImage.src;
            modalImage.alt = projectImage.alt;
            modalImage.style.display = 'block';
            modalDescription.textContent = projectDescription.textContent;
            // Ø¥Ø¶Ø§ÙØ© Ø²Ø± Ø§Ù„ÙƒÙˆØ¯ Ø¨Ø¬Ø§Ù†Ø¨ Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª
            if (documentationLink) {
                const codeBtn = document.createElement('a');
                codeBtn.href = documentationLink.href;
                codeBtn.target = '_blank';
                codeBtn.className = 'documentation-btn';
                codeBtn.textContent = documentationLink.textContent;
                modalTech.appendChild(codeBtn);
            }
        }

        modalTitle.textContent = projectTitle.textContent;

        // Ø¥Ø²Ø§Ù„Ø© Ø£ÙŠ ØªÙØ§ØµÙŠÙ„ Ù…ÙˆØ¬ÙˆØ¯Ø© Ø³Ø§Ø¨Ù‚Ø§Ù‹
        const existingDetails = modal.querySelector('.details');
        if (existingDetails) {
            existingDetails.remove();
        }

        // Ø¥Ø¶Ø§ÙØ© Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©
        if (projectDetails) {
            const detailsContainer = document.createElement('div');
            detailsContainer.className = 'details';
            detailsContainer.innerHTML = projectDetails.innerHTML;
            modalDescription.after(detailsContainer);
        }

        // Ø¥Ø¶Ø§ÙØ© Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª ÙˆØ§Ù„Ø±Ø§Ø¨Ø·
        modalTech.innerHTML = '';
        projectTechTags.forEach(tag => {
            const newTag = tag.cloneNode(true);
            modalTech.appendChild(newTag);
        });

        // Ø¥Ø¶Ø§ÙØ© Ø²Ø± Ø§Ù„ÙƒÙˆØ¯ Ø¨Ø¬Ø§Ù†Ø¨ Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª
        if (documentationLink) {
            const codeBtn = document.createElement('a');
            codeBtn.href = documentationLink.href;
            codeBtn.target = '_blank';
            codeBtn.className = 'documentation-btn';
            codeBtn.textContent = documentationLink.textContent;
            modalTech.appendChild(codeBtn);
        }

        console.log('Opening modal - main.js:228');
        modal.style.display = 'block';
    } catch (error) {
        console.error('Error in openModal: - main.js:231', error);
    }
}