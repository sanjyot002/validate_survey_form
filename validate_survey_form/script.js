function nameval(){
    var nam = document.getElementById('name').value;
    var st = document.getElementById('nam');
    if(nam.length==0)
    {
        st.innerHTML="*Name can't be blank";
        st.style.color="red";
        st.style.fontSize="12px";
        return false;
    }
    else if(!nam.match(/^[a-zA-Z]+$/))
    {
        st.innerHTML="*Name can't have a number";
        st.style.color="red";
        st.style.fontSize="12px";
        return false;
    }
    else if(nam.length<3 && nam.length>0)
    {
    st.innerHTML="*Must contain atleast three characters";
    st.style.color="red";
    st.style.fontSize="12px";
    return false;
    }
    else{
        st.innerHTML="";
        return true;
    }
    
    
}

function mailchk()
{
    var mail = document.getElementById('mail').value;
    var sty = document.getElementById('msg');
    var atpos=mail.indexOf("@");
    var dotpos=mail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length)
    {
        sty.innerHTML="*Please enter a valid email";
        sty.style.color="red";
        sty.style.fontSize="12px";
        return false;
    }
    else{
        sty.innerHTML="";
        return true;
    }
}