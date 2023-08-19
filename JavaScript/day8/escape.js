const chr = '\x7A';
console.log("Hexadecimal char ", chr);//Hexadecimal for z

const ch1 = '\u007A';
console.log("Unicode char ",ch1);//Unicode for z

if('\x7A' == '\u007A')
{
    console.log("Yes"); //true
}