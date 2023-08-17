let myImage = document.querySelector('img');

myImage.onclick = function() {
	let imgSrc = myImage.getAttribute('src');
	if(imgSrc == 'first.png'){
		myImage.setAttribute('src','first_1.png');
	}else{
		myImage.setAttribute('src','first.png');
	}
}