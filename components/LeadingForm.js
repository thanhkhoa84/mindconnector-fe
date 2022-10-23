import axios from "axios";
import { useForm } from "react-hook-form";
import Image from "next/future/image";
import { Clock } from "react-svg-spinners";

const LeadingForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const handleSubmitForm = async (formData) => {
    let data = { data: { ...formData } };

    const config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_STRAPI_API}/api/leading-forms`,
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
      data,
    };
    let response = await axios(config);
  };

  return (
    <div className="overflow-hidden rounded-[15px] bg-[#D0278A] lg:flex">
      <div className="p-4 py-12 md:p-8">
        <h4 className="text-[24px] font-black leading-none text-white">
          Liên hệ ngay với chuyên gia
        </h4>
        <p className="mt-4 text-white">
          Để lại thông tin nếu bạn cần đào tạo nhân viên hoặc tư vấn chiến lược
          kinh doanh.
        </p>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-8">
          <div className="mt-4">
            <label className="block hidden" htmlFor="industry">
              Doanh nghiệp của bạn thuộc lĩnh vực nào?
            </label>
            <input
              type="text"
              required
              className="h-[50px] w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full px-4"
              id="industry"
              name="industry"
              placeholder="Doanh nghiệp của bạn thuộc lĩnh vực nào?"
              {...register("industry")}
            />
          </div>
          <div className="mt-4">
            <label className="block hidden" htmlFor="field">
              Bạn cần hỗ trợ về mặt nào?
            </label>
            <select
              required
              className="h-[50px] w-full appearance-none overflow-hidden text-ellipsis whitespace-nowrap rounded-full"
              id="field"
              name="field"
              placeholder="Bạn cần hỗ trợ về mặt nào?"
              {...register("field")}
            >
              <option value="Tư vấn Chiến lược phát triển chuỗi F&B ">
                Tư vấn Chiến lược phát triển chuỗi F&B
              </option>
              <option value="Tư vấn Quản Trị Sự thay đổi">
                Tư vấn Quản Trị Sự thay đổi
              </option>
              <option value="Tư vấn và Thực thi Sales & Marketing (MSO)">
                Tư vấn và Thực thi Sales & Marketing (MSO)
              </option>
              <option value="Đào tạo nội bộ">Đào tạo nội bộ</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block hidden" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              required
              className="h-[50px] w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full p-4"
              id="email"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div className="mt-4">
            <label className="block hidden" htmlFor="phone">
              Số điện thoại
            </label>
            <input
              type="text"
              required
              className="h-[50px] w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full p-4"
              id="phone"
              name="phone"
              placeholder="Số điện thoại"
              {...register("phone")}
            />
          </div>
          <div className="mt-4">
            <label className="block hidden" htmlFor="name">
              Họ và tên
            </label>
            <input
              type="text"
              required
              className="h-[50px] w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full p-4"
              id="name"
              name="name"
              placeholder="Họ và tên"
              {...register("name")}
            />
          </div>
          <div className="mt-4">
            <label className="block hidden" htmlFor="title">
              Chức vụ hiện tại
            </label>
            <input
              type="text"
              required
              className="h-[50px] w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full p-4"
              id="title"
              name="title"
              placeholder="Chức vụ hiện tại"
              {...register("title")}
            />
          </div>
          <div className="mt-4 text-white">
            <label className="block" htmlFor="medium">
              Bạn muốn chúng tôi liên hệ qua email hay số điện thoại?
            </label>
            <div className="mt-2">
              <div className="inline-block">
                <input
                  type="radio"
                  required
                  className="form-check-input form-radio mr-2 h-[30px] w-[30px] rounded-[4px] bg-white"
                  id="medium1"
                  name="medium"
                  value="Email"
                  {...register("medium")}
                />
                <label className="inline-block align-middle" htmlFor="medium1">
                  Email
                </label>
              </div>

              <div className="ml-8 inline-block">
                <input
                  type="radio"
                  required
                  className="form-check-input form-radio mr-2 h-[30px] w-[30px] appearance-none rounded-[4px] bg-white outline-none"
                  id="medium2"
                  name="medium"
                  value="Số điện thoại"
                  {...register("medium")}
                />
                <label className="inline-block align-middle" htmlFor="medium2">
                  Số điện thoại
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary block inline-flex w-full items-center justify-center align-middle text-[14px] leading-[48px] disabled:opacity-80 xs:text-base"
            >
              {isSubmitting && (
                <span className="inline-block">
                  <Clock color="white" width={30} height={30} />
                </span>
              )}
              {!isSubmitting && <span>Trò Chuyện Ngay Với Chuyên Gia</span>}
            </button>
          </div>
        </form>
      </div>
      <div className="invisible hidden lg:visible lg:flex">
        <Image
          src="/img/bg-leading-form.png"
          alt=""
          width={512}
          height={680}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LeadingForm;
