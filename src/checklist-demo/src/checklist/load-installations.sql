select distinct ins.id as id,
       ins.displayId as displayId, --> string
       ins.shortText as shortText --> string
from Installation ins
where ins.deleted = 0
AND ins.storno = 0
AND ins.type != 'B'
ORDER BY ins.displayId LIMIT 4
