import * as Utils from './modules/utils.js';
import * as DOM from './modules/const.js';
import { makeChart } from './modules/chart.js';
import * as Alert from './modules/alert.js';

window.addEventListener("load", () => {
  if (DOM.OUTPUT_DATE != null)
    Utils.getStringDate(DOM.OUTPUT_DATE);
  if (DOM.NODE_EXTERIOR_TEMP != null || DOM.NODE_INTERIOR_TEMP != null || DOM.TEMPLATE_WARNING != null) {
    Utils.getTempJSON("../asset/data/temp.json", data => {
      console.log(data.length);
      data = Utils.getRandomData(data);
      Utils.setTemp(DOM, data);
      Alert.appendWarning(DOM.TEMPLATE_WARNING, DOM.LASTALERT_LIST, data);
      console.log()
      if (DOM.LASTALERT_LIST.childElementCount != 0) {
        DOM.ALERT_PLACEHOLDER.classList.toggle("hidden");
      }
    });
  }  
  if (DOM.EXTERIOR_MINI_CARD != null) {
    Utils.getTempJSON("../asset/data/temp.json", data => Utils.setTempExterior(DOM, data));
    makeChart(DOM.CANVAS_EXTERIOR)
  }
  if (DOM.INTERIOR_MINI_CARD != null) {
    Utils.getTempJSON("../asset/data/temp.json", data => Utils.setTempExterior(DOM, data));
    makeChart(DOM.CANVAS_INTERIOR)
  }
  if (DOM.TEMPLATE_INTERIOR != null) {
    let data = [
      { '14:00': "20" },
      { '13:00': "22" },
      { '12:00': "20" },
      { '11:00': "15" },
      { '10:00': "12" },
      { '09:00': "9" },
    ]
    Utils.showContent(DOM.TEMPLATE_INTERIOR, DOM.HISTORY, data)
  }
  if (DOM.TEMPLATE_EXTERIOR != null) {
    let data = [
      { '14:00': "20" },
      { '13:00': "22" },
      { '12:00': "20" },
      { '11:00': "15" },
      { '10:00': "12" },
      { '09:00': "9" },
    ]
    Utils.showContent(DOM.TEMPLATE_EXTERIOR, DOM.HISTORY, data)
  }
})

