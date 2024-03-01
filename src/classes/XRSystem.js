 // © Copyright 2022 CrazyH
 // This file was originally made by CrazyH
 // Do not rebrand if you are distributing it
 // © Copyright 2022 CrazyH

const supportedSessions = ["immersive-vr"];

export default XRSystem {
  constructor(config) {
    this.config = config;
  };

  async isSessionSupported(sessionType) {
    return supportedSessions.includes(sessionType);
  };

  async requestSession() {
    
  };
};
