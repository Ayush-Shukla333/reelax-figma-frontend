function CouponSection() {
  return (
    <div className="border border-[#E5E7EB] rounded-xl p-5">

      {/* Wallet */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-medium text-[#111827]">
            Wallet Balance
          </h3>
          <p className="text-xs text-[#6B7280] mt-1">
            ₹500.00 available
          </p>
        </div>

        <button className="
          h-[36px]
          px-4
          border
          border-[#D1D5DB]
          rounded-lg
          text-sm
          font-medium
          text-[#2563EB]
          hover:bg-[#F9FAFB]
          transition
        ">
          Apply
        </button>
      </div>

      <div className="border-t border-[#E5E7EB] pt-5">

        <h3 className="text-sm font-medium text-[#111827] mb-4">
          Apply Coupon
        </h3>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="
            flex-1
            h-[40px]
            px-3
            rounded-lg
            border
            border-[#E5E7EB]
            bg-[#F9FAFB]
            text-sm
            outline-none
            focus:border-[#2563EB]
            focus:ring-2
            focus:ring-[#DBEAFE]
            "
          />

          <button className="
            h-[40px]
            px-4
            bg-[#2563EB]
            text-white
            rounded-lg
            text-sm
            font-medium
            hover:bg-[#1D4ED8]
            transition
          ">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default CouponSection;