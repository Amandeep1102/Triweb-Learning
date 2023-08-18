function square(num) //outer
{
    function getSquare(n1) //inner1
    {
        function getSquareFromInside(n2)//inner2
        {
            console.log(n2*n2);
        }
        getSquareFromInside(n1);
    }
    getSquare(num)
}
square(4);