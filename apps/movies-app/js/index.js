$(function() {
    let debounceTimeout = null
    $(`#searchInput`).on('input', function() {
        clearTimeout(debounceTimeout)
        debounceTimeout = setTimeout(() => getMovie(this))      // το this λειτουργεί μόνο σε κανονική function
    })

    $('#showMore').on('click', function(e) {
        e.preventDefault()
        onShowMoreClicked()
    })
})

function getMovie(title) {
    if (!title) {
        return
    }

    onBeforeSend()
    fetchMovieFromApi(title)
}

function fetchMovieFromApi(title) {
    axios.get(`http://www.omdbapi.com/?t=${title}&apikey=23ab6cb0`)
          .then(response => { handleResults(response.data) })
          .catch(error => console.error('Error: ', error))
}

function onApiError() {
    hideComponent('#waiting')
    showComponent('#error')
}