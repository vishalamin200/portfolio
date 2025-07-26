import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import RevealOnScroll from "../RevealOnScroll";



export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:scale-105 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
                            <p className="text-gray-400 mb-4">
                                Scalable chat platform supporting real-time messaging, presence,
                                and group chat features.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Socket.IO", "Next.js", "Typescript", "React", "Redux", "Node.js", "Express", "MongoDb"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:scale-105
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center ">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                                <div className="flex items-center gap-x-5">

                                    <a href="#" className="rounded-full h-5 w-5  flex-center cursor-pointer" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="h-full w-full" />
                                    </a>

                                    <a href="https://codeacademy.vishalamin.site" className="rounded-full h-6 w-6 flex-center cursor-pointer " target="_blank" rel="noopener noreferrer">
                                        <TbWorld className="h-full w-full" />
                                    </a>

                                </div>
                            </div>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10 hover:scale-105 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> AI Assistant - Multilingual Chatbot</h3>
                            <p className="text-gray-400 mb-4">
                                An AI-powered chatbot which support Indian languages
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Next.js", "Typescript", "React", "Redux", "MongoDB", "Google Gemini API"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                                <div className="flex items-center gap-x-5">

                                    <a href="https://github.com/vishalamin200/Shark-Ai-An-Ai-Assistant" className="rounded-full h-5 w-5  flex-center cursor-pointer" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="h-full w-full" />
                                    </a>

                                    <a href="https://shark-ai.vercel.app" className="rounded-full h-6 w-6 flex-center cursor-pointer " target="_blank" rel="noopener noreferrer">
                                        <TbWorld className="h-full w-full" />
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:scale-105 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">CodeAcademy - Full Stack LMS</h3>
                            <p className="text-gray-400 mb-4">
                                A Learning Management System where instructors can create and manage courses while students can enroll in them.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Javascript", "Redux", "Tailwind CSS", "Node.js", "Express.js", "Cloudinary", "Razorpay", "MongoDb"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:scale-105
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                                <div className="flex items-center gap-x-5">

                                    <a href="https://github.com/vishalamin200/Learning_Management_System" className="rounded-full h-5 w-5  flex-center cursor-pointer" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="h-full w-full" />
                                    </a>

                                    <a href="https://codeacademy.vishalamin.site" className="rounded-full h-6 w-6 flex-center cursor-pointer " target="_blank" rel="noopener noreferrer">
                                        <TbWorld className="h-full w-full" />
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:scale-105 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Hate Speech Detector</h3>
                            <p className="text-gray-400 mb-4">
                                A Machine Learning model which categorized the speech as hateful, offensive or neither.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Flask", "Python", "Pandas", "Numpy", "Matplotlib", "React"].map(

                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:scale-105
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                                <div className="flex items-center gap-x-5">

                                    <a href="https://github.com/vishalamin200/Hate-Speech-Detector" className="rounded-full h-5 w-5  flex-center cursor-pointer" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="h-full w-full" />
                                    </a>

                                    <a href="https://hate-speech-detector-vishal.vercel.app" className="rounded-full h-6 w-6 flex-center cursor-pointer " target="_blank" rel="noopener noreferrer">
                                        <TbWorld className="h-full w-full" />
                                    </a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};