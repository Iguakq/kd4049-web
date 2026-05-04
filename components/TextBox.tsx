type TextBoxProps = {
  color: string;
  text: string;
  withMargin?: boolean;
};

export default function TextBox({ color, text, withMargin }: TextBoxProps) {
  return (
    <div
      className={`${withMargin ? "m-2 mt-3" : ""} px-2 w-fit h-fit border rounded-4xl ${color}`}
    >
      <h3 className="md:text-2xl">{text}</h3>
    </div>
  );
}
