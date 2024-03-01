 // © Copyright 2022 CrazyH
 // This file was originally made by CrazyH
 // Do not rebrand if you are distributing it
 // © Copyright 2022 CrazyH

export default XRSystem {
  constructor(config, supportedSessions) {
    this.config = config;
    this.supportedSessions = supportedSessions;
  };

  async isSessionSupported(sessionType) {
    return this.supportedSessions.includes(sessionType);
  };

  async requestSession() {
    
  };
};
