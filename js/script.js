/* Helper function */
function openInNewTab(fileURL) {
    window.open(fileURL, '_blank').focus();
}

function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[70px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }