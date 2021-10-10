export function getStringDate(output) {
  const objDate = new Date();
  let dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(objDate);
  let monthOfYears = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(objDate);
  return (output).innerHTML = dayOfWeek + ', ' + objDate.getDate() + ' ' + monthOfYears;
}

export async function getTempJSON(path, callback) {
  return callback(await fetch(path).then(r => r.json()));
}

export function setTemp(DOM, data) {
  let exterior = DOM.NODE_EXTERIOR_TEMP.querySelectorAll("data")
  let interior = DOM.NODE_INTERIOR_TEMP.querySelectorAll("data")

  let exteriorTemp = exterior[0];
  let exteriorMaxTemp = exterior[1];
  let exteriorMinTemp = exterior[2];

  let interiorTemp = interior[0];
  let interiorMaxTemp = interior[1];
  let interiorMinTemp = interior[2];

  exteriorTemp.setAttribute("value", `${data.exterior.temp}`)
  exteriorMaxTemp.setAttribute("value", `${data.exterior.max}`)
  exteriorMinTemp.setAttribute("value", `${data.exterior.min}`)

  interiorTemp.setAttribute("value", `${data.interior.temp}`)
  interiorMaxTemp.setAttribute("value", `${data.interior.max}`)
  interiorMinTemp.setAttribute("value", `${data.interior.min}`)
}

export function setTempExterior(DOM, data) {
  let exterior = DOM.EXTERIOR_MINI_CARD.querySelectorAll("data")

  let exteriorTemp = exterior[0];
  let exteriorMaxTemp = exterior[1];
  let exteriorMinTemp = exterior[2];

  exteriorTemp.setAttribute("value", `${data.exterior.temp}`)
  exteriorMaxTemp.setAttribute("value", `${data.exterior.max}`)
  exteriorMinTemp.setAttribute("value", `${data.exterior.min}`)
}

export function setTempInterior(DOM, data) {
  let interior = DOM.INTERIOR_MINI_CARD.querySelectorAll("data")

  let interiorTemp = interior[0];
  let interiorMaxTemp = interior[1];
  let interiorMinTemp = interior[2];

  interiorTemp.setAttribute("value", `${data.interior.temp}`)
  interiorMaxTemp.setAttribute("value", `${data.interior.max}`)
  interiorMinTemp.setAttribute("value", `${data.interior.min}`)
}