import { createBrowserRouter } from "react-router";
import { Root } from "./layout/Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { EventsPage } from "./pages/EventsPage";
import { MinistriesPage } from "./pages/MinistriesPage";
import { ContactPage } from "./pages/ContactPage";
import { JoinPage } from "./pages/JoinPage";
import { PrayerGroupsPage } from "./pages/PrayerGroupsPage";
import { RetreatsPage } from "./pages/RetreatsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "events", Component: EventsPage },
      { path: "ministries", Component: MinistriesPage },
      { path: "contact", Component: ContactPage },
      { path: "join", Component: JoinPage },
      { path: "prayer-groups", Component: PrayerGroupsPage },
      { path: "retreats", Component: RetreatsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
