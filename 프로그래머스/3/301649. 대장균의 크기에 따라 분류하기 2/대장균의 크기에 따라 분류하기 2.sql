-- 코드를 작성해주세요

with ranked as (
  select 
    id,
    ntile(4) over (order by SIZE_OF_COLONY desc) as tile
  from ECOLI_DATA
)
select 
  id,
  case tile
    when 1 then 'CRITICAL'
    when 2 then 'HIGH'
    when 3 then 'MEDIUM'
    when 4 then 'LOW'
  end as COLONY_NAME
from ranked
order by id;
