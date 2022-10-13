var flag =  true
function shownav()
{
    if(flag)
    {
    document.getElementById("navbars").style.display = "none";
    flag = !flag;
    }
    else{
        document.getElementById("navbars").style.display = "block";
        flag = !flag;
    }
}