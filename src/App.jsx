import './App.css'

function Home() {
  return (
    <section id="home" className="section">
      <h1>Home Page</h1>
      <p>Welcome to the home section of the website.</p>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <h1>About Me</h1>
      <p>This is the about me section.</p>
    </section>
  )
}

function DataAnalysis() {
  return (
    <section id="data-analysis" className="section">
      <h1>Data Analysis</h1>
      <p>Here is the data analysis section.</p>
    </section>
  )
}

function Summary() {
  return (
    <section id="summary" className="section">
      <h1>Summary</h1>
      <p>This is the summary section.</p>
    </section>
  )
}

function Footer() {
  return (
    <footer id="footer" className="section">
      <h1>Footer</h1>
      <p>Thank you for visiting!</p>
    </footer>
  )
}

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#data-analysis">Data Analysis</a>
        <a href="#summary">Summary</a>
        <a href="#footer">Footer</a>
      </nav>
      <Home />
      <About />
      <DataAnalysis />
      <Summary />
      <Footer />
    </>
  )
}

export default App
