import React from "react";
import cssStyles from "./styles/option.module.css";
import { OptionProps } from "./dropdownTypes";

const Option: React.FC<OptionProps> = ({
  option,
  selectedOptions,
  onClickOption,
  styles,
}) => {
  const isJSX = React.isValidElement(option.label);

  const handleClick = () => {
    if (!isJSX) {
      onClickOption(option);
    }
  };
  return (
    <div
      key={option.value}
      className={`${cssStyles.base_option}   ${
        selectedOptions.some((selected) => selected.value === option.value)
          ? styles && styles.selectedOption // if selected option is passed in props then use that style
            ? styles.selectedOption
            : cssStyles.selected
          : option.disabled // if option is disabled then use that style
          ? styles && styles.disabledOption
            ? styles.disabledOption
            : cssStyles.disabled
          : styles && styles.option // if no style is passed in props then use default style
          ? styles.option
          : cssStyles.dropdown_option
      }`}
      onClick={handleClick}
    >
      <div>
        {/* prefix icon */}
        {option.isIcon && option.prefix && (
          <span className={cssStyles.icon}>{option.prefix}</span>
        )}
      </div>
      {/* option label */}
      <div className={cssStyles.option__label}> {option.label}</div>
      {/* suffix icon */}
      <div>
        {option.isIcon && option.suffix && (
          <span className={cssStyles.icon}>{option.suffix}</span>
        )}
      </div>
    </div>
  );
};

export default Option;
