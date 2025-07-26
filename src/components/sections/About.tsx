import RevealOnScroll from "../RevealOnScroll";


export const About = () => {
    const frontendSkills = [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "Redux",
        "HTML/CSS"
    ];

    const backendSkills = ["Node.js", "Express", "Socket.IO", "MongoDB", "MySQL", "Mongoose"];

    const devOpsAndToolsSkills = ["Git", "GitHub", "GitHub Actions","Postman", "AWS EC2"];

    const languages = ["Typescript","JavaScript", "C++", "Python"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border  transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate developer with expertise in building scalable web
                            applications and creating innovative solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:scale-105 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:scale-105 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:scale-105 transition-all">
                                <h3 className="text-xl font-bold mb-4"> DevOps & Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {devOpsAndToolsSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:scale-105 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border-white/10 border  transition-all mt-8">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>

                        <strong> B.Tech. in Computer Science</strong> - IIIT Sonepat
                        (2021-2025)

                    </div>

                    <div className="p-6 rounded-xl border-white/10 border  transition-all mt-8">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className=" text-[17px]">
                                    <strong>Frontend Developer Intern</strong> -  NOHUNG
                                </h4>
                                <h3 className="">
                                    01/2025 - 03/2025 | Remote
                                    <br />
                                </h3>
                                <div className="mt-3">
                                    A company focused on web development solutions

                                    <ul className="mt-3 list-disc pl-4">
                                        <li>Enhanced website responsiveness by implementing mobile-friendly UI design, improving accessibility across devices.</li>
                                        <li>Collaborated with the development team to translate Figma designs into pixel-perfect web components.</li>
                                        <li>Technologies used: HTML, CSS, Tailwind CSS, JavaScript, PHP.</li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </RevealOnScroll>
        </section>
    );
};