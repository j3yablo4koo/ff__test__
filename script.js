window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
  console.log(scrollDistance);

  let scrl = window.scrollY
  console.log(scrl);


  if (scrollDistance >=0) {
    let onev = document.getElementById('onev');
    onev.classList.add("onev");
  };
  if (scrollDistance >570) {
    let onev = document.getElementById('onev');
    onev.classList.remove("onev");
    onev.classList.add("aclr");
  };
  if (scrl >=0) {
    let onev = document.getElementById('onev');
    onev.classList.add("aclr");
  };

	if (scrollDistance >570) {
		let twov = document.getElementById('twov');
		twov.classList.add("onev");
}
if (scrollDistance <570) {
	let twov = document.getElementById('twov');
	twov.classList.remove("onev");
}


  if (scrollDistance >=300) {
    let menujs = document.getElementById('menujs');
    menujs.classList.add("menujs");
  };
  if (scrollDistance >=300) {
    let bgmenujs = document.getElementById('bgmenujs');
    bgmenujs.classList.add("menujsbg");
    bgmenujs.classList.add("menujs");
  };
  if (scrollDistance >=300) {
    let addgl = document.getElementById('addgl');
    addgl.classList.add("addgl");
  };
  if (scrollDistance >=300) {
    let addtoptxt = document.getElementById('addtoptxt');
    addtoptxt.classList.add("addtoptxt");
  };

});
