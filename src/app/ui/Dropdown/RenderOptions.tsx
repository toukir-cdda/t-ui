import React from "react";
import Option from "./Option";
import cssStyles from "./styles/renderOptions.module.css";
import {
  GroupOption,
  Option as OptionTypes,
  RenderOptionsProps,
} from "./dropdownTypes";

const RenderOptions: React.FC<RenderOptionsProps> = ({
  groupOrOption,
  isGroup,
  selectedOptions,
  onClickOption,
  styles,
}) => {
  if (isGroup && (groupOrOption as GroupOption).options) {
    const group = groupOrOption as GroupOption;
    return (
      // Render group of options recursively
      <div
        className={`${
          styles && styles.optionGroup
            ? styles.optionGroup
            : cssStyles.option_group
        }`}
        // className={cssStyles.option_group}
      >
        {group.title && (
          <div
            className={`${
              styles && styles.groupTitle
                ? styles.groupTitle
                : cssStyles.group_title
            }`}
            // className={cssStyles.group_title}
          >
            {group.title}
            <hr />
          </div>
        )}
        {group.options.map((option, idx) => (
          <RenderOptions
            key={idx}
            groupOrOption={option}
            isGroup={true}
            selectedOptions={selectedOptions}
            onClickOption={onClickOption}
            styles={styles}
          />
        ))}
      </div>
    );
  } else {
    // Render option
    const option = groupOrOption as OptionTypes;
    return (
      <Option
        option={option}
        selectedOptions={selectedOptions}
        onClickOption={onClickOption}
        styles={styles}
      />
    );
  }
};

export default RenderOptions;
