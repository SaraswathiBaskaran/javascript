<!DOCTYPE html>
<html>
<body>


<h2>My First JavaScript</h2>
<script type="text/javascript">

function buttonClick()
 {
 var  msg=document.getElementById('demo').innerHTML;
 
alert(msg);
}
function buttonClickInput()
 {
 var  msg=document.getElementById('i1').value;
 
alert(msg);
}
function emp(name,id)
{
this.name=name;
this.id=id;
this.print=function()
{
document.write("welcome emp <br>"+name);
}
}
var e1=new emp("anna",32);
var e2=new emp("bella",22);
e1.print();
document.write("<br>name"+e2.name);

function checkradio()
{
if(rd1.checked==true)
{
alert(document.getElementById("rd1").value);
document.write(""+rd1);
}
}
function selectme()
{
var box=document.getElementById("selecting");
alert(box.options[box.selectedIndex].value);
}
function tagnamej()
{
var pa=document.getElementsByTagName("p");
pa[1].style.fontSize=22;
for(var h=0;h<pa.length;h++)
{
pa[h].style.color="blue";
}
}
</script>

<button type="button" onclick="document.getElementById('demo1').innerHTML=Date()">
Click me to display Date and Time.</button>
<button type="button"
onclick="document.getElementById('demo').innerHTML=Date()">
Click me to CHANGE</button>
<h2 id="demo1">details </h2>
<h1 id="demo">JAVASCRIPT</h1>
<button onclick="buttonClick()"> alert </button>

<input id="i1" placeholder="enter">
<button onclick="buttonClickInput()"> input box alert </button>
<br>
<br>
<input id="user" placeholder="enter username">

<input id="pass" type =password placeholder="enter password">
<button onclick="buttonClickInput()"> submit </button>

<input type="radio" id=rd1 name="grp" value="home">home</input>

<input type="radio" id=rd2 name="grp" value="work">work</input>
<button onclick="checkradio()"> submit </button>
Selectbox
<select id="selecting">
<option>GOOGLE</option>
<option>Modzilla</option>
</select>
<button onclick="selectme()">submit</button>
<br>
<p>Welvome</p>
<p>to</p>
<p>javascript</p>
<p>programming</p>
<button onclick="tagnamej()">submit</button>


</body>
</html> 

