export const Navigation = [
  {
    name: "Dành cho sinh viên",
    path: "/student",
    submenus: [
      {
        name: "Thành Công Trong Học Tập",
        path: "/programs/thanh-cong-trong-hoc-tap",
      },
      {
        name: "Thành Công Trong Ứng Tuyển",
        path: "/programs/thanh-cong-trong-ung-tuyen",
      },
      {
        name: "Thành Công Trong Khởi Sự Kinh Doanh",
        path: "/programs/thanh-cong-trong-khoi-su-kinh-doanh",
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
  programs: [
    "thanh-cong-trong-hoc-tap",
    "thanh-cong-trong-ung-tuyen",
    "thanh-cong-trong-khoi-su-kinh-doanh",
  ],
  courses: [
    "khoa-hoc-nghien-cuu-va-phan-tich",
    "theo-duoi-su-hoc-ca-doi",
    "ky-nang-giao-tiep",
    "ky-nang-lam-viec-nhom",
    "ky-nang-tuong-tac",
  ],
};

export const StudentCourses = [
  {
    title: "Khoá học nghiên cứu và phân tích",
    currency: "USD$",
    price: "84.99",
    lessons: "4",
    time: "3 hours",
    feature: true,
    rating: 1,
    slug: "khoa-hoc-nghien-cuu-va-phan-tich",
  },
];