function Navbar() {
  return (
    <header className="bg-[#F2F4F7] border-b border-[#E4E7EC] h-[64px]">
      <div className="max-w-[1240px] mx-auto px-6 h-full flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <div className="relative w-[520px]">
            <input
              type="text"
              placeholder="Find influencers to collaborate with"
              className="
                w-full
                h-[40px]
                pl-4
                pr-10
                rounded-[10px]
                border-2
                border-[#2E6BE6]
                bg-white
                text-[14px]
                text-[#101828]
                placeholder:text-[#98A2B3]
                outline-none
              "
            />

            {/* Search Icon */}
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#667085"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="20" y1="20" x2="16.5" y2="16.5" />
            </svg>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Upgrade Button */}
          <button className="
            h-[36px]
            px-4
            rounded-[8px]
            bg-[#F59E0B]
            text-white
            text-[13px]
            font-medium
          ">
            Upgrade
          </button>

          {/* Create Campaign Button */}
          <button className="
            h-[36px]
            px-4
            rounded-[8px]
            bg-[#2E6BE6]
            text-white
            text-[13px]
            font-medium
          ">
            + Create Campaign
          </button>

          {/* ✅ Profile + Menu Group (Single Pill Container) */}
          <div className="
            flex
            items-center
            bg-white
            rounded-full
            px-2
            h-[36px]
          ">

            {/* Avatar */}
            <div className="
              w-[28px]
              h-[28px]
              rounded-full
              bg-blue-100
              flex
              items-center
              justify-center
            ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#2E6BE6"
              >
                <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"/>
              </svg>
            </div>

            {/* Space between icons */}
            <div className="w-[12px]" />

            {/* Hamburger */}
            <div className="flex flex-col gap-[3px]">
              <div className="w-[18px] h-[2px] bg-[#344054]" />
              <div className="w-[18px] h-[2px] bg-[#344054]" />
              <div className="w-[18px] h-[2px] bg-[#344054]" />
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;