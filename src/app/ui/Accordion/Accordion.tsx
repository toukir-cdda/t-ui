import { useTheme } from "@/themeProvider/ThemeContext";
import { mergeDeep } from "@/helpers/mergeDeep";
import React, {
  Children,
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  cloneElement,
  useMemo,
  useState,
} from "react";
import {
  AccordionContent,
  keepAccordionComponentTheme,
} from "./AccordionContent";
import { AccordionTitle, keepAccordionTitleTheme } from "./AccordionTitle";
import { mergeClassNames } from "@/helpers/mergeClassNames";
import { AccordionPanel, AccordionPanelProps } from "./AccordionPanel";

export interface keepAccordionTheme {
  root: keepAccordionRootTheme;
  content: keepAccordionComponentTheme;
  title: keepAccordionTitleTheme;
}

export interface keepAccordionRootTheme {
  base: string;
  flush: any;
}

export interface AccordionProps
  extends PropsWithChildren<ComponentProps<"div">> {
  alwaysOpen?: boolean;
  showIcon?: boolean;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  children:
    | ReactElement<AccordionPanelProps>
    | ReactElement<AccordionPanelProps>[];
  flush?: boolean;
  collapseAll?: boolean;
  theme?: any;
  iconPosition?: string;
  disabled?: boolean;
}

const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  showIcon = true,
  openIcon,
  closeIcon,
  children,
  flush = false,
  collapseAll = false,
  className,
  iconPosition = "right",
  disabled = false,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0);

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          showIcon,
          flush,
          closeIcon,
          openIcon,
          disabled,
          iconPosition,
          isOpen: isOpen === i,
          setOpen: () => setOpen(isOpen === i ? -1 : i),
        })
      ),
    [
      alwaysOpen,
      showIcon,
      children,
      flush,
      isOpen,
      iconPosition,
      disabled,
      closeIcon,
      openIcon,
    ]
  );

  const oldTheme = useTheme().theme.accordion.root;
  const theme = mergeDeep(oldTheme, customTheme);

  return (
    <div
      className={mergeClassNames(
        !flush && theme.base,
        className,
        !flush && theme.flush.off,
        flush && theme.flush.on
      )}
      {...props}
    >
      {panels}
    </div>
  );
};

AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
