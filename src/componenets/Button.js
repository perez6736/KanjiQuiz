import classnames from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
  ...rest
}) {
  let classes = classnames(
    rest.className,
    "items-center px-3 py-1.5 font-bold font-bold py-4 px-8 mt-8",
    {
      "bg-blue-500 hover:bg-blue-700 text-white border-blue-80": primary,
      "bg-gray-500 hover:bg-gray-700 text-white border-gray-80": secondary,
      "bg-green-500 hover:bg-green-700 text-white border-green-80": success,
      "bg-yellow-500 hover:bg-yellow-700 text-white border-yellow-80": warning,
      "bg-red-600 hover:bg-red-700 text-white border-red-80 ": danger,
      "rounded-full": rounded,
      "bg-white": outline,

      "text-blue-500 hover:bg-blue-700 hover:text-white": outline && primary,
      "text-gray-500 hover:bg-gray-700 hover:text-white": outline && secondary,
      "text-green-500 hover:bg-green-700 hover:text-white": outline && success,
      "text-yellow-500 hover:bg-yellow-700 hover:text-white":
        outline && warning,
      "text-red-500 hover:bg-red-700 hover:text-white": outline && danger,
    }
  );
  classes = twMerge(classes);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkvariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "only one of the primary, secondary, success, warning, danger can be true. "
      );
    }
  },
};

export default Button;
