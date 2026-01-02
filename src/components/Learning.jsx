const Learning = () => {
    const learningPath = [
        {
            category: "Current Focus",
            status: "In Progress",
            color: "from-accent-purple to-accent-pink",
            items: [
                { name: "React & Modern JavaScript", progress: 75 },
                { name: "Advanced React Patterns", progress: 60 },
                { name: "Tailwind CSS", progress: 70 }
            ]
        },
        {
            category: "Upcoming Goals",
            status: "Planned",
            color: "from-primary-500 to-accent-cyan",
            items: [
                { name: "Data Structures & Algorithms", progress: 30 },
                { name: "System Design Fundamentals", progress: 20 },
            ]
        }
    ];

    const coursework = [
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering",
        "Operating Systems",
        "Computer Networks"
    ];

    return (
        <section id="learning" className="section-container">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Learning <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-slate-400 text-lg">Continuous growth through education and self-learning</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Learning Path */}
                    {learningPath.map((path, idx) => (
                        <div key={path.category} className="glass-card p-6 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-white">{path.category}</h3>
                                <span className={`px-3 py-1 bg-gradient-to-r ${path.color} bg-opacity-20 rounded-full text-xs font-medium`}>
                                    {path.status}
                                </span>
                            </div>

                            <div className="space-y-4">
                                {path.items.map((item) => (
                                    <div key={item.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-300 text-sm font-medium">{item.name}</span>
                                            <span className="text-primary-400 text-sm font-semibold">{item.progress}%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                                            <div
                                                className={`h-full bg-gradient-to-r ${path.color} rounded-full transition-all duration-500`}
                                                style={{ width: `${item.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Relevant Coursework */}
                <div className="glass-card p-8 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Relevant <span className="gradient-text">Coursework</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {coursework.map((course, idx) => (
                            <div
                                key={course}
                                className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                            >
                                <span className="text-primary-400">📖</span>
                                <span className="text-slate-300 text-sm">{course}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Growth Mindset Quote */}
                <div className="mt-8 text-center animate-fade-in">
                    <blockquote className="text-slate-400 italic text-lg">
                        "Every project is a learning opportunity, every challenge is a chance to grow."
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default Learning;
