drop table if exists TrainingEduationExperience;

create table TrainingEduationExperience(
Index int,
"Title" varchar,
"Code" varchar,
"Education" varchar,
"Less_High_School" int,
"HighSchool" int,
"Some_College" int,
"Associate_Degree" int,
"Bachelor_Degree" int,
"Master_Degree" int,
"Doctoral_Professional_Degree" int,
"Experience" varchar,
"Training" varchar
);

drop table if exists employment_occupation;

create table employment_occupation(
Index int,
"Title" varchar,
"Code" varchar,
"2019_Employment" int,
"2029_Employment" int,
"2019-2029_Change" int,
"2019-2029_Percent_Change" int
);

drop table if exists fastest_decline;

create table fastest_decline(
Index int,
"Title" varchar,
"Code" varchar,
"2019_Employment" int,
"2029_Employment" int,
"2019-2029_Change" int,
"2019-2029_Percent_Change" int
);

drop table if exists fastest_growing;

create table fastest_growing(
Index int,
"Title" varchar,
"Code" varchar,
"2019_Employment" int,
"2029_Employment" int,
"2019-2029_Change" int,
"2019-2029_Percent_Change" int
);

drop table if exists projected_growth;

create table projected_growth(
Index int,
"Title" varchar,
"Code" varchar,
"Occupation_Type" varchar,
"2019_Employment" int,
"2029_Employment" int,
"2019-2029_Change" int,
"2019-2029_Percent_Change" int,
"Percent_self_employed_2019" int,
"Occupational_openings_2019-29_annual_average" int
);

drop table if exists SalaryFINAL;

create table SalaryFINAL(
Index int,
"Code" varchar,
Median_Annual_Wage int
);

drop table if exists industry_codes;

create table industry_codes(
Industry_Code int,
Industry_Name varchar
);

drop table if exists county_codes;

create table county_codes(
Area_Code int,
Area_Name varchar
);

drop table if exists state_codes;

create table state_codes(
Area_Code int,
State varchar
);

drop table if exists state_coords;

create table state_coords(
Index int,
State varchar,
Latitude int,
Longitude int
);

drop table if exists national_emp_data;

create table national_emp_data(
Index int,
Area_Code int,
Code varchar,
Title varchar,
Total_Employment int,
Mean_Hourly_Income int,
Hourly_10th_Percentile int,
Hourly_25th_Percentile int,
Median_Hourly_Income int,
Hourly_75th_Percentile int,
Hourly_90th_Percentile int,
Mean_Annual_Income int,
Annual_10th_Percentile int,
Annual_25th_Percentile int,
Median_Annual_Income int,
Annual_75th_Percentile int,
Annual_90th_Percentile int
);

drop table if exists state_emp_data;

create table state_emp_data(
Index int,
Area_Code int,
Code varchar,
Title varchar,
Total_Employment int,
Mean_Hourly_Income int,
Hourly_10th_Percentile int,
Hourly_25th_Percentile int,
Median_Hourly_Income int,
Hourly_75th_Percentile int,
Hourly_90th_Percentile int,
Mean_Annual_Income int,
Annual_10th_Percentile int,
Annual_25th_Percentile int,
Median_Annual_Income int,
Annual_75th_Percentile int,
Annual_90th_Percentile int
);

drop table if exists emptitle;

create table emptitle (
Index int,
Title varchar,
Code varchar);