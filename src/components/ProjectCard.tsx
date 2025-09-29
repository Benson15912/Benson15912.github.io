import { Link } from "@tanstack/react-router";
import { SkillIcon } from "./SkillIcon";

interface ProjectCardProps {
    projectName: string;
    date: string;
    image?: string;
    role: string;
    description: string;
    link?: string;
    skills?: string[];
    category?: string;
}

export const ProjectCard = ({ projectName, date, image, role, description, link, skills, category }: ProjectCardProps) => {
    return (
        <div className="bg-white  rounded-lg border border-gray-200  p-6 hover:shadow-sm transition-all duration-200 text-left hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="w-full h-48 rounded-md mb-4 overflow-hidden">
            {image ? (
                <img
                src={image}
                alt={projectName}
                className="w-full h-full object-cover"
                />
            ) : (
                <div className="w-full h-full bg-gray-100 bg-[url('/textures/gray-texture.png')] bg-cover bg-center flex items-center justify-center">
                {/* Optional placeholder text/icon */}
                </div>
            )}
            </div>

            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900  mb-1">
                        {projectName}
                    </h3>
                    {category && (
                        <p className="text-sm font-medium text-blue-600 ">
                            {category}
                        </p>
                    )}
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-700  leading-relaxed mb-4">
                {description}
            </p>

            {/* Skills */}
            {skills && skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span 
                            key={skill} 
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700  bg-gray-100  border border-gray-300  rounded-full"
                        >
                            <SkillIcon skill={skill} size="sm" />
                            {skill}
                        </span>
                    ))}
                </div>
            )}
            <div className="justify-end flex mt-4">
                {link && (
                    <Link
                        to={link}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium 
                                   text-blue-600  border border-blue-200 
                                    rounded-lg 
                                   hover:bg-blue-50 :bg-blue-900/30 
                                   hover:border-blue-300 :border-blue-600 
                                   transition-colors cursor-pointer whitespace-nowrap"
                    >
                        Learn more →
                    </Link>
                )}
            </div>
            
        </div>
    );
};