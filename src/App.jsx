import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import Summary from "./components/summary/Summary";
import PricingDetails from "./components/summary/PricingDetails";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-[1180px] mx-auto px-6 pt-4 pb-20">

        {/* ✅ BACK BUTTON — FULL WIDTH */}
        <button className="flex items-center gap-2 text-[14px] text-[#475467] mb-3 hover:text-[#101828] transition">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#475467"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to plans
        </button>

        {/* ✅ GRID STARTS AFTER BACK BUTTON */}
        <div className="grid grid-cols-12 gap-8">

          <div className="col-span-12 lg:col-span-7">
            <Form />
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-6">
            <Summary />
            <PricingDetails />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;