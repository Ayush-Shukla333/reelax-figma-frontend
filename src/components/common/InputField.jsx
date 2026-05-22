function InputField({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="
border border-gray-300
rounded-lg
px-4 py-3
outline-none
focus:border-blue-500
focus:ring-2
focus:ring-blue-100
transition-all
duration-200
text-sm
"
      />
    </div>
  );
}

export default InputField;