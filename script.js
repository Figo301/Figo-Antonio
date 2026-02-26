        // Script pour gérer la classe active sur la navigation
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('div[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            function setActiveLink() {
                let current = '';
                const scrollPosition = window.scrollY + 150;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href').substring(1);
                    if (href === current) {
                        link.classList.add('active');
                    }
                });
            }
            
            window.addEventListener('scroll', setActiveLink);
            setActiveLink(); // Appel initial
        });