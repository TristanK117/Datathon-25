import { useState } from 'react';

function DataAnalysis() {
  const [view, setView] = useState('hourly'); 


  const data = {
    hourly: {
      text: 'Reports trends tell us that reports peak around 9:00 AM, with a very small amount of requests between 1 am-4 am.',
      imgSrc: '/img/hourly.png', 
      link: 'https://public.tableau.com/app/profile/ashley.moua/viz/HourlyDatathon/Sheet2',
    },
    monthly: {
      text: 'On average, March has had the most reports compared to any other month. December has had the least amount of reports.',
      imgSrc: '/img/monthly.png', 
      link: 'https://public.tableau.com/app/profile/ashley.moua/viz/HourlyDatathon/Sheet3',
    },
    quarterly: {
      text: 'Reports peak during the first quarter (the first three months of the year). Reports dip during the last quarter of the year.',
      imgSrc: '/img/quarterly.png', 
      link: 'https://public.tableau.com/app/profile/ashley.moua/viz/QuarterlyDatathon/Sheet1', 
    },
    yearly: {
      text: '2024 was the peak for reports. There is a positive trend in growth for Seattle reports. We can predict that 2025 will have a higher amount of reports than 2024 at this rate.',
      imgSrc: '/img/yearly.png', 
      link: 'https://public.tableau.com/app/profile/ashley.moua/viz/YearlyDatathon/Sheet2', 
    },
  };

  return (
    <section id="data-analysis" className="section">
      <h1>Data Exploration</h1>
      <h2>Q1</h2>
      <div style={{ marginBottom: '20px' }}>
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
      Recommendations and/or Further Questions:
      </h2>
      <p>
      Given that March and Q1 are the busiest times for handling service requests, the City of Seattle should <strong>allocate more resources earlier in the year</strong> towards handling these civilian needs. Such items might include temporary staffing increases (perhaps look towards staffing in-need populations such as unhoused or unemployed), community engagement campaigns, or increased scheduled maintenance. Similarly, deploying a few <strong>extra hands to handle urgent requests (such as the presence of used needles in open, public spaces) in peak hours of the day</strong> (9 am) will help address requests more head-on and make Seattle safer for its residents. 
      </p>

      <p>
      Conversely, DataBang also recommends <strong>preparing for slower periods at the end of the year</strong> in December and Q4, when requests dip in quantity. Not only will this preparation make increasing resources fiscally easier at the beginning of the year, but this time could also be spent prioritizing staff training or system upgrades to ensure that the City of Seattle continues to improve itself.
      </p>

      <p>
      Some questions that would help provide greater insights into these trends and better prepare the City of Seattle include:
      </p>
      <ul>
        <li>What type of reports are driving the increase in requests?</li>
        <li>Is the increase in requests uniform across neighborhoods and zip codes?</li>
        <li>Are the currently rising demands (based on 2024 numbers) able to be handled with the current systems in place?</li>
        <li>How many of these requests, although separate, are reporting about the same physical issue?</li>
      </ul>

      <h2>
        Q2
      </h2>
      <img
        src="/img/q2.png" 
        alt="Predictive Plot"
        style={{
          width: '80%', 
          maxWidth: '800px', 
          height: 'auto', 
          margin: '20px 0', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        }}
      />
      <p>
  <a href="https://public.tableau.com/app/profile/madison.trimmer/viz/25Datathon/Dashboard1?publish=yes" target="_blank" rel="noopener noreferrer"> Tableau Analysis</a>.
</p>
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
      Recommendations and/or Further Questions:
      </h2>
      <p>
      Because we do not know the exact proportions of zip codes/neighborhoods that partially dip into each other, <strong>we cannot verify that the count for a neighborhood is accurate compared to the count of the various zip codes it encompasses</strong>. Therefore, getting more detailed information in this regard would help verify the data and know where the heaviest quantity of civil infrastructure needs lies.
      </p>
      <p>
      DataBang recommends that the City of Seattle take both neighborhood and zip code into account when analyzing this data and determining the needs of its constituents. While zip codes are useful to utilize due to their exact bounds and legal recognition, <strong>neighborhoods are what comprise Seattle, its residents, and their culture</strong>. The quality of life in these neighborhoods depends on the needs of the community being met, and by focusing purely on exact zip codes, the City of Seattle is missing out on incorporating a wider, qualitative view into its network of services.    
      </p>

      <h2>
        Q3
      </h2>
      <img
        src="/img/q3.png" 
        alt="Predictive Plot"
        style={{
          width: '80%', 
          maxWidth: '800px',
          height: 'auto',
          margin: '20px 0', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        }}
      />
        <a href="https://public.tableau.com/app/profile/ria.harneja/viz/datathon_17457818690020/Dashboard1?publish=yes" target="_blank" rel="noopener noreferrer"> Tableau Analysis</a>.
      <p>
      The service type with the most requests is <strong>abandoned vehicle/parking ordinance, with 177,684 requests</strong>. The service type with the least amount of requests is <strong>public utilities direct mail opt-out, with 2 requests</strong>. Over the years, the service type with the most requests (abandoned vehicle/parking ordinance) has quadrupled. Graffiti and illegal dumping/needles have also increased over time, almost tripling in size. </p>
        <h2>
        Recommendations and/or Further Questions:
        </h2>
        <p>
        DataBang recommends that the city of Seattle <strong>prioritize resources</strong> toward managing abandoned vehicle and parking ordinance violations, as this category is consistently the most reported and has grown significantly over time. It also recommends <strong>increasing targeted campaigns</strong> in areas with high reports of graffiti, illegal dumping, and needles to proactively address these issues before they escalate to the level of abandoned vehicle and parking ordinance violations.
        </p>
        <p>
        DataBang has implemented predictive analytics to anticipate future surges in these service types, allowing for better staffing, budget allocation, and preventative strategies. The city should <strong>collaborate with other departments</strong> (such as Public Utilities, Transportation, and Public Safety) to create coordinated efforts for heavily impacted service categories, improving response times and reducing backlog.
        </p>
    </section>
  );
}

export default DataAnalysis;