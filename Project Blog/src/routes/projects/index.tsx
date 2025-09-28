import { createFileRoute } from '@tanstack/react-router'
import { Projects } from '../../constants/Projects'
import { ProjectCard } from '../../components/ProjectCard'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my technical projects and research work in AI, full-stack development, and computer vision
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.projectName}
              image={project.image}
              date={project.date}
              role={project.role}
              description={project.description}
              skills={project.skills}
              link={project.link}
            />
          ))}
        </div>

        {/* Empty State */}
        {Projects.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 max-w-md mx-auto">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No Projects Yet</h3>
              <p className="text-gray-500 dark:text-gray-400">Projects will be added soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
