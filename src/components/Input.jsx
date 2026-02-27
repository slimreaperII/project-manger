export default function Input({ label, textarea, ...props }) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          {...props}
          className="w-full p-1 border-b-2 rounded-sm border-stone-400 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      ) : (
        <input
          {...props}
          className="w-full p-1 border-b-2 rounded-sm border-stone-400 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      )}
    </p>
  );
}
