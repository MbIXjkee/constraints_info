window.addEventListener('load', function() {
  var loading = document.querySelector('#loading');
  _flutter.loader.loadEntrypoint({
    serviceWorker: {
      serviceWorkerVersion: serviceWorkerVersion,
    },
    onEntrypointLoaded: async function(engineInitializer) {
      // Initialize the Flutter engine
      loading.classList.add('main_done');
      let appRunner = await engineInitializer.initializeEngine();

      // Run the app
      loading.classList.add('init_done');
      let app = await appRunner.runApp();

      // leave after timeout
      window.setTimeout(function() {
        loading.remove();
      }, 200);
    }
  });
});