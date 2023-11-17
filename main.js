/**
 * Quản lý tuyển sinh
 */
const btnResult = document.getElementById("btnResult");
btnResult.onclick = function () {
  const admissionScore = document.getElementById("admissionScore").value * 1;
  const score1 = document.getElementById("score1").value * 1;
  const score2 = document.getElementById("score2").value * 1;
  const score3 = document.getElementById("score3").value * 1;

  var selectTarget = document.getElementById("selectTarget").value * 1;
  var selectArea = document.getElementById("selectArea").value * 1;
  var totalScore = score1 + score2 + score3 + selectTarget + selectArea;
  var result = "";
  if (totalScore >= admissionScore) {
    result = "Bạn đã đậu.";
  } else {
    result = "Bạn đã rớt.";
  }
  const footerResultEx1 = document.getElementById("footerResultEx1");
  footerResultEx1.innerHTML = result + " Tổng điểm: " + totalScore;
};

/**
 * Tính tiền điện
 */

const btnCalculate = document.getElementById("btnCalculate");
btnCalculate.onclick = function () {
  const name = document.getElementById("name").value;
  const numberKw = document.getElementById("numberKw").value * 1;
  var electricityBill = 0;
  if (numberKw > 0) {
    if (numberKw <= 50) {
      electricityBill = numberKw * 500;
    } else if (numberKw <= 100) {
      electricityBill = 50 * 500 + (numberKw - 50) * 650;
    } else if (numberKw <= 200) {
      electricityBill = 50 * 500 + 50 * 650 + (numberKw - 100) * 850;
    } else if (numberKw <= 350) {
      electricityBill =
        50 * 500 + 50 * 650 + 100 * 850 + (numberKw - 200) * 1100;
    } else {
      electricityBill =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (numberKw - 350) * 1300;
    }
  }
  var money = electricityBill.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const footerResultEx2 = document.getElementById("footerResultEx2");
  footerResultEx2.innerHTML = "Họ tên: " + name + "; Tiền điện: " + money;
};

/**
 * Tính tiền thuế thu nhập cá nhân
 */
function formatNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateFormattedNumber() {
  const input = document.getElementById("annualTotalIncome");
  const formattedInput = document.getElementById("formattedAnnualTotalIncome");
  formattedInput.value = formatNumber(input.value);
}
const btnCalculateTax = document.getElementById("btnCalculateTax");
btnCalculateTax.onclick = function () {
  const namePerson = document.getElementById("namePerson").value;
  const annualTotalIncome =
    document.getElementById("annualTotalIncome").value * 1;
  const numberDependents =
    document.getElementById("numberDependents").value * 1;
  let tax = 0;
  if (annualTotalIncome < 12000000) {
    alert("Tổng thu nhập phải từ 12 triệu trở lên!");
    return;
  }
  if (annualTotalIncome <= 60000000) {
    tax =
      ((annualTotalIncome - 4000000 - numberDependents * 1600000) * 5) / 100;
  } else if (annualTotalIncome <= 120000000) {
    tax =
      ((annualTotalIncome - 4000000 - numberDependents * 1600000) * 10) / 100;
  } else if (annualTotalIncome <= 210000000) {
    tax =
      ((annualTotalIncome - 4000000 - numberDependents * 1600000) * 15) / 100;
  } else if (annualTotalIncome <= 384000000) {
    tax =
      ((annualTotalIncome - 4000000 - numberDependents * 1600000) * 20) / 100;
  } else if (annualTotalIncome <= 624000000) {
    tax =
      ((annualTotalIncome - 4000000 - numberDependents * 1600000) * 25) / 100;
  } else if (annualTotalIncome <= 960000000) {
    tax =
      ((annualTotalIncome - 4000000 - numberDependents * 1600000) * 30) / 100;
  } else {
    tax =
      ((annualTotalIncome - 4000000 - numberDependents * 1600000) * 35) / 100;
  }
  var money = tax.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const footerResultEx3 = document.getElementById("footerResultEx3");
  footerResultEx3.innerHTML =
    "Họ tên: " + namePerson + ". Tiền thuế thu nhập cá nhân: " + money;
};

/**
 * Tính tiền cáp
 */
function toggleNumberConnect(){
    var customerType = document.getElementById("selectCustomer").value;
    var numberConnect = document.getElementById("numberConnect");
    if (customerType === "home" || customerType === "none" ) {
      numberConnect.style.display = "none";
    } else {
      numberConnect.style.display = "block";
    }
}
const btnCalculateCab = document.getElementById("btnCalculateCab");
btnCalculateCab.onclick = function () {
  const customerID = document.getElementById("customerID").value;
  const premiumChannels = document.getElementById("premiumChannels").value * 1;
  const numberConnect = document.getElementById("numberConnect").value * 1;
  const selectCustomer = document.getElementById("selectCustomer").value;
  let total = 0;

  if (numberConnect <= 0) {
    alert("Vui lòng nhập số kết nối lớn hơn 0!");
    return;
  }

  if (selectCustomer === "home") {
    total = 4.5 + 20.5 + 7.5 * premiumChannels;
  } else if (selectCustomer === "company") {
    total = 15 + 75 + 50 * premiumChannels + (numberConnect > 10 ? (numberConnect - 10) * 5 : 0);
  }
  let money= total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const footerResultEx4 = document.getElementById("footerResultEx4");
  footerResultEx4.innerHTML="Mã khách hàng: " +customerID+ "; Tiền cáp: " +money;
};
