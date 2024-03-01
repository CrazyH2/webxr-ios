 // © Copyright 2022 CrazyH
 // This file was originally made by CrazyH
 // Do not rebrand if you are distributing it
 // © Copyright 2022 CrazyH

import EventTarget from "../libraries/EventTarget";
import XRSession from "./XRSession";

export default class XRSystem extends EventTarget {
  constructor(config, supportedSessions) {
    this.config = config;
    this.supportedSessions = supportedSessions;
    this.immersiveSession = null;
  };

  async isSessionSupported(sessionType) {
    return Object.keys(this.supportedSessions).includes(sessionType);
  };

  async requestSession(mode, options) {
    if(!Object.keys(this.supportedSessions).includes(mode)) return console.error("Only the 'immersive-vr' mode is currently supported.");

    const defaultFeatures = this.supportedSessions[mode];
    const supportedFeatures = this.supportedSessions[mode].supportedFeatures;
    const requiredFeatures = Object.freeze(Object.assign({}, defaultFeatures.requiredFeatures, config));
    const optionalFeatures = Object.freeze(Object.assign({}, defaultFeatures.optionalFeatures, config));
    const allFeatures = new Set();

    var featureNotSupported = false;
    for (const feature of requiredFeatures) {
      if(supportedFeatures.includes(feature)) {
        console.error("The required feature " + feature + " is not supported");
        featureNotSupported = true;
      } else {
        allFeatures.add(feature);
      };
    };

    if(featureNotSupported) {
      console.warn("Session does not support some required features")
    };

    for (const feature of optionalFeatures) {
      if(supportedFeatures.includes(feature)) {
        console.warn("The optional feature " + feature + " is not supported");
      } else {
        allFeatures.add(feature);
      };
    };

    const session = new XRSession(this.config, mode, options);
    this.immersiveSession = session;

    function onSessionEnded() {
      this.immersiveSession = null;
      session.removeEventListener('end', onSessionEnded);
    };
    session.addEventListener('end', onSessionEnded);

    return session;
  };
};
