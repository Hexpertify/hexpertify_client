import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface MarkdownViewerProps {
  content: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
  return (
    <div className="markdown-viewer prose dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneLight}
                customStyle={{
                  backgroundColor: 'var(--tw-prose-pre-bg)',
                }}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-5 mb-3 text-gray-800 dark:text-gray-200" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200" {...props} />,
          p: ({ node, ...props }) => <p className="my-2 text-gray-700 dark:text-gray-300" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-inside my-2 text-gray-700 dark:text-gray-300" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-inside my-2 text-gray-700 dark:text-gray-300" {...props} />,
          li: ({ node, ...props }) => <li className="my-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-500 hover:underline dark:text-blue-400" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-2 text-gray-700 dark:text-gray-300" {...props} />
          ),
          img: ({ node, ...props }) => <img className="max-w-full h-auto my-2" {...props} />,
          pre: ({ node, ...props }) => <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2" {...props} />,
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-2">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => <thead className="bg-gray-50 dark:bg-gray-800" {...props} />,
          th: ({ node, ...props }) => (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" {...props} />
          ),
          td: ({ node, ...props }) => <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

