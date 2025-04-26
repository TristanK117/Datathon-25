SELECT *
FROM [clean-customer-service];

-- Q2: Which areas with the highest service requests? 

SELECT Neighborhood, COUNT(Service_Request_Number) Number_of_Requests
FROM [clean-customer-service]
WHERE Neighborhood IS NOT NULL
GROUP BY Neighborhood
ORDER BY Number_of_Requests DESC;

SELECT ZIP_Code as Zip, COUNT(Service_Request_Number) Number_of_Requests
FROM [clean-customer-service]
WHERE ZIP_Code IS NOT NULL
GROUP BY ZIP_Code
HAVING COUNT(Service_Request_Number) > 2
ORDER BY Number_of_Requests DESC;

SELECT Police_Precinct, COUNT(Service_Request_Number) Number_of_Requests
FROM [clean-customer-service]
WHERE Police_Precinct IS NOT NULL
GROUP BY Police_Precinct
ORDER BY Number_of_Requests DESC;

-- Q3: Total requests by different service types. What trends do we notice for each service type? Has any particular service type grown over time? 

SELECT Service_Request_Type, COUNT(*) as Number_of_Requests
FROM [clean-customer-service]
GROUP BY Service_Request_Type
ORDER BY Number_of_Requests DESC;

/* WITH a AS (
    SELECT CAST(Created_Date AS DATE) AS [Date]
    FROM [clean-customer-service]
    GROUP BY CAST(Created_Date AS DATE)
)
SELECT 
  a.[Date],
  c.Service_Request_Type, 
  COUNT(*) OVER (PARTITION BY c.Service_Request_Type ORDER BY a.[Date]) AS CountPerRequestPerDate
FROM [clean-customer-service] c
JOIN a
  ON CAST(c.Created_Date AS DATE) = a.[Date]
ORDER BY c.Service_Request_Type, a.[Date]; */

WITH a AS (
    SELECT CAST(Created_Date AS DATE) AS [Date]
    FROM [clean-customer-service]
    GROUP BY CAST(Created_Date AS DATE)
), b AS(
    SELECT [Date], Service_Request_Type, COUNT(*) AS Request_Count
    FROM [clean-customer-service] c
    JOIN a
    ON CAST(c.Created_Date AS DATE) = a.[Date]
    GROUP BY [Date], Service_Request_Type
)
SELECT [Date], Service_Request_Type, SUM(Request_Count) OVER(PARTITION BY Service_Request_Type ORDER BY [Date]) Moving_Sum_Requests
FROM b
