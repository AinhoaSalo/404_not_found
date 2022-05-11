import "./notFound.css"

export function NotFound() {
  return(
    <>
      <section className="notFound">
        <header>
            <h2>Ops!</h2> 
        </header>
        <p className="parraf">PAGE NOT FOUND</p>
        <footer className="allBtn">
            <button className="btn">Go home</button>
            <button className="btn">Go Back</button>
        </footer>
      </section>
    </>
  )
}