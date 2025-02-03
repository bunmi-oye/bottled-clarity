type CleanedButtonPropsType = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'ref'
>;

type CleanedLinkPropsType = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'ref'
>;

export type ButtonType = CleanedButtonPropsType & {
  children: React.ReactNode;
  className?: string;
  isAlternate?: boolean;
};

export type ButtonLinkType = CleanedLinkPropsType & {
  href: string;
  children: React.ReactNode;
  className?: string;
  isAlternate?: boolean;
};
