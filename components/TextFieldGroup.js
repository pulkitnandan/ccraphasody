import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({
  field,
  value,
  label,
  error,
  type,
  onChange,
  checkUserExists
}) => {
  return (
    <div className={classnames('group ', {'has-error': error})}>
      <input onChange={onChange} onBlur={checkUserExists} value={value} type={type} name={field}  type="text" required />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{label}</label>
    </div>
      );
}

TextFieldGroup.propTypes = {}

TextFieldGroup.defaultProps = {}

export default TextFieldGroup;
