"use strict";

const $ = selector => document.querySelector(selector);


//Adding event listeners
document.addEventListener("DOMContentLoaded", () => {

  $("#calculate").addEventListener("click", processEntries);
  $("#clear").addEventListener("click", clearEntries);

});


//Format currency
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

});

//function to process user input
function processEntries() {
  const subtotalInput = parseFloat($("#subtotal").value);
  const taxRateInput = parseFloat($("#tax_rate").value);


  //validation code
  let isValid = true;

  // Is the subtotal valid?
  if (isNaN(subtotalInput) || subtotalInput <= 0 || subtotalInput >= 10000) {
    alert("Subtotal must be > 0 and < 10000");
    isValid = false;
  }

  //Is the tax rate valid?
  if (isNaN(taxRateInput) || taxRateInput <= 0 || taxRateInput >= 12) {
    alert("Tax Rate must be > 0 and < 12");
    isValid = false;
  }

  if (isValid) {
    // Sales Tax Calculation
    const salesTax = (taxRateInput / 100) * subtotalInput;

    // Total Calculation
    const total = subtotalInput + salesTax;

    // Results Dispaly
    $("#sales_tax").value = formatter.format(salesTax);
    $("#total").value = formatter.format(total);

    //$("#subtotal").focus();
  }
}


//clear form for reuse
function clearEntries()
{
document.getElementById("subtotal").value = "";
document.getElementById("tax_rate").value="";
document.getElementById("sales_tax").value="";
document.getElementById("total").value = "";

document.getElementById("subtotal").focus();
}


//document.getElementById("clear").reset();
