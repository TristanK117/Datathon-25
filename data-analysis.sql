SELECT *
FROM [clean-customer-service];

-- Q1: Visualize the customer requests over time. What trends do we see by: 
-- Month

WITH month AS(
    SELECT
    Created_Date,
    Service_Request_Type,
    YEAR(Created_Date) AS Year,
    MONTH(Created_Date) AS Month,
    DAY(Created_Date) AS Day,
    DATEPART(HOUR, Created_Date) AS Hour
    FROM [clean-customer-service]
)
SELECT Month, Service_Request_Type, COUNT(*) AS Number_of_Requests
FROM month
GROUP BY Month, Service_Request_Type
ORDER BY Month, Service_Request_Type

WITH year AS(
    SELECT
    Created_Date,
    Service_Request_Type,
    YEAR(Created_Date) AS Year,
    MONTH(Created_Date) AS Month,
    DAY(Created_Date) AS Day,
    DATEPART(HOUR, Created_Date) AS Hour
    FROM [clean-customer-service]
)
SELECT Year, Service_Request_Type, COUNT(*) AS Number_of_Requests
FROM year
GROUP BY Year, Service_Request_Type
ORDER BY year, Service_Request_Type

WITH hour AS(
    SELECT
    Created_Date,
    Service_Request_Type,
    YEAR(Created_Date) AS Year,
    MONTH(Created_Date) AS Month,
    DAY(Created_Date) AS Day,
    DATEPART(HOUR, Created_Date) AS Hour
    FROM [clean-customer-service]
)
SELECT Hour, Service_Request_Type, COUNT(*) AS Number_of_Requests
FROM hour
GROUP BY hour, Service_Request_Type
ORDER BY hour, Service_Request_Type


WITH a AS (
    SELECT CAST(Created_Date AS DATE) AS [Date]
    FROM [clean-customer-service]
    GROUP BY CAST(Created_Date AS DATE)
), b AS (
    SELECT 
    c.*, 
    COUNT(*) OVER (PARTITION BY c.Service_Request_Number, CAST(c.Created_Date AS DATE)) AS CountPerRequestPerDate,
    COUNT(*) OVER (PARTITION BY CAST(c.Created_Date AS DATE)) AS TotalCountPerDate,
    DATEPART(QUARTER, c.Created_Date) AS Quarter
    FROM [clean-customer-service] c
    JOIN a
    ON CAST(c.Created_Date AS DATE) = a.[Date]
)
SELECT [Quarter], Service_Request_Type, COUNT(*) AS Number_of_Requests
FROM b
GROUP BY [Quarter], Service_Request_Type
ORDER BY [Quarter], Service_Request_Type;

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
FROM b;

-- Machine Learning Dataset

WITH start AS (
    SELECT *,
           YEAR(Created_Date) AS Year,
           MONTH(Created_Date) AS Month,
           DAY(Created_Date) AS Day,
           DATEPART(HOUR, Created_Date) AS Hour
    FROM [clean-customer-service]
)
SELECT Service_Request_Type, [Year], [Month], [Day], COUNT(*)
FROM start
GROUP BY Service_Request_Type, [Year], [Month], [Day];

WITH start AS (
    SELECT *,
           YEAR(Created_Date) AS Year,
           MONTH(Created_Date) AS Month,
           DAY(Created_Date) AS Day,
           DATEPART(HOUR, Created_Date) AS Hour
    FROM [clean-customer-service]
)
SELECT 
    Service_Request_Type, 
    Police_Precinct,
    Method_Received,
    Status,
    [Year], 
    [Month],
    COUNT(*) AS Request_Count
FROM start
WHERE Police_Precinct IS NOT NULL
GROUP BY 
    Service_Request_Type, 
    Police_Precinct,
    Method_Received,
    Status,
    [Year], 
    [Month]
ORDER BY Request_Count DESC;

SELECT Distinct(Service_Request_Type) FROM [clean-customer-service]
