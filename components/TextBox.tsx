export default function TextBox({ color, text, withMargin }) {
  return (
    <div
      className={`${withMargin ? "m-2 mt-3" : ""} px-2 w-fit h-fit border rounded-4xl ${color}`}
    >
      <h3 className="md:text-2xl">{text}</h3>
    </div>
  );
}
