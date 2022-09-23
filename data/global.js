export const Navigation = [
  {
    name: "Dành cho sinh viên",
    path: "/student",
    submenus: [
      {
        name: "Thành Công Trong Học Tập",
        path: "/programs/for-student/thanh-cong-trong-hoc-tap",
      },
      {
        name: "Thành Công Trong Ứng Tuyển",
        path: "/programs/for-student/thanh-cong-trong-ung-tuyen",
      },
      {
        name: "Thành Công Trong Khởi Sự Kinh Doanh",
        path: "/programs/for-student/thanh-cong-trong-khoi-su-kinh-doanh",
      },
      {
        name: "Experience Tour",
        path: "/student",
      },
    ],
  },
  {
    name: "Dành cho doanh nghiệp",
    path: "/business",
    // submenus: [
    //   {
    //     name: "Thành Công Trong Học Tập",
    //     path: "/student#thanh-cong-trong-hoc-tap",
    //   },
    //   {
    //     name: "Thành Công Trong Ứng Tuyển",
    //     path: "/student#thanh-cong-trong-ung-tuyen",
    //   },
    //   {
    //     name: "Thành Công Trong Khởi Sự Kinh Doanh",
    //     path: "/student#thanh-cong-trong-khoi-su-kinh-doanh",
    //   },
    //   {
    //     name: "Experience Tour",
    //     path: "/business",
    //   },
    // ],
  },
  // {
  //   name: "Program",
  //   path: "/program",
  // },
  // {
  //   name: "Course",
  //   path: "/course",
  // },
  // {
  //   name: "Đối tác",
  //   path: "partners",
  // },
  // {
  //   name: "Tin tức & Sự kiện",
  //   path: "news",
  // },
  // {
  //   name: "Liên hệ",
  //   path: "contact",
  // },
];

export const Paths = {
  programs: {
    student: [
      "thanh-cong-trong-hoc-tap",
      "thanh-cong-trong-ung-tuyen",
      "thanh-cong-trong-khoi-su-kinh-doanh",
    ],
    business: [
      "thanh-cong-trong-hoc-tap",
      "thanh-cong-trong-ung-tuyen",
      "thanh-cong-trong-khoi-su-kinh-doanh",
    ],
  },
  courses: {
    student: ["khoa-hoc-nghien-cuu-va-phan-tich"],
    business: ["khoa-hoc-nghien-cuu-va-phan-tich"],
  },
};
