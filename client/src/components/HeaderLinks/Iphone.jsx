// import React from 'react'
// import "./header.css";
// import { useState, useEffect } from 'react';

// function Iphone() {
// 	const [products, setProducts] = useState([]);

// 	useEffect(() => {
// 		fetch("http://localhost:2024/info")
// 		.then((res) => res.json())
// 		.then((data) => {
// 			setProducts(data)
// 		})
// 		.catch(() => console.log("Error: unable to fetch!!"));
// 	}, [])
// 	console.log(products)
// 	let flip = true;
//   return (
// 		<>
// 			<section className='internal-page-wrapper'>
// 				<div className='container'>
// 					<div className='row justify-content-center text-center'>
// 						<div className='col-12 mt-5 pt-5'>
// 							<h1 className='font-weight-bold'>Iphones</h1>
// 							<div className='brief-discription mb-5'>
// 								The best for the brightest.
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				{products?.map((data) => {
// 					let order1 = 1;
// 					let order2 = 2;
// 					if (flip) {
// 						order1 = 2;
// 						order2 = 1;

// 						flip = !flip;
// 					}else {
// 						flip = !flip;
// 					}
// 				}
// 				let productDiv = (
//   <div key={data.product_url} className="row justify-content-center text-center product-holder h-100">
//     <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//       <div className="product-title">{data.product_name}</div>
//       <div className="product-brief">{data.product_brief_description}</div>
//     </div>
//     <div className="starting-price">
//       {'Starting at ${data.starting_price}`}
//     </div>
//     <div className="monthly-price">{data.price_range}</div>
//     <div className="links-wrapper">
//       <ul>
//         <li>
//           <Link to={`/info/${data.product_url}`}>Learn more</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div className={'col-sm-12 col-md-6 order-${order2}'}>
// 	<div className='product-image'>
// 		<img src={data.product_img} alt="product" />

// 	</div>
//   </div>
// );
// return productDiv;
// 				)}
// 			</section>
// 		</>
// 	);
// }

// export default Iphone

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router
import "./header.css";

function Iphone() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:2024/info")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
			})
			.catch(() => console.log("Error: unable to fetch!!"));
	}, []);

	console.log(products);
	let flip = true;

	return (
		<>
			<section className="internal-page-wrapper">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12 mt-5 pt-5">
							<h1 className="font-weight-bold">Iphones</h1>
							<div className="brief-description mb-5">
								The best for the brightest.
							</div>
						</div>
					</div>
					{products?.map((rob) => {
						let order1 = flip ? 2 : 1;
						let order2 = flip ? 1 : 2;
						flip = !flip;

						return (
							<div
								key={rob.product_url}
								className="row justify-content-center text-center product-holder h-100"
							>
								<div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
									<div className="product-title">{rob.product_name}</div>
									<div className="product-brief">
										{rob.product_brief_description}
									</div>
									<div className="starting-price">
										{`Starting at ${rob.starting_price}`}
									</div>
									<div className="monthly-price">{rob.price_range}</div>
									<div className="links-wrapper">
										<ul>
											<li>
												<Link to={`/iphone/${rob.product_url}`}>Learn more</Link>
											</li>
										</ul>
									</div>
								</div>
								<div
									className={`col-sm-12 col-md-6 order-${order2} product-image`}
								>
									<img src={rob.product_img} alt={rob.product_name} />
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}

export default Iphone;
