const dollar = {
  id: "6ZLPFMAYRN282",
  type: "USD",
  currency: "$",
  values: ["5,00", "10,00", "15,00", "20,00", "25,00"],
};

const euro = {
  id: "HY4PAF5W6XZ6Y",
  type: "EUR",
  currency: "€",
  values: ["4,00", "8,00", "12,00", "16,00", "20,00"],
};

const change_currency = (moeda) => {
  const buttonID = document.getElementsByName("hosted_button_id")[0];
  buttonID.setAttribute("value", moeda.id);
  const select = document.getElementsByName("os0")[0];
  const options = select.getElementsByTagName("option");
  for (var i = 0; i < options.length; i++) {
    options[
      i
    ].textContent = `${moeda.currency}${moeda.values[i]} ${moeda.type}`;
  }
};

const select_moeda = () => {
  const select = document.getElementById("os2").value;
  change_currency(select == "dollar" ? dollar : euro);
};

change_currency(dollar);
