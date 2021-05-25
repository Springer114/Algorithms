function inArray(arr1, arr2) {
    let newArr = []
    for (i = 0; i < arr1.length; i++) {
        let subStr = arr1[i]
        for (j = 0; j < arr2.length; j++) {
            if (arr2[j].indexOf(subStr) !== -1) {
                newArr.push(arr1[i]);
                break
            }
        }
    }
    return newArr.sort()
}
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))