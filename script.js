const leftHalf = document.getElementById('left-half');
const rightHalf = document.getElementById('right-half');
const innerContent = document.getElementById('inner-content');
const invite = document.querySelector('.invite');

leftHalf.addEventListener('click', () => {
    invite.classList.toggle('open-left');
    checkIfBothOpen();
});

rightHalf.addEventListener('click', () => {
    invite.classList.toggle('open-right');
    checkIfBothOpen();
});

function checkIfBothOpen() {
    if (invite.classList.contains('open-left') && invite.classList.contains('open-right')) {
        invite.classList.add('show-content');
    } else {
        invite.classList.remove('show-content');
    }
}
