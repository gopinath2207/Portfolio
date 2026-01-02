const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: "💻",
            skills: ["Python", "Java", "C", "JavaScript", "HTML/CSS"]
        },
        {
            title: "Frameworks & Libraries",
            icon: "⚛️",
            skills: ["Django", "React", "Tailwind CSS"]
        },
        {
            title: "Tools & Platforms",
            icon: "🛠️",
            skills: ["VS Code", "GitHub", "Git", "Examly", "npm"]
        },
        {
            title: "Core Concepts",
            icon: "🎯",
            skills: ["Data Structures", "OOP", "Database Design",]
        },
        {
            title: "Currently Learning",
            icon: "📚",
            skills: ["Advanced React Patterns", "TypeScript", "DSA", "System Design"]
        }
    ];

    return (
        <section id="skills" className="section-container bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-slate-400 text-lg">Technologies and tools I work with</p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={category.title}
                            className="glass-card-hover p-6 animate-scale-in"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{category.icon}</span>
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skill-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 glass-card p-6 text-center animate-fade-in">
                    <p className="text-slate-300 leading-relaxed">
                        Continuously expanding my technical expertise through hands-on projects,
                        online courses, and staying updated with the latest web development trends.
                        <span className="block mt-2 text-primary-400 font-medium">
                            Always eager to learn new technologies and best practices! 🚀
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
