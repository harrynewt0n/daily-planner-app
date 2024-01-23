// Display time at top of application

$('#currentDay').text(dayjs().format('DD/MM/YYYY'));

console.log(dayjs().format('DD/MM/YYYY'));

// change class based on past, present, future

function updateHour () {
var currentHour = dayjs().hour()
$('.time-block').each(function() {
var rowTime = parseInt(
    $(this).attr('id').split('-')[1]
)
if (rowTime < currentHour) {
    $(this).addClass('past')
}
else if (currentHour === rowTime) {
    $(this).removeClass('past')
    $(this).addClass('present')
}
else {
    $(this).removeClass('past')
    $(this).removeClass('present')
    $(this).addClass('future')
}
})
} 
updateHour()

// Allow user to save input to local storage- localstorage.setitem


// Ensure that local storage remains on application text field- localstorage.getitem

