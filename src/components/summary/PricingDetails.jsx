function PricingDetails() {
  return (
    <div className="
      bg-white
      rounded-[16px]
      p-6
      border
      border-[#E4E7EC]
      shadow-sm
    ">

      {/* ✅ WALLET BOX */}
      <div className="
        flex
        justify-between
        items-center
        border
        border-[#E4E7EC]
        rounded-[12px]
        p-4
        mb-5
        bg-[#F9FAFB]
      ">

        <div className="flex items-center gap-3">
          
          {/* Wallet Icon */}
          <div className="w-[32px] h-[32px] bg-[#EEF4FF] rounded-full flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2E6BE6"
              strokeWidth="2"
            >
              <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" />
              <path d="M3 10h18" />
            </svg>
          </div>

          <div>
            <p className="text-[15px] font-semibold text-[#101828]">
              Wallet Balance
            </p>
            <p className="text-[13px] text-[#667085]">
              ₹500.00 available
            </p>
          </div>

        </div>

        <button className="
          h-[34px]
          px-4
          rounded-[8px]
          border
          border-[#B2CCFF]
          bg-white
          text-[#2E6BE6]
          text-[14px]
          font-medium
        ">
          Apply
        </button>

      </div>

      {/* ✅ APPLY COUPON BOX */}
      <div className="
        border
        border-[#E4E7EC]
        rounded-[12px]
      ">

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-[#EAECF0]">

          <div className="flex items-center gap-2">
            {/* Tag Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#667085"
              strokeWidth="2"
            >
              <path d="M20.59 13.41L11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82z"/>
              <circle cx="7.5" cy="7.5" r="1.5" />
            </svg>

            <p className="text-[15px] font-semibold text-[#101828]">
              Apply Coupon
            </p>
          </div>

          {/* Chevron */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#667085"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        <div className="p-4">

          {/* Coupon Input */}
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="
                flex-1
                h-[40px]
                px-3
                rounded-[8px]
                border
                border-[#D0D5DD]
                bg-[#F9FAFB]
                text-[13px]
                placeholder:text-[#98A2B3]
                outline-none
              "
            />

            <button className="
              h-[40px]
              px-5
              rounded-[8px]
              border
              border-[#B2CCFF]
              bg-white
              text-[#2E6BE6]
              text-[14px]
              font-medium
            ">
              Apply
            </button>
          </div>

          {/* ✅ COUPON OPTIONS */}

          <div className="space-y-3">

            {/* SELECTED (NO BLUE BG, ONLY BORDER) */}
            <div className="
              flex
              justify-between
              items-center
              p-4
              rounded-[10px]
              border
              border-[#2E6BE6]
              bg-white
            ">
              <div>
                <p className="text-[14px] font-semibold text-[#101828]">
                  WELCOME20
                </p>
                <p className="text-[12px] text-[#667085]">
                  20% off on your first month
                </p>
              </div>

              <div className="
                w-[18px]
                h-[18px]
                rounded-full
                border-2
                border-[#2E6BE6]
                flex
                items-center
                justify-center
              ">
                <div className="w-[8px] h-[8px] rounded-full bg-[#2E6BE6]" />
              </div>
            </div>

            {/* UNSELECTED */}
            <div className="
              flex
              justify-between
              items-center
              p-4
              rounded-[10px]
              border
              border-[#E4E7EC]
              bg-white
            ">
              <div>
                <p className="text-[14px] font-semibold text-[#101828]">
                  ANNUAL50
                </p>
                <p className="text-[12px] text-[#667085]">
                  50% off on annual plans
                </p>
              </div>

              <div className="
                w-[18px]
                h-[18px]
                rounded-full
                border-2
                border-[#D0D5DD]
              " />
            </div>

          </div>

        </div>

      </div>

      {/* PRICING */}
      <div className="mt-6 space-y-4 text-[14px]">
        <div className="flex justify-between text-[#667085]">
          <span>Subtotal</span>
          <span className="text-[#101828] font-semibold">
            ₹14,999.00
          </span>
        </div>

        <div className="flex justify-between text-[#667085]">
          <span>Tax (18% GST)</span>
          <span className="text-[#101828] font-semibold">
            ₹1,079.64
          </span>
        </div>
      </div>

    </div>
  );
}

export default PricingDetails;