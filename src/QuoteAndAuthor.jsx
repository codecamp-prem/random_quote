export function QuoteAndAuthor({displayColor, handleClick, author, quote}){
    const randomColor = displayColor()
    const html = document.documentElement
    html.style.backgroundColor = randomColor

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="quote">"{quote}"</h1>
          <h5 id="author">
            -{author ? author : "Unknown"}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={handleClick}
        >
          New quote
        </button>
      </div>
    )
}