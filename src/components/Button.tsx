import { FC } from "react";

type Props = {
  children: string;
  disabled?: boolean;
};

export const Button: FC<Props> = ({ children, disabled }: Props) => {
  return (
    <button
      style={{
        padding: 12,
        fontSize: 12,
        backgroundColor: disabled ? "lightgray" : "green",
        color: disabled ? "gray" : "white",
      }}
    >
      {children}
    </button>
  );
};
