import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import MailIcon from '@material-ui/icons/Mail';

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },

  {
    title: "Mailbox",
    icon: <MailIcon />,
    link: "/mailbox",
  },

  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/dashboard",
  },

  {
    title: "Analytic",
    icon: <InsertChartIcon />,
    link: "/analytic",
  },

  {
    title: "Friends",
    icon: <AccountBoxIcon/>,
    link: "/friends",
  },
];
