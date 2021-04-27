export {};

function error(message: string): never{
  throw new Error(message);
};
// this function is never retun

try{
 let result = error('test');
 console.log(result);
 
} catch (error) {
console.log(error);
};
