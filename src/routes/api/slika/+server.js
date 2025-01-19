import { json } from '@sveltejs/kit';

const API_BASE_URL = 'https://api.invoice4u.co.il/Services/ApiService.svc/';
const API_KEY = import.meta.env.VITE_API;
export async function POST({ request, fetch }) {
    const invoiceData = await request.json();

  try {
    const response = await fetch(`${API_BASE_URL}ProcessApiRequestV2`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "request": {
          "Invoice4UUserApiKey": API_KEY,
          "Type": "1",
          "CreditCardCompanyType": "1",
          "FullName": invoiceData.FullName,
          "Phone": invoiceData.Phone,
          "Email": invoiceData.Email,
          "Sum": "1",
          "Description": "Invoice4U Clearing",
          "PaymentsNum": "1",
          "Currency": "ILS",
         // "OrderIdClientUsage": "order id if needed",
          "IsDocCreate": "true",
          "DocHeadline": "arte",
          "Comments": "תודה רבה",
          "IsManualDocCreationsWithParams": "false",
          "DocItemQuantity": "1|1",
          "DocItemPrice": "10|10",
          "DocItemTaxRate": "17|17",
         // "IsItemsBase64Encoded": "false",
       //   "DocItemName": "first item|second item",
        //  "IsGeneralClient": "true",
        // "IsAutoCreateCustomer": "true",
         // "CallBackUrl": "https://webhook.site/123153",
          "ReturnUrl": "https://www.arte-bs.com/thanks",
          "AddToken": "false",
          "AddTokenAndCharge": "false",
          "ChargeWithToken": "false",
          "Refund": "false",
          "IsStandingOrderClearance" : "false",
          "StandingOrderDuration" : "0"
        }
      })
    });
    const data = await response.json();
    console.log('Response:', data);
    
    return json(data);
  } catch (error) {
    console.error('Error creating invoice:', error);
    return json({ error: 'Failed to create invoice' }, { status: 500 });
  }
}
