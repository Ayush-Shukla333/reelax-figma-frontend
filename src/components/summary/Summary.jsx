function Summary() {
  return (
    <div className="space-y-2">

      {/* ORDER SUMMARY CARD */}
      <div className="
        bg-white
        rounded-[16px]
        p-6
        border
        border-[#E4E7EC]
        shadow-sm
      ">

        <h2 className="text-[20px] font-semibold text-[#101828] mb-6">
          Order Summary
        </h2>

        {/* PLAN CARD */}
        <div className="
          bg-[#F9FAFB]
          border
          border-[#B2CCFF]
          rounded-[12px]
          p-4
          shadow-[0px_1px_2px_rgba(16,24,40,0.06)]
        ">
          <div className="flex justify-between items-start">

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-[30px] font-bold text-[#101828]">
                  ₹4,999
                </span>
                <span className="text-[16px] text-[#667085]">
                  /month
                </span>
              </div>

              <p className="text-[16px] text-[#667085] mt-2 whitespace-nowrap">
                Includes 5,000 credits/mo.
              </p>
            </div>

            <div className="text-right">
              <p className="text-[12px] font-semibold text-[#2E6BE6] uppercase tracking-[0.6px]">
                SELECTED PLAN
              </p>
              <p className="text-[18px] text-left font-bold text-[#101828] mt-1">
                Startup
              </p>
            </div>

          </div>
        </div>

        {/* UPGRADE BUTTON */}
        <button className="
          w-full
          h-[44px]
          mt-6
          rounded-full
          border
          border-[#2E6BE6]
          bg-[#EEF4FF]
          text-[#2E6BE6]
          text-[14px]
          font-semibold
        ">
          ↑ Upgrade to Growth Plan
        </button>

      </div>
    </div>
  );
}

export default Summary;