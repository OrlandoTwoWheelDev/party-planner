console.log(`I have brought Peace, Freedom, Justice, and Security to My New Empire`)

const state = {
  EventList: [],
  bookingForm: []
}

//grabbing the Events API
const getEventPlans = async () => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-FTB-ET-WEB-FT/events`);
  // console.log(response)

  const jsonObject = await response.json();
  console.log(`The Object`, jsonObject);

  const events = jsonObject.data;
  console.log(`The Events`, events)

  state.EventList = events

  renderEvents();


}

const renderEvents = () => {
  const ol = document.querySelector(`ol`)
  // console.log(ol)

  ol.innerHTML = ``;

  state.EventList.forEach((singleEvent) => {

    const li = document.createElement(`li`)
    // console.log(li)

    li.innerHTML = `<p>${singleEvent.name}</p> <p>${singleEvent.date}</p> <p>${singleEvent.location}</p> <p>${singleEvent.description}</p>`
    // console.log(li)
    ol.append(li)

  })
}
getEventPlans();



  const form = document.querySelector(`form`)

  form.addEventListener(`Book Now`, (event) => {
    event.preventDefault();

    const input = document.querySelectorAll(`input`);
    const inputEvent = input.value;

    state.bookingForm.push(inputEvent);
    

    renderBookingForm();
  });

  const renderBookingForm = () => {
    //grab the events booked in the form
    const bookingFormInput = document.querySelectorAll(`#Book-Now`)

    //erase what was in the form
    bookingFormInput.innerHTML = ``;

    state.bookingForm.forEach((newEvent) => {
      
      const newLi = document.createElement(`li`)
      
      newLi.innerHTML = `<p>${newEvent.location}</p> <p>${newEvent.Event-Name}</p>`

      bookingFormInput.append(newLi)
    })
    

  }


renderBookingForm();