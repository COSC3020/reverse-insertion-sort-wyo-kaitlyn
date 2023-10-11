function insertionSortReverse(arr) {
    let n = arr.length;
    if(n > 0) { // ensuring it works even with an empty array
        for(let i = n-2; i > -1; i--) {
            let value = arr[i];
            let j;
            for(j = i; j < n && arr[j+1] < value; j++) {
                arr[j] = arr[j+1];
            }
            arr[j] = value;
        }
    }
    return arr; 
}
