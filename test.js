const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];
  
  const res = input.flat().reduce((acc,cur)=>{
      if(acc[cur]){
          acc[cur]++;
      }else{
          acc[cur]=1;
      }
      console.log(acc)
      return acc;
  },{})
  
  console.log(res)