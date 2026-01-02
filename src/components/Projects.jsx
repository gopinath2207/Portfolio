const Projects = () => {
    const featuredProject = {
        title: "EaselX - Art Buying Platform",
        description: "A comprehensive Django full-stack web application connecting artists and art enthusiasts. Features include artist profiles, artwork galleries, secure payment integration, user authentication, and a dynamic marketplace for buying and selling art pieces.",
        technologies: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript", "Payment Gateway"],
        features: [
            "Artist portfolio management system",
            "Artwork upload and showcase functionality",
            "Secure user authentication and authorization",
            "Integrated payment processing",
            "Search and filter capabilities",
            "Responsive design for all devices"
        ],
        github: "#",
        live: "https://easel-x.onrender.com/",
        image: "🎨"
    };

    const minorProjects = [
        {
            title: "Interactive UI Components",
            description: "Collection of reusable React components built while learning frontend development, featuring modern design patterns and animations.",
            technologies: ["React", "JavaScript", "CSS"],
            github: "#"
        },
        {
            title: "Responsive Landing Pages",
            description: "Multiple landing page designs implementing responsive layouts, CSS Grid, Flexbox, and modern web design principles.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "#"
        },
        {
            title: "JavaScript Mini Projects",
            description: "Various interactive projects including calculators, to-do lists, and DOM manipulation exercises built during the learning phase.",
            technologies: ["JavaScript", "HTML", "CSS"],
            github: "#"
        }
    ];

    return (
        <section id="projects" className="section-container">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-400 text-lg">Building real-world applications and learning through hands-on experience</p>
                </div>

                {/* Featured Project */}
                <div className="mb-20 animate-slide-up">
                    <div className="glass-card p-8 md:p-10 hover:bg-white/10 transition-all duration-300">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Project Visual */}
                            <div className="flex items-center justify-center">
                                <div className="text-9xl animate-float">{featuredProject.image}</div>
                            </div>

                            {/* Project Details */}
                            <div>
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 rounded-full text-xs font-medium text-accent-purple">
                                        ⭐ Featured Project
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4 gradient-text">{featuredProject.title}</h3>
                                <p className="text-slate-300 mb-6 leading-relaxed">{featuredProject.description}</p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Features:</h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {featuredProject.features.map((feature, idx) => (
                                            <li key={idx} className="text-slate-300 text-sm flex items-start">
                                                <span className="text-primary-400 mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {featuredProject.technologies.map((tech) => (
                                            <span key={tech} className="skill-badge text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    {featuredProject.live && (
                                        <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                                            View Live Demo →
                                        </a>
                                    )}
                                    {featuredProject.github && (
                                        <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Minor Projects Grid */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {minorProjects.map((project, idx) => (
                            <div
                                key={idx}
                                className="project-card animate-scale-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors inline-flex items-center"
                                    >
                                        View Code →
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
