import React from "react";

function NavBar() {
  return (
	<nav className="bg-blue-500 p-4">
	  <div className="container mx-auto flex justify-between items-center">
		<div className="text-white text-xl font-bold">NasarWeb</div>
		<ul className="flex space-x-4">
		  <li>
			<a href="#" className="text-white hover:text-gray-200">
			  Home
			</a>
		  </li>
		  <li>
			<a href="#" className="text-white hover:text-gray-200">
			  About
			</a>
		  </li>
		  <li>
			<a href="#" className="text-white hover:text-gray-200">
			  Contact
			</a>
		  </li>
		</ul>
	  </div>
	</nav>
  );
}

export default NavBar;
