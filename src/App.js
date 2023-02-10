import "./Styles/App.css";
import HiraganaTable from "./Components/Hiragana/HiraganaTable";
import KatakanaTable from "./Components/Katakana/KatakanaTable";

function App() {
  return (
    <>
    	<h1>Japanese Kana reference tables</h1>
		<HiraganaTable />
		<KatakanaTable />
    </>

   
  );
}

export default App;
