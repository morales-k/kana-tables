import "./Styles/App.css";
import Nav from "./Components/Nav";
import HiraganaTable from "./Components/Hiragana/HiraganaTable";
import KatakanaTable from "./Components/Katakana/KatakanaTable";
import KatakanaTablePractice from "./Components/Katakana/Practice/KatakanaTablePractice";
import HiraganaTablePractice from "./Components/Hiragana/Practice/HiraganaTablePractice";

function App() {
  return (
    <div id="appContainer">
		<Nav />
    	<h1>Japanese Kana reference tables</h1>
      	<HiraganaTable />
      	<KatakanaTable />
    </div>

   
  );
}

export default App;
