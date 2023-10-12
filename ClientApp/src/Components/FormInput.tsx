import React from "react";

type Props = {
  className?: string;
  name: string;
  display: string;
  value: any;
  handler: (e: any, key: string) => void;
  type?: string;
  width?: string;
};

function FormInput({
  className,
  name,
  display,
  value,
  handler,
  type,
  width,
}: Props): JSX.Element {
  return (
    <>
      <label className="mr-2" htmlFor={name}>{display}</label>
      <input
        className={className}
        style={{width}}
        name={name}
        type={type}
        // defaultValue={type == 'number' ? 0 : ''}
        onChange={(e) => handler(e, name)}
        value={value}
        placeholder={type ? value : `Enter ${name}...`}
      />
    </>
  );
}

export default FormInput;
