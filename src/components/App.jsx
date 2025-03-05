import UserRoutes from '../router';
import { useState, useEffect } from "react";
import FontFaceObserver from 'fontfaceobserver';
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";

export const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const helmetContext = {};

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
    <HelmetProvider context={helmetContext}> 
      <div style={{ position: "relative" }}>
          <ScrollToTop 
                smooth
                className="scroll_button"
                component={<IoIosArrowUp className="arrowUp"/>}
          />
          <UserRoutes />
      </div>
    </HelmetProvider>
  );
};

