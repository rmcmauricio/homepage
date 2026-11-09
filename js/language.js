// ============================================
// Language Translation System
// ============================================

const translations = {
    pt: {
        seo: {
            title: "Ricardo Maurício | Engenheiro de Software | O Meu Prédio",
            description: "Ricardo Maurício, engenheiro de software e fundador do O Meu Prédio. SaaS de gestão de condomínios e mais de 25 anos em PHP, APIs e Symfony."
        },
        images: {
            portrait: "Ricardo Maurício, engenheiro de software",
            nr3: "Trabalho de engenharia de software na NR3 IT Limited",
            oa: "Conselho Regional de Lisboa da Ordem dos Advogados",
            omeupredio: "O Meu Prédio, software de gestão de condomínios",
            sync2stage: "Sync2Stage, plataforma para letras em concertos",
            portalforense: "PortalForense, plataforma para profissionais do Direito",
            lisboa: "Sítio da casa de fado Lisboa Menina e Moça"
        },
        nav: {
            home: "Início",
            about: "Sobre",
            skills: "Competências",
            education: "Formação",
            experience: "Experiência",
            projects: "Projectos",
            contact: "Contacto"
        },
        hero: {
            role: "Engenheiro de Software",
            productRole: "Fundador",
            productTag: "SaaS de gestão de condomínios",
            description: "Crio produtos digitais de raiz — da arquitectura backend à experiência do utilizador. Mais de 25 anos em PHP, APIs e sistemas à medida.",
            metaExperience: "25+ anos de experiência",
            contactBtn: "Entre em contacto",
            projectsBtn: "Ver Projectos"
        },
        about: {
            title: "Sobre Mim",
            experience: "Anos de Experiência",
            lead: "Sou engenheiro de software e fundador, com mais de 25 anos a conceber, desenvolver e manter sistemas web. Trabalho sobretudo em backend PHP, APIs e arquitectura, e lanço produtos próprios — o mais recente é o O Meu Prédio.",
            expertise1: {
                title: "Desenvolvimento Full Stack",
                text: "A minha experiência abrange desde desenvolvimento de sites e sistemas de gestão de conteúdo até aplicações web complexas. Tenho conhecimento profundo em frameworks PHP como Symfony, sistemas CMS como Drupal e WordPress, e plataformas educacionais como Moodle."
            },
            expertise2: {
                title: "Bases de Dados",
                text: "Trabalho com bases de dados relacionais (MySQL) e NoSQL (MongoDB), sempre procurando a melhor solução para cada projecto. Experiência em otimização e design de esquemas."
            },
            expertise3: {
                title: "Melhoria Contínua",
                text: "Estou sempre a aprender novas tecnologias e a melhorar as minhas competências para entregar projectos de alta qualidade. Foco em soluções modernas e eficientes."
            },
            additional: {
                languages: {
                    title: "Competências Linguísticas",
                    text: "Muito bom nível de conhecimentos de Inglês – escrito e falado. Certificado First Certificate in English pela University of Cambridge."
                },
                social: {
                    title: "Aptidões Sociais",
                    text: "Espírito de equipa, ouvinte atento, flexível, dinâmico e pro-activo. Capacidade de adaptação a ambientes multiculturais."
                },
                organization: {
                    title: "Competências de Organização",
                    text: "Membro da Tuna Universitária do Instituto Superior Técnico desde 1999, onde participei na organização de vários eventos musicais. Fiz parte de duas direcções, incluindo presidência (2005/2006), e conselho fiscal (2009/2010)."
                }
            }
        },
        skills: {
            title: "Competências & Tecnologias",
            php: "Desenvolvimento backend robusto e escalável",
            html5: "Estrutura semântica e acessível",
            javascript: "Interatividade e experiência do usuário",
            css3: "Design moderno e responsivo",
            drupal: "CMS enterprise e customização",
            wordpress: "Desenvolvimento de temas e plugins",
            moodle: "Plataforma educacional e e-learning",
            symfony: "Framework PHP para aplicações complexas",
            mongodb: "Base de dados NoSQL",
            mysql: "Base de dados relacional",
            reactNative: "Aplicações móveis nativas",
            xml: "Estruturação de dados",
            asp: "Desenvolvimento web Microsoft",
            actionscript: "Desenvolvimento Flash/AIR",
            other: {
                title: "Outras competências"
            },
            software: {
                title: "Software & Ferramentas",
                subtitle: "Ferramentas de trabalho no dia a dia",
                development: {
                    title: "Desenvolvimento"
                },
                apis: {
                    title: "APIs & dados"
                },
                infra: {
                    title: "Servidores & ambiente"
                },
                office: {
                    title: "Microsoft Office"
                },
                adobe: {
                    title: "Adobe Creative Suite"
                }
            }
        },
        education: {
            title: "Formação Académica e Profissional",
            subtitle: "A minha trajetória educacional",
            degree: "Licenciatura em Engenharia Informática e de Computadores",
            description: "Frequência em Engenharia Informática e de Computadores no Instituto Superior Técnico, uma das mais prestigiadas instituições de ensino superior de Portugal.",
            cert1: {
                title: "First Certificate in English",
                description: "Certificado de Inglês pela University of Cambridge (cert. 2335388)."
            },
            cert2: {
                title: "Concepção e Desenvolvimento de conteúdos para eLearning",
                description: "Curso de Formação Profissional com classificação final de Muito Bom (cert. 350/04)."
            },
            cert3: {
                title: "Formação Pedagógica Inicial de Formadores",
                description: "Curso homologado pelo I.E.F.P., para atribuição do CCP (Certificado de Competências Pedagógicas) (cert. F605932/2013)."
            },
            cert4: {
                title: "Treino de Desenvolvimento e Liderança",
                description: "Treino de Desenvolvimento e Liderança pelo INEXH."
            },
            cert5: {
                title: "Formação de Administradores Moodle",
                description: "Curso de Formação Profissional de Formação de Administradores Moodle pela ed-rom (cert. 8/2018)."
            },
            cert6: {
                title: "HTML 5 e CSS3",
                description: "Curso de HTML 5 e CSS3 pela B7Web (cert. 8821193)."
            },
            cert7: {
                title: "Git/GitHub",
                description: "Curso de Git/GitHub pela B7Web (cert. 2687518)."
            },
            cert8: {
                title: "Fundamentos do Scrum",
                description: "Curso de Fundamentos do Scrum pela LinkedIn."
            },
            cert9: {
                title: "Fundamentos de Gestão Ágil",
                description: "Curso de Fundamentos de Gestão Ágil pela LinkedIn."
            },
            cert10: {
                title: "Introdução ao Git e ao GitHub",
                description: "Curso de Introdução ao Git e ao GitHub pela DIO (cert. B5DCB4EF)."
            },
            cert11: {
                title: "Desenvolvimento Ágil de Software",
                description: "Curso de Desenvolvimento Ágil de Software pela LinkedIn."
            },
            cert12: {
                title: "Drupal 8 Beginner to Advanced",
                description: "Drupal Tutorial: Drupal 8 Beginner to Advanced in 8 PROJECTS pela Udemy (cert. UC-6b3c6a93-dcdd-42b3-9a25-4013599feca3)."
            },
            cert13: {
                title: "PHP Unit Testing with PHPUnit",
                description: "Curso de PHP Unit Testing with PHPUnit pela Udemy (cert. UC-7883147c-cfcc-4403-a1d0-63ac64a354f7)."
            },
            showMore: "Ver mais formação",
            showLess: "Ver menos"
        },
        experience: {
            title: "Experiência Profissional",
            subtitle: "Percurso em empresas e instituições"
        },
        projects: {
            heading: "Projectos",
            subtitle: "Produtos e plataformas que concebi e desenvolvi",
            viewProject: "Ver Projecto",
            nr3: {
                title: "Engenheiro de Software / Back End Developer",
                period: "Set 2021 - Presente",
                description: "Desenvolvimento de software e soluções backend para projectos internacionais. Especialização em programação backend com PHP, criando aplicações robustas, escaláveis e de alta performance. Desenvolvimento de APIs, integrações de sistemas e arquitectura de software empresarial."
            },
            oa: {
                title: "Senior Information Technology Technician",
                period: "Jun 2001 - Set 2021 · 20 anos e 4 meses",
                description: "Mais de 20 anos de experiência como técnico sénior de tecnologias de informação, inicialmente como freelancer (2001-2005) e posteriormente em regime full-time (2005-2021). Responsável por suporte técnico, desenvolvimento web, manutenção de sistemas e implementação de soluções tecnológicas para uma das mais importantes instituições jurídicas de Portugal."
            },
            omeupredio: {
                tagline: "Plataforma SaaS de gestão de condomínios",
                period: "Jun 2025 - Presente",
                description: "Como criador e único desenvolvedor, concebi e construí o O Meu Prédio — um SaaS que reúne quotas, recibos, assembleias, comunicação, documentos, ocorrências e reservas num único sistema. Inclui app móvel para condóminos e está em desenvolvimento activo, com novas funcionalidades a serem lançadas continuamente."
            },
            portalforense: {
                description: "Plataforma web completa para profissionais do Direito com mais de 15 anos de existência. Desenvolvi todas as 5 versões do sítio, incluindo ferramentas de cálculo, minutas, gestão de conteúdos e sistema de membros com diferentes planos de acesso."
            },
            sync2stage: {
                description: "Plataforma revolucionária que transforma qualquer concerto numa experiência interativa única. Como criador e único desenvolvedor, concebi e desenvolvi esta solução que sincroniza letras em tempo real entre artistas e público, permitindo que todos cantem juntos durante espetáculos ao vivo. O projecto encontra-se actualmente em desenvolvimento activo, com melhorias e novas funcionalidades a serem implementadas continuamente."
            },
            lisboameninaemoca: {
                description: "Web developer responsável pelo desenvolvimento e manutenção do sítio WordPress da casa de fado tradicional Lisboa Menina e Moça, localizada junto à Sé de Lisboa. Desenvolvimento completo incluindo design moderno, sistema de reservas, galeria de fotos e apresentação da história e músicos desta experiência única de fado ao vivo no coração de Alfama."
            },
            previous: {
                title: "Outros Projectos",
                subtitle: "Projectos desenvolvidos anteriormente",
                rsa: {
                    title: "Webmaster",
                    period: "2007 - 2012",
                    description: "Desenvolvimento e manutenção do site institucional do escritório RSA Advogados."
                },
                apgs: {
                    title: "Webmaster",
                    period: "2006 - 2009",
                    description: "Desenvolvimento e manutenção do site da APGS."
                },
                quintasaojoao: {
                    title: "Web Developer",
                    period: "-",
                    description: "Desenvolvimento do site da Quinta São João."
                },
                sitiodoadvogado: {
                    title: "Webmaster",
                    period: "-",
                    description: "Desenvolvimento e manutenção do site Sítio do Advogado."
                },
                alvesaguas: {
                    title: "Webmaster",
                    period: "-",
                    description: "Desenvolvimento e manutenção do site da empresa Alves & Águas Lda."
                }
            }
        },
        tags: {
            backend: "Backend",
            architecture: "Arquitectura",
            techSupport: "Suporte Técnico",
            webDev: "Desenvolvimento Web",
            systems: "Sistemas"
        },
        contact: {
            title: "Entre em Contacto",
            subtitle: "Vamos conversar sobre o seu próximo projecto",
            email: "Email",
            website: "Sítio Web",
            linkedin: "LinkedIn",
            location: "Localização"
        },
        footer: {
            rights: "Todos os direitos reservados."
        },
        months: {
            jan: "Jan",
            feb: "Fev",
            mar: "Mar",
            apr: "Abr",
            may: "Mai",
            jun: "Jun",
            jul: "Jul",
            aug: "Ago",
            sep: "Set",
            oct: "Out",
            nov: "Nov",
            dec: "Dez"
        },
        time: {
            present: "Presente",
            year: "ano",
            years: "anos",
            month: "mês",
            months: "meses",
            and: "e"
        }
    },
    en: {
        seo: {
            title: "Ricardo Maurício | Software Engineer | O Meu Prédio",
            description: "Ricardo Maurício, software engineer and founder of O Meu Prédio. Condominium management SaaS and 25+ years with PHP, APIs and Symfony."
        },
        images: {
            portrait: "Ricardo Maurício, software engineer",
            nr3: "Software engineering work at NR3 IT Limited",
            oa: "Lisbon Regional Council of the Portuguese Bar Association",
            omeupredio: "O Meu Prédio, condominium management software",
            sync2stage: "Sync2Stage, live concert lyrics platform",
            portalforense: "PortalForense, platform for legal professionals",
            lisboa: "Website of the fado house Lisboa Menina e Moça"
        },
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            education: "Education",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            role: "Software Engineer",
            productRole: "Founder",
            productTag: "Condominium management SaaS",
            description: "I build digital products from the ground up — from backend architecture to user experience. Over 25 years in PHP, APIs and custom systems.",
            metaExperience: "25+ years of experience",
            contactBtn: "Get in touch",
            projectsBtn: "View Projects"
        },
        about: {
            title: "About Me",
            experience: "Years of Experience",
            lead: "I am a software engineer and founder, with over 25 years designing, building and maintaining web systems. I work mainly on PHP backends, APIs and architecture, and I ship my own products — the latest being O Meu Prédio.",
            expertise1: {
                title: "Full Stack Development",
                text: "My experience ranges from website development and content management systems to complex web applications. I have deep knowledge in PHP frameworks like Symfony, CMS systems like Drupal and WordPress, and educational platforms like Moodle."
            },
            expertise2: {
                title: "Databases",
                text: "I work with relational databases (MySQL) and NoSQL (MongoDB), always looking for the best solution for each project. Experience in optimization and schema design."
            },
            expertise3: {
                title: "Continuous Improvement",
                text: "I am always learning new technologies and improving my skills to deliver high-quality projects. Focus on modern and efficient solutions."
            },
            additional: {
                languages: {
                    title: "Language Skills",
                    text: "Very good level of English knowledge – written and spoken. First Certificate in English certified by University of Cambridge."
                },
                social: {
                    title: "Social Skills",
                    text: "Team spirit, attentive listener, flexible, dynamic and proactive. Ability to adapt to multicultural environments."
                },
                organization: {
                    title: "Organizational Skills",
                    text: "Member of the Tuna Universitária do Instituto Superior Técnico since 1999, where I participated in the organization of several musical events. I was part of two boards, including presidency (2005/2006), and fiscal council (2009/2010)."
                }
            }
        },
        skills: {
            title: "Skills & Technologies",
            php: "Robust and scalable backend development",
            html5: "Semantic and accessible structure",
            javascript: "Interactivity and user experience",
            css3: "Modern and responsive design",
            drupal: "Enterprise CMS and customization",
            wordpress: "Theme and plugin development",
            moodle: "Educational platform and e-learning",
            symfony: "PHP framework for complex applications",
            mongodb: "NoSQL database",
            mysql: "Relational database",
            reactNative: "Native mobile apps",
            xml: "Data structuring",
            asp: "Microsoft web development",
            actionscript: "Flash/AIR development",
            other: {
                title: "Other skills"
            },
            software: {
                title: "Software & Tools",
                subtitle: "Tools I use day to day",
                development: {
                    title: "Development"
                },
                apis: {
                    title: "APIs & data"
                },
                infra: {
                    title: "Servers & environment"
                },
                office: {
                    title: "Microsoft Office"
                },
                adobe: {
                    title: "Adobe Creative Suite"
                }
            }
        },
        education: {
            title: "Academic and Professional Education",
            subtitle: "My educational journey",
            degree: "Bachelor's Degree in Computer Science and Engineering",
            description: "Studies in Computer Science and Engineering at Instituto Superior Técnico, one of Portugal's most prestigious higher education institutions.",
            cert1: {
                title: "First Certificate in English",
                description: "English certificate from University of Cambridge (cert. 2335388)."
            },
            cert2: {
                title: "eLearning Content Design and Development",
                description: "Professional training course with final grade of Very Good (cert. 350/04)."
            },
            cert3: {
                title: "Initial Pedagogical Training for Trainers",
                description: "Course approved by I.E.F.P. for the attribution of CCP (Pedagogical Competence Certificate) (cert. F605932/2013)."
            },
            cert4: {
                title: "Development and Leadership Training",
                description: "Development and Leadership Training by INEXH."
            },
            cert5: {
                title: "Moodle Administrator Training",
                description: "Professional training course for Moodle Administrators by ed-rom (cert. 8/2018)."
            },
            cert6: {
                title: "HTML 5 and CSS3",
                description: "HTML 5 and CSS3 course by B7Web (cert. 8821193)."
            },
            cert7: {
                title: "Git/GitHub",
                description: "Git/GitHub course by B7Web (cert. 2687518)."
            },
            cert8: {
                title: "Scrum Fundamentals",
                description: "Scrum Fundamentals course by LinkedIn."
            },
            cert9: {
                title: "Agile Management Fundamentals",
                description: "Agile Management Fundamentals course by LinkedIn."
            },
            cert10: {
                title: "Introduction to Git and GitHub",
                description: "Introduction to Git and GitHub course by DIO (cert. B5DCB4EF)."
            },
            cert11: {
                title: "Agile Software Development",
                description: "Agile Software Development course by LinkedIn."
            },
            cert12: {
                title: "Drupal 8 Beginner to Advanced",
                description: "Drupal Tutorial: Drupal 8 Beginner to Advanced in 8 PROJECTS by Udemy (cert. UC-6b3c6a93-dcdd-42b3-9a25-4013599feca3)."
            },
            cert13: {
                title: "PHP Unit Testing with PHPUnit",
                description: "PHP Unit Testing with PHPUnit course by Udemy (cert. UC-7883147c-cfcc-4403-a1d0-63ac64a354f7)."
            },
            showMore: "Show more education",
            showLess: "Show less"
        },
        experience: {
            title: "Professional Experience",
            subtitle: "Career in companies and institutions"
        },
        projects: {
            heading: "Projects",
            subtitle: "Products and platforms I conceived and built",
            viewProject: "View Project",
            nr3: {
                title: "Software Engineer / Back End Developer",
                period: "Sep 2021 - Present",
                description: "Software development and backend solutions for international projects. Specialization in backend programming with PHP, creating robust, scalable and high-performance applications. API development, system integrations and enterprise software architecture."
            },
            oa: {
                title: "Senior Information Technology Technician",
                period: "Jun 2001 - Sep 2021 · 20 years and 4 months",
                description: "Over 20 years of experience as a senior information technology technician, initially as a freelancer (2001-2005) and later full-time (2005-2021). Responsible for technical support, web development, system maintenance and implementation of technological solutions for one of Portugal's most important legal institutions."
            },
            omeupredio: {
                tagline: "Condominium management SaaS",
                period: "Jun 2025 - Present",
                description: "As creator and sole developer, I designed and built O Meu Prédio — a SaaS that brings together service charges, receipts, assemblies, messaging, documents, incident tracking and common-area bookings in a single system. It includes a mobile app for residents and is in active development, with new features shipping continuously."
            },
            portalforense: {
                description: "Complete web platform for legal professionals with over 15 years of existence. I developed all 5 versions of the site, including calculation tools, templates, content management and membership system with different access plans."
            },
            sync2stage: {
                description: "Revolutionary platform that transforms any concert into a unique interactive experience. As creator and sole developer, I conceived and developed this solution that synchronizes lyrics in real-time between artists and audience, allowing everyone to sing together during live performances. The project is currently in active development, with improvements and new features being continuously implemented."
            },
            lisboameninaemoca: {
                description: "Web developer responsible for the development and maintenance of the WordPress site of the traditional fado house Lisboa Menina e Moça, located near Lisbon Cathedral. Complete development including modern design, reservation system, photo gallery and presentation of the history and musicians of this unique live fado experience in the heart of Alfama."
            },
            previous: {
                title: "Other Projects",
                subtitle: "Previously developed projects",
                rsa: {
                    title: "Webmaster",
                    period: "2007 - 2012",
                    description: "Development and maintenance of the institutional website of the RSA Advogados law firm."
                },
                apgs: {
                    title: "Webmaster",
                    period: "2006 - 2009",
                    description: "Development and maintenance of the APGS website."
                },
                quintasaojoao: {
                    title: "Web Developer",
                    period: "-",
                    description: "Development of the Quinta São João website."
                },
                sitiodoadvogado: {
                    title: "Webmaster",
                    period: "-",
                    description: "Development and maintenance of the Sítio do Advogado website."
                },
                alvesaguas: {
                    title: "Webmaster",
                    period: "-",
                    description: "Development and maintenance of the Alves & Águas Lda. company website."
                }
            }
        },
        tags: {
            backend: "Backend",
            architecture: "Architecture",
            techSupport: "Technical Support",
            webDev: "Web Development",
            systems: "Systems"
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Let's talk about your next project",
            email: "Email",
            website: "Website",
            linkedin: "LinkedIn",
            location: "Location"
        },
        footer: {
            rights: "All rights reserved."
        },
        months: {
            jan: "Jan",
            feb: "Feb",
            mar: "Mar",
            apr: "Apr",
            may: "May",
            jun: "Jun",
            jul: "Jul",
            aug: "Aug",
            sep: "Sep",
            oct: "Oct",
            nov: "Nov",
            dec: "Dec"
        },
        time: {
            present: "Present",
            year: "year",
            years: "years",
            month: "month",
            months: "months",
            and: "and"
        }
    }
};

