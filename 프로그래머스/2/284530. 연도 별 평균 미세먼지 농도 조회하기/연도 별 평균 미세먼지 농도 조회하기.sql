-- 코드를 작성해주세요
-- 수원 지역의 연도 별 평균 미세먼지 오염도와 평균 초미세먼지 오염도를 조회

select year(str_to_date(YM, '%Y-%m-%d')) as Year, 
    round(avg(PM_VAL1), 2) as 'PM10', 
    round(avg(PM_VAL2), 2) as 'PM2.5'
from AIR_POLLUTION
where LOCATION2 like '수원'
group by year(str_to_date(YM, '%Y-%m-%d'))
order by year(str_to_date(YM, '%Y-%m-%d'));