function searchPairs(array, N) {
    let arrSort = [...array];
    arrSort.sort();

    let arrResult = [];

    let firstInd = 0;
    let lastInd = array.length - 1;

    let lastVal = null;

    while(firstInd < lastInd) {

        if(lastVal != arrSort[firstInd]) {

            let s = arrSort[firstInd] + arrSort[lastInd];

            if(s == N) {

                arrResult.push([arrSort[firstInd], arrSort[lastInd]]);
                lastVal = arrSort[firstInd];
                firstInd++;
                lastInd--;

            } else if(s < N) {

                firstInd++;

            } else {

                lastInd--;

            }
        } else {

            firstInd++;
        }
    }

    return arrResult;
}

const arr = [1, 2, 6, 5, 3, 4, 7, 8];
const arr2 = [3, 1, 1, 2, 6, 5, 3, 4, 7, 8];
const arr3 = [2, 2, 2, 2, 6, 5, 3, 3, 3, 3];

const k = 5;

console.log("1", searchPairs(arr, k));
console.log("2", searchPairs(arr2, k));
console.log("3", searchPairs(arr3, k));