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

$('.saveBtn').on('click', function () {

    var scheduleHour = $(this).siblings('.hour').text();
    var userInput = $(this).siblings('textarea').val();

    console.log(scheduleHour + '- ' + userInput);

    localStorage.setItem(scheduleHour, userInput);

    window.alert('Your task has been created!')
})

// Ensure that local storage remains on application text field- localstorage.getitem

