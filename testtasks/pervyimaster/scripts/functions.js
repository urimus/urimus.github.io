function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function processAdd(id) {
	
	searchPatt=getParameterByName("patt");
	if (!searchPatt) searchPatt="";
	

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			window.location.href='index.php?patt='+encodeURIComponent(searchPatt);
		}
	};
	xhr.open("GET","updateCart.php?action=add&id="+id+"&q="+document.getElementById("quantity"+id).value,true);
	xhr.send();

}


function processLoad() {
	
	document.getElementById("searchPatt").focus();
	searchPatt=getParameterByName("patt");
	if (searchPatt) document.getElementById("searchPatt").value=searchPatt;


}



function processSearch() {
	
	searchPatt=document.getElementById("searchPatt").value;
	if (!searchPatt) searchPatt="";
	
	window.location.href='index.php?patt='+encodeURIComponent(searchPatt);

}


function processRemove(id) {
	
	searchPatt=getParameterByName("patt");
	if (!searchPatt) searchPatt="";
	
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			window.location.href='index.php?patt='+encodeURIComponent(searchPatt);
		}
	};
	xhr.open("GET","updateCart.php?action=remove&id="+id,true);
	xhr.send();
	

}

function processEmpty(id) {
	
	searchPatt=getParameterByName("patt");
	if (!searchPatt) searchPatt="";
	
	if (!searchPatt) searchPatt="";
	
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			window.location.href='index.php?patt='+encodeURIComponent(searchPatt);
		}
	};
	xhr.open("GET","updateCart.php?action=empty",true);
	xhr.send();
	

}


function  addTableRow(tableSM, menu, type) {

	var row = tableSM.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1 .setAttribute('style', 'padding:0px;');
	var divSM=document.createElement("div");
	divSM.setAttribute('id', 'menu_'+menu.id);
	divSM.align = "left";
	divSM.setAttribute('onMouseOver', "this.className='menu_selected';");
	divSM.setAttribute('onMouseOut', "this.className='menu_not_selected_blue';");
	divSM.setAttribute('onClick', "window.location.href='index.php?"+type+"_id="+menu.id+"'");

	divSM.innerHTML = menu.name;
	divSM.style.display = "inline-block";
	divSM.setAttribute('class', 'menu_not_selected_blue');
	divSM.setAttribute('style', 'cursor:default;  border-spacing: 0px;');

	cell1.appendChild(divSM);

	return tableSM;
}

function  showSubMenu(ele, arr, type) {


	ele.setAttribute('class', 'menu_selected');
	hideSubMenu(ele);

   	var tableSM=document.createElement("table");
	tableSM.setAttribute('id', "table1");
	tableSM.dataset.id=ele.id;

	var rect = ele.getBoundingClientRect();
    top_s=document.documentElement.scrollTop || document.body.scrollTop;
    top_s=(parseFloat(rect.top)+top_s+23.0);
    left_s=(parseFloat(rect.left)+0.0);

     tableSM.setAttribute('style', 'border: 1px #ff8a00 solid; border-spacing: 0px; position: absolute; top: '+top_s+'px; left: '+left_s+'px;');


	c=0;
	prevId="";
	for (var i = 0; i<arr.length; i++) {
		tableSM=addTableRow(tableSM, arr[i], type);
		c++;
	}
    document.body.appendChild(tableSM);

}


function  hideSubMenu(ele) {

	table1=document.getElementById("table1");

	if (table1) {
		table1.style.display = "none";
		document.body.removeChild(table1);
	}

}

