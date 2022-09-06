import React, { useEffect, useRef } from "react";
import { useGlobalModalContext } from "./GlobalModal";
import axios from "axios";

const RegisterModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const { title } = modalProps || {};
  let ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      hideModal();
    }
  };
  const keyDownHandler = (event) => {
    if (event.key === "Escape") {
      hideModal();
    }
  };

  const preventScroll = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      dob: e.target.dob.value,
      course: {
        title,
        price: "",
      },
    };
    console.log(data);
    const config = {
      method: "get",
      url: "/api/register",
      responseType: "json",
      data,
    };
    let response = await axios(config);
    if (response.status === 200) {
      hideModal();
    }
  };

  useEffect(() => {
    console.log("render");
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownHandler);
    // document.addEventListener("scroll", preventScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", keyDownHandler);
      // document.removeEventListener("scroll", preventScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-400 bg-opacity-90">
      <div ref={ref} className="m-4 w-[512px] rounded-2xl bg-[#DADADA] p-8">
        <h4 className="text-[16px] font-bold leading-none">{title}</h4>
        <p className="mt-4 text-[14px] leading-[18px]">
          Rất mong chờ được đón chào bạn ở lớp học lần này nhé
        </p>
        <form action="/api/register" onSubmit={handleSubmit} className="mt-8">
          <div className="mt-4">
            <label className="block hidden" htmlFor="name">
              Họ và tên
            </label>
            <input
              type="text"
              required
              className="h-[50px] w-full rounded-full p-4"
              id="name"
              name="name"
              placeholder="Họ và tên"
            />
          </div>
          <div className="mt-4">
            <label className="block hidden" htmlFor="name">
              Số điện thoại
            </label>
            <input
              type="text"
              required
              className="h-[50px] w-full rounded-full p-4"
              id="phone"
              placeholder="Số điện thoại"
              name="phone"
            />
          </div>
          <div className="mt-4">
            <label className="block hidden" htmlFor="dob" name="dob">
              Ngày sinh
            </label>
            <input
              type="date"
              required
              className="h-[50px] w-full rounded-full p-4"
              id="dob"
              placeholder="dd-mm-yyyy"
            />
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="term"
              required
              className="form-checkbox mr-2 h-[25px] w-[25px] rounded-md"
            />
            <label htmlFor="term" className="align-middle">
              Tôi đồng ý với các{" "}
              <span className="font-bold underline">
                điều khoản & điều kiện
              </span>
            </label>
          </div>
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="btn-primary inline-block w-full md:w-auto"
            >
              Đăng Ký Ngay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;