// Current language (default: Portuguese)
let currentLang = localStorage.getItem('language') || 'pt';

// Function to get nested translation value
function getTranslation(key, lang = currentLang) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// Function to translate all elements
function translatePage(lang = currentLang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';

    const title = getTranslation('seo.title', lang);
    const description = getTranslation('seo.description', lang);
    if (title) {
        document.title = title;
    }
    if (description) {
        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', description);
        }
        ['meta[property="og:title"]', 'meta[name="twitter:title"]'].forEach(selector => {
            const el = document.querySelector(selector);
            if (el && title) {
                el.setAttribute('content', title);
            }
        });
        ['meta[property="og:description"]', 'meta[name="twitter:description"]'].forEach(selector => {
            const el = document.querySelector(selector);
            if (el) {
                el.setAttribute('content', description);
            }
        });
        const locale = document.querySelector('meta[property="og:locale"]');
        if (locale) {
            locale.setAttribute('content', lang === 'pt' ? 'pt_PT' : 'en_US');
        }
    }

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const translation = getTranslation(element.getAttribute('data-i18n-alt'), lang);
        if (translation) {
            element.setAttribute('alt', translation);
        }
    });
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        
        if (translation) {
            // Handle special cases for links with icons
            if (element.classList.contains('project-link')) {
                const icon = element.querySelector('i');
                if (icon) {
                    element.innerHTML = translation + ' ' + icon.outerHTML;
                } else {
                    element.textContent = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const langCode = langToggle.querySelector('.lang-code');
        if (langCode) {
            langCode.textContent = lang === 'pt' ? 'EN' : 'PT';
        }
        langToggle.setAttribute('title', lang === 'pt' ? 'Change to English' : 'Mudar para Português');
        langToggle.setAttribute('aria-label', lang === 'pt' ? 'Change to English' : 'Mudar para Português');
    }
    
    // Save language preference
    localStorage.setItem('language', lang);
    
    // Update project durations if needed (wait a bit for DOM to update)
    setTimeout(() => {
        if (typeof updateProjectDurations === 'function') {
            updateProjectDurations();
        }
    }, 100);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLang);
    
    // Language toggle button event
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            translatePage(newLang);
        });
    }
});

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, getTranslation, translatePage, currentLang };
}

