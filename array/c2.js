function analyzeElements(arr){
    let resultAnalyze = [];
      for (let i = 0; i < arr.length; i++) {
          
         resultAnalyze.push({
              value: arr[i],
              index: i,
              type: typeof(arr[i])
          })
      }
    return resultAnalyze;
  }
  
  console.log(analyzeElements([10, "hello", true]));
  console.log(analyzeElements([1, 2, 3]));