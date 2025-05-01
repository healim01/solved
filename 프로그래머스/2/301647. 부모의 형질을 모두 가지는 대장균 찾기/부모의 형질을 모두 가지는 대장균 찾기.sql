-- 코드를 작성해주세요

select 
    child.id,
    child.genotype,
    parent.genotype AS parent_genotype
from ECOLI_DATA child
join ECOLI_DATA parent
    on child.parent_id = parent.id
where (child.genotype & parent.genotype) = parent.genotype
order by child.id;
