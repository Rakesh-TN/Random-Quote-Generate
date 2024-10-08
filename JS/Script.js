const settings = {
	async: true,
	crossDomain: true,
	url: 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en',
	method: 'GET',
	headers: {
		'x-rapidapi-key': '47575aa3a7msh03e601c2cfe9b6ap15bb7ajsn252842ea00d5',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
    const quoteText = response.content;
    const authorText = response.originator.name || "Unknown";
    $('#quote').text(quoteText);
    $('#author').text('- ' + authorText);

    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quoteText + '" - ' + authorText)}`;
    $('#tweet-quote').attr('href', tweetUrl);
    $('#tweet-quote').show(); 
})
.fail(function () {
    $('#quote').text('Failed to fetch quote. Try again!');
    $('#author').text('');
    $('#tweet-quote').hide(); 
});

$('#get-quote').on('click', function () {
getRandomQuote(); 
});

getRandomQuote();