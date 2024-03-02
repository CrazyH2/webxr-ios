 // © Copyright 2022 CrazyH
 // This file was originally made by CrazyH
 // Do not rebrand if you are distributing it
 // © Copyright 2022 CrazyH

import config_defaults from "./config";
import XRSystem from "./classes/XRSystem";

const supportedSessions = {
  "immersive-vr": {
    requiredFeatures: ['viewer', 'local'],
    optionalFeatures: [],
    supportedFeatures: ['viewer', 'local'],
  },
};

export default class WebXR_iOS {
  constructor(config = {}) {
    this.config = Object.freeze(Object.assign({}, config_defaults, config));
  
    if (!('xr' in window.navigator) && this.isiOS()) this.run();
  };

  isiOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
  };

  async run() {
    window.VRFrameData = function() {
      this.leftViewMatrix = new Float32Array(16);
      this.rightViewMatrix = new Float32Array(16);
      this.leftProjectionMatrix = new Float32Array(16);
      this.rightProjectionMatrix = new Float32Array(16);
      this.pose = null;
    };
    window.navigator.xr = new XRSystem(this.config, supportedSessions);
  };

};
