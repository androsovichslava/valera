const { Client } = require('pg');
let client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Slava_2000",
    database: "avecoder"
});

client.connect(function (err) {
    if (err) {
        console.log('connection error', err.stack)
    } else {
        console.log('connected')
    }
});

// client.query(`SELECT first_name, country_of_birth, date_of_birth FROM employee WHERE country_of_birth IN ('China', 'Argentina')`, function (err, result) {
//     if (err) {
//         console.error('query.error', err.stack);
//     } else {
//         console.log('query.result', result.rows);
//     }
//     client.end;
// });

client.query(`SELECT  country_of_birth, COUNT(*)  FROM employee GROUP BY country_of_birth HAVING COUNT(*) <10 ORDER BY country_of_birth`, function (err, result) {
    let arr;
    if (err) {
        console.error('query.error', err.stack);
    } else {
        arr = JSON.parse(JSON.stringify(result.rows));
        console.log('query.result', arr);
    }
    client.end;
});