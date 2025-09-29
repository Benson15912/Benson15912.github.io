import { createFileRoute } from '@tanstack/react-router'
import { useTypingText } from '../../hooks/useTypingText';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
    const [content, setContent] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      // fetch the markdown file from public folder
      fetch(`/about.md`)
        .then((res) => {
          if (!res.ok) throw new Error('File not found');
          return res.text();
        })
        .then(setContent)
        .catch((err) => setError(err.message));
    }, []);
  
    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!content) return <p>It is currently being updated!</p>;
  
    return (
      <div className="markdown-body max-w-4xl mx-auto p-6 text-left">
        <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                  ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
                }}
              >
                {content}
              </ReactMarkdown>
      </div>
    );
}
