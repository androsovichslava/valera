// let bab = 'bab';
// let newbab = bab.replace("a", "!");
// console.log(newbab);

// newbab = bab.replace(/ab/, "!");
// console.log(newbab);
// bab = "xsx abc"
// newbab = bab.replace(/x.x/, "!");
// console.log(newbab);

// bab = "aaa abc"
// newbab = bab.replace(/a/, "!");
// console.log(newbab);

// bab = "aaa abc"
// newbab = bab.replace(/a/g, "!");
// console.log(newbab);

// let str = 'aba aca aea abba adca abea';
// let newstr = str.replace(/a..a/g, "!")
// console.log(newstr);

// str = 'xx xax xaax xaaax xbx';
// newstr = str.replace(/xa+a/g, "!")
// console.log(newstr);

// str = 'xx xax xaax xaaax xbx';
// newstr = str.replace(/xa?/g, "!")
// console.log(newstr);


// str = 'aa aba abba abbba abca abea';
// newstr = str.replace(/ab+a/g, "!")
// console.log(newstr);

// str = 'aa aba abba abbba abca abea';
// newstr = str.replace(/ab*a/g, "!")
// console.log(newstr);

// str = 'aa abababa abbababa abbba abcaba abea';
// newstr = str.replace(/a(ba)+/g, "!")
// console.log(newstr);

// str = 'aa+ ababa++ba abbababa abbba abcaba abea';
// newstr = str.replace(/a\++/g, "!")
// console.log(newstr);

// str = 'aa+ a.baba++ba abbababa abbba a.bcaba abea';
// newstr = str.replace(/a\.b/g, "!")
// console.log(newstr);

// str = '2+3 223 2223';
// newstr = str.replace(/2\+3/g, "!")
// console.log(newstr);

// str = '23 2+3 2++3 2+++3 345 567';
// newstr = str.replace(/2\++3/g, "!")
// console.log(newstr);

// str = '23 2+3 2++3 2+++3 345 567';
// newstr = str.replace(/2\+*3/g, "!")
// console.log(newstr);

// str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// newstr = str.replace(/\*q+\+/g, "!")
// console.log(newstr);

// str = '[abc] {abc} abc (abc) [abc]';
// newstr = str.replace(/\[abc\]/g, "!")
// console.log(newstr);

// str = 'aa aba abba abbba abbbba abbbbba';
// newstr = str.replace(/ab{2,4}a/g, "!")
// console.log(newstr);

// str = 'aa aba abba abbba abbbba abbbbba';
// newstr = str.replace(/ab{0,3}a/g, "!")
// console.log(newstr);

// str = 'aa aba abba abbba abbbba abbbbba';
// newstr = str.replace(/ab{4,}a/g, "!")
// console.log(newstr);

// str = 'aba accca azzza wwwwa';
// // Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами 'a' может быть любой символ (кроме 'a').

// newstr = str.replace(/a.+?a/g, "!")
// console.log(newstr);

// str = 'a1a a2a a3a a4a a5a aba aca';
// newstr = str.replace(/a\da/g, "!")
// console.log(newstr);


// str = 'a1333a a4444442a a3a a4a a5a aba aca aa aa';
// newstr = str.replace(/a\d*a/g, "!")
// console.log(newstr);

// str = 'ave a#a a2a a$a a4a a5a a-a aca';
// newstr = str.replace(/\s/g, "!")
// console.log(newstr);

// str = 'asa a#a a2a a$a a4a a5a a-a aa aca';
// newstr = str.replace(/a[a-z]*a/g, "!")
// console.log(newstr);

// str = 'xaz xbz x1z xСz';
// let res = str.replace(/x[^a-z]z/g, '!');
// console.log(res);

// str = '1a2 xbz x1z xСz 1s2';
// res = str.replace(/1[^e,x]2/g, '!');
// console.log(res);


// str = '1a2 xbz x1z xС2 1s2 xrrrr2';
// res = str.replace(/x[^A-Z]+?2/g, '!');
// console.log(res);

// str = '1a2 xbz x1z xС2 1s2 xrrrr2';
// res = str.replace(/x[^2-7]+2/g, '!');
// console.log(res);

// str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// res = str.replace(/[а-яА-ЯёЁ]/g, '!');
// console.log(res);

// str = 'aba aea aca aza axa a.a a+a a*a';
// res = str.replace(/a[.+*]a/g, '!');
// console.log(res);

// str = 'xaz x.z x3z x@z x$z xrz';
// res = str.replace(/x[^.@$]z/g, '!');
// console.log(res);
// str = 'xaz x.z x3z x@z x$z xrz 55 ...';
// res = str.replace(/[\d.]+/g, '!');
// console.log(res);

// str = 'x[]z x{}z x.z x()z';
// res = str.replace(/x[\[\]\{\}\(\)]+z/g, '!');
// console.log(res);


// str = '[abc] {abc} abc (abc) [abc]';
// res = str.replace(/[\[\{\(][a-z]+[\]\}\)]/g, '!');
// console.log(res);

// str = '^xx axx ^zz bkk @ss';
// res = str.replace(/[\^@][a-z]{2}/g, '!');
// console.log(res);

// str = '^xx axx ^zz bkk @ss';
// res = str.replace(/[^\^@\s][a-z]{2}/g, '!');
// console.log(res);

// str = 'aaaa aaaa aaaa';
// res = str.replace(/^aaaa/g, '!');
// console.log(res);

// str = 'aaaa aaaa aaaa';
// res = str.replace(/^..../g, '!');
// console.log(res);

// str = 'aaa bbb abb';
// res = str.replace(/a{3}|b{3}/g, '!');
// console.log(res);

