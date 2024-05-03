import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [quote, setQuote] = useState({ text: "", author: "" });

	const fetchQuote = async () => {
		const response = await fetch("https://api.quotable.io/random");
		const data = await response.json();
		setQuote({ text: data.content, author: data.author });
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<div id='quote-box' className='quote-box'>
			<p id='text' className='quote-text'>{`"${quote.text}"`}</p>
			<p id='author' className='quote-author'>{`- ${quote.author}`}</p>
			<div className='buttons'>
				<button id='new-quote' onClick={fetchQuote}>
					New Quote
				</button>
				<a
					id='tweet-quote'
					className='tweet-button'
					href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(
						quote.text
					)}" - ${encodeURIComponent(quote.author)}`}
					target='_blank'
					rel='noopener noreferrer'>
					Tweet
				</a>
			</div>
		</div>
	);
}

export default App;
