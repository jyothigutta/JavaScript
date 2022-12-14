let array = [1,2,2,3,3,4,5,6];

         for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                console.log(array[i])
               }
            }
         }
