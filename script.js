$(document).ready(function(){
    $("#ConfirmPassword").keyup(function(){
         if ($("#Password").val() != $("#ConfirmPassword").val()) {
             $("#msg").html("Password do not match").css("color","red");
         }else{
             $("#msg").html("Password matched").css("color","green");
        }
  });
  $("#oddrow").click(function(){
    $("tr:odd").css("background-color","blue");
  });
  $("#evenrow").click(function(){
    $("tr:even").css("background-color","grey");
  });
  $("#addrow").click(addRow);
  


});
var i = 1;
function addRow(){
     
var newRow = "<tr rowID='" + i + "'>"+"<td><div>"+$("#enterclass").val()+
            "</div></td>"+"<td><div>"+$("#enterboard").val()+
            "</div></td>"+"<td><div>"+$("#entermarks").val()+
            "</td> "+"<td><div>"+$("#enterdivision").val()+ "</tr>"; 
//Adds the row with content and 
                            // buttons
        $(newRow).appendTo("#maintable"); //Append the new row
            // to the table
        // Next three commands clear the input boxes
        $("#enterclass").val('');
        $("#enterboard").val('');
        $("#entermarks").val('');
        $("#enterdivision").val('');
        // Add to the numer of rows in the table
        i++;
    }// addRow END

