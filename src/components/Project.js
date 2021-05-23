import sanityClient from "../client";
import React, { useState, useEffect } from "react";

function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
			title,
			date,
			place,
			description,
			projectType,
			link,
			tags
		}`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);
	return (
		<div>
			<main className="bg-green-100 min-h-screen p-12">
				<section className="conatainer mx-auto">
					<h1 className="text-5xl flex justify-center ">My Project</h1>
					<h2 className="text-lg flex justify-center mt-5 mb-12">
						{" "}
						Welcome to my projects{" "}
					</h2>
					<section className="grid grid-cols-2 gap-8">
						{projectData &&
							projectData.map((project, index) => (
								<article className="relative rounded-lg shadow-xl bg-white p-16">
									<h3 className="text-gray-800 font-bol mb-2 text-3xl hover:text-red-700">
										<a
											href={project.link}
											alt={project.title}
											target="_blank"
											rel="noopener noreferrer
								"
										>
											{project.title}
										</a>
									</h3>
									<div className="text-gray-500 text-xs space-x-4">
										<span>
											<strong className="font-bold">Finished on </strong>:
											{new Date(project.date).toLocaleDateString()}
										</span>
										<span>
											<strong className="font-bold">Company </strong>:
											{project.place}
										</span>
										<span>
											<strong className="font-bold">Type </strong>:
											{project.projectType}
										</span>
										<p className="my-6 text-gray-700 text-lg">
											{project.description}
										</p>
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
										>
											View the Project
											<span role="img" aria-label="right pointer">
												👉
											</span>
										</a>
									</div>
								</article>
							))}
					</section>
				</section>
			</main>
		</div>
	);
}

export default Project;
