import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";

export default function SinglePost() {
	const [singlePost, setSinglePost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
			title,
			_id,
			slug,
			mainImage{
				asset->{
					_id,
					url
				}
			},
			body,
			"name":author->name,
			"authorImage":author->image
		}`
			)
			.then((data) => setSinglePost(data[0]))
			.catch(console.error);
	}, [slug]);

	if (!singlePost) return <div> Loading...</div>;

	return (
		<div>
			<main className="bg-gray-200 min-h-screen p-12">
				<article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
					<header className="relative ">
						<div className="absolute h-full w-full items-center justify-center p-8">
							<div className="bg-white bg-opacity-75 rounded p-12">
								<h1 className="text-3xl lg:6xl mb-4">{singlePost.title}</h1>
								<div className="flex justify-center text-gray-800">
									<img
										src={singlePost.authorImage.asset.url}
										alt={singlePost.name}
										className="w-10 h-10 rounded-full"
									/>
								</div>
								<p className="flex item-center pl-2 text-2xl ">
									{singlePost.name}
								</p>
							</div>
						</div>
						<img
							src={singlePost.mainImage.asset.url}
							alt={singlePost.title}
							className="w-full object-cover rounded-t"
							style={{ height: "400px" }}
						/>
					</header>
					<div className="px-16 lg:px-48 py-12 lg:20 prose lg:prose-xl max-w-full">
						{/* <BlockContent
							blocks={singlePost.body}
							projectId="88wfqa0l"
							dataset="production"
						/> */}
					</div>
				</article>
			</main>
		</div>
	);
}
