///////LOGOUT
export const useLogOut = async (
  _userSetter: React.Dispatch<React.SetStateAction<User | null>>,
  _modalCloser: () => void,
  _navigator: void | Promise<void>,
  _endPoint: string = "users/logout",
  _method: string = "GET",
  _loggable: boolean = false
) => {
  //<MOVE TO A DEDICATED FILE OF ACTIONS

  try {
    const _response: any = await FetchData({
      _endPoint: _endPoint,
      _method: "GET",
    });
    const _resData = await _response.json();
    if (_loggable) console.log("from log out", _resData);

    if (_resData.status === "success") {
      _userSetter(_userDefault); //< modify to local storge
      _modalCloser; //> closes de modal

      // useLocalUser({ _action: "remove", _storageKey: "user" });
      showAlert("success", "Succesflly Logged Out!");

      logActions({
        _action: "logout",
        _direct: () => _navigator,
      });
    }
  } catch (err) {
    showAlert("error", err);
    if (_loggable) console.log(err);
  }
};

import FetchData from "../../requests/http";
import { useUserContext } from "../../store/UserContext";
import { _userDefault, User } from "../../utility/data/data";
import { logActions } from "../functions/userLogActions";
import { useLocalUser } from "./useLocalUser"; //@ts-ignore
import { showAlert } from "../../utility/imports.js";
import { useNavigate } from "react-router";
