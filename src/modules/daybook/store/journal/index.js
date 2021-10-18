import state from "./state";
import * as actions from "./actions";
import * as gettes from "./getters";
import * as mutations from "./mutations";

const myCustomModule = {
  nameSpaced: true,
  actions,
  gettes,
  mutations,
  state,
};

export default myCustomModule;
