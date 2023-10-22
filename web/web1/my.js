// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()



function change() {
    let selectChoice = document.getElementsByName("product-choice")[0].value;
    if (selectChoice == 1) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = "";
    }
    if (selectChoice == 2) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = '\
        <input type="radio" id="onecomp" name="someGroupName" required="">\n \
        <label for="onecomp">С сахаром</label>\n \
        <input type="radio" id="twocomp" name="someGroupName" required="">\n \
        <label for="twocomp">С корицей</label> \
        ';
    }
    else if (selectChoice == 3) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = '\
        <input type="checkbox" id="acryl">\n \
        <label for="acryl">С сахаром</label>\n \
        <input type="checkbox" id="base">\n \
        <label for="base">С сиропом</label>\n \
        <input type="checkbox" id="powder">\n \
        <label for="powder">С зефиром</label> \
        ';
    }
  }
  
  function getSum() {
    let selectChoice = document.getElementsByName("product-choice")[0].value;
    let sums = [90, 150, 200];
    let resultSum = sums[selectChoice - 1] + checkOptions(selectChoice);
  
    let amount = document.getElementById("amount-of-products").value;
    if (amount.match(/^[0-5]$/))
        resultSum *= amount;
    else
        alert("Error");
    let result = document.getElementById("result");
  
    result.innerHTML = resultSum;
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price + " рублей";
  }
  
  function checkOptions(choice) {
    if (choice == 2) {
        let checkbox1 = document.getElementById("onecomp");
        let checkbox2 = document.getElementById("twocomp");
  
        return (checkbox1.checked ? 10 : 0) || (checkbox2.checked ? 15 : 0);
    }
    else if (choice == 3) {
        let checkbox1 = document.getElementById("acryl");
        let checkbox2 = document.getElementById("base");
        let checkBox3 = document.getElementById("powder");
  
        return (checkbox1.checked ? 10 : 0) + (checkbox2.checked ? 15 : 0) + (checkBox3.checked ? 20 : 0);
    }
    else 
        return 0;
  }