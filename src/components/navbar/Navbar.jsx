function Navbar() {
  return (
    <header className="bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          className="
          w-[360px]
          h-[40px]
          border
          border-[#E5E7EB]
          rounded-lg
          px-4
          text-sm
          bg-[#F9FAFB]
          outline-none
          focus:border-[#2563EB]
          "
        />

        <div className="flex items-center gap-3">

          <button className="
            h-[36px]
            px-4
            bg-[#F59E0B]
            text-white
            text-sm
            rounded-lg
            font-medium
          ">
            Upgrade
          </button>

          <button className="
            h-[36px]
            px-4
            bg-[#2563EB]
            text-white
            text-sm
            rounded-lg
            font-medium
          ">
            + Create Campaign
          </button>

          <div className="w-9 h-9 rounded-full bg-[#E5E7EB]"></div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;