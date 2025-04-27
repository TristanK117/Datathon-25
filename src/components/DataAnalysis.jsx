import { useState } from 'react';

function DataAnalysis() {
  const [view, setView] = useState('hourly'); // State to track the selected view

  // Data for each view
  const data = {
    hourly: {
      text: 'Reports trends tell us that reports peak around 9:00 AM, with a very small amount of requests between 1 am-4 am.',
      imgSrc: '/img/hourly.png', // Replace with the actual path to your image
      link: 'https://public.tableau.com/app/profile/ashley.moua/viz/HourlyDatathon/Sheet2', // Replace with the actual link
    },
    monthly: {
      text: 'On average, March has had the most reports compared to any other month. December has had the least amount of reports.',
      imgSrc: '/img/monthly.png', // Replace with the actual path to your image
      link: 'https://public.tableau.com/app/profile/ashley.moua/viz/HourlyDatathon/Sheet3', // Replace with the actual link
    },
    quarterly: {
      text: 'Reports peak during the first quarter (the first three months of the year). Reports dip during the last quarter of the year.',
      imgSrc: '/img/quarterly.png', // Replace with the actual path to your image
      link: 'https://public.tableau.com/app/profile/ashley.moua/viz/QuarterlyDatathon/Sheet1', // Replace with the actual link
    },
    yearly: {
      text: '2024 was the peak for reports. There is a positive trend in growth for Seattle reports. We can predict that 2025 will have a higher amount of reports than 2024 at this rate.',
      imgSrc: '/img/yearly.png', // Replace with the actual path to your image
      link: 'https://public.tableau.com/app/profile/ashley.moua/viz/YearlyDatathon/Sheet2', // Replace with the actual link
    },
  };

  return (
    <section id="data-analysis" className="section">
      <h1>Data Analysis</h1>
      <h2>Q1</h2>
      <div style={{ marginBottom: '20px' }}>
        {/* Buttons to switch views */}
        <button onClick={() => setView('hourly')} className="data-button">
          Hourly
        </button>
        <button onClick={() => setView('monthly')} className="data-button">
          Monthly
        </button>
        <button onClick={() => setView('quarterly')} className="data-button">
          Quarterly
        </button>
        <button onClick={() => setView('yearly')} className="data-button">
          Yearly
        </button>
      </div>

      {/* Display the selected view's text, image, and link */}
      <p>{data[view].text}</p>
      <img
        src={data[view].imgSrc}
        alt={`${view} analysis`}
        style={{
          width: '80%',
          maxWidth: '800px',
          height: 'auto',
          margin: '20px 0',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
      <div>
        <a
          href={data[view].link}
          target="_blank"
          rel="noopener noreferrer"
          className="data-link"
          style={{
            display: 'inline-block',
            marginTop: '10px',
            color: 'blue',
            textDecoration: 'underline',
          }}
        >
          Tableau {view} analysis
        </a>
      </div>

      <h2>
        Q2
      </h2>
      <p>
      <strong>In respect to zip codes</strong>, there is a large range of service requests in each respective area, spanning from 3 to 79,209. The maximum can be attributed to the 98103 Seattle zip code, while the minimum belongs to the 98028 zip code.
      </p>
      <p>
      <strong>In respect to neighborhoods</strong>, the range of requests is smaller, with Harbor Island having 647 requests total and Broadway (colloquially known as “Capitol Hill”) having 63,236 requests. It is interesting to note, though, that the maximum is 28,452 requests greater than the neighborhood with the second most number of requests. Broadway has a staggeringly greater number of requests than any other neighborhood. 
      </p>
      <p>
        <strong>When combining the zip code and neighborhood perspectives</strong> , we discover that the maximum zip code (98103) belongs primarily to the neighborhood(s) of Wallingford and Fremont, covering portions of Meridian, Phinney Ridge, and Greenwood. Broadway’s primary zip code, however, is 9810, with portions in 98112 and 98122 as well.
      </p>
      <h2>
        Q3
      </h2>
    </section>
  );
}

export default DataAnalysis;