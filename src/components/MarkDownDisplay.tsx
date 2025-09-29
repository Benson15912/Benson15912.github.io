import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const MarkdownDisplay = ({ contentPath }: { contentPath: string }) => {
    const [content, setContent] = React.useState<string>('');
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        fetch(contentPath)
            .then((res) => {
                if (!res.ok) throw new Error('File not found');
                return res.text();
            })
            .then(setContent)
            .catch((err) => setError(err.message));
    }, [contentPath]);

    if (error) return <p>Post is yet to be updated</p>;
    if (!content) return <p>Post is yet to be updated</p>;

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
};
