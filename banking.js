let totalBalance = 0;
let totalDeposit = 0;
let totalWithdraw = 0;

// Get elements by ID
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

const depositDisplay = document.getElementById('total-deposit');
const withdrawDisplay = document.getElementById('total-withdraw');
const balanceDisplay = document.getElementById('total-balance');

function updateDisplay() {
    depositDisplay.textContent = totalDeposit.toFixed(2); //toFixed(2) formats numbers to 2 decimal places (like 50.00)
    withdrawDisplay.textContent = totalWithdraw.toFixed(2);
    balanceDisplay.textContent = totalBalance.toFixed(2);
}

// Button: Deposit
depositBtn.addEventListener('click', () => {
    const amount = parseFloat(depositInput.value); // parseFloat converts string into a decimal number ("50.25" → 50.25)
    
    if (!isNaN(amount) && amount > 0 && amount <= 50000) {
        totalDeposit += amount; // add amount to both totalDeposit and totalBalance
        totalBalance += amount;
        updateDisplay(); // update display
        depositInput.value = ''; // clear input box 
    } else if (amount > 50000) {
        alert("Deposit exceeds $50,000");
    } else {
        alert("Please enter a valid deposit amount.")
    }    
});

// Button: Withdraw
withdrawBtn.addEventListener('click', () => {
    const amount = parseFloat(withdrawInput.value);
    if (!isNaN(amount) && amount > 0) {
        if (amount > totalBalance) {
            alert('Insufficient balance.');
        } else if (totalBalance - amount < 300) {
            const confirmLow = confirm("This withdrawal will leave your balance under $300. Proceed?");
            if (!confirmLow) return; 
        }
        totalWithdraw += amount;
        totalBalance -= amount;
        updateDisplay();
        withdrawInput.value = '';
    
    } else {
        alert('Please enter a valid withdrawal amount.');
    }
});


// Prompt start bank app
function startBankApp() {
    let running = true;
    while (running) {
      let options = prompt(
        "Choose an action:\n" +
            "D - Deposit\n" +
            "W - Withdraw\n" +
            "B - View Balance\n" +
            "Q - Quit"
        );
      if (!options) continue;

      options = options.toUpperCase();

      switch (options) {
        case 'D':
          const depAmount = parseFloat(prompt('Enter amount to deposit:'));
          if (!isNaN(depAmount) && depAmount > 0 && depAmount <= 50000) {
            totalDeposit += depAmount;
            totalBalance += depAmount;
            
            alert(`Your deposited $${depAmount.toFixed(2)}`);
          } else if (depAmount > 50000) {
            alert("Your deposit exceeds $50,000 limit.");
          } else {
            alert("Invalid deposit amount.");
          }
          break;
  
        case 'W':
          let withAmount = parseFloat(prompt('Enter amount to withdraw:'));
          if (!isNaN(withAmount) && withAmount > 0) {
            if (withAmount > totalBalance) {
                alert("Insufficient balnce.");
            } else if (totalBalance - withAmount < 300) {
                const confirmLow = confirm("This will leave less than $300. Proceed?");
                if (!confirmLow) break;
            }
              totalWithdraw += withAmount;
              totalBalance -= withAmount;
            
              alert(`Your withdraw $${withAmount.toFixed(2)}`);
            } else {
              alert("Invalid withdrawl amount.");
            }
            break;
  
        case 'B':
          alert(`Your current balance is $${totalBalance.toFixed(2)}`);
          break;

        case "Q":
          alert("Thank you for banking with us!");
          running = false;
          break;
  
        default:
          alert("Invalid option. Please enter D, W, B, or Q.");
          break;
      }
    }
  }
  // start when page loads
window.onload = function () {
    updateDisplay();
    startBankApp();
};

  





