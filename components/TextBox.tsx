export default function TextBox({ color, text }) {
  return (
    <div className={`w-fit h-fit m-2 mt-3 p-1 rounded-4xl border ${color}`}>
      <h3 className="md:text-2xl">{text}</h3>
    </div>
  );
}
