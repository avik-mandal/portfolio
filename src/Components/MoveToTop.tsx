import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoveToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return null;
};

export default MoveToTop;