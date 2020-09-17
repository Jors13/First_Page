import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Element } from "react-scroll";
import Head from "next/head";
import Menu from "../components/Menu";
import Images from "../components/Images";
import Textbox from "../components/Textbox";
import Cards from "../components/Cards";
import Authors from "../components/Authors";
import Footer from "../components/Footer";
import getData from "../public/static/data";

const Index = () => {
	const [galaxies, setGalax] = useState(() => getData("galaxies"));
	const [scientists, setSci] = useState(() => getData("scientists"));
	return (
		<Container>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="keywords" content="Galaxies, Galaxy, Space" />
				<meta name="description" content="Information example site" />
				<meta name="author" content="Jorge Ocaris" />
				<meta name="viewport" content="initial-scale=1.0 , width=device-width" />
				<link rel="icon" href="/static/img/favicon.png" type="image/x-icon" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Nunito:ital@1&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
					rel="stylesheet"
				/>
				<title>Galaxies</title>
			</Head>

			<Row>
				<Col>
					{/*<Menu /> Here we have an error with the link a Van.Link COmponents*/}
				</Col>
			</Row>

			<Row>
				<Col>{/*	<Images /> Images are to big and slow the load so much*/}</Col>
			</Row>

			<Row>
				<Col md={4} xs={12}>
					<Element name="whatIs">
						<Image
							className="tImage"
							src="/static/img/what_is_a_galaxy.png"
							rounded
							width="300"
						/>
					</Element>
				</Col>

				<Col md={8} xs={12}>
					<Textbox />
				</Col>
			</Row>

			<Element name="someG"></Element>
			<Row>
				{galaxies.map((info, i) => {
					//Images are to big and slow the load so much
					return (
						<Col md={6} xs={12} sm={12} key={i}>
							<Cards
								galaxy={info.name}
								image={info.img}
								url={info.ref}
								text={info.description}
							/>
						</Col>
					);
				})}
			</Row>

			<Element name="contributions">
				<Row>
					{scientists.map((info, i) => {
						return (
							<Col md={4} key={i}>
								<Authors
									name={info.name}
									image={info.img}
									url={info.ref}
									text={info.description}
								/>
							</Col>
						);
					})}
				</Row>
			</Element>

			<Element name="about">
				<Footer />
			</Element>
		</Container>
	);
};

export default Index;
