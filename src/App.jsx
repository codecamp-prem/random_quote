import { useState } from 'react'
import './App.css'
import quotes from "./QuotesDatabase"
import { QuoteAndAuthor } from "./QuoteAndAuthor"

function App() {
  const [quote, setQuote] = useState(quotes[0].quote)
  const [author, setAuthor] = useState(quotes[0].author)

  function randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  
  function shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }
  
  function  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
  function  handleClick(){
    const generateRandomQuote = randomQuote()

    setQuote(generateRandomQuote.quote)
    setAuthor(generateRandomQuote.author)
    shuffleQuotes(quotes)
  }

  return (
    <>
      <QuoteAndAuthor 
      displayColor={randomColor}
      handleClick={handleClick}
      author={author}
      quote={quote}
      />
    </>
  )
}

export default App
