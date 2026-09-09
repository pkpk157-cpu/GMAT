/* GMAT Prep — optional Anthropic API key.

   The one AI feature in the app is "Explain my mistake": after a wrong answer
   the runner can ask a model why the option you picked looked right. That is
   entirely opt-in and does nothing until you supply your own key, so all this
   file does is hold the key and name the model.

   The key lives only in this device's localStorage and is sent only to
   api.anthropic.com by the request in index.html. It is deliberately kept out
   of state, which means it is never written into a backup or pushed through
   cross-device sync — a key is a credential, not progress.

   Exposes window.GMAT_GEN.ai = { getKey, setKey, hasKey, MODEL }. */
(function () {
  "use strict";
  const KEY_STORE = "gmat_ai_key";
  const MODEL = "claude-opus-5";

  const getKey = () => { try { return localStorage.getItem(KEY_STORE) || ""; } catch (e) { return ""; } };
  const setKey = (k) => { try { k ? localStorage.setItem(KEY_STORE, k) : localStorage.removeItem(KEY_STORE); } catch (e) {} };
  const hasKey = () => !!getKey();

  window.GMAT_GEN = { ai: { getKey: getKey, setKey: setKey, hasKey: hasKey, MODEL: MODEL } };
})();
