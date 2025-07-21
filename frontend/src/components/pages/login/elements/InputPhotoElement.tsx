const ContextType = "div";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function FormPhotoInput({
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
  _getValue,
  _srcPhoto,
  _accept = "image/*",
  _photoClass,
  _onClick,
  _id,
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
      <img
        src={_srcPhoto}
        alt="user-photo"
        className={_photoClass}
        crossOrigin="anonymous"
      />

      {_inputRequired ? (
        <input
          name={_targetName}
          type={_inputType}
          className={_inputClass}
          placeholder={_inputPHolder}
          minLength={_minLenght}
          onChange={_getValue}
          accept={_accept}
          id={_id}
          required
        />
      ) : (
        <input
          name={_targetName}
          type={_inputType}
          className={_inputClass}
          placeholder={_inputPHolder}
          minLength={_minLenght}
          onChange={_getValue}
          accept={_accept}
          id={_id}
        />
      )}
      <label htmlFor={_labelHTMLFor} className={_labelClass}>
        {_labelTag}
      </label>
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;

  _className?: string;
  _labelClass?: string;
  _labelHTMLFor?: "email" | "text" | "password" | "name" | "photo";
  _labelTag?: string;
  _inputType?: "email" | "text" | "password" | "file";
  _inputClass?: string;
  _inputPHolder?: string | "you@example.com" | "••••••••";
  _inputRequired?: boolean;
  _minLenght?: number;
  _accept?: string;
  _targetName?: string;
  _srcPhoto?: string;
  _photoClass?: string;
  _id?: string;
  _style?: React.CSSProperties;
  _getValue?: (e: any) => void;
  _onClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
