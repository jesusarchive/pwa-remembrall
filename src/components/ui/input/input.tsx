export type InputProps = React.HTMLAttributes<HTMLInputElement>;

export default function Input(props: Readonly<InputProps>) {
  return <input {...props} />;
}
