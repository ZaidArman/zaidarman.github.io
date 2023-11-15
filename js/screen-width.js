var eventFired = 0;

if ($(window).width() < 960) {
    alert('The screensize is lower than required screensize. Try desktop mode with bigger screensize for perfect view of the table.');

}

$(window).on('resize', function() {
    if (!eventFired) {
        if ($(window).width() < 1183) {
            alert('The screensize is lower than required screensize. Try desktop mode with bigger screensize for perfect view of the table.');
        } 
    }
});