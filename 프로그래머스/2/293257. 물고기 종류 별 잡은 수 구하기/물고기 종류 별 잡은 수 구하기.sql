-- 코드를 작성해주세요

select count(*) as FISH_COUNT, FISH_NAME
from FISH_INFO o
join FISH_NAME_INFO n on o.FISH_TYPE = n.FISH_TYPE
group by FISH_NAME
order by count(*) desc;