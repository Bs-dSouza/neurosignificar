import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PageTransition.module.css";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div className={styles.pageTransition} key={location.pathname}>
      {children}
    </div>
  );
};

export default PageTransition;
