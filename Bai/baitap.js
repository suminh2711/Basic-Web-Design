function sell() {
    id++;
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var price = frm.up.value;
    var dc = frm.dc.value;
    var sub = qty * price * (1 - dc / 100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>$" + price + "</td>";
    row += "<td>" + dc + "</td>";
    row += "<td>$" + sub + "</td>";
    row += "</tr>";
    document.getElementById("tbl").innerHTML += row;
}


// function sellProduct() {

//     let name = document.getElementById("productName").value;
//     let quantity = Number(document.getElementById("quantity").value);
//     let price = Number(document.getElementById("unitPrice").value);
//     let discount = Number(document.getElementById("discount").value);
//     let subtotal = quantity * price * (100 - discount) / 100;
//     let table = document.getElementById("productTable");
//     let row = table.insertRow();
//     row.innerHTML = `
//         <td>${id}</td>
//         <td>${name}</td>
//         <td>${quantity}</td>
//         <td>$${price}</td>
//         <td>${discount}</td>
//         <td>$${subtotal}</td>
//     `;

//     id++;
// }

// function cancelProduct() {

//     document.getElementById("productName").value = "";
//     document.getElementById("quantity").value = "";
//     document.getElementById("unitPrice").value = "";
//     document.getElementById("discount").value = "";

// }