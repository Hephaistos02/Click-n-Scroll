function checkk () {
    if(document.getElementById('fiirst_name').value==''){
    document.getElementById('pp1').innerHTML='Please Enter your first name'
document.getElementById('pp1').style.color='red'
return false;
    }


    if(document.getElementById('last_name').value==''){
        document.getElementById('p2').innerHTML='Please Enter your last name'
    document.getElementById('p2').style.color='red'
    return false;
        }


        if(document.getElementById('address').value==''){
            document.getElementById('p3').innerHTML='Please Enter your address'
        document.getElementById('p3').style.color='red'
        return false;
            }

            
        if(document.getElementById('zip').value==''){
            document.getElementById('p4').innerHTML='Please Enter your postal code'
        document.getElementById('p4').style.color='red'
        return false;
            }
                

            
        if(document.getElementById('address').value==''){
            document.getElementById('p3').innerHTML='Please Enter your address'
        document.getElementById('p3').style.color='red'
        return false;
            }

            
        if(document.getElementById('town').value==''){
            document.getElementById('p6').innerHTML='Please Enter your hometown or city'
        document.getElementById('p6').style.color='red'
        return false;
            }
            

            
        if(document.getElementById('email').value==''){
            document.getElementById('p7').innerHTML='Please Enter your email'
        document.getElementById('p7').style.color='red'
        return false;
            }

            
        if(document.getElementById('address').value==''){
            document.getElementById('p8').innerHTML='Please Enter your phone number'
        document.getElementById('p8').style.color='red'
        return false;
            }


            else{
            
                return true;
            }

}