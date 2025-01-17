interface PanelProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'children'
  > {
  className?: string;
  isStatic?: boolean;
  children?:
    | React.ReactNode
    | ((data: { open?: boolean; close: () => void }) => React.ReactNode);
}

export default PanelProps;
