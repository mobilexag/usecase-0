select ins.id as id,
       ins.displayId as displayId, --> string
       ins.shortText as shortText --> string
from Installation ins
where ins.id = ?1
AND ins.deleted = 0
AND ins.storno = 0
