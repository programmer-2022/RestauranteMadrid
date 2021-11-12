import Swal from 'sweetalert2'

export const MsgSucessful = (message, buttonConfirm = false, time = 1000) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: message,
        showConfirmButton: buttonConfirm,
        timer: time
    })
}