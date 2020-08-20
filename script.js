            /////  HW#10 Events  /////

// Keys: 'R'(Rooster), 'M'(Moo), 'C'(Clocks Cuckoo) //

const list = {
  77: new Audio('audio/cow_moo.mp3'),
  67: new Audio('audio/cuckoo.mp3'),
  82: new Audio('audio/rooster.mp3')
};

// Type
document.onkeydown = function(e) {
    let soundId = list[e.keyCode];
    if (soundId) list[e.keyCode].play();
    else alert('Key not mapped :  type "R", "C" or "M"');
};

// Click
const keys = document.getElementsByClassName('key');

[...keys].forEach(key => {
  key.addEventListener('click', function(e) {
    let targetId = e.target.id;
    if (targetId) list[e.target.id].play();
    })
})
