import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  try {
    const {
      name,
      email,
      purpose,
      budget,
    } = req.body;

    await resend.emails.send({
      from: "Lover Of The Moon <onboarding@resend.dev>",
      to: "melisgnn99@gmail.com",
      subject: "New Tarot Reading Booking",

      reply_to: email,

      html: `
        <div style="
            font-family:Arial,Helvetica,sans-serif;
            max-width:650px;
            margin:auto;
            padding:30px;
            background:#faf7ff;
            border-radius:18px;
            border:1px solid #d7a548;
        ">

            <h1 style="
                color:#7a4eb0;
                margin-bottom:20px;
            ">
                ✦ New Tarot Booking ✦
            </h1>

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Budget:</strong> €${budget}</p>

            <hr>

            <h2>Purpose of Reading</h2>

            <p style="
                white-space:pre-wrap;
                line-height:1.7;
            ">
                ${purpose}
            </p>

        </div>
      `,
    });

    return res.status(200).json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Unable to send email.",
    });

  }
}