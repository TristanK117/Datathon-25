import './App.css'
import { useEffect } from 'react';

function Home() {
  return (
    <section id="home" className="section">
      <h1>DATABANG</h1>
      <p>WE TURN REQUESTS INTO RESULTS</p>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <h1>About</h1>
      <p>Seattle prides itself on providing the highest quality of care, understanding, and helpfulness to its community. As a result, its Customer Service Bureau has instituted infrastructure supporting various public services and avenues to request such services for Seattle’s residents. </p>
      <p>Taking data from the Bureau's Customer Service Requests web portal and “Find it, Fix it” mobile app, DataBang aims to turn these metrics into quantifiable results, insightfully illustrating the needs and wants of Seattle’s civil architecture and diverse residents. Managing these requests is crucial not only for the sake of efficient, quality problem-resolution, but also in response to the ever-increasing population of Seattle and the corresponding need for available public services.</p>
    </section>
  )
}

function DataAnalysis() {

  return (
    <section id="data-analysis" className="section">
      <h1>Data Analysis</h1>
      <p>Here is the data analysis section.</p>
    </section>
  );
}

function Summary() {
  return (
    <section id="summary" className="section">
      <h1>Prediction Modelling</h1>
      <p></p>
      <ul>
        <li><strong>Hourly:</strong> Reports trends tell us that reports peak around 9:00 AM, with a very small amount of requests between 1 AM-4 AM.</li>
        <li><strong>Monthly:</strong> On average, March has had the most reports compared to any other month. December has had the least amount of reports.</li>
        <li><strong>Quarterly:</strong> Reports peak during the first quarter (the first three months of the year). Reports dip during the last quarter of the year.</li>
        <li><strong>Yearly:</strong> 2024 was the peak for reports. There is a positive trend in growth for Seattle reports. We can predict that 2025 will have a higher amount of reports than 2024 at this rate.</li>
      </ul>
    </section>
  )
}

function Footer() {
  return (  
    <footer id="footer" className="section">
      <h1>Footer</h1>
      <p>&copy;  2025 DataBang. All Rights Reserved </p>
      <p> 
      </p>
    </footer>
  )
}

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#data-analysis">Data Analysis</a>
        <a href="#summary">Discussion</a>
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
