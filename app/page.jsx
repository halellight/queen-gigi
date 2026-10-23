import fs from 'fs';
import path from 'path';
import Script from 'next/script';

// Reads the <body> of app/index.html (everything before the <script> tag).
export default function Page() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'app/index.html'), 'utf8');
  const html = raw.replace(/[\s\S]*<body[^>]*>/i, '').replace(/<script[\s\S]*$/i, '');
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}