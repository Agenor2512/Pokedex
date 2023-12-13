function NavBar({displayPrevious, displayNext, incrementIndex, decrementIndex}) {
    
  

    return (
        <div>
            {
                displayPrevious && <button onClick={decrementIndex} style={{marginRight: "0.5rem", marginTop: "1rem", padding: "0.5rem"}}>Previous</button>
            }

            {
                displayNext && <button onClick={incrementIndex} style={{padding: "0.5rem"}}>Next</button>
            } 
        </div>
    )
}

export default NavBar