import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Recente Issue",
    path: "/issue",
    newTab: false,
  },
  {
    id: 3,
    title: "Archive",
    newTab: true,
    submenu: [
      {
        id: 1,
        title: "Volume 1 | Issue 1",
        path: "/archive/volume-1-issue-1",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Project Board",
    path: "/project-board",
    newTab: true,
  },
];
export default menuData;
