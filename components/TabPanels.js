import { useEffect, useState } from "react";

const Tab = ({ tab, index, active, onClick }) => {
  const scrollIntoTheView = (id) => {
    let element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <li
      className={`
      ${active ? "font-bold text-black" : "text-[#9A9A9A]"}
      inline-block py-0 px-4 pl-0 align-middle hover:font-bold hover:text-black md:pl-6
      `}
      key={index}
    >
      <button
        className="block"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onClick(index);
          scrollIntoTheView(tab.href.replace("#", ""));
        }}
      >
        {tab.title}
      </button>
    </li>
  );
};

const TabPanels = () => {
  const [current, setCurrent] = useState(0);
  let clickHandler = (index) => {
    setCurrent(index);
  };

  const tabs = [
    {
      title: "Về chương trình",
      href: "#about",
    },
    {
      title: "Lịch học",
      href: "#schedule",
    },
    {
      title: "Cảm nhận",
      href: "#testimonial",
    },
    {
      title: "Hỏi đáp",
      href: "#qa",
    },
    {
      title: "Cách đăng ký",
      href: "#register",
    },
  ];

  return (
    <ul className="flex w-full overflow-x-auto overflow-y-hidden whitespace-nowrap py-6 pr-4 md:justify-evenly">
      {tabs.map((tab, index) => {
        return (
          <Tab
            onClick={() => {
              clickHandler(index);
            }}
            key={tab.title}
            tab={tab}
            index={index}
            active={current == index}
          />
        );
      })}
    </ul>
  );
};
export default TabPanels;
