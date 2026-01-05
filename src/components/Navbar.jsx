import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900">
          ReactBlog
        </Link>

        <div className="flex gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/about" className="hover:text-black">About</Link>
        </div>
      </nav>
    </header>
  );
}
