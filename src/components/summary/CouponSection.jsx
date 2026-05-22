function CouponSection() {
  return (
    <div className="border rounded-xl p-4 mt-5">

      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold">Wallet Balance</h3>
          <p className="text-sm text-gray-500">
            ₹500.00 available
          </p>
        </div>

        <button className="border px-4 py-2 rounded-lg text-blue-600 font-medium">
          Apply
        </button>
      </div>

      <hr className="my-4" />

      <h3 className="font-semibold mb-4">
        Apply Coupon
      </h3>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="flex-1 border rounded-lg px-4 py-2"
        />

        <button className="bg-blue-600 text-white px-4 rounded-lg">
          Apply
        </button>
      </div>

    </div>
  );
}

export default CouponSection;