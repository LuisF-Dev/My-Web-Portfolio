import { NextResponse } from "next/server";
import { transporter } from "../../lib/mail";

export async function POST(req) {
    const data = await req.json();
    console.log(data);

    try {
        await transporter.sendMail({
            from: `"${process.env.USER}" <${process.env.USERNAME}>`, //email sender
            to: "luisgatuno55@gmail.com",
            subject: "prueba",
            text: "prueba texto",
            html: "<h1>pruebahtml</h1>",
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json("error");
    }

    return NextResponse.json("success");
}
