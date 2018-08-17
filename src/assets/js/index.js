// rem适配
(function (designWidth) {
  var size = document.documentElement.clientWidth / (designWidth / 100)
  document.documentElement.style.fontSize = size + 'px'
  document.body.style.fontSize = '14px'
})(750);
