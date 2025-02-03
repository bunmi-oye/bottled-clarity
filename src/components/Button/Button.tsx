import Link from 'next/link';
import { ButtonLinkType, ButtonType } from './Button.type';

/**
 * A simple button component.
 *
 * @prop {string} [type='button'] - The type of button.
 * @prop {string} [className] - Additional CSS classes.
 * @prop {boolean} [isAlternate=false] - Whether the button should be rendered in an alternate style.
 * @prop {ReactNode} children - The content of the button.
 * @prop {object} [buttonProps] - Any additional props to be passed to the button element.
 *
 * @example
 * <Button>Click me!</Button>
 */
const Button = ({
  type = 'button',
  className,
  isAlternate = false,
  disabled = false,
  children,
  ...buttonProps
}: ButtonType) => {
  return (
    <button
      type={type}
      className={`${
        isAlternate ? 'bg-white text-primary' : 'bg-primary text-white'
      } ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } rounded-full px-5 py-3 font-medium ${className}`}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;

/**
 * A link component styled as a button.
 *
 * @prop {string} [href='/'] - The URL the link points to.
 * @prop {string} [className] - Additional CSS classes for styling.
 * @prop {boolean} [isAlternate=false] - Whether the button should be rendered in an alternate style.
 * @prop {ReactNode} children - The content of the button.
 * @prop {object} [linkProps] - Any additional props to be passed to the link element.
 *
 * @example
 * <ButtonLink href="/about">Learn More</ButtonLink>
 */

export const ButtonLink = ({
  href = '/',
  className,
  isAlternate = false,
  children,
  ...linkProps
}: ButtonLinkType) => {
  return (
    <Link
      href={href}
      className={`${
        isAlternate ? 'bg-white text-primary' : 'bg-primary text-white'
      } rounded-full px-5 py-3 font-medium ${className}`}
      {...linkProps}
    >
      {children}
    </Link>
  );
};
