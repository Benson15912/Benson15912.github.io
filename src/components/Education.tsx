import { EducationDetails } from "../constants/Education";

export const Education = () => {
    return (
        <div className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Education</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My academic background and qualifications
                    </p>
                </div>

                {/* Education Timeline */}
                <div className="relative">
                    
                    
                    {/* Education Card */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 ml-8">
                        
                        {/* School Info */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                {EducationDetails.school}
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                                {EducationDetails.degree}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 text-gray-600 dark:text-gray-400">
                                <span>{EducationDetails.duration}</span>
                                <span className="hidden sm:block">•</span>
                                <span className="font-semibold text-gray-800 dark:text-gray-200">
                                    {EducationDetails.GPA}
                                </span>
                            </div>
                        </div>

                        {/* Awards */}
                        {EducationDetails.awards && EducationDetails.awards.length > 0 && (
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                    Awards & Honors
                                </h3>
                                <ul className="space-y-2">
                                    {EducationDetails.awards.map((award, index) => (
                                        <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                            {award}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};