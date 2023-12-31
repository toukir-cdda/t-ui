// import { MinusCircle, PlusCircle } from 'phosphor-react'
import type { ComponentProps, FC } from "react";
// import { twMerge } from 'tailwind-merge'
// import { DeepPartial } from '../../helpers/deep-partial'
// import { mergeDeep } from '../../helpers/mergeDeep'
// import { Boolean, HeadingLevel } from '../..//Theme'
// import { useTheme } from '../..//ThemeContext'
import { useAccordionContext } from "./AccordionPanelContext";
import { Boolean, HeadingLevel } from "@/themeProvider/ThemeTypes";
import { DeepPartial } from "@/helpers/deep-partial";
import { useTheme } from "@/themeProvider/ThemeContext";
import { mergeDeep } from "@/helpers/mergeDeep";
import { mergeClassNames } from "@/helpers/mergeClassNames";

export interface AccordionTitleTheme {
  arrow: {
    base: string;
    open: Boolean;
  };
  base: string;
  flush: Boolean;
  heading: string;
  open: Boolean;
  disabled: string;
  iconPosition: {
    left: string;
    right: string;
  };
}

export interface AccordionTitleProps extends ComponentProps<"button"> {
  arrowIcon?: FC<ComponentProps<"svg">>;
  as?: HeadingLevel;
  theme?: DeepPartial<AccordionTitleTheme>;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Heading = "h1",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const {
    showIcon,
    flush,
    isOpen,
    setOpen,
    iconPosition,
    disabled,
    closeIcon: CloseIcon,
    openIcon: OpenIcon,
  } = useAccordionContext();
  const onClick = () => typeof setOpen !== "undefined" && setOpen();

  const oldTheme = useTheme().theme.accordion.title;
  const theme = mergeDeep(oldTheme, customTheme);

  return (
    <button
      className={mergeClassNames(
        theme.base,
        theme.flush[flush ? "on" : "off"],
        theme.open[isOpen ? "on" : "off"],
        className,
        disabled && theme.disabled,
        iconPosition === "right" && theme.iconPosition.right,
        iconPosition === "left" && theme.iconPosition.left
      )}
      onClick={onClick}
      type="button"
      disabled={disabled}
      {...props}
    >
      {iconPosition === "left" && !isOpen && CloseIcon && CloseIcon}
      {iconPosition === "left" && isOpen && OpenIcon && OpenIcon}
      {(iconPosition === "left" || !iconPosition) &&
        !isOpen &&
        !CloseIcon &&
        !OpenIcon &&
        showIcon &&
        "+"}
      {(iconPosition === "left" || !iconPosition) &&
        isOpen &&
        !CloseIcon &&
        !OpenIcon &&
        showIcon &&
        "-"}
      <Heading className={theme.heading} data-testid="-accordion-heading">
        {children}
      </Heading>
      {iconPosition === "right" && !isOpen && CloseIcon && CloseIcon}
      {iconPosition === "right" && isOpen && OpenIcon && OpenIcon}
      {(iconPosition === "right" || !iconPosition) &&
        !isOpen &&
        !CloseIcon &&
        !OpenIcon &&
        showIcon &&
        "+"}
      {(iconPosition === "right" || !iconPosition) &&
        isOpen &&
        !CloseIcon &&
        !OpenIcon &&
        showIcon &&
        "-"}
    </button>
  );
};
