import CouponSection from "./CouponSection";

function Summary() {
  return (
    <div className="
      bg-white
      rounded-2xl
      p-6
      border
      border-[#E5E7EB]
      shadow-sm
      sticky
      top-8
      self-start
    ">

      <h2 className="text-[20px] font-semibold mb-6 text-[#111827]">
        Order Summary
      </h2>

      {/* Plan Card */}
      <div className="
        border
        border-[#DBEAFE]
        rounded-xl
        p-5
        mb-6
        bg-[#F8FAFF]
      ">

        <div className="flex justify-between items-start">

          <div>
            <h3 className="text-[26px] font-semibold text-[#111827]">
              ₹4,999
              <span className="text-sm text-[#6B7280] font-normal ml-1">
                /month
              </span>
            </h3>

            <p className="text-sm text-[#6B7280] mt-2">
              Includes 5,000 credits/mo.
            </p>
          </div>

          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wide text-[#2563EB] font-semibold">
              Selected Plan
            </p>

            <h4 className="text-[18px] font-semibold text-[#111827] mt-1">
              Startup
            </h4>
          </div>

        </div>
      </div>

      <CouponSection />

      {/* Pricing Breakdown */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between text-[#6B7280]">
          <span>Subtotal</span>
          <span className="text-[#111827]">₹14,999.00</span>
        </div>

        <div className="flex justify-between text-[#6B7280]">
          <span>Tax (18% GST)</span>
          <span className="text-[#111827]">₹1,079.64</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-6 pt-6 border-t border-[#E5E7EB]">
        <span className="text-[16px] font-semibold text-[#111827]">
          Total due today
        </span>

        <span className="text-[22px] font-semibold text-[#2563EB]">
          ₹16,078.64
        </span>
      </div>

      {/* Button */}
      <button className="
        w-full
        h-[44px]
        mt-6
        bg-[#2563EB]
        hover:bg-[#1D4ED8]
        transition
        text-white
        rounded-lg
        text-sm
        font-medium
      ">
        Proceed to Payment
      </button>
    </div>
  );
}

export default Summary;