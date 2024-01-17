// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from '../bootstrap-5.3.2/dist/js/bootstrap'

const AddModifyUserModal = document.getElementById('AddModifyUserModal')
if (AddModifyUserModal) {
    AddModifyUserModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = AddModifyUserModal.querySelector('.modal-title')

    modalTitle.textContent = `${recipient} Usuario`
  })
}
