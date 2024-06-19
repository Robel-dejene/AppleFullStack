import "./App.css";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Header from "./components/Header";
import Footer_section from "./components/Footer_section";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main.jsx";
import Iphone from "./components/HeaderLinks/Iphone.jsx";
import Mac from "./components/HeaderLinks/Mac.jsx";
import Ipad from "./components/HeaderLinks/Ipad.jsx";
import Watch from "./components/HeaderLinks/Watch.jsx";
import TV from "./components/HeaderLinks/TV.jsx";
import Music from "./components/HeaderLinks/Music.jsx";
import Support from "./components/HeaderLinks/Support.jsx";
import Cart from "./components/HeaderLinks/Cart.jsx";
import Four04 from "./components/HeaderLinks/Four04.jsx";
import CommonComponents from "./components/CommonComponents/CommonComponents.jsx";
import Productpage from "./components/HeaderLinks/LearnMore/SingleAppleProduct.jsx";

function App() {
	return (
		<>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<CommonComponents />}>
					<Route path="/" element={<Main />} />
					<Route path="iphone" element={<Iphone />} />
					<Route path="iphone/:productID" element={<Productpage />} />
					<Route path="mac" element={<Mac />} />
					<Route path="ipad" element={<Ipad />} />
					<Route path="watch" element={<Watch />} />
					<Route path="tv" element={<TV />} />
					<Route path="music" element={<Music />} />
					<Route path="support" element={<Support />} />
					<Route path="Cart" element={<Cart />} />
					<Route path="*" element={<Four04 />} />
				</Route>
			</Routes>
			{/* <Footer_section /> */}
		</>
	);
}

export default App;
