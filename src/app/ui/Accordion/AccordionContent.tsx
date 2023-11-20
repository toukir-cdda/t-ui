import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useAccordionContext } from "./AccordionPanelContext";
import { DeepPartial } from "@/helpers/deep-partial";
import { useTheme } from "@/themeProvider/ThemeContext";
import { mergeDeep } from "@/helpers/mergeDeep";
import Collapse from "@/app/lib/Collapse";
import { mergeClassNames } from "@/helpers/mergeClassNames";

export interface AccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps
  extends PropsWithChildren<ComponentProps<"div">> {
  theme?: DeepPartial<AccordionComponentTheme>;
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen = false } = useAccordionContext();

  const oldTheme = useTheme().theme.accordion.content;
  const theme = mergeDeep(oldTheme, customTheme);
  return (
    <Collapse isOpened={isOpen}>
      <div
        className={mergeClassNames(theme.base, className)}
        data-testid="accordion-content"
        hidden={!isOpen}
        {...props}
      >
        {children}
      </div>
    </Collapse>
  );
};
