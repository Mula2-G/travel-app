class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header--button")
        this.menuContent = document.querySelector('.site-header')
        this.events()
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('site-header_menu-content')
    }
}

export default MobileMenu;