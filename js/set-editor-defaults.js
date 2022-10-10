window.addEventListener('load', function (event) {
	// Get the User ID.
	var dlxUserSettings = userSettings; // userSettings is defined globally in the admin block editor.
	var dlxUserId = dlxUserSettings.uid;

	// Get local storage.
	var dlxBlockEditorStorage = localStorage.getItem('WP_DATA_USER_' + dlxUserId);
	var dlxShowWelcomeEditor = false;
	var dlxShowTopToolbar = true;
	var dlxShowFullScreen = false;
	if (null !== dlxBlockEditorStorage) {
		var dlxBlockEditorStorageJSON = JSON.parse(dlxBlockEditorStorage);
		// Get whether the welcome guide is on or off. Use user's preferences.
		var dlxWelcomeGuide =
			dlxBlockEditorStorageJSON['core/preferences'].preferences[
				'core/edit-post'
			]['welcomeGuide'] ?? null;
		if (null !== dlxWelcomeGuide) {
			dlxShowWelcomeEditor = dlxWelcomeGuide;
		}

		// Get whether the top toolbar is on or off. Use user's preferences.
		var dlxTopToolbar =
			dlxBlockEditorStorageJSON['core/preferences'].preferences[
				'core/edit-post'
			]['fixedToolbar'] ?? null;
		if (null !== dlxTopToolbar) {
			dlxShowTopToolbar = dlxTopToolbar;
		}

		// Get whether the full screen mode is on or off. Use user's preferences.
		var dlxFullScreenMode =
			dlxBlockEditorStorageJSON['core/preferences'].preferences[
				'core/edit-post'
			]['fullscreenMode'] ?? null;
		if (null !== dlxFullScreenMode) {
			dlxShowFullScreen = dlxFullScreenMode;
		}
	}
	if (!dlxShowWelcomeEditor) {
		wp.data &&
			wp.data.select('core/edit-post').isFeatureActive('welcomeGuide') &&
			wp.data.dispatch('core/edit-post').toggleFeature('welcomeGuide');
	}
	if (dlxShowTopToolbar) {
		wp.data &&
			!wp.data.select('core/edit-post').isFeatureActive('fixedToolbar') &&
			wp.data.dispatch('core/edit-post').toggleFeature('fixedToolbar');
	}
	if (!dlxShowFullScreen) {
		wp.data &&
			wp.data.select('core/edit-post').isFeatureActive('fullscreenMode') &&
			wp.data.dispatch('core/edit-post').toggleFeature('fullscreenMode');
	}
});
