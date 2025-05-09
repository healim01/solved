-- 코드를 작성해주세요

SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPERS
WHERE 
  skill_code & (
    SELECT code FROM SKILLCODES WHERE name = 'C#'
  ) > 0
OR
  skill_code & (
    SELECT code FROM SKILLCODES WHERE name = 'Python'
  ) > 0
order by id;
