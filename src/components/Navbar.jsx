function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center shadow-md">
      <h2 className="text-2xl font-bold">ReactBlog</h2>
      <ul className="flex gap-6">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">About</li>
        <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
