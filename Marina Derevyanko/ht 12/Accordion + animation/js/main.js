// page init
function initPage() {
	initAnimation(500);

	var acc = document.getElementById('accordion');
	
	acc.addEventListener('click', function(e){
		if (e.target && e.target.nodeName == "P") {
			var container = e.target.parentNode.getElementsByClassName('list-container')[0];
			var item = e.target.parentNode.getElementsByClassName('dropdown')[0];
			var itemHeight = item.offsetHeight; 
			

			if (parseInt(container.style.height || 0) === 0) {
				var allLists = document.getElementsByClassName('list-container');
				for(var i = 0; i < allLists.length; i++) {
					closeList(allLists[i]);	
				}
				openList(container);
			} else {
				closeList(container);
			}

			function openList(list) {
				toggleList(list, itemHeight, 1);				
			};

			function closeList(list) {
				toggleList(list, 0, -1);				
			};

			function toggleList(list, targetHeight, delta) {
				if (list.offsetHeight !== targetHeight) {
					setTimeout(function(){
						list.style.height = list.offsetHeight + delta + 'px';
						toggleList(list, targetHeight, delta);
					}, 1)
				}
			}
			// if(item.style.display == 'block') {
			// 	item.style.display = 'none';
			// } else {
			// 	var allLists = document.getElementsByClassName('dropdown');
			// 	for(var i = 0; i < allLists.length; i++) {
			// 		allLists[i].style.display = 'none';
			// 	}
			// 	item.style.display = 'block';
			// }
		}
	});
}

		



//function for cross browser search by class
function byClass(classList, node) {
 if(document.getElementsByClassName) {
  return (node || document).getElementsByClassName(classList);
 }
 else {
  var node = node || document,
  list = node.getElementsByTagName('*'),
  length = list.length,
  classArray = classList.split(/\s+/),
  classes = classArray.length,
  result = [], i,j;
  for(i = 0; i < length; i++) {
   for(j = 0; j < classes; j++)  {
    if(list[i].className.search('\\b' + classArray[j] + '\\b') != -1) {
     result.push(list[i]);
     break;
    }
   }
  }
  return result;
 }
}

//animation function init
function initAnimation(newWidth){
	var container = document.getElementById('container');
	var element = byClass('box', container)[0];
	var btnStart = byClass('start', container)[0];
	var btnStop = byClass('stop', container)[0];
	var elementWidth = element.offsetWidth;
	var index;

	function startAnim() {
		if (elementWidth < newWidth){
			index = setTimeout(function() {
				elementWidth += 1;
				element.style.width = elementWidth + "px";
				startAnim();
			}, 10);

		}
	}

	btnStart.addEventListener('click', startAnim);

	btnStop.addEventListener('click', function(){
		clearTimeout(index);
	});
}


if (window.addEventListener)
	window.addEventListener("load", initPage);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
