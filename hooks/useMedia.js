const useMedia = (query) => {
  let [matches, setMatches] = useState(null);

  useEffect(() => {
    let media = window.matchMedia(query);

    if (media.matches != matches) {
      setMatches(media.matches);
    }
    let listener = (e) => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return matches;
};

export default useMedia;
