export default function Footer() {
  return (
    <footer className="py-8 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Milton Villarreal. Hecho con{" "}
          <span className="text-accent">Next.js</span> y{" "}
          <span className="text-accent">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
