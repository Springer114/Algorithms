/* 
    Recreate Object.entries method
    Given an object, return an array of arrays of the object's key value pairs, 
    where each key value pair is a 2 item array
    Do not include key value pairs from the given objects prototype (these are included 
    by default when looping over an object's keys)
*/

// Object.entries() demonstration
const myObj = {
    fName: "Cody",
    lName: "Thaller",
    age: 30
}

console.log(Object.entries(myObj));
// returns:
// [ [ 'fName', 'Cody' ], [ 'lName', 'Thaller' ], [ 'age', 30 ] ]

function entries(obj){
    var arr = [];
    for (const prop in obj) {
        var newArr = [];
        newArr.push(prop);
        newArr.push(obj[prop]);
        arr.push(newArr);
    }
    return arr;
}

/* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables 
    into a string or to add quotations without needing to escape them.
    Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods

    SQL INSERT STATEMENT
    INSERT INTO table_name (column_1_name, column_2_name, column_3_name) VALUES (column_1_value, column_2_value, column_3_value);

    NOTE: in the VALUES section, those values should be data-type appropriate. Datatypes that should be strings include:
        - char
        - varchar
        - text
        - binary
        - dates
        - timestamps

    Technically, there is no such thing as boolean in SQL. It's TinyINT, which is 0 or 1

    EXAMPLE: 
    const table = "users";
    const insertData = { first_name: "John", last_name: "Doe", age: 25 };

    insert(table, insertData) should return:
    "INSERT INTO users (first_name, last_name, age) VALUES ('John', 'Doe', 25);"

    NOTE THE LACK OF QUOTES IN THE COLUMN NAMES AND THE APPROPRIATE COMMA PLACEMENT
*/

function insert(tableName, columnValuePairs) {
    // there are a TON of ways to do this one. you can go SUPER basic with
    // controlling each character, to using some more complex methods to kind of stitch
    // things together seamlessly.

    // This solution will all be built on string concatenation
    let query = `INSERT INTO ${tableName} (`; // so start with the first part of our string

    for(const column in columnValuePairs){ // loop through the keys in what was given to us
        if(query[query.length-1] !== '('){ // this is potentially dangerous: if the previous character in our query is an open parentheses, we're looking at the first column.
            query += ', '; // so, as long as we're not on the FIRST column, we'll add the trailing comma to separate our column names
        }

        query += column; // then add the column name to our query string
    }

    query += `) VALUES (`; // now, concatenate that middle portion

    
    for(const column in columnValuePairs){ // loop through the columns again
        if(query[query.length-1] !== '('){ // same logic. if the last character of the query string is an open parentheses, we're looking at the first column's value
            query += ', '; // so, as long as we're not looking at the first column, we want to add the comma before we add the new value
        }

        // now here we need to do some data checking. if the value is a string or datetime object, wrap it in quotes
        if(typeof columnValuePairs[column] === "string" || typeof columnValuePairs[column] === "object"){
            query += `'${columnValuePairs[column]}'`;
        } else if(!isNaN(columnValuePairs[column])){ // if the value is a number, add the value without quotes
            query += columnValuePairs[column];
        } else if(typeof columnValuePairs[column] === Boolean){ // as a little bonus, since we can't put true/false in SQL, we'll convert it to 1 or 0
            query += columnValuePairs[column] === true ? 1 : 0;
        }

    }

    query += ');'; // then finally, concatenate the ending to the query

    return query; // and return it
}

function insert2(tableName, columnValuePairs) {
    const columns = Object.keys(columnValuePairs).join(",");
    const values = Object.values(columnValuePairs)
        .map(val => typeof val === "string" ? `"${val}"` : val)
        .join(",");
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}

const table = "users";
const insertData = { first_name: "John", last_name: "Doe", age: 25 };
console.log(insert(table, insertData));
console.log(insert2(table, insertData));