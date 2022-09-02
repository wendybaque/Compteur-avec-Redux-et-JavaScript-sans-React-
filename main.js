// ACTIONS
const incrementAction = {
    type: "INCREMENT"
  };
  
  const decrementAction = {
    type: "DECREMENT"
  };
  
  const addTenAction = {
    type:"ADDTEN"
  }

  const removeTenAction = {
    type:"REMOVETEN"
  }

  const resetAction = {
    type:"RESET"
  }


  // REDUCER
  let initialState = 0;
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
    case "ADDTEN" :
        return state + 10;
    case "REMOVETEN" :
        return state - 10;
    case "RESET" :
        return state - state;
      default:
        return state;
    }
  };
  
  // STORE
  const { createStore } = Redux;
  const store = createStore(counterReducer);
  
  const counterRender = document.getElementById("counter-render");
  const incrementButton = document.getElementById("button-increment");
  const decrementButton = document.getElementById("button-decrement");
  const addtenButton = document.getElementById("button-addten");
  const removetenButton = document.getElementById("button-removeten");
  const resetButton = document.getElementById("button-reset");

  // MAIN
  const render = () => {
    counterRender.innerText = store.getState();
  };
  
  render();
  store.subscribe(render);
  
  incrementButton.addEventListener("click", () =>
    store.dispatch(incrementAction)
  );
  decrementButton.addEventListener("click", () =>
    store.dispatch(decrementAction)
  );

  addtenButton.addEventListener("click", () =>
    store.dispatch(addTenAction)
  );
  
  removetenButton.addEventListener("click", () =>
    store.dispatch(removeTenAction)
  );

  resetButton.addEventListener("click", () =>
    store.dispatch(resetAction)
  );
  