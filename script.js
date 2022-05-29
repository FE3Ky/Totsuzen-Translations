const dollar = {
    id:"6ZLPFMAYRN282",
    type:"USD",
    currency:"$",
    values: ['5,00','10,00','15,00','20,00','25,00'],
}

const euro = {
    id:"HY4PAF5W6XZ6Y",
    type:"EUR",
    currency:"€",
    values: ['4,00','8,00','12,00','16,00','20,00'],
}

const change_currency = (moeda) => {
    const buttonID = document.getElementsByName("hosted_button_id")[0];
    buttonID.setAttribute("value", moeda.id);
    const select = document.getElementsByName("os0")[0];
    const options = select.getElementsByTagName("option")
}