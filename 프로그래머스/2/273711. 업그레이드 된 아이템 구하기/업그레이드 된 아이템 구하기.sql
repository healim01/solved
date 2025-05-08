-- 코드를 작성해주세요

select i.ITEM_ID, ITEM_NAME, RARITY
from ITEM_INFO i
join ITEM_TREE t
    on i.item_id = t.item_id
where parent_item_id in (select item_id from item_info where rarity = 'RARE')
order by i.item_id desc