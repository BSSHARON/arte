import { render } from 'svelty-email';
import Hello from '$lib/emails/welcome.svelte';
import nodemailer from 'nodemailer';
import { asClassComponent } from 'svelte/legacy';

async function sendMail(name = "",phone = ""){

  const transporter = nodemailer.createTransport({
    service: 'gmail',
auth: {
  user: "arte.bsharon@gmail.com",
  pass: import.meta.env.VITE_PASSWORD
}
  });
  
  const emailHtml =  render({
	template: asClassComponent(Hello),
    props: {
      name: name,
      phone: phone
    }
  });

  const options = {
    from:"arte.bsharon@gmail.com",
    to: 'arte.bsharon@gmail.com',
    subject: 'פניה חדשה',
    html: emailHtml
  };
  
  transporter.sendMail(options);
  transporter.verify(function(err, success) {
  if (err) {
    console.log(err)
    return 'error';
} 
else {
  console.log(success)
    return 'OK';
}
});}

export async function POST({ request }) {
const data = await request.json()
console.log("Form submitted a",data); 
const name = data.name 
const phone = data.phone
 const ds = await sendMail(name,phone)
.then()
  
return new Response(ds);
}