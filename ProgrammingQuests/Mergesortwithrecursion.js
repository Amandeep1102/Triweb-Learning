function mergeSort(arr) {
    if (arr.length <= 1) 
    {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const merge = (left, right) => {
        const result = [];
        let LIndex = 0;
        let RIndex = 0;

        while (LIndex < left.length && RIndex < right.length) 
        {
            if (left[LIndex] < right[RIndex]) 
            {
                result.push(left[LIndex]);
                LIndex++;
            } else 
            {
                result.push(right[RIndex]);
                RIndex++;
            }
        }

        return [...result, ...left.slice(LIndex), ...right.slice(RIndex)];
    };

    return merge(mergeSort(left), mergeSort(right));
}

const Array = [54, 22, 98, 2, 51, 11, 90];
const sortedArray = mergeSort(Array);
console.log(sortedArray);
