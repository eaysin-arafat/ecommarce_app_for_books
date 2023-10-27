import { useEffect } from "react";

const useOutsideClick = (ref, fun) => {
  useEffect(() => {
    const listener = (e) => {
      if (e.current || ref.current.contains(e.target)) {
        return;
      }
      fun();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
};

export default useOutsideClick;
