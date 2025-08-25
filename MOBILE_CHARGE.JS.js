function NumberKey(event) 
{
  var code = event.which;
  if (code < 48 || code > 57) {
    event.preventDefault();
  }
}

function checkMobile() {
  var mobile = document.getElementById("mobile").value;
  var msg = document.getElementById("mobile_msg");

  if (mobile.length == 10) {
    msg.textContent = "✔ Valid Mobile Number";
    msg.style.color = "green";
  } else 
  {
    msg.textContent = "✘ Invalid Mobile Number";
    msg.style.color = "red";
    document.getElementById("result").style.display = "none";
    document.getElementById("expiry").style.display = "none";
    document.getElementById("plan").value = "";
  }
}

function recharge() {
  var mobile = document.getElementById("mobile").value;
  var plan = document.getElementById("plan").value;

  if (mobile.length !== 10) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  if (plan == "") 
{
    alert("Please select a recharge plan");
    return;
  }

  var current = new Date();
  var expiry = new Date();
  var days = 0;
  var amount = "";

  if (plan == "299") {
    days = 28;
    amount = "₹299";
  } else if (plan == "629") {
    days = 56;
    amount = "₹629";
  } else if (plan == "799") {
    days = 84;
    amount = "₹799";
  } else if (plan == "899") {
    days = 90;
    amount = "₹899";
  }
  
  today = new Date();
  var expiryDate = new Date(today);
  expiryDate.setDate(today.getDate() + days);
  document.getElementById("date").textContent ="Recharge Date: " + today.toLocaleDateString();
  document.getElementById("time").textContent ="Recharge Time: " + today.toLocaleTimeString();
  document.getElementById("amount").textContent = "Amount: " + amount;
  document.getElementById("validity").textContent ="Validity: " + days + " Days";

  document.getElementById("exp_date").textContent ="Expiry Date: " + expiryDate.toLocaleDateString();
  document.getElementById("exp_time").textContent ="Expiry Time: " + expiryDate.toLocaleTimeString();

  document.getElementById("result").style.display = "block";
  document.getElementById("expiry").style.display = "block";
}

function plan_change() {
  document.getElementById("result").style.display = "none";
  document.getElementById("expiry").style.display = "none";
}
