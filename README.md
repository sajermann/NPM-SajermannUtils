 # SajermannNpmUtils

Conjunto de funções utilitárias que eu cansei de copiar e colar em todos os meus projetos


## FormatDate

### IsValidDate
Verifica se uma data é valida
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | boolean | isValidDate(new Date()) | true |

### StringToDate
Converte uma data em string para Date
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| dd/MM/YYYY | Date| stringToDate("31/05/1991") | Fri May 31 1991 00:00:00 GMT-0300 (Brasilia Standard Time)|

### StringToDateHour
Converte uma data com hora em string para Date
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| dd/MM/YYYY HH:mm:SS| Date| stringToDateHour("31/05/1991 12:30:01") | Fri May 31 1991 12:30:01 GMT-0300 (Brasilia Standard Time)|

### StringToDateIso
Converte uma data em string para uma data ISO em string (Somente Data)
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| dd/MM/YYYY | string| stringToDateIso("31/05/1991") | 1991-05-31|

### FormatDateAndHour
Converte um Date para uma data em string formatada com data e hora
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | string| formatDateAndHour("2021-01-01T00:00:00Z") | 01/01/2021 00:00:00|

### FormatDate
Converte um Date para uma data em string formatada
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | string| formatDate("2021-01-01T00:00:00Z") | 01/01/2021|

### FormatHour
Converte um Date para uma hora em string formatada
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | string| formatHour("2021-01-01T15:00:00Z") | 15:00:00|

### AddDays
Converte um Date para uma hora em string formatada
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date, number | string| addDays("2021-01-01T15:00:00Z", 5) | 2021-01-06T15:00:00Z|

### FinalOfDay
Converte um Date para uma hora em string formatada
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | Date| finalOfDay("2021-01-01T15:00:00Z") | 2021-01-01T23:59:59Z|
