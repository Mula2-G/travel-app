import '../styles/style.css'
import MobilMenu from './modules/mobileMenu'

let mobileMenu = new MobilMenu();

//accept the hot updates if it makes sense to accept them
if (module.hot) {
    module.hot.accept()
}
