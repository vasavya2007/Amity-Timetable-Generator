(function initializeFirestore() {
  // Expose flags globally
  window.dbEnabled = false;
  window.db = null;

  // If Firebase SDK not loaded, skip silently
  if (!window.firebase) {
    console.warn('[DB] Firebase SDK not found. Using localStorage.');
    return;
  }

  // TODO: Replace these with your Firebase project settings
  // Get them from Firebase Console → Project settings → General → Your apps (Web)
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  try {
    // Allow overriding via window.FIREBASE_CONFIG if the user prefers
    const cfg = window.FIREBASE_CONFIG || firebaseConfig;
    const required = cfg && cfg.apiKey && cfg.projectId && cfg.appId;
    if (!required) {
      console.warn('[DB] Firebase config missing. Using localStorage.');
      return;
    }

    if (firebase.apps && firebase.apps.length === 0) {
      firebase.initializeApp(cfg);
    } else if (!firebase.apps || firebase.apps.length === 0) {
      // Fallback for compat API across versions
      firebase.initializeApp(cfg);
    }
    window.db = firebase.firestore();
    window.dbEnabled = true;
    console.log('[DB] Firestore initialized.');
  } catch (err) {
    console.warn('[DB] Firestore init failed. Using localStorage.', err);
    window.dbEnabled = false;
    window.db = null;
  }
})();

