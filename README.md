 # SajermannNpmUtils

Conjunto de funções utilitárias que eu cansei de copiar e colar em todos os meus projetos

## Base64

### b64EncodeUnicode
Converte uma string em base64
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| string | string | b64EncodeUnicode("AÁoõ!@#UÚ") | "QcOBb8O1IUAjVcOa" |

### b64DecodeUnicode
Converte um base64 em string
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| string | string | b64EncodeUnicode("QcOBb8O1IUAjVcOa") | "AÁoõ!@#UÚ" |

## CnpjCpf

### isValidCnpj
Verifica se o Cnpj é valido
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| string | boolean | isValidCnpj("12345678901234") | false |

### addCnpjMask
Adiciona máscara de Cnpj na string
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| string | string | addCnpjMask("07526557000100") | "07.526.557/0001-00" |

### removeCnpjMask
Remove máscara de Cnpj na string
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| string | string | addCnpjMask("07.526.557/0001-00") | "07526557000100" |

## Currency

### formatForReal
Formata o número para Real Brasileiro
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| number | string | formatForReal(10.99) | "R$ 10,99" |

## Delay

### delay
Força a execução esperar por algum tempo
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| number | void | delay(3000) | void |

## Email

### isValidEmail
Verifica se o email é válido
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| string | boolean | isValidEmail("sajermannbruno@gmail") | false |
| string | boolean | isValidEmail("sajermannbruno@gmail.com") | true |

## Random

### generateNumbers
Gera uma string de números aleatórios
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| number | string | generateNumbers(3) | string |

### generateGuid
Gera um novo Guid
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| - | string | generateGuid() | "58ae706d-25c6-4bfd-b8d9-68c7d2356eca" |

## formatDate

### isValidDate
Verifica se uma data é valida
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | boolean | isValidDate(new Date()) | true |

### stringToDate
Converte uma data em string para Date
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| dd/MM/YYYY | Date| stringToDate("31/05/1991") | Fri May 31 1991 00:00:00 GMT-0300 (Brasilia Standard Time)|

### stringToDateHour
Converte uma data com hora em string para Date
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| dd/MM/YYYY HH:mm:SS| Date| stringToDateHour("31/05/1991 12:30:01") | Fri May 31 1991 12:30:01 GMT-0300 (Brasilia Standard Time)|

### StringToDateIso
Converte uma data em string para uma data ISO em string (Somente Data)
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| dd/MM/YYYY | string| stringToDateIso("31/05/1991") | 1991-05-31|

### formatDateAndHour
Converte um Date para uma data em string formatada com data e hora
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | string| formatDateAndHour("2021-01-01T00:00:00Z") | 01/01/2021 00:00:00|

### formatDate
Converte um Date para uma data em string formatada
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | string| formatDate("2021-01-01T00:00:00Z") | 01/01/2021|

### formatHour
Converte um Date para uma hora em string formatada
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | string| formatHour("2021-01-01T15:00:00Z") | 15:00:00|

### addDays
Adiciona dias a uma data
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date, number | string| addDays("2021-01-01T15:00:00Z", 5) | 2021-01-06T15:00:00Z|

### finalOfDay
Retorna a última hora da data informada
| Incoming Type | Return Type | Example Use| Return |
|--|--|--|--|
| Date | Date| finalOfDay("2021-01-01T15:00:00Z") | 2021-01-01T23:59:59Z|

