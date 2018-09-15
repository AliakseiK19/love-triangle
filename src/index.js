/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let result = 0;
   preferences.unshift(0);
   let a = 1;
   while ((a < preferences.length) && (preferences[a + 1] == preferences[a]))
     { 
      a++; 
      if (a == preferences.Length - 1) { return result; }      
      }
   for(let a = 1; a < preferences.length; a++){  
         
       let b = preferences[a];
       let c = preferences[b];
       if(a==preferences[c])
       {
         result ++;
       }        
   }
   result = result/3;
   result = result -(result%1);
   return result;
};
