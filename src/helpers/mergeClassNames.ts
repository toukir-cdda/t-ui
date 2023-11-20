function mergeClassNames(...classNames: any) {
  return classNames.filter(Boolean).join(" ");
}

export { mergeClassNames };
