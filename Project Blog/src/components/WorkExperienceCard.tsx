import { Link } from "@tanstack/react-router";
import { SkillIcon } from "./SkillIcon";

interface WorkExperienceCardProps {
    experience: {
        company: string;
        logo?: string;
        role: string;
        duration: string;
        summary: string;
        link: string;
        skills?: string[];
    };
    isLast: boolean;
}

const WorkExperienceCard = ({ experience, isLast }: WorkExperienceCardProps) => {
    return (
        <div className="relative pl-12">
            {/* Timeline line */}
            {/* {!isLast && (
            <div
                className="absolute left-6 top-12 bottom-0 w-0.5
                        bg-gradient-to-b from-gray-300 to-gray-200
                        dark:from-gray-600 dark:to-gray-700"
            />
            )} */}

            {/* Timeline dot (centered to the line) */}
            {/* <div
            className="absolute left-[25px] top-8 w-6 h-6 -translate-x-1/2
                        flex items-center justify-center pointer-events-none"
            >
            <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-500
                            ring-4 ring-white dark:ring-gray-800 shadow-sm" />
            </div> */}



            {/* Card */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                {/* Header */}
                <div className="flex items-start sm:items-center gap-4 mb-4">
                    {experience.logo && (
                        <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="w-12 h-12 object-contain rounded-md border border-gray-200 dark:border-gray-600 shadow-sm"
                        />
                    )}
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {experience.company}
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                                {experience.role}
                            </span>
                            <span className="hidden sm:block text-gray-400">•</span>
                            <span className="text-gray-500 dark:text-gray-400">
                                {experience.duration}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <p className="text-gray-700 dark:text-gray-300 text-left">
                    {experience.summary}
                </p>

                {/* Skills */}
                {experience.skills && experience.skills.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                    <span 
                        key={skill} 
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        <SkillIcon skill={skill} size="sm" />
                        {skill}
                    </span>
                    ))}
                </div>
                )}

                {/* Link */}
                {experience.link && (
                <div className="mt-1 flex justify-end">
                    <Link
                    to={experience.link}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium 
                                text-blue-600 dark:text-blue-400 border border-blue-200 
                                dark:border-blue-700 rounded-lg 
                                hover:bg-blue-50 dark:hover:bg-blue-900/30 
                                hover:border-blue-300 dark:hover:border-blue-600 
                                transition-colors cursor-pointer"
                    >
                    Learn more →
                    </Link>
                </div>
                )}

                
            </div>
        </div>
    );
};

export default WorkExperienceCard;
