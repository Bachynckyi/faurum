import UserRoutes from '../router';
import { useState, useEffect } from "react";
import FontFaceObserver from 'fontfaceobserver';
import { HelmetProvider } from "react-helmet-async";

export const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const helmetContext = {}; // Добавлено для предрендеринга

  useEffect(() => {
    const fonts = [
      new FontFaceObserver("Exo2-Light"),
      new FontFaceObserver("Exo2-Regular"),
      new FontFaceObserver("Exo2-Bold")
    ];

    Promise.all(fonts.map(font => font.load()))
      .then(() => setFontsLoaded(true))
      .catch(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return null;

  return (
    <HelmetProvider context={helmetContext}> {/* Передаем context */}
      <div style={{ position: "relative" }}>
        <UserRoutes />
      </div>
    </HelmetProvider>
  );
};

