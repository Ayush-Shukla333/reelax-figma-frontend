import InputField from "../common/InputField";

function Form() {
  return (
    <div className="bg-white rounded-2xl p-10 border border-[#E5E7EB] shadow-sm">

      {/* Back Link */}
      <button className="text-sm text-[#6B7280] mb-6 hover:text-[#111827] transition">
        ← Back to plans
      </button>

      {/* Heading */}
      <h1 className="text-[28px] font-semibold text-[#111827] mb-2">
        Review your details
      </h1>

      <h2 className="text-[16px] font-semibold text-[#374151] mb-8">
        Billing Information
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <InputField label="Company Name" placeholder="abhigyan" />
        <InputField label="Email" placeholder="abhigyan@example.com" />

        <InputField label="GST Number (Optional)" placeholder="GST Number" />
        <InputField label="PAN Number (Optional)" placeholder="PAN Number" />

        <InputField label="Premise/House no." placeholder="Premise/House no." />
        <InputField label="Street" placeholder="Street" />

        <InputField label="State" placeholder="Select state" />
        <InputField label="City" placeholder="Select city" />

        <InputField label="Country" placeholder="India" disabled />
        <InputField label="Pin Code" placeholder="Pincode" />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-[#E5E7EB]">

        <button className="
        h-[44px]
        px-6
        border
        border-[#D1D5DB]
        rounded-lg
        text-sm
        font-medium
        text-[#374151]
        hover:bg-[#F9FAFB]
        transition
        ">
          Cancel
        </button>

        <button className="
        h-[44px]
        px-6
        bg-[#2563EB]
        text-white
        rounded-lg
        text-sm
        font-medium
        hover:bg-[#1D4ED8]
        transition
        shadow-sm
        ">
          Save Details
        </button>

      </div>
    </div>
  );
}

export default Form;