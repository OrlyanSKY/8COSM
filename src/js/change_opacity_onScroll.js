const scrollNavbar = () => {
  const navBar = document.getElementById('header');

  if (document.documentElement.scrollTop > 50) {
    navBar.classList.add('add_header_bgc');
  } else {
    navBar.classList.remove('add_header_bgc');
  }
};

window.onscroll = () => {
  scrollNavbar();
};
