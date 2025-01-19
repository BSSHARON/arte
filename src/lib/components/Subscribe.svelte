   <script>
    let phone = $state('') , name = $state('')
    async function sendToMail(){
  if(phone && name){
    a = true
    let data = {name,phone}
    await fetch('api/email',{
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response)
  .then((data) => {
    console.log('Success:', data);
    a= false
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('error')
  })
  }else {
    alert('כדאי למלא שם וטלפון ולנסות שוב')
  }
}
let a = $state(false)
   </script>
   
   <div class="subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="section-heading">
                        <h2>מוזמנים ליצור איתנו קשר </h2>
                        <span>הצעת מחיר או כל שאלה, מוזמנים לדבר איתנו בווטסאפ 050-2374217</span>
                    </div>
                    <form id="subscribe" action="" method="get">
                        <div class="row">
                          {#if !a}

                          <div class="col-lg-5">
                            <fieldset>
                              <input bind:value={name} name="name" type="text" id="name" placeholder="שם מלא">
                            </fieldset>
                          </div>
                          <div class="col-lg-5">
                            <fieldset>
                              <input bind:value={phone} name="phone" type="text" id="phone" placeholder="מספר טלפון לחזרה">
                            </fieldset>
                          </div>
                          <div class="col-lg-2">
                            <fieldset>
                              <button onclick={sendToMail} type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                            </fieldset>
                          </div>
                          {/if}

                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <li>איסוף הזמנות ראשון לציון<br><span>הגעה בתיאום מראש בלבד</span></li>
                                <li>טלפון | ווצאפ<br><span>050-2374217</span></li>
                                <li>כתובתנו ראשון לציון<br><span>הגעה בתיאום מראש בלבד</span></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li>שעות פעילות:<br><span>08:00  - 20:00 </span></li>
                                <li>דוא"ל<br><span><a href="mailto:arte.bsharon@gmail.com">arte.bsharon@gmail.com</a></span></li>
                                <li>רשתות חברתיות<br><span><a href="https://www.facebook.com/profile.php?id=61557695587039">Facebook</a>, <a href="https://www.instagram.com/arte.bsharon/">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<style>
  .subscribe {
    padding: 80px 0px;
  }
  .section-heading {
      margin-bottom: 30px;
  }
  .section-heading h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 10px;
  }
    .section-heading span {
        font-size: 16px;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    #subscribe form {
        margin-top: 30px;
    }

    #subscribe form .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    #subscribe form .col-lg-5,
    #subscribe form .col-lg-2 {
        padding-left: 15px;
        padding-right: 15px;
    }
    #subscribe form .col-lg-5 {
        width: calc(100% / 12 * 5);
    }
    #subscribe form .col-lg-2 {
        width: calc(100% / 12 * 2);
    }

    #subscribe form input {
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-radius: 3px;
        border: 1px solid #ddd;
        background-color: #fff;
        padding: 0px 15px;
    }
    #subscribe form .main-dark-button {
        border: none;
        border-radius: 3px;
        background-color: #2b2b2b;
        padding: 0 15px;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
     #subscribe form .main-dark-button:hover {
       background-color: #1b1b1b;
     }

  .subscribe .row {
    display: flex;
    flex-wrap: wrap;
  }

  .subscribe .col-lg-8 {
    width: 66.66667%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .subscribe .col-lg-4 {
    width: 33.33333%;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    align-items: center;
  }
  .subscribe ul li {
     margin-bottom: 15px;
      list-style: none;
  }
  .subscribe ul li span {
      display: block;
      font-size: 14px;
  }
    .subscribe ul li a {
        color: #333;
    }
  @media (max-width: 992px) {
    .subscribe .col-lg-8,
    .subscribe .col-lg-4 {
       width: 100%;
    }
    .subscribe .col-lg-4 {
      margin-top: 30px;
      flex-direction: column;
      align-items: flex-start;
    }
      #subscribe form .col-lg-5,
      #subscribe form .col-lg-2 {
          width: 100%;
          margin-bottom: 10px;
      }
  }
</style>