const myForm = event => {
    event.preventDefault()
    const formState = []
    let name = document.getElementById('name')
    let lastname = document.getElementById('lastname')
    let edad = document.getElementById('edad')
    let email = document.getElementById('email')
    let checkbox = document.getElementById('checkbox')


    !name.value ? name.classList.add('error') :
    formState.push({ element: 'name', value: name.value }) && name.classList.remove('error')

    !lastname.value ? lastname.classList.add('error') :
    formState.push({element: 'lastname', value: lastname.value }) && lastname.classList.remove('error')

    !edad.value ? edad.classList.add('error') :
    formState.push({element: 'edad', value: edad.value }) && edad.classList.remove('error')

    !email.value ? email.classList.add('error') :
    formState.push ({element: 'email', value: email.value}) && email.classList.remove('error')

    if (document.getElementById('checkbox').checked)
      {} else {alert ('Acepta terminos y condiciones')}

   
   formState.length === 4 && confirm ("TUS DATOS SERAN ENVIADOS (TOCA ACEPTAR)")
}

