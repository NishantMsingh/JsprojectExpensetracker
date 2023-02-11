// Working on the application
var form=document.getElementById("addForm");
// Submit and Adding list Event 
form.addEventListener('submit',addItem);


var itemList=document.getElementById("itemList");
// Delete Event 
itemList.addEventListener('click',deleList);
function addItem(e)
{
  e.preventDefault();
  var expamount=document.getElementById("expamount").value;
  var catogary=document.getElementById("catogary").value;
  var select = document.getElementById("comboBox");
    var selectedValue = select.value;


    var tr=document.createElement("tr");
    var amount=document.createElement("td");
    var cato=document.createElement("td");
    var sele=document.createElement("td");

tr.appendChild(amount.appendChild(document.createTextNode(expamount+" ")));
tr.appendChild(cato.appendChild(document.createTextNode(catogary+" ")));
tr.appendChild(sele.appendChild(document.createTextNode(selectedValue+" ")));
// Creating delete button

var del=document.createElement("button");
// Add class 
del.className="btn btn-danger btn-sm float-right delete ms-3";
// Append the text node 
del.appendChild(document.createTextNode("X"));
tr.appendChild(del);
// Creating Edit button

var edit=document.createElement("button");
// Add class 
edit.className="btn btn-success btn-sm float-right edit ms-3";
// Append the text node 
edit.appendChild(document.createTextNode("Edit"));
tr.appendChild(edit);
tr.className="mt-2";
// var txt=li.innerText;

    itemList.appendChild(tr);
document.getElementById("expamount").innerHTML="";
document.getElementById("catogary").innerHTML="";
document.getElementById("comboBox").value="";
}

// Remove Item 
function deleList(e)
{
  if(e.target.classList.contains('delete'))
  {
   if(confirm("Are you sure?"))
   {
    var li1=e.target.parentElement;
    itemList.removeChild(li1);
   }
  } 
  else if(e.target.classList.contains('edit'))
  {
    let tr=e.target.parentElement;
    let name1=tr.children[0].textContent;
    let email1=tr.children[1].textContent;
    let phone1=tr.children[2].textContent;
    document.getElementById("expamount").value=name1;
    document.getElementById("comboBox").value=email1;
    document.getElementById("catogary").value=phone1;
    // localStorage.removeItem(email1);
    itemList.removeChild(tr);
  }
}

