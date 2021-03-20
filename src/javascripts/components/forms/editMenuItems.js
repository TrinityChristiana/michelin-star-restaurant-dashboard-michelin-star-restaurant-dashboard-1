import selectIngredients from '../menu/selectIngredient';

const editMenuItemForm = (menuObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id="edit-menu-form" class="mb-4">
  <div class="form-group">
    <label for="itemImage">Menu Item Image</label>
    <input type="url" class="form-control" id="itemImage" placeholder="Update Image" value="${menuObject.image}" required>
  </div>
  <div class="form-group">
    <label for="itemTitle">Menu Item Title</label>
    <input type="text" class="form-control" id="itemTitle" aria-describedby="itemTitle" placeholder="Update Title" value="${menuObject.title}" required>
  </div>
  <div class="form-group">
    <label for="itemDescription">Menu Item Description</label>
    <input type="text" class="form-control" id="itemDescription" aria-describedby="itemDescription" placeholder="Update Description" value="${menuObject.description}" required>
  </div>
  <div class="form-group">
    <label for="itemPrice">Menu Item Price</label>
    <input type="text" class="form-control" id="itemPrice" aria-describedby="itemPrice" placeholder="Update Price" value="${menuObject.price}" required>
  </div>
  <div class="form-group" id="select-ingredients">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="available" value="${menuObject.available && 'checked'}">
    <label class="form-check-label" for="available">Availabe?</label>
  </div>
  <button type="submit" data-toggle="modal" data-target="#formModal" id="update-menu-item--${menuObject.firebaseKey}" class="btn btn-primary">Update Menu Item</button>
</form>`;

  selectIngredients(menuObject);
};

export default editMenuItemForm;
