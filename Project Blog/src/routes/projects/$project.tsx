import { useEffect, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Route = createFileRoute('/projects/$project')({
  component: RouteComponent,
});

function RouteComponent() {
  const { project } = Route.useParams();
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // fetch the markdown file from public folder
    fetch(`/project_md/${project}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('File not found');
        return res.text();
      })
      .then(setContent)
      .catch((err) => setError(err.message));
  }, [project]);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!content) return <p>Loading...</p>;

  return (
    <div className="markdown-body max-w-4xl mx-auto p-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
