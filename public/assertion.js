function assert(value, desc){
  var li = document.createElement("li");
  li.className = value?"alert alert-success":"alert alert-danger";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("results").appendChild(li);
}
