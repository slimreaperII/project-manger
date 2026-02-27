import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase">{label}</label>
      {textarea ? (
        <textarea
          ref={ref}
          {...props}
          className="w-full p-1 border-b-2 rounded-sm border-stone-400 bg-stone-300 focus:outline-none focus:border-stone-600"
        />
      ) : (
        <input
          ref={ref}
          {...props}
          className="w-full p-1 border-b-2 rounded-sm border-stone-400 bg-stone-300 focus:outline-none focus:border-stone-600"
        />
      )}
    </p>
  );
});

export default Input;
