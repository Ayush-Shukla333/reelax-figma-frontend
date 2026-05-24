function CouponSection() {
  return (
    <div className="
      bg-white
      border
      border-[#E4E7EC]
      rounded-[12px]
      p-5
      shadow-[0px_1px_2px_rgba(16,24,40,0.04)]
    ">

      {/* WALLET */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <p className="text-[16px] font-medium text-[#101828]">
            Wallet Balance
          </p>
          <p className="text-[14px] text-[#667085] mt-1">
            ₹500.00 available
          </p>
        </div>

        <button className="
          h-[40px]
          px-5
          rounded-[10px]
          border
          border-[#D0D5DD]
          bg-white
          text-[#2E6BE6]
          text-[14px]
          font-medium
        ">
          Apply
        </button>
      </div>

      <div className="border-t border-[#EAECF0] my-5" />

      {/* APPLY COUPON */}
      <p className="text-[16px] font-medium text-[#101828] mb-4">
        Apply Coupon
      </p>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="
            flex-1
            h-[44px]
            px-4
            rounded-[10px]
            border
            border-[#D0D5DD]
            bg-[#F9FAFB]
            text-[14px]
          "
        />
        <button className="
          h-[44px]
          px-6
          rounded-[10px]
          bg-[#2E6BE6]
          text-white
          text-[14px]
          font-medium
        ">
          Apply
        </button>
      </div>

      {/* COUPON OPTIONS */}
      <div className="space-y-3">

        {/* Selected */}
        <div className="
          flex
          justify-between
          items-center
          border
          border-[#2E6BE6]
          rounded-[10px]
          p-4
          bg-[#EFF4FF]
        ">
          <div>
            <p className="font-semibold text-[#101828]">
              WELCOME20
            </p>
            <p className="text-[13px] text-[#667085]">
              20% off on your first month
            </p>
          </div>
          <div className="w-[18px] h-[18px] rounded-full border-2 border-[#2E6BE6] flex items-center justify-center">
            <div className="w-[8px] h-[8px] rounded-full bg-[#2E6BE6]" />
          </div>
        </div>

        {/* Unselected */}
        <div className="
          flex
          justify-between
          items-center
          border
          border-[#E4E7EC]
          rounded-[10px]
          p-4
          bg-white
        ">
          <div>
            <p className="font-semibold text-[#101828]">
              ANNUAL50
            </p>
            <p className="text-[13px] text-[#667085]">
              50% off on annual plans
            </p>
          </div>
          <div className="w-[18px] h-[18px] rounded-full border-2 border-[#D0D5DD]" />
        </div>

      </div>

    </div>
  );
}

export default CouponSection;