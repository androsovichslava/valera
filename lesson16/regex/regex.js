let bab = 'bab';
let newbab = bab.replace("a", "!");
console.log(newbab);

newbab = bab.replace(/ab/, "!");
console.log(newbab);
bab = "xsx abc"
newbab = bab.replace(/x.x/, "!");
console.log(newbab);

bab = "aaa abc"
newbab = bab.replace(/a/, "!");
console.log(newbab);

bab = "aaa abc"
newbab = bab.replace(/a/g, "!");
console.log(newbab);

let str = 'aba aca aea abba adca abea';
let newstr = str.replace(/a..a/g, "!")
console.log(newstr);

str = 'xx xax xaax xaaax xbx';
newstr = str.replace(/xa+a/g, "!")
console.log(newstr);

str = 'xx xax xaax xaaax xbx';
newstr = str.replace(/xa?/g, "!")
console.log(newstr);


str = 'aa aba abba abbba abca abea';
newstr = str.replace(/ab+a/g, "!")
console.log(newstr);

str = 'aa aba abba abbba abca abea';
newstr = str.replace(/ab*a/g, "!")
console.log(newstr);

str = 'aa abababa abbababa abbba abcaba abea';
newstr = str.replace(/a(ba)+/g, "!")
console.log(newstr);

str = 'aa+ ababa++ba abbababa abbba abcaba abea';
newstr = str.replace(/a\++/g, "!")
console.log(newstr);

str = 'aa+ a.baba++ba abbababa abbba a.bcaba abea';
newstr = str.replace(/a\.b/g, "!")
console.log(newstr);

str = '2+3 223 2223';
newstr = str.replace(/2\+3/g, "!")
console.log(newstr);

str = '23 2+3 2++3 2+++3 345 567';
newstr = str.replace(/2\++3/g, "!")
console.log(newstr);

str = '23 2+3 2++3 2+++3 345 567';
newstr = str.replace(/2\+*3/g, "!")
console.log(newstr);

str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
newstr = str.replace(/\*q+\+/g, "!")
console.log(newstr);

str = '[abc] {abc} abc (abc) [abc]';
newstr = str.replace(/\[abc\]/g, "!")
console.log(newstr);

str = 'aa aba abba abbba abbbba abbbbba';
newstr = str.replace(/ab{2,4}a/g, "!")
console.log(newstr);

str = 'aa aba abba abbba abbbba abbbbba';
newstr = str.replace(/ab{0,3}a/g, "!")
console.log(newstr);

str = 'aa aba abba abbba abbbba abbbbba';
newstr = str.replace(/ab{4,}a/g, "!")
console.log(newstr);

str = 'aba accca azzza wwwwa';
// Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами 'a' может быть любой символ (кроме 'a').

newstr = str.replace(/a.+?a/g, "!")
console.log(newstr);

str = 'a1a a2a a3a a4a a5a aba aca';
newstr = str.replace(/a\da/g, "!")
console.log(newstr);


str = 'a1333a a4444442a a3a a4a a5a aba aca aa aa';
newstr = str.replace(/a\d*a/g, "!")
console.log(newstr);

str = 'ave a#a a2a a$a a4a a5a a-a aca';
newstr = str.replace(/\s/g, "!")
console.log(newstr);

str = 'asa a#a a2a a$a a4a a5a a-a aa aca';
newstr = str.replace(/a[a-z]*a/g, "!")
console.log(newstr);

str = 'xaz xbz x1z xСz';
let res = str.replace(/x[^a-z]z/g, '!');
console.log(res);

str = '1a2 xbz x1z xСz 1s2';
res = str.replace(/1[^e,x]2/g, '!');
console.log(res);


str = '1a2 xbz x1z xС2 1s2 xrrrr2';
res = str.replace(/x[^A-Z]+?2/g, '!');
console.log(res);

str = '1a2 xbz x1z xС2 1s2 xrrrr2';
res = str.replace(/x[^2-7]+2/g, '!');
console.log(res);

str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
res = str.replace(/[а-яА-ЯёЁ]/g, '!');
console.log(res);

str = 'aba aea aca aza axa a.a a+a a*a';
res = str.replace(/a[.+*]a/g, '!');
console.log(res);

str = 'xaz x.z x3z x@z x$z xrz';
res = str.replace(/x[^.@$]z/g, '!');
console.log(res);
str = 'xaz x.z x3z x@z x$z xrz 55 ...';
res = str.replace(/[\d.]+/g, '!');
console.log(res);

str = 'x[]z x{}z x.z x()z';
res = str.replace(/x[\[\]\{\}\(\)]+z/g, '!');
console.log(res);


str = '[abc] {abc} abc (abc) [abc]';
res = str.replace(/[\[\{\(][a-z]+[\]\}\)]/g, '!');
console.log(res);