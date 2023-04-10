import { mailOptions, transporter } from "../../config/nodemailer";

export default async function mailHandler(req, res) {
    if(req.method === "POST"){
        const data = req.body;
        try {
            for(const student of data){
                await transporter.sendMail({
                    ...mailOptions,
                    to: student.email,
                    subject: "Rocket Roster Sign up", // Subject line
                    text: `Hello ${student.fullName}, \n Please sign up for Rocket Rosters with your unique code.`,  // plain text body
                    html: "<h1>Rocket Roster Sign up</h1>",
                })
            }
            return res.status(200).json({success: true});
        } catch (error) {
            console.log(error);
            return res.status(400).json({message: error.message});
        }
    }
    return res.status(400).json({message: "bad request"});
}