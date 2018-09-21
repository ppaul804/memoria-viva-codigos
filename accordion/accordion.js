$(document).ready(function () {
    $('.toggle').click(function (e) {
        e.preventDefault();
    
        var $this = $(this);
    
        if ($this.next().hasClass('active')) {
            $this.next().removeClass('active');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('div .inner').removeClass('active');
            $this.parent().parent().find('div .inner').slideUp(350);
            $this.next().toggleClass('active');
            $this.next().slideToggle(350);
        }
    });

});