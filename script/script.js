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






// donate btn evenlistern for Noakhali
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
            alert("Unsufficient Balance")
            return
        }
        else{
            const totalBalanceNoakhali = InputBalanceNoakhali + donateBalanceNoakhali;
            const remainBalance = mainBalance - InputBalanceNoakhali;
            document.getElementById('donate-balance-noakhali').innerText = totalBalanceNoakhali;
            document.getElementById('total-balance').innerText = remainBalance;

            // Create Histore Element
            const createHistory = document.createElement('div')
            createHistory.className = "border w-11/12 mx-auto p-4 rounded-lg mb-4 flex flex-col gap-y-4"
            createHistory.innerHTML = `
                <h3 class="text-xl font-bold">${InputBalanceNoakhali} Taka is Donate for Flood at Noakhali, Bangladesh</h3>
                <p>Date: ${fullDate} </p>
            `
            showHistoryContainer.insertBefore(createHistory,showHistoryContainer.firstChild);
            alert(InputBalanceNoakhali + "Taka Is Donated")
        }
    }
})

// Donate btn Evenlistener for feni
document.getElementById('donate-btn-feni').addEventListener('click',function(){
        // Global Element for balance 
        const mainBalance = getInnerNumberValue('total-balance');
        const InputBalanceFeni = getValueInput('input-Feild-Feni');
        const donateBalanceFeni = getInnerNumberValue('donate-balance-feni');

    if(isNaN(InputBalanceFeni) || InputBalanceFeni < 1 || InputBalanceFeni === ""){
        alert("Invalid Input")
        return
    }
    else{
        if(InputBalanceFeni > mainBalance){
            alert("Unsufficient Balance")
            return
        }
        else{
            const totalBalanceFeni = InputBalanceFeni + donateBalanceFeni;
            const remainBalance = mainBalance - InputBalanceFeni;
            document.getElementById('donate-balance-feni').innerText = totalBalanceFeni;
            document.getElementById('total-balance').innerText = remainBalance;

            // Create Histore Element
            const createHistory = document.createElement('div')
            createHistory.className = "border w-11/12 mx-auto p-4 rounded-lg mb-4 flex flex-col gap-y-4"
            createHistory.innerHTML = `
                <h3 class="text-xl font-bold">${InputBalanceFeni} Taka is Donate for Flood Relief in Feni,Bangladesh</h3>
                <p>Date: ${fullDate} </p>
            `
            showHistoryContainer.insertBefore(createHistory,showHistoryContainer.firstChild);
            alert(InputBalanceFeni + "Taka Is Donated")
        }
    }


})

// Donate btn Evenlistener for aid-injured-btn
document.getElementById('aid-injured-btn').addEventListener('click',function(){
        // Global Element for balance 
        const mainBalance = getInnerNumberValue('total-balance');
        const InputBalanceAidInjured = getValueInput('input-Feild-aidInjured');
        const donateBalanceAidInjured = getInnerNumberValue('donate-balance-aidInjured');

    if(isNaN(InputBalanceAidInjured) || InputBalanceAidInjured < 1 || InputBalanceAidInjured === ""){
        alert("Invalid Input")
        return
    }
    else{
        if(InputBalanceAidInjured > mainBalance){
            alert("Unsufficient Balance")
            return
        }
        else{
            const totalBalanceAidInjured = InputBalanceAidInjured + donateBalanceAidInjured;
            const remainBalance = mainBalance - InputBalanceAidInjured;
            document.getElementById('donate-balance-aidInjured').innerText = totalBalanceAidInjured;
            document.getElementById('total-balance').innerText = remainBalance;

            // Create Histore Element
            const createHistory = document.createElement('div')
            createHistory.className = "border w-11/12 mx-auto p-4 rounded-lg mb-4 flex flex-col gap-y-4"
            createHistory.innerHTML = `
                <h3 class="text-xl font-bold">${InputBalanceAidInjured} Taka is Aid for Injured in the Quota Movement</h3>
                <p>Date: ${fullDate} </p>
            `
            showHistoryContainer.insertBefore(createHistory,showHistoryContainer.firstChild);
            alert(InputBalanceAidInjured + "Taka Is Donated")
        }
    }


})