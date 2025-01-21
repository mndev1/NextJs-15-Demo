export default function Footer() {
  return (
    <footer>
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by zeezsoft
      </p>
      <a href="https://www.zeezsoft.com" target="_blank" rel="external">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="#c9c9c9"
          // stroke-linecap="round"
          // stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
          <path d="M2 12h20"></path>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </a>
    </footer>
  );
}
