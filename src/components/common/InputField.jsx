function InputField({ label, placeholder, disabled }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] font-medium text-[#344054]">
        {label}
      </label>

      <input
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        className="
          w-full
          h-[44px]
          px-4
          rounded-lg
          border
          border-[#D0D5DD]
          bg-[#F9FAFB]
          text-[14px]
          text-[#101828]
          placeholder:text-[#98A2B3]
          outline-none
          focus:border-[#2563EB]
          focus:ring-2
          focus:ring-[#D1E9FF]
          disabled:bg-[#F2F4F7]
        "
      />
    </div>
  );
}

export default InputField;