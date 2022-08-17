import axios from "axios";
import { detailUrl, screenshotUrl } from "../api";

export function loadDetail(id) {
  return async function loadDetailThunk(dispatch) {
    const detail = await axios.get(detailUrl(id));
    const screen = await axios.get(screenshotUrl(id));
    dispatch({
      type: "GET_DETAIL",
      payload: {
        game: detail.data,
        screen: screen.data,
      },
    });
  };
}
