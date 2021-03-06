import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {

	render() {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
					<script src="https://kit.fontawesome.com/8cb3f007b7.js" crossOrigin="anonymous" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
					<link rel="shortcut icon" href="../static/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}