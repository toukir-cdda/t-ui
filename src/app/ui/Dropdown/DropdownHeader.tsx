import React from "react";
import cssStyles from "./styles/header.module.css";
import { DropdownHeaderProps } from "./dropdownTypes";

const DropdownHeader: React.FC<DropdownHeaderProps> = ({
  toggleDropdown,
  selectedOptions,
  styles,
}) => {
  return (
    <div
      className={
        styles && styles.header ? styles.header : cssStyles.dropdown_header
      }
      onClick={toggleDropdown}
    >
      {selectedOptions?.length > 0
        ? selectedOptions?.map((opt, idx) => (
            <div key={idx} className={cssStyles.header_option}>
              <div>
                {/* prefix icon */}
                {opt?.isIcon && opt?.prefix && (
                  <span className={cssStyles.icon}>{opt?.prefix}</span>
                )}
              </div>
              <div className={cssStyles.option__label}> {opt?.label}</div>
              <div>
                {opt?.isIcon && opt?.suffix && (
                  <span className={cssStyles.icon}>{opt?.suffix}</span>
                )}
              </div>
            </div>
          ))
        : "Select option(s)"}
    </div>
  );
};

export default DropdownHeader;
