var content = document.querySelector('#content');
var contentList = content.children;
var carousel = document.querySelector('#carousel');
var carouselWidth = carousel.offsetWidth;
var contentWidth = carouselWidth * contentList.length + 'px';
content.style.width = contentWidth;
var pagination = document.querySelector('#pagination');
var paginationList = pagination.children;

Array.prototype.forEach.call(contentList, function(elem){
  elem.style.width = carouselWidth + 'px';
});

Array.prototype.forEach.call(paginationList, function(elem, index){
  elem.addEventListener('click', function(e){
    carousel.scrollLeft = carouselWidth * index;
    resetActiveElement(paginationList);
    e.target.classList.add('active');
  })
});

var resetActiveElement = function(list){
  Array.prototype.forEach.call(list, function(elem, index){
    if(elem.classList.contains('active')){
      elem.classList.remove('active');
    }
  });
}
