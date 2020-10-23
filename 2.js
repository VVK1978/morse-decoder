arr=[]
expr = "00101010100000000010";
for (k=0;k<2;k++){
for (i=0;i<=4;i++){
   console.log(expr.slice(i*2+k*10,i*2+2+k*10))
}

}

