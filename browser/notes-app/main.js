const daysGR = [ 'Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο' ]
const monthsGR = [ 'Ιανουαρίου', 'Φεβρουαρίιου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου' ]

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function() {

    this.setInterval(printGrDate, 1000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
        onInsertHandler({key: count + 1, note: document.querySelector('#inputNote').ariaValueMax.trim(), softDeleted: false})
    })

    this.document.querySelector('#inputNote').addEventListener('keyup', function() {
        if (e.key === 'Enter') {
            onInsertHandler({key: count + 1, note: e.target.value.trim(), softDeleted: false})
        }
    
    })
})