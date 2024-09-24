// the function locate html file.
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = 'blog.html'
})

// history btn evenListener
document.getElementById('history-btn').addEventListener('click',function(){
    showHistoryContainer.classList.remove('hidden');
    showCardContainer.classList.add('hidden');

    donationButton.classList.remove('bg-btnFieldColor', 'border-none');
    donationButton.classList.add('border');

    historyButton.classList.add('bg-btnFieldColor', 'border-none');
})

// donation btn evenListener
document.getElementById('donation-btn').addEventListener('click',function(){
    showCardContainer.classList.remove('hidden');
    showHistoryContainer.classList.add('hidden');

    historyButton.classList.remove('bg-btnFieldColor', 'border-none');
    historyButton.classList.add('border');

    donationButton.classList.add('bg-btnFieldColor', 'border-none');
})

// date time create
const fullDate = Date().toLocaleString('en-US', {
    timeZone: 'Bangladesh/Dhaka',
    hour12: false,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
});

// Global Element Area
const donationButton = document.getElementById('donation-btn');
const historyButton = document.getElementById('history-btn');
const showCardContainer = document.getElementById('card-container');
const showHistoryContainer = document.getElementById('history-container');






// donate btn evenlister
document.getElementById('donateBtnNoakhali').addEventListener('click',function(){
    // Global Element for balance 
        const mainBalance = getInnerNumberValue('total-balance');
        const InputBalanceNoakhali = getValueInput('input-Feild-Noakhali');
        const donateBalanceNoakhali = getInnerNumberValue('donate-balance-noakhali');

    if(isNaN(InputBalanceNoakhali) || InputBalanceNoakhali < 1 || InputBalanceNoakhali === ""){
        alert("Invalid Input")
        return
    }
    else{
        if(InputBalanceNoakhali > mainBalance){
            alert("Unsufficent Balance")
            return
        }
        else{
            const totalBalanceNoakhali = InputBalanceNoakhali + donateBalanceNoakhali;
            const remainBalance = mainBalance - InputBalanceNoakhali;
            document.getElementById('donate-balance-noakhali').innerText = totalBalanceNoakhali;
            document.getElementById('total-balance').innerText = remainBalance;
        
            const createHistory = document.createElement('div')
            createHistory.className = "border w-11/12 mx-auto p-4 rounded-lg mb-4 flex flex-col gap-y-4"
            createHistory.innerHTML = `
                <h3 class="text-xl font-bold">${InputBalanceNoakhali} Taka is Donate for Flood at Noakhali, Bangladesh</h3>
                <p>Date: ${fullDate} </p>
            `
            showHistoryContainer.insertBefore(createHistory,showHistoryContainer.firstChild);
        }
    }
})
