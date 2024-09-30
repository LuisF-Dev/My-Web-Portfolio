import { NextResponse } from "next/server";
import { transporter } from "../../lib/mail";

export async function POST(req) {
    const data = await req.json();
    console.log(data);

    await transporter.sendMail({
        from: `"${process.env.USER}" <${process.env.USERNAME}>`, //email sender
        to: "luisgatuno55@gmail.com",
        subject: data.reason,
        text: "prueba texto",
        html: `<h1>Mensaje de: ${data.name}</h1><p>${data.message}</p>`,
    });

    return NextResponse.json("success");
}
