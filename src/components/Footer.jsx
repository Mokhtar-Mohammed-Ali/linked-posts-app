export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 fixed bottom-0 start-0 end-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
      
        <div className="text-sm font-medium">
          Mokhtar Mohamed Ali
        </div>

        
        <div className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Linked Posts App. All rights reserved.
        </div>

    
        <div className="flex gap-4">
         
          <a
            href="https://wa.me/201113756009"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            aria-label="WhatsApp"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.97L0 24l6.2-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 21.6c-1.92 0-3.8-.52-5.43-1.52l-.39-.23-3.68.97.98-3.58-.25-.41A9.58 9.58 0 0 1 2.4 12c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm5.38-7.22c-.29-.15-1.72-.84-1.98-.93s-.46-.15-.65.15-.75.93-.92 1.12-.34.22-.63.07c-.29-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.55-.9-2.12-.24-.58-.48-.5-.65-.51h-.56c-.19 0-.51.07-.78.36s-1.02 1-1.02 2.46 1.05 2.86 1.19 3.06c.15.19 2.07 3.16 5.03 4.43.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.97-1.38.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.56-.34z" />
            </svg>
          </a>

       
          <a
            href="https://www.linkedin.com/in/mokhtar-mohammed-29b80624b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.45 20.45h-3.55v-5.41c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.51h-3.55v-11h3.41v1.5h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v5.94zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm1.78 13.02H3.55v-11h3.57v11zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
          </a>

        
          <a
            href="https://github.com/Mokhtar-Mohammed-Ali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.04-.02-2.04-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.74.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.1-.77.41-1.28.74-1.57-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.45-2.69 5.42-5.25 5.71.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.66.8.55A10.97 10.97 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

         
          <a
            href="mailto:mokhtarmohammed101@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition"
            aria-label="Gmail"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
