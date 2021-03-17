import showReservations from '../components/reservations';
import getReservations from '../helpers/data/reservationData';
import getMenuItems from '../menu items/menuData';
import showMenuItems from '../menu items/menu';
import getIngredients from '../ingredients/ingredientsData';
import showIngredients from '../ingredients/showIngredients';

const guestNavEvents = () => {
  // Events for Navbar, READ only

  // reservations view
  document.querySelector('#nav-reservations').addEventListener('click', () => {
    getReservations().then((reservations) => showReservations(reservations));
  });
  // menu view
  document.querySelector('#nav-menu').addEventListener('click', () => {
    getMenuItems().then((menuItemsArray) => showMenuItems(menuItemsArray));
  });

  // Click event for Ingredients
  document.querySelector('#nav-ingredients').addEventListener('click', (e) => {
    e.preventDefault();
    getIngredients().then((ingredients) => showIngredients(ingredients));
  });
};

export default guestNavEvents;