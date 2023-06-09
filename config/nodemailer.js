import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

  // create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: email,
        pass: pass,
    },
});

export const mailOptions= {
    from: email,
}



// //send mail with defined transport object
// let info = await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// });

// console.log("Message sent: %s", info.messageId);
// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // Preview only available when sending through an Ethereal account
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...