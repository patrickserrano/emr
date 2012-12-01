var checkMobile = function(){
  if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    $('#desktopHead').css('display', 'none');
    $('#mobileHead').css('display', 'inherit');
    $('#collapsePatient').removeClass('in');
  }
}
