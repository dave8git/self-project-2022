import { select, settings, templates, classNames } from './../settings.js';
import utils from '../utils.js';


export class Booking {
  constructor() {
    const thisBooking = this;
    thisBooking.render();
  }
  
 
  render() {
    const thisBooking = this;
    const generatedHTML = templates.bookingSite();
    thisBooking.element = utils.createDOMFromHTML(generatedHTML);
    const bookingContainer = document.querySelector(select.containerOf.booking);
    bookingContainer.appendChild(thisBooking.element);  
  }
}

export default Booking;