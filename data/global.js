export const Navigation = [
  {
    name: "Dành cho sinh viên",
    path: "/student",
    submenus: [
      {
        name: "Kỹ Năng Xã Hội",
        path: "/programs/ky-nang-xa-hoi",
      },
      {
        name: "Vững Vàng Lập Nghiệp",
        path: "/programs/vung-vang-lap-nghiep",
      },
      {
        name: "Sẵn Sàng Khởi Nghiệp Kinh Doanh",
        path: "/programs/san-sang-khoi-nghiep-kinh-doanh",
      },

      // {
      //   name: "Thành Công Trong Khởi Sự Kinh Doanh",
      //   path: "/programs/thanh-cong-trong-khoi-su-kinh-doanh",
      // },
      {
        name: "Experience Tour",
        path: "/student",
      },
    ],
  },
  {
    name: "Dành cho doanh nghiệp",
    path: "/business",
    submenus: [
      {
        name: "Tư vấn chiến lược thương hiệu",
        path: "/services/tu-van-chien-luoc-thuong-hieu",
      },
      {
        name: "Tư vấn chiến lược phát triển chuỗi F&B",
        path: "/services/tu-van-chien-luoc-phat-trien-chuoi-fb",
      },
      {
        name: "Tư vấn quản trị sự thay đổi",
        path: "/services/tu-van-quan-tri-su-thay-doi",
      },
      {
        name: "Tư vấn và thực thi marketing & sales outsourcing (MSO)",
        path: "/services/tu-van-va-thuc-thi-mso",
      },
      {
        name: "Đào tạo nội bộ",
        path: "/services/dao-tao-noi-bo",
      },
    ],
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
  programs: ["san-sang-khoi-nghiep-kinh-doanh"],
  courses: ["len-ke-hoach-kinh-doanh"],
};

export const allTeachers = [
  {
    entitled: "Bà",
    name: "Nina Trần",
    imgUrl: "/img/mentors/nina-tran-02.png",
    title: "Chuyên gia <br/>Tư vấn Thương hiệu",
    socials: [{ name: "linkedin", url: "https://linkedin.com" }],
  },
  {
    entitled: "Bà",
    name: "Mandy Nguyễn",
    imgUrl: "/img/mentors/mandy-nguyen-02.png",
    title: "Chuyên gia <br/>Sales - Marketing",
    socials: [{ name: "linkedin", url: "https://linkedin.com" }],
  },
  {
    entitled: "Bà",
    name: "Đào Minh Huyền",
    imgUrl: "/img/mentors/dao-minh-huyen.png",
    title: "Cố vấn Khởi nghiệp",
    socials: [{ name: "linkedin", url: "https://linkedin.com" }],
  },
  {
    entitled: "Ông",
    name: "Nguyễn Mạnh Cường",
    imgUrl: "/img/mentors/nguyen-manh-cuong.png",
    title: "Chuyên gia chiến lược",
    socials: [
      { name: "linkedin", url: "https://linkedin.com" },
      { name: "twitter", url: "https://twitter.com" },
    ],
  },
];

export const programs = {
  soCap: [
    {
      title: "Theo đuổi <br/>sự học <br/>cả đời",
      time: "2",
      feature: false,
      level: "Tổng quát",
      img: "/img/programs/ky-nang-xa-hoi/01-theo-duoi-su-hoc-ca-doi.jpg",
    },
    {
      title: "Nghiên cứu và phân tích",
      time: "2",
      feature: "Môn học bán chạy",
      level: "Tổng quát",
      img: "/img/programs/ky-nang-xa-hoi/02-nghien-cuu-va-phan-tich.jpg",
    },
    {
      title: "Kỹ năng <br/>giao tiếp",
      time: "2",
      feature: false,
      level: "Tổng quát",
      img: "/img/programs/ky-nang-xa-hoi/03-ky-nang-giao-tiep.jpg",
    },
    {
      title: "Kỹ năng làm việc nhóm",
      time: "2",
      feature: "Môn học bán chạy",
      level: "Tổng quát",
      img: "/img/programs/ky-nang-xa-hoi/04-lam-viec-nhom.jpg",
    },
    {
      title: "Khả năng quan sát",
      time: "2",
      feature: false,
      level: "Tổng quát",
      img: "/img/programs/ky-nang-xa-hoi/05-ky-nang-quan-sat.jpg",
    },
    {
      title: "Kỹ năng tương tác",
      time: "2",
      feature: false,
      level: "Tổng quát",
      img: "/img/programs/ky-nang-xa-hoi/06-ky-nang-tuong-tac.jpg",
    },
    {
      title: "Chọn lọc thông tin trên Internet",
      time: "2",
      feature: false,
      level: "Tổng quát",
      img: "/img/programs/ky-nang-xa-hoi/07-chon-loc-thong-tin-tren-internet.jpg",
    },
    {
      title: "Sử dụng công nghệ một cách có mục đích",
      time: "2",
      feature: false,
      level: "Tổng quát",
      img: "/img/programs/ky-nang-xa-hoi/08-su-dung-cong-nghe.jpg",
    },
    {
      title: "Rèn luyện tính nhẫn nại",
      time: "2",
      feature: false,
      level: "Tổng quát",
      img: "/img/programs/ky-nang-xa-hoi/09-nhan-nai.jpg",
    },
    {
      title: "Tổ chức công việc và <br/>cuộc sống",
      time: "2",
      feature: "Môn học bán chạy",
      level: "Nâng cao ",
      img: "/img/programs/ky-nang-xa-hoi/10-to-chu-cong-viec-va-cuoc-song.jpg",
    },
    {
      title: "Tổ chức <br/>tài chính",
      time: "2",
      feature: "Môn học bán chạy",
      level: "Nâng cao ",
      img: "/img/programs/ky-nang-xa-hoi/11-to-chuc-tai-chinh.jpg",
    },
    {
      title: "Chăm sóc nhân hiệu",
      time: "2",
      feature: "Môn học bán chạy",
      level: "Nâng cao",
      img: "/img/programs/ky-nang-xa-hoi/12-cham-soc-nhan-hieu.jpg",
    },
  ],
  trungCap: [
    {
      title: "Thay đổi <br/>suy nghĩ",
      time: "2",
      feature: false,
      img: "/img/programs/vung-vang-lap-nghiep/01-thay-doi-suy-nghi.jpg",
    },
    {
      title: "Tích góp <br/>kinh nghiệm",
      time: "2",
      feature: false,
      img: "/img/programs/vung-vang-lap-nghiep/02-tich-cop-kinh-nghiem.jpg",
    },
    {
      title: `Khả năng <br/>tự chủ`,
      time: `2`,
      feature: "Môn học bán chạy",
      img: "/img/programs/vung-vang-lap-nghiep/03-kha-nang-tu-chu.jpg",
    },
    {
      title: `Khả năng trình bày`,
      time: `2`,
      feature: false,
      img: "/img/programs/vung-vang-lap-nghiep/04-kha-nang-trinh-bay.jpg",
    },
    {
      title: `Giao tiếp và tương tác`,
      time: `2`,
      feature: false,
      img: "/img/programs/vung-vang-lap-nghiep/05-giao-tiep-va-tuong-tac.jpg",
    },
    {
      title: `Xây dựng lòng tin`,
      time: `2`,
      feature: false,
      img: "/img/programs/vung-vang-lap-nghiep/06-xay-dung-long-tin.jpg",
    },
    {
      title: `Xác định <br/>sự nghiệp <br/>dài hạn`,
      time: `2`,
      feature: "Môn học bán chạy",
      img: "/img/programs/vung-vang-lap-nghiep/07-xac-dinh-su-nghiep-dai-han.jpg",
    },
    {
      title: `Định hình <br/>tư duy`,
      time: `2`,
      feature: "Môn học bán chạy",
      img: "/img/programs/vung-vang-lap-nghiep/08-dinh-hinh-tu-duy.jpg",
    },
    {
      title: `Giải quyết vấn đề`,
      time: `2`,
      feature: false,
      img: "/img/programs/vung-vang-lap-nghiep/09-giai-quyet-van-de.jpg",
    },
    {
      title: `Quản lý <br/>dự án`,
      time: `2`,
      feature: "Môn học bán chạy",
      img: "/img/programs/vung-vang-lap-nghiep/10-quan-ly-du-an.jpg",
    },
    {
      title: `Khả năng sáng tạo`,
      time: `2`,
      feature: false,
      img: "/img/programs/vung-vang-lap-nghiep/11-kha-nang-sang-tao.jpg",
    },
    {
      title: `Làm việc <br/>theo nhóm`,
      time: `2`,
      feature: false,
      img: "/img/programs/vung-vang-lap-nghiep/12-lam-viec-nhom.jpg",
    },
    {
      title: `Lớp học <br/>mô phỏng <br/>thực tế`,
      time: `2`,
      feature: "Môn học bán chạy",
      img: "/img/programs/vung-vang-lap-nghiep/13-lop-hoc-mo-phong.jpg",
    },
    {
      title: `Thi kiểm tra cuối cùng `,
      time: `2`,
      feature: false,
      img: "/img/programs/vung-vang-lap-nghiep/14-kiem-tra.jpg",
    },
  ],
  caoCap: [
    {
      title: "Xây dựng định hướng kinh doanh",
      subtitle: "Khởi nghiệp thuận lợi, chạm đỉnh vinh quang",
      lessons: "6",
      time: "16",
      feature: "Chủ đề bán chạy",
      img: "/img/programs/san-sang-khoi-nghiep-kinh-doanh/01-xay-dung-dinh-huong-kinh-doanh.jpg",
      slug: "/courses/len-ke-hoach-kinh-doanh",
    },
    {
      title: "Hoạch định kế hoạch kinh doanh",
      subtitle: "Khởi nghiệp thuận lợi, chạm đỉnh vinh quang",
      lessons: "6",
      time: "14",
      feature: "Chủ đề bán chạy",
      img: "/img/programs/san-sang-khoi-nghiep-kinh-doanh/02-hoach-dinh-ke-hoach-kinh-doanh.jpg",
      slug: "/courses/hoach-dinh-ke-hoach-kinh-doanh",
    },
    {
      title: "Quản lý <br/>hệ thống <br/>kinh doanh",
      subtitle: "Khởi nghiệp thuận lợi, chạm đỉnh vinh quang",
      lessons: "5",
      time: "10",
      feature: "Chủ đề bán chạy",
      img: "/img/programs/san-sang-khoi-nghiep-kinh-doanh/03-quan-ly-he-thong-kinh-doanh.jpg",
      slug: "/courses/quan-ly-he-thong-kinh-doanh",
    },
    {
      title: "Thuyết trình cuối khóa",
      subtitle: "Khởi nghiệp thuận lợi, chạm đỉnh vinh quang",
      lessons: "1",
      time: "1",
      feature: "Chủ đề bán chạy",
      img: "/img/programs/san-sang-khoi-nghiep-kinh-doanh/04-thuyet-trinh-cuoi-khoa.jpg",
      slug: "/courses/thuyet-trinh-cuoi-khoa",
    },
  ],
};

export const contactEmail = "register@mindconnector.com.vn";