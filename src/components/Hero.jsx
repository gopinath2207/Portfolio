const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    {/* Greeting */}
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 glass-card text-primary-400 text-sm font-medium animate-slide-down">
                            👋 Welcome to my portfolio
                        </span>
                    </div>

                    {/* Name & Title */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
                        Full-Stack Developer &
                        <span className="block gradient-text mt-2">Continuous Learner</span>
                    </h1>

                    {/* Bio */}
                    <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        B.Tech student at <span className="text-primary-400 font-semibold">Rajalakshmi Engineering College</span>,
                        passionate about crafting dynamic web applications. Specializing in full-stack development with
                        <span className="text-accent-purple font-semibold"> Django</span> and
                        <span className="text-primary-400 font-semibold"> React</span>,
                        constantly expanding my skills in modern web technologies and data structures.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                        <a href="#projects" className="btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-outline">
                            Get In Touch
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-16 animate-bounce">
                        <svg className="w-6 h-6 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
