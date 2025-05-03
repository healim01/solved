-- 코드를 작성해주세요

select 
  count(*) as FISH_COUNT,
  month(str_to_date(TIME, '%Y-%m-%d')) as month
from fish_info
where TIME is not null
group by month(str_to_date(TIME, '%Y-%m-%d'))
order by month;

