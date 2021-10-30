export function getStringDate(output) {
  const objDate = new Date();
  let dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(objDate);
  let monthOfYears = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(objDate);
  return (output).innerHTML = dayOfWeek + ', ' + objDate.getDate() + ' ' + monthOfYears;
}

export async function getTempJSON(path, callback) {
  return callback(await fetch(path).then(r => r.json()));
}

export function setTemp(node, option = "all") {
  if (option === "all") {
    node.exterior = node.exterior.querySelectorAll("data")
    node.interior = node.interior.querySelectorAll("data")
  } else {
    node = {
      "interior": node.querySelectorAll("data"),
      "exterior": node.querySelectorAll("data"),
    }
  }

  if (option === "all" || option === "exterior") {
    var domExteriorTemp = node.exterior[0];
    var domExteriorMaxTemp = node.exterior[1];
    var domExteriorMinTemp = node.exterior[2];

    domExteriorTemp.setAttribute("value", `${localStorage.getItem('EXTERIOR_TEMP')}`)
    domExteriorMaxTemp.setAttribute("value", `${localStorage.getItem('EXTERIOR_MAX')}`)
    domExteriorMinTemp.setAttribute("value", `${localStorage.getItem('EXTERIOR_MIN')}`)
  }

  if (option === "all" || option === "interior") {
    var domInteriorTemp = node.interior[0];
    var domInteriorMaxTemp = node.interior[1];
    var domInteriorMinTemp = node.interior[2];

    domInteriorTemp.setAttribute("value", `${localStorage.getItem('INTERIOR_TEMP')}`)
    domInteriorMaxTemp.setAttribute("value", `${localStorage.getItem('INTERIOR_MAX')}`)
    domInteriorMinTemp.setAttribute("value", `${localStorage.getItem('INTERIOR_MIN')}`)
  }
}

export function showContent(DOM, parent, data) {
  console.log(data)
  data.forEach(element => {
    let clone = DOM.cloneNode(true);
    let hours = clone.content.querySelector(".hours");
    let temp = clone.content.querySelector(".historyTemp");
    hours.setAttribute('value', Object.keys(element))
    temp.setAttribute('value', Object.values(element))
    parent.appendChild(clone.content);
  });
  
}

export function mixColor(color1, color2, weight) {
  var w1 = weight;
  var w2 = 1 - w1;
  var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2)];
  return rgb;
}

// Get random index
export function getRandomData(data) {
  var size = 0,
  key;
  for (key in data) {
    if (data.hasOwnProperty(key)) size++;
  }
  let i = Math.floor(Math.random() * size);
  return data[i];
}