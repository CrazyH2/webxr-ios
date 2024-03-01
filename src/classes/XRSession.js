 // © Copyright 2022 CrazyH
 // This file was originally made by CrazyH
 // Do not rebrand if you are distributing it
 // © Copyright 2022 CrazyH

import EventTarget from "../libraries/EventTarget";

export default class XRSession extends EventTarget {
   constructor(config, mode, features) {
        this.config = config;
        this.mode = mode;
        this.features = features;
   };
};
 