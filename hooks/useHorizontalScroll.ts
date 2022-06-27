import React from "react";

const useHorizontalScroll = (): any => {
  const elRef = React.useRef();

  React.useEffect(() => {
    const el: any = elRef.current;
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY === 0) return;

        // Continue vertical scrolling after horizontal scrolling end
        if (
          !(el.scrollLeft === 0 && e.deltaY < 0) &&
          !(
            el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
            e.deltaY > 0
          )
        ) {
          e.preventDefault();
        }

        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return elRef;
};

export default useHorizontalScroll;
