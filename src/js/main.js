import * as Utils from './modules/utils.js';
import * as DOM from './modules/const.js';
import { makeChart } from './modules/chart.js';

window.addEventListener("load", () => {
  if (DOM.OUTPUT_DATE != null)
    Utils.getStringDate(DOM.OUTPUT_DATE);
  if (DOM.NODE_EXTERIOR_TEMP != null || DOM.NODE_INTERIOR_TEMP != null)
    Utils.getTempJSON("../asset/data/temp.json", data => Utils.setTemp(DOM, data));
  if (DOM.EXTERIOR_MINI_CARD != null) {
    Utils.getTempJSON("../asset/data/temp.json", data => Utils.setTempExterior(DOM, data));
    makeChart(DOM.CANVAS_EXTERIOR)
  }
})