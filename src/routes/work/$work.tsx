import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Route = createFileRoute('/work/$work')({
  component: RouteComponent,
})

function RouteComponent() {
  const { work } = Route.useParams();
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // fetch the markdown file from public folder
    fetch(`/work_md/${work}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('File not found');
        return res.text();
      })
      .then(setContent)
      .catch((err) => setError(err.message));
  }, [work]);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!content) return <p>Loading...</p>;

  return (
    <>
      <div className="mb-6 mt-5">
        <Link
          to="/work"
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
          Back to Work Experience
        </Link>
      </div>

      <div className="markdown-body max-w-4xl mx-auto p-6 text-left">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </>
    
  );
}
