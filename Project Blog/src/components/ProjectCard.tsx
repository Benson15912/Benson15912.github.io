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
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-sm transition-all duration-200 text-left">
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {projectName}
                    </h3>
                    {category && (
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {category}
                        </p>
                    )}
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {description}
            </p>

            {/* Skills */}
            {skills && skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span 
                            key={skill} 
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full"
                        >
                            <SkillIcon skill={skill} size="sm" />
                            {skill}
                        </span>
                    ))}
                </div>
            )}
            <div className="justify-end flex">
                {link && (
                    <Link
                        to={link}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium 
                                   text-blue-600 dark:text-blue-400 border border-blue-200 
                                   dark:border-blue-700 rounded-lg 
                                   hover:bg-blue-50 dark:hover:bg-blue-900/30 
                                   hover:border-blue-300 dark:hover:border-blue-600 
                                   transition-colors cursor-pointer whitespace-nowrap"
                    >
                        Learn more →
                    </Link>
                )}
            </div>
            
        </div>
    );
};