-- 코드를 작성해주세요

select CONCAT(length, 'cm') as MAX_LENGTH
from FISH_INFO
order by LENGTH desc
limit 1;