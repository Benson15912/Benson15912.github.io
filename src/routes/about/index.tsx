import { createFileRoute } from '@tanstack/react-router'
import { useTypingText } from '../../hooks/useTypingText';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { MarkdownDisplay } from '../../components/MarkDownDisplay';

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
      <MarkdownDisplay contentPath={`/aboutme.md`} />
    );
}
