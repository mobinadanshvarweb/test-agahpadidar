interface SubmenuItem {
  id: number;
  text: string;
  icon: string; // مسیر آیکون
}
export type SideBarLinkProps = {
  text: string;
  submenu?: SubmenuItem[];
};
