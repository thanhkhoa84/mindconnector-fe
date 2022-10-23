import nodemailer from "nodemailer";

const register = async (req, res) => {
  // Get data submitted in request's body.
  const { email, field, industry, medium, name, phone, title } = req.body.data;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let html = `
    <p><b>LEADING FORM SUBMISSION</b></p>
    <p>
      <b>Doanh nghiệp của bạn thuộc lĩnh vực nào?</b><br/>
      ${industry}
    </p>
    <p>
      <b>Bạn cần hỗ trợ về mặt nào?</b><br/>
      ${field}
    </p>
    <p></p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Số điện thoại:</b> ${phone}</p>
    <p><b>Tên:</b> ${name}</p>
    <p><b>Chức vụ hiện tại:</b> ${title}</p>
    <p>
      <b>Bạn muốn chúng tôi liên hệ qua email hay số điện thoại? </b> ${medium}
    </p>
  `;

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: process.env.REGISTER_EMAIL,
      subject: `Mind Connector - Leading form submission from ${name}`,
      html,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ data: `Register success!` });
};

export default register;
