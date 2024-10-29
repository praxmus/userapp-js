/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    const URL = 'https://api.breakingbadquotes.xyz/v1/quotes';

    const response = await fetch(URL);
    const data = await response.json();

    //console.log(data);
    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;

        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        fetchQuote().then((data) => renderQuote(data));
    })

    fetchQuote().then((data) => renderQuote(data));
}