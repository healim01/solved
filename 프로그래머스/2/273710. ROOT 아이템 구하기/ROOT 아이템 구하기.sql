-- 코드를 작성해주세요

select i.ITEM_ID, item_name
from ITEM_INFO i
join ITEM_TREE t on i.item_id = t.item_id
where parent_item_id is null
order by i.ITEM_ID;