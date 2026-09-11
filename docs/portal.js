"use strict";

(() => {
  const rawUrl = window.PORTAL_CONFIG?.appUrl?.trim();
  if (!rawUrl) return;

  let url;
  try {
    url = new URL(rawUrl);
    if (url.protocol !== "https:" || url.hostname !== "script.google.com" ||
        !/^\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url.pathname) ||
        url.username || url.password || url.search || url.hash) {
      throw new Error("Endereço de implantação inválido");
    }
  } catch {
    document.getElementById("status-text").textContent =
      "O endereço configurado é inválido. O responsável deve informar a URL publicada do Google Apps Script, terminada em /exec.";
    return;
  }

  const link = document.getElementById("open-app");
  link.href = url.href;
  link.hidden = false;
  const frame = document.getElementById("portal");
  frame.src = url.href;
  frame.hidden = false;
  document.getElementById("notice").hidden = true;
})();
