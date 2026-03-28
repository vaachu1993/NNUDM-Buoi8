const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d325d8045f4435",
        pass: "6e2d29d5d3a766", // <-- BẠN HÃY DÁN MẬT KHẨU ĐẦY ĐỦ Ở MAILTRAP VÀO ĐÂY NHÉ (thay cho đoạn ****a766)
    },
});

module.exports = {
    sendMail: async (to, url) => {
        const info = await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "RESET PASSWORD REQUEST",
            text: "lick vo day de doi pass", // Plain-text version of the message
            html: "lick vo <a href=" + url + ">day</a> de doi pass", // HTML version of the message
        });

        console.log("Message sent:", info.messageId);
    },
    sendNewUserMail: async (to, username, password) => {
        const info = await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "Tài khoản của bạn đã được tạo",
            text: `Chào ${username}, tài khoản của bạn đã được tạo. Mật khẩu của bạn là: ${password}`, // Plain-text version
            html: `<h3>Chào ${username},</h3><p>Tài khoản của bạn đã được tạo.</p><p>Mật khẩu của bạn là: <strong>${password}</strong></p><p>Vui lòng đăng nhập và đổi mật khẩu.</p>`, // HTML version
        });
        console.log("Message sent:", info.messageId);
    }
}