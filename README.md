# `js-romanian-cnp-validation`

Function for validate C.N.P. - Personal number code (Romania)

## Usage

Personal number code (Romania) -  C.N.P.

In Romania, the assignment of C.N.P. (personal number code) it is done by the community public services for records of persons or, where they do not exist or do not function, by the executive authorities of the administrative-territorial units, and abroad, the assignment of C.N.P. it is done by the Ministry of Foreign Affairs, through the diplomatic missions and consular offices of Romania.

Residents receive C.N.P. from the General Inspectorate for Immigration and is written in the residence permit.
Change

A new C.N.P. it is attributed to the same person in one of the following situations[4]:

    the birth certificate was rectified, the data included in the C.N.P structure being modified.
    the column in the birth certificate in which the C.N.P. is entered. was filled in incorrectly
    C.N.P. was misattributed
    the applicant has changed gender
    there are inconsistencies regarding C.N.P.

Structure

The personal numerical code consists of 13 digits[1], unique for each natural person and consists of 7 components:

SAALLZZJJNNNC 

This string of 13 digits is divided into
S AA LL ZZ JJ NNN C

S

The S component represents the sex and the century in which the person was born and can have one of the following values[5]:

    1 for males born between 1900 and 1999
    2 for female persons born between 1900 and 1999
    3 for males born between 1800 and 1899
    4 for female persons born between 1800 and 1899
    5 for males born between 2000 and 2099
    6 for female persons born between 2000 and 2099
    7 for male residents[6]
    8 for female residents[6]

AA

The AA component consists of the last 2 digits of the year of birth[7].
LL

The LL component consists of the month of birth, with values ​​between 01 and 12[7].

ZZ

The ZZ component consists of the day of birth, with values ​​between 01 and 28, 29, 30 or 31, as appropriate[7].

JJ

The JJ component represents the county or sector where the person was born, or where he had his domicile or residence at the time of granting the C.N.P.[8], according to the SIRUTA nomenclature.

County codes are in their alphabetical order, with some exceptions.
County Code
01 Alba
02 Arad
03 Arges
04 Bacau
05 Bihor
06 Bistrița-Năsăud
07 Botoșani
08 Brașov
09 Brăila
10 Buzau
11 Caraș-Severin
12 Cluj
13 Constanta
14 Covasna
15 Dâmbovița
16 Dolj
17 Galați
18 Gorj
19 Harghita
20 Hunedoara
21 Ialomița
22 Iași
23 Ilfov
24 Maramureș
25 Mehedinți
26 Mures
27 Neamț
28 Olt
29 Prahova
30 Satu Mare
31 Sălaj
32 Sibiu
33 Suceava
34 Teleorman
35 Timiș
36 Tulcea
37 Vaslui
38 Vâlcea
39 Vrancea
40 Bucharest
41 Bucharest - District 1
42 Bucharest - District 2
43 Bucharest - District 3
44 Bucharest - District 4
45 Bucharest - District 5
46 Bucharest - District 6
51 Calarași
52 Giurgiu
47 Bucharest - District 7 (abolished)
48 Bucharest - District 8 (abolished)

NNN

The NNN component represents a sequential number (between 001 and 999), distributed by assignment points, which differentiates people of the same sex, born in the same place and with the same date of birth[9].

C

Component C consists of a check digit, which allows detecting possible errors of replacement or inversion of the digits in the C.N.P. component [10]
Validation

Validation of a C.N.P. consists of calculating the component C and comparing it with the received value of the same component. If they are identical, it means that C.N.P. checked is valid.

The calculation of the C component is done using the constant "279146358279", as follows:

    each digit of the first 12 digits of the C.N.P. is multiplied by its constant counterpart
    the results are summed and the total is divided by 11
    if the remainder of the division is less than 10, that represents the value of the C component
    if the remainder of the division is 10, the value of the C component is 1

the source of the explanations https://ro.wikipedia.org/wiki/Cod_numeric_personal_(Romănia)

```javascript
const validcnp= require("js-valid-cnp");
validcnp.validcnp("1721004437817");
  // Output: true
```

```javascript
const validcnp= require("js-valid-cnp");
validcnp.validcnp("1721004437818");
  // Output: false
```


