module.exports = function zeros(expression) {
  let arr=expression.split("*");
  let jj=1n;
  
  for (let i=0;i<arr.length;i++){
      if  (arr[i].slice(-2,-1) == "!"){
          arr[i]=arr[i].slice(0, -2);
          arr[i]=BigInt(arr[i]);
          arr[i]=fuck2(arr[i]);
      }else{
          arr[i]=arr[i].slice(0, -1);
          arr[i]=BigInt(arr[i]);
          arr[i]=fuckTo(arr[i]);           
      }
      
  }
  
  for(let i=0;i<arr.length;i++){
jj*=arr[i];
  }
  let zerro=0;
  while ((jj%10n)==0n){
    zerro++;
    jj=jj/10n
  }

  function fuck2(n){
      let mult=1n;
      while(n>1){
        mult=mult*n;
        n-=2n;
      }
      return mult;
       }


       function fuckTo(n){
          var mult=1n, i=1n;
          while(i<=n){
            mult*=i;
            i++;
          }
          return mult;
           }
  return zerro;
}
