import { render } from 'svelty-email';
import Hello from '$lib/emails/welcome.svelte';
import nodemailer from 'nodemailer';
import { asClassComponent } from 'svelte/legacy';
import Finnish from '$lib/emails/finnish.svelte';
async function sendMail(name = "",phone = "",client={},cart=[],kind=true){


  console.log(import.meta.env.VITE_PASSWORD,kind)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
  user: "s0528844911@gmail.com",
  pass: import.meta.env.VITE_PASSWORD
}
  });
  
  const emailHtml =  render({
	template: kind ? asClassComponent(Hello) : asClassComponent(Finnish),
    props: kind ? {
      name: name,
      phone: phone
    } : {
      client: client,
      cart: cart,
      paymentId: phone
    }
  });
  console.log(28,kind)

  const options = {
    from:"s0528844911@gmail.com",
    to: 's0528844911@gmail.com',
    subject: 'פניה חדשה',
    html: emailHtml
  };
  console.log(options,kind)

  console.log(options,28)
await transporter.sendMail(options);
  transporter.verify(function(err, success) {
  if (err) {
    console.log("connection error",err)
    return 'error';
} 
else {
  console.log("אחלה",success)
    return 'OK';
}
});}

export async function POST({ request }) {
const data = await request.json()
console.log("Form submitted a",data); 
const name = data.name || ""
const phone = data.phone || ""
const cart = typeof data.cart === 'string' ? JSON.parse(data.cart) : data.cart || []
const client = typeof data.client === 'string' ? JSON.parse(data.client) : data.client || {}
const kind = data.kind === false ? false : (data.kind === 'false' ? false : true)

 const ds = await sendMail(name,phone,client,cart,kind)
.then()
  
return new Response(ds);
}
