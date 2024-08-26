const strArr = ["vinya", "Veena", "Athira", "Rino", "Adithyan", "Sharvin"];
MergeSort(strArr ,strArr.length )

console.log(strArr)


function MergeSort(arr, noofElements) {
  let mid = Math.floor(noofElements / 2);

  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < mid; i++) {
    leftArray.push(arr[i]);
  }

  for (let i = mid; i < noofElements; i++) {
    rightArray.push(arr[i]);
  }

  MergeSort(leftArray, mid);
  MergeSort(rightArray, noofElements - mid);

  merge(arr, leftArray, rightArray, mid, noofElements - mid);
}

function Merge(arr, leftArr, rightArr, leftNoElements, rightNoElements) {
  let i = 0;
  j = 0;
  k = 0;

  while (i < leftNoElements && j < rightNoElements) {
    if (leftArr[i] < rightArr[j]) {
      arr[k++] = arr[i++];
    } else {
      arr[k++] = arr[j++];
    }
  }

  //balance if any length greater
  while (i < leftNoElements) {
    arr[k++] = leftArr[i++];
  }
  //balance righht if any length greater
  while (j < rightNoElements) {
    arr[k++] = rightArr[j++];
  }
}
