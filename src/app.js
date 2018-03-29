const init = () => {
  // const greeting = '<h1>Hello World</h1>';
  // const root = document.querySelector('#root')
  //
  // root.innerHTML = greeting
  //
  // console.log(greeting);
}

const openSideMenu = () => {
  document.getElementById('side-menu').style.width = '250px'
}

const closeSideMenu = () => {
  document.getElementById('side-menu').style.width = '0'
}

document.addEventListener('DOMContentLoaded', init)
