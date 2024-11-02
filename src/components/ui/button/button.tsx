export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button(props: Readonly<ButtonProps>) {
  return <button {...props} />;
}
