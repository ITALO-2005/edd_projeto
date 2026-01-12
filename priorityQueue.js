// Returns index of parent
function parent(i) { return Math.floor((i - 1) / 2); }

// Returns index of left child
function leftChild(i) { return 2 * i + 1; }

// Returns index of right child
function rightChild(i) { return 2 * i + 2; }

// Shift up to maintain max-heap property
function shiftUp(i, arr) {
    while (i > 0 && arr[parent(i)] < arr[i]) {
        [arr[parent(i)], arr[i]] = [arr[i], arr[parent(i)]];
        i = parent(i);
    }
}

// Shift down to maintain max-heap property
function shiftDown(i, arr, size) {
    let maxIndex = i;
    const l = leftChild(i);
    if (l < size && arr[l] > arr[maxIndex]) maxIndex = l;
    const r = rightChild(i);
    if (r < size && arr[r] > arr[maxIndex]) maxIndex = r;

    if (i !== maxIndex) {
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        shiftDown(maxIndex, arr, size);
    }
}

// Insert a new element
function insert(p, arr) {
    arr.push(p);
    shiftUp(arr.length - 1, arr);
}

// Extract element with maximum priority
function pop(arr) {
    const size = arr.length;
    if (size === 0) return -1;
    const result = arr[0];
    arr[0] = arr[size - 1];
    arr.pop();
    shiftDown(0, arr, arr.length);
    return result;
}

// Get current maximum element
function getMax(arr) {
    if (arr.length === 0) return -1;
    return arr[0];
}



// Print heap
function printHeap(arr) {
    console.log(arr.join(" "));
}

// Driver code
const pq = [];

insert(45, pq);
insert(20, pq);
insert(14, pq);
insert(12, pq);
insert(31, pq);
insert(7, pq);
insert(11, pq);
insert(13, pq);
insert(7, pq);

console.log("Priority Queue after inserts: ");
printHeap(pq);

// Demonstrate getMax
console.log("Current max element:", getMax(pq));

// Demonstrate extractMax
pop(pq);
console.log("Priority Queue after extracting max: ");
printHeap(pq);