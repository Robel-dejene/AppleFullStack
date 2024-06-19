import React, { useState, useEffect } from "react";
import "../../commonResource/css/bootstrap.css";

function YoutubeVideos() {
	const [youtubeVideos, setYoutubeVideos] = useState([]);

	useEffect(() => {
		fetch(
			"https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyDHKe6n3H9qDDnqz99uozgV1EXN7ZkJyx4"
		)
			.then((Response) => Response.json())
			.then((data) => {
				setYoutubeVideos(data.items);
			})
			.catch(function (error) {
				console.error("Something went wrong", error);
			});
	}, []);

	console.log(youtubeVideos);

	return (
		<div>
			<div className="allVideoWrapper">
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
					integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
					crossorigin="anonymous"
				/>

				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<div className="title-wrapper">
								<br />
								<br />
								<br />
								<h1>Latest Videos</h1>
								<br />
							</div>
						</div>
						{youtubeVideos?.map((singleVideo) => {
							let vidId = singleVideo.id.videoId;
							let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
							let videoWrapper = (
								<div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
									<div className="singleVideoWrapper">
										<div className="videoThumbnail">
											<a href={vidLink} target="_blank" rel="noreferrer">
												<img
													src={singleVideo.snippet.thumbnails.high.url}
													alt=""
												/>
											</a>
										</div>
										<div className="videoInfoWrapper">
											<div className="videoTitle">
												<a href={vidLink} target="_blank" rel="noreferrer">
													{singleVideo.snippet.title}
												</a>
											</div>

											<div className="videoDesc">
												{singleVideo.snippet.description}
											</div>
										</div>
									</div>
								</div>
							);
							return videoWrapper;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default YoutubeVideos;
