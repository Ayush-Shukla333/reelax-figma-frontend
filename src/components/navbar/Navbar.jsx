function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center justify-between">

        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          className="w-[320px] border border-gray-300 rounded-md px-4 py-2 text-sm outline-none"
        />

        <div className="flex items-center gap-3">
          <button className="bg-yellow-400 text-white text-sm px-4 py-2 rounded-md">
            Upgrade
          </button>

          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md">
            + Create Campaign
          </button>

          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;