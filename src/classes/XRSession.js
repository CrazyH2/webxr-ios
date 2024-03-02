 // © Copyright 2022 CrazyH
 // This file was originally made by CrazyH
 // Do not rebrand if you are distributing it
 // © Copyright 2022 CrazyH

import EventTarget from "../libraries/EventTarget";
import XRReferenceSpace from './XRReferenceSpace';

export default class XRSession extends EventTarget {
   constructor(config, mode, features) {
        this.config = config;
        this.mode = mode;
        this.features = features;

        this.viewerSpace = new XRReferenceSpace("viewer");
        this.inputSources = []; //
        this.interactionMode = "world-space"; //
        this.renderState = null; //
        this.visibilityState = "visible"; //
   };

   cancelAnimationFrame(handle) {

   };

   end() {

   };

   requestAnimationFrame(animationFrameCallback) {

   };

   requestReferenceSpace(referenceSpaceType) {

   };

   updateRenderState(state = null) {

   };

};
 