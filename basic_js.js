// Basic Javascript homework


    // 1. Display in the console the numbers from 1 to 20


            function displayCount() {
                for (twentyCount = 1; twentyCount <= 20; twentyCount++) {
                console.log(twentyCount);
                }
            }
            displayCount();




    // 2. Display in the console the odd numbers from 1 to 20


            function displayOdd() {
                        for (oddNum = 1; oddNum <= 20; oddNum++) {
                        if(!(oddNum % 2)) {
                            continue;
                            }
                        else {
                            console.log(oddNum);   
                            }
                        }
            }
                    displayOdd();




    // 3. Compute the sum of the elements of an array and display it in the console (add all numbers in the array together)


            function arraySum(array) {
                let sum = 0;        
            for (let index = 0; index < array.length; index++) {
                sum += array[index];
                }
                return sum;
            }
            console.log(arraySum([1,34,3,2,20]));



    // 4. Compute the maximum of the elements of an array and display it in the console (am facut-o impreuna :) )
     
            function maxofAll (list) {
                let max = -Infinity, i=0;
                while (i < list.length){
                    if (max < list[i]){
                        max = list[i];
                    }
                i++;
                }
                return max;
            }
            
            console.log (maxofAll ([12, 2415, 3463, -23421, 0]));
    

    //Compute how many times a certain element appears in an array (count the number of times one element of your choice is in the array)

            function findOccurence(occ, arr) {
                let counter = 0, index;        
                for (let index = 0; index < arr.length; index++) {
                    if (arr[index] == occ) {
                counter++;
                    }
                }
                return counter;
            }
            console.log(findOccurence(2, [1, 2, 34, 3, 2, 20, 2, 6, 2]));


    //Expert challenge: Using nested for loops generate and display in the console the following pattern

    // 0 1 0 1

    // 1 0 1 0

    // 0 1 0 1

    // 1 0 1 0



    function nestedLoop() {
        for (let i = 0; i <= 3; i++){
          let row = '';
          for( let j = 0; j <= 3; j++) {
            if (Math.abs(i-j) == 0 || Math.abs(i-j) == 2) {
              row += '0 ';
            }
            if (Math.abs(i-j) == 1 || Math.abs(i-j) == 3)
              row += '1 ';
          }
          console.log(row);
        }
      }
        nestedLoop();