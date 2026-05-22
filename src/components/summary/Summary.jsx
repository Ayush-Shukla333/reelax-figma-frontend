import CouponSection from "./CouponSection";

function Summary() {
  return (
    <div className="bg-white rounded-xl p-6 sticky top-6 self-start">

      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="border rounded-xl p-5 mb-4">
        <h3 className="text-4xl font-bold">
          ₹4,999
          <span className="text-base text-gray-500 font-normal">
            /month
          </span>
        </h3>

        <p className="text-gray-500 mt-2">
          Includes 5,000 credits/mo.
        </p>
      </div>

      <CouponSection />

      <div className="mt-6 space-y-3 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span>₹14,999.00</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Tax (18% GST)</span>
          <span>₹1,079.64</span>
        </div>

      </div>

      <div className="flex justify-between mt-6 mb-6">
        <span className="text-lg font-bold">
          Total due today
        </span>

        <span className="text-3xl font-bold text-blue-600">
          16,078.64
        </span>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
        Proceed to Payment
      </button>

    </div>
  );
}

export default Summary;