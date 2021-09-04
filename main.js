const myForm = event => {
    event.preventDefault()
    const formState = []
    let name = document.getElementById('name')
    let lastname = document.getElementById('lastname')
    let email = document.getElementById('email')


    !name.value ? name.classList.add('error') :
    formState.push({ element: 'name', value: name.value }) && name.classList.remove('error')

    !lastname.value ? lastname.classList.add('error') :
    formState.push({element: 'lastname', value: lastname.value }) && lastname.classList.remove('error')

    !email.value ? email.classList.add('error') :
    formState.push ({element: 'email', value: email.value}) && email.classList.remove('error')

    const validacion = document.getElementById('FormValues')

    formState.length === 3 && confirm ("TUS DATOS SERAN ENVIADOS (TOCA ACEPTAR)") && (validacion.innerHTML = JSON.stringify(formState))
}

