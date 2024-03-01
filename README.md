```
Note: this only supports "immersive-vr" currently.
```

# WebXR iOS
WebXR for iOS that works with the normal polyfill

# Setup and installation
- Download `/build/webxr-ios.min.js`
- Add the following to your HTML: `import WebXR_iOS from "./webxr-ios.min.js"` (Requires ESM)
- Initialize WebXR iOS
```js
import WebXR_iOS from "./webxr-ios.min.js";

var xr_ios = WebXR_iOS({
  debug: false,
  ui: true,
});
```

# Are you supported?
- # Browsers
- Safari
- Firefox
- Chrome
- Edge
- Any Chromium based browsers
- # Mobile Support
- iOS ( Cardboard )
- iPadOS ( Development )
- # Headset Support
- Cardboard
- ### If you use WebXR iOS alongside the normal polyfill then you can have:
- Google Daydream
- HTC Vive
- Magic Leap One
- Microsoft Hololens
- Oculus Rift
- Samsung Gear VR
- Windows Mixed Reality headsets

# License
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">WebXR-iOS</span> by <span property="cc:attributionName">CrazyH</span> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution-NonCommercial-ShareAlike 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>
