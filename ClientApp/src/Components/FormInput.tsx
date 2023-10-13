import React from "react";

type Props = {
  className?: string;
  name: string;
  display: string;
  value: any;
  handler: (e: any, key: string) => void;
  type?: string;
  width?: string;
  readOnly?: boolean;
};

function FormInput(props: Props): JSX.Element {
  return (
    <>
      <label className="mr-2" htmlFor={props.name}>{props.display}</label>
      <input
        readOnly={props.readOnly}
        className={props.className}
        style={{width: props.width}}
        name={props.name}
        type={props.type}
        // defaultValue={type == 'number' ? 0 : ''}
        onChange={(e) => props.handler(e, props.name)}
        value={props.value}
        placeholder={props.type ? props.value : `Enter ${props.name}...`}
      />
    </>
  );
}

export default FormInput;
