import login from "../components/layout/Login";
import homePage from "../components/layout/HomePage";
import dropdown from "../components/layout/header/LocationDropDown";
import topBar from "@/components/layout/TopBar";

export default [
  {
    path: "/login",
    component: login
  },
  {
    path: "/",
    component: topBar
  },
  {
    path: "/dropdown",
    component: dropdown
  },
  {
    path: "/home",
    component: homePage
  }
];
