import InputField from "../common/InputField";

function Form() {
  return (
    <div className="bg-white rounded-xl p-8">

      <button className="text-sm text-gray-500 mb-6">
        ← Back to plans
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Review your details
      </h1>

      <h2 className="text-lg font-semibold mb-8">
        Billing Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <InputField
          label="Company Name"
          placeholder="abhigyan"
        />

        <InputField
          label="Email"
          placeholder="abhigyan@example.com"
        />

        <InputField
          label="GST Number"
          placeholder="GST Number"
        />

        <InputField
          label="PAN Number"
          placeholder="PAN Number"
        />

        <InputField label="Premise/House no." placeholder="Premise/House no." />

        <InputField label="Street" placeholder="Street" />

        <InputField label="State" placeholder="Select state" />

        <InputField label="City" placeholder="Select city" />

        <InputField label="Country" placeholder="India" />

        <InputField label="Pin Code" placeholder="Pincode" />

      </div>
      <div className="flex justify-end gap-4 mt-10 pt-6 border-t">

        <button className="px-6 py-3 border rounded-lg font-medium">
          Cancel
        </button>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
          Save Details
        </button>

      </div>

    </div>
  );
}

export default Form;