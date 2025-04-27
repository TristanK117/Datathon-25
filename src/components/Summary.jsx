function Summary() {
    return (
      <section id="summary" className="section">
        <h1>Prediction Modelling</h1>
        <p>
          <strong>Goal:</strong> Predict the total service requests in the next 3 months for each Service Request Type.
        </p>
        <p>
          After exploring the data, we decided to attempt to predict the total service requests for the following 3 months using a Multiple Linear Regression model.
        </p>
        <h2>Data Manipulation</h2>
        <p>
          After our data exploration and analysis, we decided to remove zip codes that had null values to work with only service requests that are happening at a specific location. The removal of these null values excluded observations consisting of online service requests. Even after that, we still had over 40+ Service Request Types. To synthesize that down, we categorized them into the following groups:
        </p>
        <ul>
          <li>Vehicle/Parking</li>
          <li>Transportation/Streets</li>
          <li>Environment/Maintenance</li>
          <li>Animal Issues</li>
          <li>Business/Complaints</li>
          <li>City Services/Utilities</li>
          <li>Special Facilities</li>
          <li>Feedback/Other</li>
          <li>Testing</li>
        </ul>
        <p>
          We then removed the Service Request Type and used the Service Request Categories instead to avoid multicollinearity effects on our model.
        </p>
        <img
          src="../../daily-requests-plot.png"
          alt="Prediction Modelling"
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
        We intended to use Multiple Linear Modeling to attempt to make a prediction; however, the plots above violated too many linear modeling assumptions to be accurate.
        </p>
        <ul>
          <li> Linear Relationship: Within the cluster, there is no clear linear relationship between the number of requests to any category </li>
          <li> Constant Variance: Looking at categories like Transportation/Streets and Business/Complaints, there isn't constant variability throughout the plot</li>
        </ul>
        <p>
        The plots with data points for every day also make the plots difficult to interpret, leading us to consolidate down to only using the sum of requests for each month, year, and category instead of using days.
        </p>
        <img
          src="../../monthly-requests-plot.png"
          alt="Prediction Modelling"
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
        After looking at our plots, we decided to use ARIMA modeling to predict this time series data.
  Within most of the categories, there is a clear and relatively stable trend across time, which
  backs up our use of ARIMA modeling. For categories like Special Facilities, we can see that 
  there may be some trends due to seasonal effects; however, since we are only forecasting the
  following 3 months, we decided to use a basic ARIMA model, not accounting for seasonal effects.
        </p>
        <img
          src="../../predictive-plot.png"
          alt="Prediction Modelling"
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
        We are making our prediction with an 80% confidence interval. Naturally, with ARIMA models,
  as we make predictions further from the actual data we have, our confidence interval becomes
  wider and wider, this is evident in all of our predictions.
        </p>
        <p>
        From May to July 2025, we see a lot of variation between predictions of request counts for
  each category.
        </p>
        <ul>
          <li>Animal Issues, Business Complaints, and City Services are all expected to have a constant number of requests throughout the months. This flat trend is expected in Business/Complaints and City Services because the prior trend was relatively stable in several requests per month. However, there was a clear increasing trend for Animal Issues in recent years, so the flat forecast could be underestimating the growth in Animal Issues.</li>
          <li>Environment, Feedback, Vehicle/Parking, and Special Facilities all forecast an increasing trend in the number of requests throughout these months. These trends could be due to seasonality since there are increasingly more complaints about activities and categories concerning the outdoors around that time period. </li>
          <li>Lastly, Other and Transportation have a decreasing trend throughout the 3 months. The other category especially has a high confidence interval because we are grouping many miscellaneous categories, which may not exemplify the same trend. This means there is expected to be more error in “Other” because of those uncertainties. </li>
        </ul>
        <p>
        Overall, our next steps would be to improve these forecasting predictions by looking deeper
  into the model and category separation. We also want to account for seasonality in our
  ARIMA model.
        </p>
      </section>
  );
}

export default Summary;