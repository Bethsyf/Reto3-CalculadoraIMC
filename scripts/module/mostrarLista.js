export const mostrarLista = (data, container) => {
    container.innerHTML = "";
    data.forEach(element => {
        container.innerHTML += `<tr>${element.sex}<tr/>`
        container.insertCell(1) += `<tr>${element.edad}<tr/>`
        container.insertCell(1) += `<tr>${element.peso}<tr/>`
        container.insertCell(1) += `<tr>${element.altura}<tr/>`
        container.insertCell(1) += `<tr>${element.imc}<tr/>`
    });
}

// const mostrarLista = (registro, container) => {
    //     container.innerHTML = "";
    //     data.forEach(element => {
    //         pesoResult.innerHTML = `${.peso} Kg`;
    //         alturaResult.innerHTML = `${userInfo.altura} Mts`;
    //         edadResult.innerHTML = `${userInfo.edad} Años`;
    //         imcResult.innerHTML = imc.toFixed(2);
    //     });
    // }