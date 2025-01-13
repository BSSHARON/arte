<script>
    let client = $state({
        name:"",
        lastName:"",
        email:"",
        address:"",
        country:"",
        state:"",
        zip:"",
        })
    </script>
    <main dir="rtl">
        <div class="container our px-4 px-lg-5" >
        <div class="py-5 text-center">
            <img class="d-block mx-auto mb-4" src="/images/logo.png" alt="" width="195" height="59">
            <h2> סיום רכישה</h2>
        </div>

        <div class="row g-3"dir="rtl">
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
      <div class="col-md-7 col-lg-8 text-right" dir="rtl">
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
              <select class="form-select" id="state" required="">
                <option value="">בחר...</option>
                <option>ירושלים</option>
              </select>
              <div class="invalid-feedback">
                יש לבחור עיר תקינה
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">מיקוד</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                נדרש מיקוד.
              </div>
            </div>
          </div>

          <hr class="my-4">

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info">
            <label class="form-check-label" for="save-info">שמור את המידע הזה לפעם הבאה</label>
          </div>

          <hr class="my-4">

            <h4 class="mb-3">פרטי כרטיס אשראי</h4>
          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">השם על הכרטיס</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required="">
              <small class="text-body-secondary">שם מלא כפי שמוצג על הכרטיס</small>
              <div class="invalid-feedback">
                נדרש שם על הכרטיס
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">מספר כרטיס</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required="">
              <div class="invalid-feedback">
                נדרש מספר כרטיס אשראי
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">תוקף</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
              <div class="invalid-feedback">
                נדרש תאריך תפוגה
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
              <div class="invalid-feedback">
                נדרש קוד אימות
              </div>
            </div>
          </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">לתשלום</button>
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
    }
  </style>