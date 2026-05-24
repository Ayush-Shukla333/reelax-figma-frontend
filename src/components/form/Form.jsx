import InputField from "../common/InputField";

function Form() {
  return (
    <div className="bg-white rounded-2xl p-10 border border-[#E6E8EC] shadow-[0px_1px_2px_rgba(16,24,40,0.04)]">


      {/* Heading */}
      <h1 className="text-[25px] font-semibold text-[#101828] mb-3">
        Review your details
      </h1>

      <h2 className="text-[18px] font-bold text-[#475467] mb-8">
        Billing Information
      </h2>

      {/* GRID */}
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
      <div className="flex justify-end gap-4 mt-12 pt-8 border-t border-[#EAECF0]">

        <button className="
          h-[44px]
          px-6
          border
          border-[#D0D5DD]
          rounded-md
          text-[14px]
          font-bold
          text-[#344054]
          hover:bg-[#F9FAFB]
        ">
          Cancel
        </button>

        <button className="
          h-[44px]
          px-6
          bg-[#2563EB]
          text-white
          rounded-md
          text-[14px]
          font-bold
          hover:bg-[#1D4ED8]
        ">
          Save Details
        </button>

      </div>
    </div>
  );
}

export default Form;