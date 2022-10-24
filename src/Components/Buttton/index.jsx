import React from 'react';
import { Link } from 'react-router-dom';

const VARIANT_CONST = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SECONDARY_TWO: 'secondary-two',
};

const Button = ({
  type,
  variant,
  size,
  border,
  children,
  route,
  role,
  ...rest
}) => {
  switch (variant) {
    case VARIANT_CONST.PRIMARY:
      variant = 'bg-white text-dark';
      break;
    case VARIANT_CONST.SECONDARY:
      variant = 'bg-blue text-white';
      break;
    case VARIANT_CONST.SECONDARY_TWO:
      variant = 'bg-dark text-white';
  }

  return (
    <button
      className={`${variant} ${size} ${
        border?.toLowerCase() === 'yes' ? 'border border-dark' : null
      } w-[174px] h-[52px] box-border font-[600] flex items-center hover:scale-[1.04] transition-all justify-center rounded-[3px] text-[16px]`}
      type={type}
      {...rest}
    >
      {role?.toLowerCase() === 'link' ? (
        <Link to={route}>{children}</Link>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
