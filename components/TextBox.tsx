type TextBoxProps = {
  color: string;
  text: string;
};

export default function TextBox({ color, text }: TextBoxProps) {
  return (
    <div className={`px-2 w-fit h-fit border rounded-4xl ${color}`}>
      <h3 className="md:text-2xl">{text}</h3>
    </div>
  );
}
