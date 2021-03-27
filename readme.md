# Etherpad remote plugin for Atheos
This is a plugin of [etherpad remote](https://github.com/driverfury/etherpad-remote) for [Atheos](https://github.com/Atheos/Atheos).
This plugin adds an option inside atheos file context menu as shown inside the image below:

![Screenshot](https://github.com/driverfury/etherpad-remote-atheos/blob/main/screenshots/plugin.png?raw=true)

Clicking on "Open with Etherpad" option will open the instance of etherpad running on the host you specify (follow configuration guide below).
## Configuration
Configuration is pretty straightforward, you only need to set the URL on which [etherpad remote](https://github.com/driverfury/etherpad-remote) is hosted inside the ```init.js``` file:
```javascript
[...]
        etherpad_remote_url: 'http://<etherpad_remote_url>',
[...]
```
