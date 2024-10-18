export interface SubmenuItems {
  label: string;
  icon?: React.ReactElement | undefined;
  link: string;
  right?: string[];
}

export interface NavItems {
  label: string;
  icon?: React.ReactElement | undefined;
  app?: string;
  link: string;
  right?: string[];
  isParent?: boolean;
  subMenu?: SubmenuItems[];
  amount?: number;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  menus: NavItems[];
}

export interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  items: NavItems[];
}
