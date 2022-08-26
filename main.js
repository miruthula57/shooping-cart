//remove btn
var removebtn = document.getElementsByClassName("btn-danger");

function removebtns(event) {
  var e = event.target;
  var parents = e.parentElement.parentElement.remove();
  //console.log(parents);
  grandtotal();
}

var addTocart = document.getElementsByClassName("btn-primary");
for (i = 0; i < addTocart.length; i++) {
  addTocart[i].addEventListener("click", addTocarts);
}
function addTocarts(event) {
  var addTocart = event.target;
  var addtocartE1 = addTocart.parentElement;
  //console.log(addtocartE1)
  var imgname = addtocartE1.children[0].src;
  var titlename = addtocartE1.children[1].innerText;
  var price = addtocartE1.children[2].innerText;

  addTocartupdate(imgname, titlename, price);
}
var tbody = document.getElementsByTagName("tbody")[0];
function addTocartupdate(imgname, titlename, price) {
  var createElement = document.createElement("tr");
  var titleNames = document.getElementsByClassName("item-title");
  for (i = 0; i < titleNames.length; i++) {
    if (titleNames[i].innerText == titlename) {
      alert("This item already added to your cart");
      return;
    }
  }
  createElement.innerHTML = `<td><img src="${imgname}" class="item-img" alt=""></td>
    <td>
        <h4 class="item-title">${titlename}</h4>
    </td>
    <td>
        <h4 class="item-price">${price}</h4>
    </td>
    <td><input type="number" class="item-qty" value="0"></td>
    <td>
        <h4 class="sub-total">$ 0</h4>
    </td>
    <td><button class="btn btn-danger">Remove</button></td>`;
  tbody.append(createElement);
  for (i = 0; i < removebtn.length; i++) {
    removebtn[i].addEventListener("click", removebtns);
  }
  for (i = 0; i < qtyupdate.length; i++) {
    qtyupdate[i].addEventListener("click", updateqty);
  }
  grandtotal();
}
var qtyupdate = document.getElementsByClassName("item-qty");

function updateqty(event) {
  var updateE1 = event.target;
  var parentsE1 = updateE1.parentElement.parentElement;
  //console.log(parentsE1)
  var itemPrice = parentsE1.getElementsByClassName("item-price")[0];
  var itemprices = itemPrice.innerText.replace("$", " ");
  var subtotal = parentsE1.getElementsByClassName("sub-total")[0];
  subtotal.innerHTML = updateE1.value * itemprices;
  if (isNaN(updateE1.value) || updateE1.value <= 0) {
    updateE1.value = 1;
  }
  grandtotal();
}
function grandtotal() {
  var total = 0;
  var garnds = document.getElementsByClassName("grand-total")[0];
  var updates = document.getElementsByClassName("sub-total");
  for (i = 0; i < updates.length; i++) {
    var updatesAmount = parseInt(updates[i].innerText.replace("$", " "));
    total += updatesAmount;
  }
  garnds.innerHTML = "$ " + total;
}
