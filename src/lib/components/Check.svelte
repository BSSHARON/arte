<script>
  import { cart } from '$lib/stores/cart.svelte.js';
    let client = $state({
        name:"",
        lastName:"",
        email:"",
        address:"",
        country:"",
        state:"",
        zip:"",
        phone:""
        })
        let loading = $state(false);
        let {amount = 0} = $props();
//	"raw": "{\r\n    \"request\": {\r\n  
//       \"Invoice4UUserApiKey\": \"\",\r\n   
//      \"Type\": \"1\",\r\n    
//     \"CreditCardCompanyType\": \"1\",\r\n    
//     \"FullName\": \"Client Name\",\r\n   
//      \"Phone\": \"0500000000\",\r\n  
//       \"Email\": \"test@test.com\",\r\n 
//        \"Sum\": \"1\",\r\n  
//       \"Description\": \"Invoice4U Clearing\",\r\n     
//    \"PaymentsNum\": \"1\",\r\n       
//  \"Currency\": \"ILS\",\r\n  
//       \"OrderIdClientUsage\": \"order id if needed\",\r\n  
//       \"IsDocCreate\": \"true\",\r\n     
//    \"DocHeadline\": \"Document headline\",\r\n    
//     \"Comments\": \"Document comments\",\r\n    
//     \"IsManualDocCreationsWithParams\": \"false\",\r\n   
//      \"DocItemQuantity\": \"1|1\",\r\n   
//      \"DocItemPrice\": \"10|10\",\r\n     
//    \"DocItemTaxRate\": \"17|17\",\r\n     
//    \"IsItemsBase64Encoded\": \"false\",\r\n    
//     \"DocItemName\": \"first item|second item\",\r\n  
//       \"IsGeneralClient\": \"true\",\r\n    
//     \"IsAutoCreateCustomer\": \"true\",\r\n     
//    \"CallBackUrl\": \"https://webhook.site/123153\",\r\n     
//    \"ReturnUrl\": \"https://www.invoice4u.co.il/\",\r\n    
//     \"AddToken\": \"false\",\r\n    
//     \"AddTokenAndCharge\": \"false\",\r\n    
//     \"ChargeWithToken\": \"false\",\r\n  
//       \"Refund\": \"false\",\r\n   
//      \"IsStandingOrderClearance\" : \"false\",\r\n     
//    \"StandingOrderDuration\" : \"0\"\r\n    }\r\n}"

  async function handlePayment() {
    console.log(client,cart.cart)
    localStorage.setItem('client', JSON.stringify(client));
    if(amount <= 0) {
        alert('אי אפשר לשלם על סכום שלילי או אפס');
        return;
    }
    if(!client.phone) {
        alert('יש להזין מספר טלפון תקין');
        return;
    }
    if(!client.name && !client.lastName) {
        alert('יש להזין מספר טלפון תקין');
        return;
    }
    if(loading) return;
    loading = true;
      const paymentData = {
        FullName: client.name + " " + client.lastName,
        Phone: client.phone,
        Email: client.email,
        Sum: amount,
      };
      let t
      try {
        const response = await fetch
    ('/api/slika', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
    })
    const result = await response.json();
            
            if (result.Errors) {
                throw new Error(result.Errors);
            }
            console.log('Payment response:', result); // Debug log

            const paymentId = result.d.OpenInfo.find(info => info.Key === 'PaymentId')?.Value;
            
            // Store payment ID if needed
            localStorage.setItem('lastPaymentId', paymentId);
            
            // Redirect to payment page
            window.location.href = result.d.ClearingRedirectUrl;
            
        } catch (error) {
            alert('Payment failed: ' + error?.message);
        }
  }
  import { cities } from './cities.js';

    </script>
    <main>
        <div class="container px-4 px-lg-5  mx-auto" >
        <div class="py-5 text-center">
            <img class="d-block mx-auto mb-4" src="/images/logo.png" alt="" width="195" height="59">
            <h2> סיום רכישה</h2>
        </div>

        <div class="" dir="rtl">
      <!-- <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-body-secondary">עגלת הקניות</span>
          <span class="badge bg-secondary rounded-pill">3</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">שם מוצר</h6>
              <small class="text-body-secondary">תיאור קצר</small>
            </div>
            <span class="text-body-secondary">$12</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">מוצר שני</h6>
              <small class="text-body-secondary">תיאור קצר</small>
            </div>
            <span class="text-body-secondary">$8</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>סך הכל</span>
            <strong>₪{total}</strong>
          </li>
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="קוד פרומו">
            <button type="submit" class="btn btn-secondary">אישור</button>
          </div>
        </form>
      </div>-->
      <div class=" mx-auto text-right" dir="rtl">
        <h4 class="mb-3 text-right">כתובת למשלוח</h4>
        <form class="needs-validation">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">שם פרטי</label>
              <input type="text" class="form-control" id="firstName" placeholder="" bind:value={client.name} required="">
              <div class="invalid-feedback">
                יש להזין שם פרטי תקין.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">שם משפחה</label>
              <input type="text" class="form-control" id="lastName" placeholder="" bind:value={client.lastName} required="">
              <div class="invalid-feedback">
                יש להזין שם משפחה תקין.
              </div>
            </div>


            <div class="col-12">
              <label for="email" class="form-label">דוא"ל <span class="text-body-secondary">(אופציונלי)</span></label>
              <input type="email" bind:value={client.email} class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                יש להזין כתובת דוא"ל תקינה עבור עדכוני משלוח.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">כתובת</label>
              <input type="text" bind:value={client.address} class="form-control" id="address" placeholder="רחוב 12/4" required="">
              <div class="invalid-feedback">
                יש להזין את כתובת המשלוח שלך.
              </div>
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">מדינה</label>
              <select bind:value={client.country} class="form-select" id="country" required="">
                <option value="">בחר...</option>
                <option>ישראל</option>
              </select>
              <div class="invalid-feedback">
                יש לבחור מדינה תקינה.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">עיר</label>
              <select bind:value={client.city} class="form-select" id="state" required="">
                <option value="">בחר...</option>
                {#each cities as city}
                <option value={city}>{city}</option >
            {/each}
                        </select>
              <div class="invalid-feedback">
                יש לבחור עיר תקינה
              </div>
            </div>

            <div class="col-md-3">

              <label for="zip" class="form-label">מיקוד</label>
              <input bind:value={client.zip} type="text" class="form-control" id="zip" placeholder="" required>
              <div class="invalid-feedback">
                נדרש מיקוד.
              </div>
            </div>
          </div>

          <hr class="my-4">
          <label for="phone" class="form-label">מספר טלפון</label>
          <input type="text" class="form-control" id="phone" placeholder="050-1234567" required bind:value={client.phone}>
          <div class="invalid-feedback">
            נדרש להוסיף טלפון.
          </div>
    <br>


          <button class="w-100 btn btn-primary btn-lg" type="submit" onclick={handlePayment}>{#if loading} ... {:else} לתשלום {/if}</button>
        </form>
      </div>
    </div>
  </main>
<style>
    .our{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
    }
  </style>