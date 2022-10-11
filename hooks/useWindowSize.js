const useWindowSize = () => {
  let [windowSize, setWindowSize] = useState([0, 0]);
  useEffect(() => {
    let handleResize = (e) => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
