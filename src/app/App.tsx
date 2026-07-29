import { useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import SplashScreen from "./components/ui/Splashscreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* Website loads immediately in the background */}
      <RouterProvider router={router} />

      {/* Splash animation overlays the website */}
      {showSplash && (
        <SplashScreen
          onComplete={() => setShowSplash(false)}
        />
      )}
    </>
  );
}