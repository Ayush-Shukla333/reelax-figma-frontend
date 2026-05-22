function InputField({ label, placeholder, disabled }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-[#374151]">
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
        border-[#E5E7EB]
        bg-[#F9FAFB]
        text-[14px]
        text-[#111827]
        placeholder:text-[#9CA3AF]
        outline-none
        transition
        focus:border-[#2563EB]
        focus:ring-2
        focus:ring-[#DBEAFE]
        disabled:bg-[#F3F4F6]
        disabled:text-[#9CA3AF]
        "
      />
    </div>
  );
}

export default InputField;