(function  () {
	// body...
	var doc = document, // кэширование объекта документа
		elem = doc.createElement("p"), // узел элемента
		// content = doc.createTextNode(" Динамический жлемент с помощью JS"), // текстовый узел
		wrappedP = doc.getElementById("wrapped");

	// вставка HTML кода
	elem.innerHTML = '<em>Emphasis element</em>';

	
	//elem.appendChild(content);

	elem.setAttribute('id', 'mrDynamic');


	// добавление
	//wrappedP.parentNode.appendChild(elem);
	
	// вставка перед элементом elem
	//wrappedP.parentNode.insertBefore(elem, wrappedP);
	
	// замена/вставка
	//wrappedP.parentNode.replaceChild(elem, wrappedP);

	//удаление элемента
	//wrappedP.parentNode.removeChild(wrappedP);

	console.log (elem);

})();