//
//  Hardening-only.js by CHEF-KOCH
// 
//      Don't use Firefox forks, except the Tor Browser!
//      Newer than user.js! There are differences (on purpose)!
//
//      Version 0.64
//
//      Todo: DoH, spoofing & some other things.
//      Disabling VP9 Codec needs a userscript since FF 70+
//      https://greasyfork.org/en/scripts/373685-hide-vp9-support-from-youtube
//      https://greasyfork.org/en/scripts/390992-hide-hdr-support-from-youtube
//      https://addons.mozilla.org/en-US/firefox/addon/enhanced-h264ify/
// 

//user_pref("network.http.referer.XOriginPolicy", 2);
//user_pref("app.update.auto", true);
//user_pref("browser.cache.memory.enable", false);
//user_pref("dom.disable_beforeunload",  true);
//user_pref("dom.event.contextmenu.enabled", false);
//user_pref("dom.indexedDB.enabled", false); //true
//user_pref("dom.storage.enabled", false);
//user_pref("media.gmp-provider.enabled", false);
//user_pref("network.negotiate-auth.allow-insecure-ntlm-v1-https", false);
//user_pref("pdfjs.enableWebGL", false);
//user_pref("privacy.donottrackheader.enabled", true); // By default disabled unless PB
//user_pref("security.ssl.require_safe_negotiation", true);
//user_pref("signon.storeWhenAutocompleteOff", false);
//user_pref("xpinstall.signatures.required", true);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled ", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.enabled", true);
user_pref("beacon.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.bookmarks.max_backups", 0);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.disk.enable", false);
user_pref("media.cache_size", 0);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.casting.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.display.use_document_fonts", 0);
user_pref("browser.download.folderList", 2);
user_pref("browser.download.manager.retention", 0);
user_pref("extensions.screenshots.disabled", true);
//user_pref("extensions.screenshots.upload-disabled", true);
user_pref("browser.download.useDownloadDir", false);
user_pref("extensions.fxmonitor.enabled", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.hide_user_pass", true);
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 0);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.enabled", false);
user_pref("signon.generation.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.offline-apps.notify", true);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.pocket.enabled", false);
user_pref("browser.privatebrowsing.autostart", true);
user_pref("browser.safebrowsing.blockedURIs.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.region", "US");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.send_pings", false);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.startup.homepage_override.buildID", "20100101");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.filter.javascript", true);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("clipboard.autocopy", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("device.sensors.enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.enabled", false);
user_pref("dom.allow_cut_copy", false);
user_pref("dom.archivereader.enabled", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.enable_performance", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.flyweb.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.maxHardwareConcurrency", 2);
user_pref("dom.payments.request.supportedRegions", "US,CA");
user_pref("dom.mozTCPSocket.enabled", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.network.enabled", false);
user_pref("dom.serviceWorkers.enabled", true);
user_pref("dom.telephony.enabled", false);
user_pref("dom.vibrator.enabled",      false);
user_pref("dom.vr.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.blocklist.url", "");
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.update.enabled", true);
user_pref("general.buildID.override", "20100101");
user_pref("media.autoplay.enabled", false);
user_pref("media.autoplay.allow-muted", false);
user_pref("media.autoplay.default", 1);
user_pref("general.warnOnAboutConfig", false);
user_pref("geo.enabled", false);
user_pref("privacy.history.custom", true);
user_pref("places.history.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("intl.accept_languages", "en-US, en");
user_pref("intl.locale.matchOS", false);
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.wasm", false);
user_pref("javascript.use_us_english_locale", true);
user_pref("keyword.enabled", false);
user_pref("layout.css.visited_links_enabled", false);
user_pref("lightweightThemes.update.enabled", false);
user_pref("loop.enabled", false);
user_pref("loop.logDomains", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.video_stats.enabled", false);
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.dns.blockDotOnion", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.keep-alive.timeout", 45);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.IDN_show_punycode", true);
user_pref("network.jar.open-unsafe-types", false);
user_pref("network.manage-offline-status", false);
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.protocol-handler.expose-all", false);
user_pref("network.protocol-handler.expose.about", true);
user_pref("network.protocol-handler.expose.blob", true);
user_pref("network.protocol-handler.expose.chrome", true);
user_pref("network.protocol-handler.expose.data", true);
user_pref("network.protocol-handler.expose.file", true);
user_pref("network.protocol-handler.expose.ftp", true);
user_pref("network.protocol-handler.expose.http", true);
user_pref("network.protocol-handler.expose.https", true);
user_pref("network.protocol-handler.expose.javascript", true);
user_pref("network.protocol-handler.expose.moz-extension", true);
user_pref("network.protocol-handler.external.about", false);
user_pref("network.protocol-handler.external.blob", false);
user_pref("network.protocol-handler.external.chrome", false);
user_pref("network.protocol-handler.external.data", false);
user_pref("network.protocol-handler.external.file", false);
user_pref("network.protocol-handler.external.ftp", false);
user_pref("network.protocol-handler.external.http", false);
user_pref("network.protocol-handler.external.https", false);
user_pref("network.protocol-handler.external.javascript", false);
user_pref("network.protocol-handler.external.moz-extension", false);
user_pref("network.protocol-handler.warn-external-default", true);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.stricttransportsecurity.preloadlist", true);
user_pref("network.trr.resolvers", '[{ "name": "Cloudflare", "url": "https://mozilla.cloudflare-dns.com/dns-query" },{ "name": "Quad9", "url": "https://dns.quad9.net/dns-query" },{"name": "AdGuard Default", "url": "https://dns.adguard.com/dns-query"},{ "name": "AdGuard Family Protection", "url": "https://dns-family.adguard.com/dns-query"},{"name": "Google", "url": "https://dns.google/dns-query"},{"name": "CleanBrowsing", "url": "https://doh.cleanbrowsing.org/doh/family-filter"},{"name": "PowerDNS", "url": "https://doh.powerdns.org"},{"name": "SecureDNS.eu", "url": "https://doh.securedns.eu/dns-query"},{"name": "DNSWarden AdBlocking", "url": "https://doh.dnswarden.com/adblock"},{"name": "Foundation for Applied Privacy", "url": "https://doh.appliedprivacy.net/query"},{"name": "BlahDNS Germany", "url": "https://doh-de.blahdns.com/dns-query"},{"name": "BlahDNS Japan", "url": "https://doh-jp.blahdns.com/dns-query"}]'); 
user_pref("network.trr.mode", 3); //https://blog.cloudflare.com/encrypt-that-sni-firefox-edition/ & https://wiki.mozilla.org/Trusted_Recursive_Resolver
user_pref("network.trr.excluded-domains", "");
user_pref("network.trr.builtin-excluded-domains", "localhost,local");
user_pref("network.trr.bootstrapAddress", "1.1.1.1"); //Cloudflare
user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
user_pref("network.security.esni.enabled", true);
user_pref("network.trr.max-fails", 4);
user_pref("network.trr.disable-ECS", true);
user_pref("network.trr.blacklist-duration", 55);
user_pref("network.trr.skip-AAAA-when-not-supported", true);
user_pref("network.trr.early-AAAA", true);
user_pref("network.trr.request-timeout", 2660);
//user_pref("network.trr.confirmationNS", "example.com");
user_pref("network.trr.useGET", true);
user_pref("network.trr.allow-rfc1918", true); 
user_pref("network.trr.wait-for-portal", false);
user_pref("pdfjs.disabled", false);
user_pref("places.history.enabled", false);
user_pref("plugin.scan.plid.all", false);
user_pref("plugin.state.flash", 0);
user_pref("plugin.default.state", 0);
user_pref("plugin.state.java", 0);
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);
user_pref("plugins.click_to_play", true);
user_pref("plugins.update.notifyUser", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.spoof_english", 2);
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("intl.charset.fallback.override", "windows-1252"); 
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 1000);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.storagePrincipal.enabledForTrackers", false);
user_pref("privacy.trackingprotection.origin_telemetry.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.annotate.enabled", false);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.userContext.enabled", true);
user_pref("security.ask_for_password", 2);
user_pref("privacy.userContext.longPressBehavior", 2);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", true);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.csp.enable", true);
user_pref("security.csp.experimentalEnabled", true);
user_pref("security.dialog_enable_delay", 1000);
user_pref("security.fileuri.strict_origin_policy", true);
user_pref("security.insecure_field_warning.contextual.enabled", true);
user_pref("security.insecure_password.ui.enabled", true);
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.OCSP.enabled", 0);
user_pref("security.OCSP.require", true);
user_pref("security.password_lifetime", 1);
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.sri.enable", true);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.ssl.enable_ocsp_must_staple", true);
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha", false);
user_pref("security.ssl3.dhe_dss_des_ede3_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_1024_rc4_56_sha", false);
user_pref("security.ssl3.rsa_aes_128_sha", true);
user_pref("security.ssl3.rsa_aes_256_sha", true);
user_pref("security.ssl3.rsa_camellia_128_sha", false);
user_pref("security.ssl3.rsa_camellia_256_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_rc2_40_md5", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_40_md5", false);
user_pref("security.ssl3.rsa_seed_sha", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);
user_pref("security.tls.version.fallback-limit", 3);
user_pref("security.tls.version.max", 4);
user_pref("security.tls.version.min", 2); //3
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("services.blocklist.update_enabled", true);
user_pref("shumway.disabled", true);
user_pref("signon.autofillForms.http", false);
user_pref("signon.management.page.enabled", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("svg.disabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("security.family_safety.mode", 0);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.disabled", true);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.min_capability_mode", true);
user_pref("startup.homepage_override_url", "");
user_pref("shield.savant.enabled", false);
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_welcome_url", "");
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("permissions.default.geo", 2);
user_pref("extensions.ui.lastCategory", "addons://list/extension");
user_pref("offline-apps.quota.warn", 0);
user_pref("places.history.enabled", false);
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_icon.pbmode.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", false);
user_pref("security.insecure_connection_text.enabled", false);


// Font workarounds
//user_pref("browser.display.use_document_fonts", 1); //0
//user_pref("layout.css.font-loading-api.enabled", true); //false
//user_pref("font.blacklist.underline_offset", ""); //untouched
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);

// Optional params (as per own needs)
// "browser.uiCustomization.state" 
// "extensions.webextensions.uuids"
