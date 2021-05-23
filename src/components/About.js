import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

function About() {
	const [author, setauthor] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
			name,
			bio,
			"authorImage":image.asset->url
		}`
			)
			.then((data) => setauthor(data[0]))
			.catch(console.error);
	}, []);

	if (!author) return <div>Loading...</div>;
	return (
		<div>
			<main className="relative">
				<div className="p-10 lg:pt-48 container mx-auto relative ">
					<section className="bg-green-800 rounded-lg shadow-2xl lg-flex p-20">
						{/* //<img src={}/> */}
						<h1>{author.name}</h1>

						<div>
							<div>Block Content</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}

export default About;
