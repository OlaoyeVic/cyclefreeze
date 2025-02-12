const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-green-600">CycleBreeze</div>
      <ul className="hidden md:flex gap-6 font-medium text-gray-700">
        <li className="hover:text-green-500 cursor-pointer">Home</li>
        <li className="hover:text-green-500 cursor-pointer">How It Works</li>
        <li className="hover:text-green-500 cursor-pointer">Why Us</li>
        <li className="hover:text-green-500 cursor-pointer">Contact</li>
      </ul>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 hidden md:block">Get Started</button>
    </nav>
  );
};
export default Navbar;