<script>
	import { Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from 'svelty-email';

	export let name = 'John';
	export let phone = ''
	const fontFamily =
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

	const main = {
		backgroundColor: '#ffffff'
	};

	const container = {
		margin: '0 auto',
		padding: '20px 0 48px'
	};

	const logo = {
		margin: '0 auto'
	};

	const paragraph = {
		fontFamily,
		fontSize: '16px',
		lineHeight: '26px'
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
			<Text style={paragraph}>התקבלה פניה חדשה מאת {name} </Text>

			<Text style={paragraph}>טלפון {phone}</Text>
			<Section style={btnContainer}>
				</Section>
			
			<Text style={paragraph}>!יום טוב</Text>
			<Hr style={hr} />
		
		</Container>
	</Section>
</Html>