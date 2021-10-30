export function appendWarning(parent) {
  if (localStorage.getItem('EXTERIOR_TEMP') > 35) {
    let Warning = new alert('warning', "HotHotHot ! The temperature is really high ");
    Warning.appendAlert(parent)
  }
  if (localStorage.getItem('EXTERIOR_TEMP') < 0) {
    let Warning = new alert('warning', "Very low temperature! Cover yourself with 5 layers of clothing before going out");
    Warning.appendAlert(parent)
  }
}

class alert {
  template = document.querySelector('#templateAlert')
  type = "waring";
  title = "Alert";
  content = "Default alert content";
  imgsrc = document.querySelector('img');

  constructor(type, content) {
    this.type = type;
    this.content = content;
    this.selectCorrectImg(this.type);
    this.titleGenerator(this.type);
  }

  getFormatedDate () {
    const objDate = new Date();
    let dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(objDate);
    let monthOfYears = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(objDate);
    return dayOfWeek + ', ' + objDate.getDate() + ' ' + monthOfYears;
  }

  selectCorrectImg(type) {
    if (type = "info") {
      this.imgsrc = "asset/img/Info.webp";
    }
    if (type = "warning") {      
      this.imgsrc = "asset/img/Warning.webp";
    }
  }

  titleGenerator(type) {
    if (type = "info") {
      this.title = 'Information - ' + this.getFormatedDate()
    }
    if (type = "warning") {
      this.title = 'Warning - ' + this.getFormatedDate()
    }
  }

  appendAlert(parent) {
    let alert = this.template.cloneNode(true).content;
    alert.querySelector('h4').textContent = this.title;
    alert.querySelector('p').textContent = this.content;
    alert.querySelector('img').setAttribute('src', this.imgsrc);
    parent.appendChild(alert);
  }
}