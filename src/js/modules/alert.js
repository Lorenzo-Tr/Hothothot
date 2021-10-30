export function appendWarning(DOM, parent, data, type) {
  if (data.exterior.temp > 35) {
    let TemplateClone = DOM.cloneNode(true).content;
    let title = TemplateClone.querySelector(".alertTitle")
    let text = TemplateClone.querySelector(".alertContent");
    title.textContent = 'Alert - ' + getFormatedDate()
    text.textContent = "HotHotHot ! The temperature is really high "
    parent.appendChild(TemplateClone);
  }
}

function getFormatedDate () {
  const objDate = new Date();
  let dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(objDate);
  let monthOfYears = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(objDate);
  return dayOfWeek + ', ' + objDate.getDate() + ' ' + monthOfYears;
}