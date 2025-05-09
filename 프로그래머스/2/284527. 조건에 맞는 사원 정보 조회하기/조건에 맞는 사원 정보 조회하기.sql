-- 코드를 작성해주세요

select SCORE, e.EMP_NO, EMP_NAME, POSITION, EMAIL
from HR_EMPLOYEES e
join (
    select EMP_NO, sum(score) as SCORE
    from HR_GRADE
    group by EMP_NO
) as g on e.emp_no = g.emp_no
order by SCORE desc
limit 1;