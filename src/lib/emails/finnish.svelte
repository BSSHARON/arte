<script>
	import { Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from 'svelty-email';

	export let client;
	export let cart;
    export let paymentId
	const fontFamily =
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

	const main = {
		backgroundColor: '#ffffff'
	};

	const container = {
		margin: '0 auto',
		padding: '20px 0 48px',
        textAlign: 'right'
	};

	const logo = {
		margin: '0 auto'
	};

	const paragraph = {
		fontFamily,
		fontSize: '16px',
		lineHeight: '26px',
        textAlign: 'right'
	};

	const btnContainer = {
		textAlign: 'center'
	};

	const button = {
		fontFamily,
		backgroundColor: '#5F51E8',
		borderRadius: '3px',
		color: '#fff',
		fontSize: '16px',
		textDecoration: 'none',
		textAlign: 'center' ,
		display: 'block'
	};

	const hr = {
		borderColor: '#b4e197',
		margin: '20px 0'
	};

	const footer = {
		fontFamily,
		color: '#8898aa',
		fontSize: '12px'
	};
    const calculatePrice = (item) => {
    // בדוק אם יש גדלים זמינים
    if (!item.sizes || item.sizes.length === 0) {
        return item.price; // אם אין גדלים, החזר את המחיר הבסיסי
    }

    // חפש את הגודל הראשון עם כמות זמינה
    for (let size of item.sizes) {
        if (size.quantity > 0) {
            // חפש את סוג ההדפסה הראשון עם כמות זמינה
            for (let kind of item.kind) {
                if (kind.quantity > 0) {
                    const sizeIndex = item.sizes.indexOf(size);
                    const kindIndex = item.kind.indexOf(kind);
                    return size.price[kindIndex]; // החזר את המחיר לפי אינדקס הגודל והסוג
                }
            }
        }
    }

    return item.price; // אם כל הכמויות הן 0, החזר את המחיר הבסיסי
}
let totalPrice = 0;
    $: {
        totalPrice = 0;
        for (const item of cart) {
            totalPrice += calculatePrice(item) * item.quantity;
        }
    }
    </script>

<Html lang="he" dir='rtl'>
	<Head />
	<Preview preview="פניה חדשה" />
	<Section style={main}>
		<Container style={container}>
			<Img
				src="https://www.arte-bs.com/images/logo.png"
				alt="Svelte logo"
				style={logo}
				width="200"
				height="50"
			/>			
            	<Text style={paragraph}>התקבלה הזמנה חדשה מאת {client.name} {client.lastName} </Text>
            <Text style={paragraph}>טלפון: {client.phone}</Text>
            <Text style={paragraph}>אימייל: {client.email}</Text>
            <Text style={paragraph}>כתובת: {client.address}</Text>
            <Text style={paragraph}>עיר: {client.city}</Text>
            <Text style={paragraph}>מדינה: {client.country}</Text>
            <Text style={paragraph}>מיקוד: {client.zip}</Text>

            <Hr style={hr} />

            <Text style={paragraph}> פרטי הזמנה:</Text>
            {#each cart as item}
            {#if item.images && item.images.length > 0}
                <Img
                    src={"https://www.arte-bs.com" + item.images[0].src}
                    alt={item.name}
                    width="100"
                    height="100"
                />
            {/if}
            <Text style={paragraph}>שם מוצר: {item.name}</Text>
            <Text style={paragraph}>כמות: {item.quantity}</Text>
            <Text style={paragraph}>מחיר: {calculatePrice(item)}  ₪</Text>
            {#if item.sizes && item.sizes.filter(size => size.quantity > 0).length > 0}
                <Text style={paragraph}>מידה:</Text>
                {#each item.sizes.filter(size => size.quantity > 0) as size}
                    <Text style={paragraph}>- {size.name}</Text>
                {/each}
            {/if}
            {#if item.kind && item.kind.filter(k => k.quantity > 0).length > 0}
                <Text style={paragraph}>סוג:</Text>
                {#each item.kind.filter(k => k.quantity > 0) as kind}
                    <Text style={paragraph}>- {kind.name}</Text>
                {/each}
            {/if}
            <Hr style={hr} />
        {/each}

        <Text style={paragraph}>סה"כ: {totalPrice} ₪</Text>


            <Text style={paragraph}>מספר תשלום: {paymentId}</Text>

        <Text style={paragraph}>!יום טוב</Text>
          
            
			<Hr style={hr} />
		
		</Container>
	</Section>
</Html>