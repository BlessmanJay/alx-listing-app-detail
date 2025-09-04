const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">StayNest</div>

        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md w-1/2"
        />

        <div className="space-x-4">
          <button className="text-blue-600 font-semibold">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="mt-4 max-w-7xl mx-auto flex gap-4 overflow-x-auto text-sm text-gray-600">
        {["Rooms", "Mansions", "Countryside", "Beach", "Cabins"].map((type) => (
          <button key={type} className="hover:text-blue-600">
            {type}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
