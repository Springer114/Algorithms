    // Given an array of objects that contain a category key,
    // return an object to group the objects by their category.
    // Make the grouping case-insensitive.
    // Bonus: allow the key that is grouped by to be provided.

    // EXAMPLE:
    const objects = [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Shibe",
            category: "Cute",
        },
        {
            name: "Ancient India",
            category: "Cradle of Civilization",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
        {
            name: "The Fertile Crescent",
            category: "Cradle of Civilization",
        },
    ];

    // groupObjects(objects) should return:
    // {
    //     cute: [
    //         {
    //             name: "Baby Yoda",
    //             category: "cute",
    //         },
    //         {
    //             name: "Shibe",
    //             category: "Cute",
    //         },
    //     ],
    //     food: [
    //         {
    //             name: "Cricket Protein",
    //             category: "food",
    //         },
    //         {
    //             name: "Wasp Crackers",
    //             category: "Food",
    //         },
    //     ],
    //     "cradle of civilization": [
    //         {
    //             name: "Ancient India",
    //             category: "Cradle of Civilization",
    //         },
    //         {
    //             name: "The Fertile Crescent",
    //             category: "Cradle of Civilization",
    //         },
    //     ],
    // }

function groupObjects(items, category) {
    let obj = {};
    for (key in items) {
        if (!(items[key][category].toLowerCase() in obj)) {
            obj [items[key][category].toLowerCase()] = []
            obj [items[key][category].toLowerCase()].push(items[key])
        }
    }
    return obj
}
console.log(groupObjects(objects, "cute"));

    // Given two strings, return if they are equal when both are typed 
    // into empty text editors. The '#' character means a backspace character.

    // Assume that both strings only contain lowercase letters and # characters.

    // Note that after backspacing an empty text, the text will continue to be
    // empty.

    // BONUS: Can you do it with O(1) space complexity (i.e., constant. no matter how
    // long the strings are, the amount of extra memory for variables never changes), 
    // and O(n) time complexity?

    // EXAMPLE:
    let s1 = "a#c"
    let t1 = "b"

    let s2 = "a##c"
    let t2 = "#a#c"

    // backSpaceStringCompare(s1, t1) should return false, because the output to
    // a text editor for s1 would be "c", while the output for t1 would be "b"

    // backSpaceStringCompare(s2, t2) should return true, because the output to
    // a text editor for both would just be "c"

function backSpaceStringCompare(str1, str2){
    
}