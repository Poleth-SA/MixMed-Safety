import { HomeIcon, PillIcon, InfoIcon, HelpCircleIcon, UsersIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import MedicationInfo from "./pages/MedicationInfo.jsx";
import CheckInteractions from "./pages/CheckInteractions.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import About from "./pages/About.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Medication Info",
    to: "/medication-info",
    icon: <PillIcon className="h-4 w-4" />,
    page: <MedicationInfo />,
  },
  {
    title: "Check Interactions",
    to: "/check-interactions",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <CheckInteractions />,
  },
  {
    title: "How It Works",
    to: "/how-it-works",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <HowItWorks />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <About />,
  },
];