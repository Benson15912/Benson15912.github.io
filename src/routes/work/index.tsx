import { createFileRoute } from '@tanstack/react-router'
import WorkExperienceCard from '../../components/WorkExperienceCard';
import { workDetails } from '../../constants/WorkExperience';
import { Education } from '../../components/Education';

export const Route = createFileRoute('/work/')({
  component: RouteComponent,
})


function RouteComponent() {
  return (
    <div className="min-h-screen mt-15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and contributions across different roles and organizations
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="space-y-12">
          {workDetails.map((work, index) => (
            <WorkExperienceCard 
                key={index}
                experience={{
                ...work,
                }}
                isLast={index === workDetails.length - 1}
            />
            ))}
        </div>

        {/* Empty state if no work experience */}
        {workDetails.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No work experience to display yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}