// str = 'aeeea aeea aea axa axxa axxxa atttta';
// res = str.replace(/a(e+|x+)a/g, '!');
// console.log(res);

// console.log(/a+/.test("aaa"));
// console.log(/^http:\/\//.test("http://akim.zp.ua"));
// console.log(/txt$|html$|php$/.test("slava.txt"));
// console.log(/txt$|html$|php$/.test("slava.jpg"));
// console.log(/txt$|html$|php$/.test("slava.php"));


// console.log(/jpg$|jpeg$/.test("slava.jpg"));
// console.log(/jpg$|jpeg$/.test("slava.jpgd"));
// console.log(/jpg$|jpeg$/.test("slava.jpg"));


// console.log(/^\d{4}\-\d{2}\-\d{2}$/.test("1970-05-22"));
// console.log(/^\d{4}.\d{2}.\d{2}$/.test("1970.05.22"));


// console.log(/^[a-zA-Z.]+\@[a-zA-Z.]+$/.test("slava@ukr.net"));
// console.log(/^[a-zA-Z.]+\@[a-zA-Z.]+$/.test("slava@@ukr.net"));



// console.log(/^([a-zA-Z]+(-[a-zA-Z]+)+\.)[a-zA-Z]{2}$/.test("slava-ukr.net"));
// console.log(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test("slava-ukr.net"));


// str = 'a aa aaa aaaa';
// res = str.match(/a{3,}/g);
// console.log(res)

// str = 'site.ru sss site.com zzz site.net';
// res = str.match(/[a-z]+\.[a-z]+/g);
// console.log(res)

// str = 'a1b c34d x567z';
// res = str.match(/\d/g);
// console.log(res.reduce((a, e) => {
//     return Number(a) + Number(e);
// }, 0))

// str = 'sss xaaa-bbbx zzz';
// res = str.match(/x(a+)-(b+)x/);
// console.log(res)

// str = 'sss domain.ru zzz';
// res = str.match(/(\w+)\.(\w+)/);
// console.log(res)


// str = '31.12.2025';
// res = str.match(/(\d+)\.(\w+).(\w+)/);
// console.log(res)

// str = '31.12.2025';
// res = str.replace(/(\d+)\.(\w+).(\w+)/, '($1) ($2) ($3)');
// console.log(res)

// str = '31.12.2025';
// res = str.replace(/(\d+)\.(\w+).(\w+)/, '$3.$2.$1');
// console.log(res)

// str = '12 34 56 78';
// res = str.replace(/(\d)(\d)/g, '$2$1');
// console.log(res)

// str = "12 34 56 78";
// res = str.matchAll(/(\d)(\d)/g);
// for (let m of res) {

//     console.log(m)
// }


// str = '12:37 15:48 17:59';
// res = str.matchAll(/(\d+):(\d+)/g);
// for (let m of res) {

//     console.log(m)
// }

// str = 'site.ru sss site.com zzz site.net';
// res = str.matchAll(/(\w+)\.(\w+)/g);
// for (let m of res) {

//     console.log(m)
// }

// str = "12:37:34 15:48:55 13:55:34"
// let reg = /(\d\d):(\d\d):(\d\d)/g;
// while (res = reg.exec(str)) {
//     console.log(res)
// }


// console.log("---------------------------------------------------------------------")
// str = '12:37 15:48 17:59';

// reg = /(\d+)\:(\d+)/g;
// res = str.replace(reg, match => {
//     console.log(match)
//     return match
// });
// console.log(res)

// str = 'aaa [2] bbb [3] ccc [12] ddd';
// res = str.replace(/(\d+)/g, match => {
//     console.log(match)
//     return Number(match) * 2;
// })
// console.log(res)

// str = '123 456 789';
// res = str.replace(/(\d+)/g, match => {
//     console.log(match)

//     return match.split('').reverse().join('');
// })
// console.log(res)
// console.log("---------------------------------------------------------------------")
// str = '31.12.2025 30.11.2024 29.10.2023';
// res = str.replace(/(\d+\.\d+.\d+)/g, match => {
//     return match.replace(/(\d+)\.(\d+)\.(\d+)/g, "$3-$2-$1")
//     console.log(match)

//     // return match.split('').reverse().join('');
// })
// console.log(res)

// console.log("---------------------------------------------------------------------")
// let str = 'sss site.ru zzz site.com kkk';
// let res = str.replace(/\w+\.\w+/g, '<a href="http://$&">$&</a>');

// console.log(res)

// let str = 'aaaaaaa bbb ccc xyz dfgf dfg ddfff';
// let res = str.replace(/\b\w*(\w)\1\w*\b/g, "111")
// console.log(res)

// str = '$aaa $bbb $ccc xxxx';
// res = str.replace(/(?<=\$)\w+/g, '!')
// console.log(res)
// let pat = "ru|by|ua";
// let reg = new RegExp(`^[a-z]+\.(${pat})$`);


// let str = "slava.ru"
// console.log(reg)
// let res = reg.test(str);
// console.log(res);
// str = "slava.rw"
// res = reg.test(str);

// console.log(res);
let arr = ['ru', 'by', 'ua'];
let pat = arr.join("|");
let reg = new RegExp(`^[a-z]+\.(${pat})$`);

let str = "slava.ru"
console.log(reg.test(str))
str = "slava.rq"
console.log(reg.test(str))

str = 'aaby asdf aaa aaa ap';
let res = str.replace(/\b\w*(\w)\1\w*\b/g, "");

console.log(res);

str = 'aaby asdf aaa   aaa ap';
res = str.replace(/(\b\w+\b)\s+\1+/g, "");

console.log(res);