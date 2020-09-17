const getData = data => {
	if (data === "galaxies") {
		const galaxiesInfo = [
			{
				name: "Andromeda",
				img: "/static/img/andromeda2.jpg",
				imgCredits: "Andromeda Galaxy Photo by Guillermo Ferla on Unsplash",
				ref: "https://en.wikipedia.org/wiki/Andromeda_Galaxy",
				description:
					"The Andromeda Galaxy is a spiral galaxy approximately 2.5 millionlight-years from Earth. Andromeda was formed roughly 10 billion years ago  from the collision and subsequent merger of smaller protogalaxies.This Violent Collision formed most of the galaxy's galactic halo and extended disk "
			},
			{
				name: "Milky Way",
				img: "/static/img/milkyWay2.jpg",
				imgCredits: "Milky Way Photo by Jason Blackeye on Unsplash",
				ref: "https://en.wikipedia.org/wiki/Milky_Way",
				description:
					"The Milky Way is the galaxy that contains our Solar system, with the name describing he galaxy's appearance from Eart, is a barred spiral galaxywith a diameter between 150.000 and 200.000 light-years. It's estimated to contain 100-400 billion stars and more than billion planets"
			},
			{
				name: "Large Magellanic Cloud",
				img: "/static/img/largeMagellanicCloud2.jpg",
				imgCredits: "Large Magellanic Cloud Photo by Carlos Fairbairn",
				ref: "https://en.wikipedia.org/wiki/Large_Magellanic_Cloud",
				description:
					"The Large Magellanic Cloud (LMC) is a satellite galaxy of the Milky Way.at a distance of about 163.000 light-years.            The LMC is classifies as a Magellanic spiral. It contains a stellar ar that is geometrically off-center, suggesting that it was barred dwarf spiral galaxy before its spiral arms were disrupted"
			},
			{
				name: "Small Magellanic Cloud",
				img: "/static/img/smallMagellanicCloud2.jpg",
				imgCredits: "Small Magellanic Cloud Photo by ESO/VISTA VMC",
				ref: "https://en.wikipedia.org/wiki/Small_Magellanic_Cloud",
				description:
					"The Small Magellanic Cloud (SMC), or Bunecula Mirror, is a dwarf galaxy near the Milky Way.Classified as a dwarf irregular galaxy, the SMC has a diameter of about 7.000 light-years.The SMC contains a central bar structure, and astronomers speculate that it was once barred spiral galaxy"
			}
		];

		return galaxiesInfo;
	} else if (data === "scientists") {
		const scientistsInfo = [
			{
				name: "Stephen Hawking",
				img: "/static/img/stephenHawking2.jpg",
				ref: "https://en.wikipedia.org/wiki/Stephen_Hawking",
				description:
					"Stephen William Hawking was an English theoretical physicist, cosmologist, and author  who was director of research at the Centre for Theoretical Cosmology at the University of Cambridge.Hawking with his colleague George Ellis worked on the foundation of 'space' and nature of infinite expansion of the universe, described the large scale structure of theuniverse in terms of spacetime using Einstein's General Relativity. The classic book 'The Large Scale Structure of Space-time' contains these works."
			},
			{
				name: "Edwin Hubble",
				img: "/static/img/edwinHubble.jpg",
				ref: "https://en.wikipedia.org/wiki/Edwin_Hubble",
				description:
					"Edwin Powell Hubble was an American astronomer. He played a crucial role in establishing the fields of extragalactic astronomy and observational cosmology and is regarded as one of the most important astronomers of all time.Hubble discovered that many objects previously thought to be clouds of dust and gas and classified as nebulae were actually galaxies beyond the Milky Way.He used the strong direct relationship between a classical Cepheid variable'sluminosity and pulsation for scaling galactic and extragalactic distances. Hubble's name is most widely recognized for the Hubble Space Telescope, which was named in his honor."
			},
			{
				name: "Carl Sagan",
				img: "/static/img/carlSagan2.jpg",
				ref: "https://en.wikipedia.org/wiki/Carl_Sagan",
				description:
					"Carl Sagan, also known as “the astronomer of the people”, was an American astronomer, astrophysicist, author and researcher. He made crucial contributions in popularizing astronomy to the public. He authored over 600 scientific papers and wrote several books about astronomy and natural sciences.Sagan authored more than 20 books about space and the universe.  He won a Pulitzer Prize for his work. His TV series Cosmos still remains one of the most-watched shows in television history"
			}
		];

		return scientistsInfo;
	} else {
		return [];
	}
};

export default getData;
