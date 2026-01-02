const Contact = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: "🐙",
            url: "https://github.com/gopinath2207",
            color: "hover:text-slate-300"
        },
        {
            name: "LinkedIn",
            icon: "💼",
            url: "https://www.linkedin.com/in/gopinath-u-76327a32b/",
            color: "hover:text-blue-400"
        },
        {
            name: "Email",
            icon: "📧",
            url: "mailto:gopinathu6@gmail.com",
            color: "hover:text-primary-400"
        }
    ];

    return (
        <section id="contact" className="section-container bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        I'm always excited to collaborate on projects and explore new opportunities
                    </p>
                </div>

                {/* Contact Card */}
                <div className="glass-card p-8 md:p-12 text-center animate-scale-in">
                    <div className="mb-8">
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            Whether you have a project in mind, want to discuss technology, or just want to say hi,
                            feel free to reach out. I'm always open to new connections and opportunities!
                        </p>
                        <a
                            href="mailto:your.email@example.com"
                            className="inline-block btn-primary text-lg"
                        >
                            Send Me an Email
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="border-t border-slate-700 pt-8">
                        <p className="text-slate-400 mb-4">Connect with me on:</p>
                        <div className="flex justify-center gap-6 flex-wrap">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center gap-2 text-slate-400 transition-all duration-300 transform hover:scale-110 ${link.color}`}
                                >
                                    <span className="text-4xl">{link.icon}</span>
                                    <span className="text-sm font-medium">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center text-slate-500 text-sm animate-fade-in">
                    <p>© 2025 Portfolio. Built with React, Tailwind CSS, and passion for learning.</p>
                    <p className="mt-2">
                        Proudly pursuing B.Tech at{" "}
                        <span className="text-primary-400 font-medium">Rajalakshmi Engineering College</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
