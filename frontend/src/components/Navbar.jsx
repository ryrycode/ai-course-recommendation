export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-700">
          Thinker AI
        </h1>

        {/* Navigation */}
        <ul className="flex gap-10 text-gray-700 font-medium">
          <li className="hover:text-green-700 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-green-700 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-green-700 cursor-pointer transition">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}