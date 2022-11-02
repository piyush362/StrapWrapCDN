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

var flag2 = true;
function show()
{
    if(flag2)
    {
    document.getElementById("devbar").style.display = "none";
    document.getElementById("magic").style.display = "block";
    flag2 = !flag2;
    }
    else{
        document.getElementById("devbar").style.display = "block";
        document.getElementById("magic").style.display = "none";
        flag2 = !flag2;
    }
}