alert('Please enter at least 7 peoples names');

var inputName = $('#inputName');
var btn = $('#btn');

var color = ['00','33','66','99','cc','ff'];

var rand = function() {
  return Math.floor(Math.random()*6);
};
var randomColor = function() {
  var r = color[rand()];
  var g = color[rand()];
  var b = color[rand()];
  return "#"+r+g+b;
};

btn.click(function() {
  var li = document.createElement("li");
  if (inputName.val() === '') {
    alert("pleas input your name")
  }else if(inputName.val()) {
    li.innerHTML = inputName.val();
    $('#ul').append(li);
    $('#ul li').each(function() {
      $(this).css('color',randomColor());
    });
    if (!($('#ul li').length == 7 || $('#ul li').length > 7)) {
      alert('Please enter at least 7 peoples names')
    }else {
      $(function () {
        $('#ul').sortable()
      });
    };
  };
  });
