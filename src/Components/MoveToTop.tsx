import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoveToTop: React.FC = () => {
    const path = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);

    return null;
};

export default MoveToTop;;