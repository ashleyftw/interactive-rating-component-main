const ratings = document.querySelector('.rating-btn button');
const ratingCard = document.querySelector('.rating-card');
const resultsCard = document.querySelector('.results-card');
const rates = document.querySelectorAll('.ratings-btn');
const rating = document.querySelector('.rating');

ratings.addEventListener('click', () => {
    resultsCard.classList.remove('hidden');
    ratingCard.classList.add('hidden')
 })
 
 rates.forEach((rate) => {
    rate. addEventListener('click', ()=> {
        const rateNum = rate.innerHTML;
        rating.innerText = rateNum;
     })
 })