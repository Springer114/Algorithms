    // Given an array of objects, a searchFor string, and searchBy key that exists in the object
    // return a new array of only those objects whose value for the given key starts with the given search string
    // You can assume the key will exist on the object and the value of that key will be a string
    // Bonus: make the search case insensitive
    // Bonus: re-write it with functional programming in mind, using built in methods
    // Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    //     - you can assume the searchMethod will be valid
    
    // EXAMPLE:
    const coll = [
        {
            fName: "Bill",
            lName: "Bob"
        },
        {
            fName: "Mary",
            lName: "Smith"
        },
        {
            fName: "Joey",
            lName: "Smony"
        }
    ]

    let search = "Sm";
    let searchBy = "lName"
    let searchMethod = "includes";

    // filterByKey(coll, search, searchBy) should return
    // [
    //     {
    //         fName: "Mary",
    //         lName: "Smith"
    //     },
    //     {
    //         fName: "Joey",
    //         lName: "Smony"
    //     }
    // ]

function filterByKey(collection, searchFor, searchBy) {
    let arr = [];
    for (const item of collection) {
        let isMatch = true;
        for (let i = 0; i < searchFor.length; i++) {
            if (item[searchBy][i] !== searchFor[i]) {
                isMatch = false;
            }
        }
        if(isMatch) {
            arr.push(item);
        }
    }
    return arr;
}
console.log(filterByKey(coll, search, searchBy));

function filterByKey2(collection, searchFor, searchBy, searchMethod = "startWith") {
    return collection.filter(item => String(item[searchBy]).toLowerCase()[searchMethod](searchFor.toLowerCase()));
}
console.log(filterByKey2(coll, search, searchBy, searchMethod));