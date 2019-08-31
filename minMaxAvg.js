function minMaxAvg(arr) {
    var z = arr[0];
    var min = z;
    var max = z;
    var sum = z;

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        else if(arr[i] > max) {
            max = arr[i];
        }

        sum += arr[i];
    }
    var avg = sum / arr.length;

    return "The minimun is " + min + ", the maximum is " + max + ", and the average is " + avg + ".";

}

console.log(minMaxAvg([1, -2, 9, 4]));