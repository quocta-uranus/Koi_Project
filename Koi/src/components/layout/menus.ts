export interface Menu {
  title: string;
  slug: string;
}

type Menus = Menu[];

export const menus: Menus = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Pricing",
    slug: "/pricing",
  },
  {
    title: "News & Event",
    slug: "/event",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
];
