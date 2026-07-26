import { useState } from 'react';

function CopyableEmail({ email, className = '', linkClassName = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (unsupported browser, no permission, etc.)
      // — the mailto link next to this button still works as a fallback.
    }
  };

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <a
        href={`mailto:${email}`}
        className={`hover:text-royal-palm-500 underline decoration-transparent hover:decoration-current underline-offset-2 transition-colors duration-150 ${linkClassName}`}
      >
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Email address copied' : 'Copy email address'}
        className="inline-flex items-center justify-center w-6 h-6 rounded text-current opacity-60 hover:opacity-100 hover:text-royal-palm-500 transition-all duration-150 active:scale-90"
      >
        {copied ? (
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-royal-palm-500">
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 017.5 4.125v-.75z" />
            <path d="M5.625 4.5A2.625 2.625 0 003 7.125v9.75A2.625 2.625 0 005.625 19.5h8.75A2.625 2.625 0 0017 16.875v-9.75A2.625 2.625 0 0014.375 4.5H14a3.375 3.375 0 01-3.375 3H9.375A3.375 3.375 0 016 4.5h-.375z" />
          </svg>
        )}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`text-xs text-royal-palm-500 transition-opacity duration-200 ${
          copied ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        Copied!
      </span>
    </span>
  );
}

export default CopyableEmail;
