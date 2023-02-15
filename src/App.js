import react, { useState } from "react";
import "./Styles/App.css";
import Nav from "./Components/Nav";
import HiraganaTable from "./Components/Hiragana/HiraganaTable";
import KatakanaTable from "./Components/Katakana/KatakanaTable";
import KatakanaTablePractice from "./Components/Katakana/Practice/KatakanaTablePractice";
import HiraganaTablePractice from "./Components/Hiragana/Practice/HiraganaTablePractice";
import PrintButton from "./Components/PrintButton";

function App() {
	const [chart, setChart] = useState(0);

	return (
		<div id="appContainer">
			<Nav setChart={setChart} />
			{
				chart === 0 ?
				<>
				<HiraganaTable />
				<KatakanaTable />
				</> :
				chart === 1 ?
				<HiraganaTable /> :
				chart === 2 ?
				<KatakanaTable /> :
				<>
				<PrintButton />
				<HiraganaTablePractice />
				<KatakanaTablePractice />
				</>
			}
		</div>
	);
}

export default App;
