import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Study Destinations",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "USA",
        path: "/study-destination/usa",
        newTab: false,
      },
      {
        id: 52,
        title: "UK",
        path: "/study-destination/uk",
        newTab: false,
      },
      {
        id: 53,
        title: "Australia",
        path: "/study-destination/australia",
        newTab: false,
      },
      {
        id: 54,
        title: "Canada",
        path: "/study-destination/canada",
        newTab: false,
      },
      {
        id: 55,
        title: "Malaysia",
        path: "/study-destination/malaysia",
        newTab: false,
      },
      {
        id: 56,
        title: "New Zealand",
        path: "/study-destination/newzealand",
        newTab: false,
      },
      {
        id: 57,
        title: "France",
        path: "/study-destination/france",
        newTab: false,
      },
      {
        id: 58,
        title: "Germany",
        path: "/study-destination/germany",
        newTab: false,
      },
    ],
  },
  // {
  //   id: 5,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
