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
        name: "Tư vấn Chiến lược Thương hiệu",
        path: "/services/tu-van-chien-luoc-thuong-hieu",
      },
      {
        name: "Tư vấn Chiến lược phát triển chuỗi F&B",
        path: "/services/tu-van-chien-luoc-phat-trien-chuoi-fb",
      },
      {
        name: "Tư vấn Quản trị Sự thay đổi",
        path: "/services/tu-van-quan-tri-su-thay-doi",
      },
      {
        name: "Tư vấn và Thực thi Sales & Marketing (MSO)",
        path: "/services/tu-van-va-thuc-thi-mso",
      },
      {
        name: "Đào tạo nội bộ",
        path: "/services/dao-tao-noi-bo",
      },
    ],
  },
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
