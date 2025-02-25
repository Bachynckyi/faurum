import UserRoutes from '../router';
import { useState, useEffect } from "react";
import FontFaceObserver from 'fontfaceobserver';

export const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const fonts = [
      new FontFaceObserver("Exo2-Light"),
      new FontFaceObserver("Exo2-Regular"),
      new FontFaceObserver("Exo2-Bold")
    ];

    Promise.all(fonts.map(font => font.load()))
      .then(() => {
        setFontsLoaded(true);
      })
      .catch(() => {
        setFontsLoaded(true);
      });
  }, []);

  if (!fontsLoaded) return null

  return (
    <div style={{ position: "relative" }}>
      <UserRoutes />
    </div>
  );
};
