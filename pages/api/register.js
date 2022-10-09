import nodemailer from "nodemailer";

const register = async (req, res) => {
  // Get data submitted in request's body.
  const body = req.body;
  let name = body.data.name;
  let email = body.data.email;
  let phone = body.data.phone;
  let program = body.data.program;
  let course = body.data.course;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: process.env.REGISTER_EMAIL,
      subject: `Mind Connector - Register submission from ${name}`,
      html: `
        <p><b>NEW REGISTRATION FROM WEBSITE</b></p>

        <p><b>Tên:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Số điện thoại:</b> ${phone}</p>
        <p><b>Program:</b> ${program}</p>
        <p><b>Course:</b> ${course}</p>
      `,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ data: `Register success!` });
};

export default register;
