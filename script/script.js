// Call from home to blog
changeHtml('blog-btn','blog.html')


// Global Element Area
const donationButton = document.getElementById('donation-btn')
const historyButton = document.getElementById('history-btn')
const showCardContainer = document.getElementById('card-container')
const showHistoryContainer = document.getElementById('history-container')


// history btn evenListener
document.getElementById('history-btn').addEventListener('click',function(){
    showHistoryContainer.classList.remove('hidden')
    showCardContainer.classList.add('hidden')

    donationButton.classList.remove('bg-btnFieldColor', 'border-none')
    donationButton.classList.add('border')

    historyButton.classList.add('bg-btnFieldColor', 'border-none')
})

// donation btn evenListener
document.getElementById('donation-btn').addEventListener('click',function(){
    showCardContainer.classList.remove('hidden')
    showHistoryContainer.classList.add('hidden')

    historyButton.classList.remove('bg-btnFieldColor', 'border-none')
    historyButton.classList.add('border')

    donationButton.classList.add('bg-btnFieldColor', 'border-none')
})