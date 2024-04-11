import home from "@assets/svg/home.svg";
import analytics from "@assets/svg/analytics.svg";
import revenue from "@assets/svg/revenue.svg";
import crm from "@assets/svg/crm.svg";
import file from '@assets/svg/attach.svg'
import message from '@assets/svg/message.svg'
import envelope from '@assets/svg/envelope.svg'
import copy from '@assets/svg/copy.svg'


export const middleNav = [
  {
    name: "Home",
    path: "/home",
    icon: home,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: analytics,
  },
  {
    name: "Revenue",
    path: "/revenue",
    icon: revenue,
  },
  {
    name: "CRM",
    path: "/crm",
    icon: crm,
  },
  
];

export const userNav = [
  "Settings",
  "Purchase History",
  "Refer and Earn",
  "Integrations",
  "Report Bug",
  "Switch Account",
  "Sign Out",
];

export const linkInBioNav = [
  {
    icon: file,
    name: "Link in Bio",
    smallText: "Manage your link in Bio",
  },
  {
    icon: envelope,
    name: "Store",
    smallText: "Manage your Store activities",
  },
  {
    icon: message,
    name: "Media Kit",
    smallText: "Manage your Media Kit",
  },
  {
    icon: copy,
    name: "Invoicing",
    smallText: "Manage your invoices",
  },
  {
    icon: message,
    name: "Booking",
    smallText: "Manage your Bookings",
  },
];