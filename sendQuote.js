require("dotenv").config();
// Your Resend API key (get the key from resend.com)(resend is what would handle the email delivery for you incase you're not familiar with it)
const resend_api_key = process.env.RESEND_API_KEY;
const cronJob = require("node-cron");
const axios = require("axios")
const {Resend} = require("resend");
const resend = new Resend(resend_api_key);
// Gets the random quote from the getQuote function
const {randomQuote} = require("./utils/getQuote");

const resend_mail_function = async ()=>{
    const {quote,author} = await randomQuote();
    const {data,error} = await resend.emails.send({
        from:"ACE CODES <onboarding@resend.dev>",
        to:[process.env.RECIPIENT_EMAIL],
        subject:"Daily Quote to Get your day started!!!",
        html:` 
  <div style="font-family: Arial, sans-serif; padding: 20px; background:#f7f7f7;">
    <div style="
        max-width: 500px;
        margin: 0 auto;
        background: white;
        padding: 20px 25px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      "
    >
      <h2 style="
        text-align:center;
        margin-bottom: 20px;
        color: #333;
      ">
        🌅 Daily Motivation
      </h2>

      <p style="
        font-size: 18px;
        line-height: 1.6;
        font-style: italic;
        text-align:center;
        color: #555;
      ">
        “${quote}”
      </p>

      <p style="
        text-align:center;
        margin-top: 10px;
        font-weight: bold;
        color: #222;
      ">
        — ${author}
      </p>

      <hr style="margin:25px 0; opacity:0.3;"/>

      <p style="text-align:center; color:#888; font-size:14px;">
        Have a great day ahead! 💛
      </p>

    </div>
  </div>`
    });

    if(error){
        console.log(error);
    }
    console.log("Email sent:", data);

}
//I don't really know how to order CRON Job schedules yet, but this schedule is to deliver aat 6am everyday
cronJob.schedule("0 5 * * *",()=>{
  console.log("MAIL DELIVERED!!!")
    resend_mail_function();
})
//Writing another cron job so the server does not sleep hopefully (I'm using render.com to host this project)
cronJob.schedule("*/15 * * * *",async ()=>{
  const req = await axios.get(process.env.RENDER_LINK);
  console.log("BANKAI!!!", new Date().toISOString(),req.status)
})