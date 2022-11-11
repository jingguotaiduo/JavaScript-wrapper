export function divide(x, y) {
    if(y != 0)
    {
       return x/y;
    }
    return 0;
}

export function multiply(a,b) {
   return a*b;
}

function jiecheng(n) {
   if(n <= 0)
      return 1;
   else
      return n * jiecheng(n-1);
}

export function jc(a) {
   return jiecheng(a);
}