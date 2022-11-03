import React, { useEffect, useRef } from "react";
import { useGlobalModalContext } from "./GlobalModal";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Clock } from "react-svg-spinners";


const RegisterModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const { title, program, course } = modalProps || {};
  let ref = useRef(null);
  const schema = yup.object({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Mời bạn nhập thông tin"),
    phone: yup
      .string()
      .required("Mời bạn nhập thông tin")
      .matches(
        /((09|03|07|08|05|012)+([0-9]{8})\b)/,
        "Mời nhập số điện thoại chính xác"
      ),
    name: yup.string().required("Mời bạn nhập thông tin"),
  });
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    shouldUseNativeValidation: true,
    resolver: yupResolver(schema),
  });
  const { isSubmitting, isSubmitSuccessful } = formState;

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

  const handleSubmitForm = async (formData) => {
    let data = { data: { ...formData, course, program } };
    let mailConfig = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API}/api/register`,
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
      data,
    };
    const config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_STRAPI_API}/api/student-contacts`,
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
      data,
    };
    let mailRes = await axios(mailConfig);
    let response = await axios(config);
    if (response.status === 200) {
      hideModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  useEffect(() => {
    reset({
      name: "",
      email: "",
      phone: "",
    });
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-400 bg-opacity-90">
      <div ref={ref} className="m-4 w-[512px] rounded-2xl bg-[#DADADA] p-8">
        <h4 className="text-[16px] font-bold leading-none">{title}</h4>
        <p className="mt-4 text-[14px] leading-[18px]">
          Rất mong chờ được đón chào bạn ở lớp học lần này nhé
        </p>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-8">
          <div className="mt-4">
            <label className="block hidden" htmlFor="name">
              Họ và tên
            </label>
            <input
              type="text"
              className="h-[50px] w-full rounded-full p-4"
              id="name"
              name="name"
              placeholder="Họ và tên"
              {...register("name")}
            />
          </div>
          <div className="mt-4">
            <label className="block hidden" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="h-[50px] w-full rounded-full p-4"
              id="email"
              placeholder="Email"
              name="email"
              {...register("email")}
            />
          </div>
          <div className="mt-4">
            <label className="block hidden" htmlFor="phone">
              Số điện thoại
            </label>
            <input
              type="text"
              className="h-[50px] w-full rounded-full p-4"
              id="phone"
              placeholder="Số điện thoại"
              name="phone"
              {...register("phone")}
            />
          </div>

          <div className="mt-4">
            <input
              type="checkbox"
              id="term"
              required
              checked
              className="form-checkbox mr-2 h-[25px] w-[25px] rounded-md"
            />
            <label htmlFor="term" className="align-middle">
              Tôi đồng ý với các{" "}
              <a
                href="https://docs.google.com/document/d/1D_jTT8YlllIZy_Jsh7-YUYutlUttSEGy9YwoUzhoN5c/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
              >
                điều khoản & điều kiện
              </a>
            </label>
          </div>
          <div className="mt-4 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary inline-block inline-flex w-full min-w-[160px] items-center justify-center leading-[48px] disabled:opacity-80 md:w-auto"
            >
              {isSubmitting && (
                <span className="inline-block">
                  <Clock color="white" width={30} height={30} />
                </span>
              )}
              {!isSubmitting && <span>Đăng Ký Ngay</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};;;;

export default RegisterModal;
