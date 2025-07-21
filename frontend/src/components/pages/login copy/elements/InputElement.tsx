const ContextType = "div";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function FormInput({
  children,
  _className,
  _style,
  _labelClass,
  _labelHTMLFor = "email",
  _labelTag,
  _inputType = "email",
  _inputClass,
  _inputPHolder = "you@example.com",
  _inputRequired = true,
  _minLenght = 8,
  _targetName,
  _value,
  _getValue,
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <ContextType
      {...rest}
      className={_className}
      onClick={_onClick}
      style={_style}
    >
      <label htmlFor={_labelHTMLFor} className={_labelClass}>
        {_labelTag}
      </label>
      {_inputRequired ? (
        <input
          name={_targetName}
          type={_inputType}
          className={_inputClass}
          placeholder={_inputPHolder}
          minLength={_minLenght}
          onChange={_getValue}
          // value={_value}
          required
        />
      ) : (
        <input
          type={_inputType}
          // value={_value}
          className={_inputClass}
          placeholder={_inputPHolder}
        />
      )}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;

  _className?: string;
  _labelClass?: string;
  _labelHTMLFor?: "email" | "text" | "password" | "name";
  _labelTag?: string;
  _inputType?: "email" | "text" | "password";
  _inputClass?: string;
  _inputPHolder?: string | "you@example.com" | "••••••••";
  _inputRequired?: boolean;
  _minLenght?: number;
  _targetName?: string;
  _value?: string;
  _style?: React.CSSProperties;
  _getValue?: (e: any) => void;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
