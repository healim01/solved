-- 코드를 작성해주세요

select
    child.id
from ECOLI_DATA child
join ECOLI_DATA parent
    on child.parent_id = parent.id
where parent.parent_id not in (
        select distinct id
        from ECOLI_DATA
        where parent_id is not null
    )
order by child.id;
