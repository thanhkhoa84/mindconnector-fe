import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const RichText = (text) => {
  return <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>;
};
