import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "tristin.block49@ethereal.email",
        pass: "JvxNFesrV5grBF5GQn",
    },
});
