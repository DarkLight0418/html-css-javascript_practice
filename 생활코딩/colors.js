var Body = {
    setColor: function(color) {
        $('body').css('color', color); 
        // document.querySelector('body').style.color = color;
    },   // 프로퍼티 구분 시 , 쓰기
    setBackgroundColor: function(color) {
        $('body').css('backgroundColor', color);
        // document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor: function(color) {
        $('a').css('color', color);
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //  alist[i].style.color = color;
        //  i = i + 1;
        // }
    }
}

function nightDayHandler(self) {

    var target = document.querySelector('body');
    if (self.value === 'night') {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';

        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'powderblue';
            i = i + 1;
        }

    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night'; 
        
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'blue';
            i = i + 1;
        }
    }
}