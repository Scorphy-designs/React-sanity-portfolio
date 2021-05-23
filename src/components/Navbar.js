import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
	return (
		<div>
			<header className="bg-red-600">
				<div className="container mx-auto flex justify-between ">
					<nav className="flex">
						<NavLink
							to="/"
							exact
							className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-200 text-4xl font-bold  "
							activeClassName="text-white"
						>
							Home
						</NavLink>
						<NavLink
							to="/post"
							className="inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-yellow-200 text-2xl font-bold  "
							activeClassName="text-white"
						>
							Blog Posts
						</NavLink>
						<NavLink
							to="/project"
							className="inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-yellow-200 text-2xl font-bold  "
							activeClassName="text-white"
						>
							Projects
						</NavLink>
						<NavLink
							to="/About"
							className="inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-yellow-200 text-2xl font-bold  "
							activeClassName="text-white"
						>
							About Me!
						</NavLink>
					</nav>
					<div className="inline-flex py-3 px-3 my-6">
						<SocialIcon
							url="https://www.youtube.com/"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url="https://linkedin.com/"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url="https://instagram.com/"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Navbar;
