import React from 'react'

const Nav = (props) => {
	const { setChart } = props;

	return (
		<nav>
			<ul>
				<li onClick={() => setChart(0)}>Kana charts</li>
				<li onClick={() => setChart(1)}>Hiragana charts</li>
				<li onClick={() => setChart(2)}>Katakana charts</li>
				<li onClick={() => setChart(3)}>Practice charts</li>
			</ul>
		</nav>
	)
}

export default Nav;