import { useEffect, useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { MarkdownDisplay } from '../../components/MarkDownDisplay';

export const Route = createFileRoute('/projects/$project')({
  component: RouteComponent,
});

function RouteComponent() {
  const { project } = Route.useParams();

  return (
    <>
    <div className="mb-6 mt-5">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium 
                          text-gray-700  bg-gray-100  
                          rounded-lg hover:bg-gray-200 :bg-gray-700 
                          transition-colors"
              >
                {/* Back arrow icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
            </div>
      <MarkdownDisplay contentPath={`/project_md/${project}.md`} />
    </>
  );
}
