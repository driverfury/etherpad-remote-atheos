(function() {
	let self = false;

	// Initiates plugin as a third priority in the system.
	carbon.subscribe('system.loadExtra', () => atheos.etherpad_remote.init());

	atheos.etherpad_remote = {

        etherpad_remote_api: 'http://127.0.0.1/etherpad-remote/public/api/start',

		init: function() {
			if (self) return;
			self = this;

			// Start your plugin here...
		},

		openPad: function(path) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', this.etherpad_remote_api . '/api/start', true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function() {
                if (this.readyState === XMLHttpRequest.DONE) {
                    var statusSuccess = false;
                    if (this.status === 200) {
                        var response = JSON.parse(this.responseText);
                        statusSuccess = (response.hasOwnProperty('status') && response.status == 'success');
                        window.open(response.url, '_blank').focus();
                    }

                    if (!statusSuccess) {
                        window.alert("Error while opening the file in etherpad!");
                    }
                }
            }

            var data = {
                file: path,
            }
            xhr.send(JSON.stringify(data));
	    }
    };

})();
