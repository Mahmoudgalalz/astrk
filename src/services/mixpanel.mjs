import mixpanel from "mixpanel-browser";
import config from "./config.mjs";

mixpanel.init(config.mixpanelSecret);
export default mixpanel;
