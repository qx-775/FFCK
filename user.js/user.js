//
//      All-in-One Hardening user.js project by CHEF-KOCH
//
//  Warning:
//      * Chinese & Taiwanese systems are not supported (font issues & more)!
//      * XP, iOS & MacOS are not (fully) supported nor tested!
//      * Android users MUST use the Android-user.js configuration!
//      * Backward compatibility is given e.g. SeaMonkey etc. (that's why [some] outdated flags are listed!)
//      See issue tracker for known issues & discussions!
//      See: Workarounds.md for known problems & possible workarounds!
//
<<<<<<< HEAD
//      Version: 78.0.0
=======
//      Version: 76.0.0
>>>>>>> master
//
// Disable default user agent
user_pref("default-browser-agent.enabled", false);
//Disable New Address Search Bar (75+)
user_pref("browser.urlbar.openViewOnFocus", false);
user_pref("browser.urlbar.update1", false);
user_pref("browser.urlbar.update1.interventions", false);
user_pref("browser.urlbar.update1.searchTips", false);
//
user_pref("dom.media.mediasession.enabled", true);
user_pref("dom.security.https_only_mode", true);
// Twitch/YouTube buffering workaround
// Disable IPv6 or usw following:
//user_pref("media.cache_readahead_limit", 7500);
//user_pref("media.cache_resume_treshold", 7500);
user_pref("network.http.throttle.enable", false);
<<<<<<< HEAD


// VPN + DOH workaround
// By default, firefox disables it's built in TRR if it detects the use of a proxy/VPN.
user_pref("network.trr.bootstrapAddress", 1.1 .1 .1);
=======
//user_pref("browser.fullscreen.autohide", false); // Replaces: https://addons.mozilla.org/en-US/firefox/addon/youtube-full-windowed/
//
user_perf("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "{"id":"whats-new-panel","enabled":false,"type":"remote-settings","bucket":"whats-new-panel","updateCycleInMs":3600000}");
user_pref("browser.aboutConfig.showWarning", false); //chrome://global/content/config.xul?filter=
// user_pref("accessibility.tabfocus", 1);
// user_pref("mousebutton.4th.enabled", true);
// user_pref("mousebutton.5th.enabled", true);
// user_pref("network.http.proxy.version", "1.0"); // uncomment, in case of problems!
// user_pref("network.http.version", "1.0"); // uncomment, in case of problems!
// user_pref("network.tcp.sendbuffer", 0);
// user_pref("print.postscript.enabled", true);
//user_pref("app.update.channel", "beta");
//user_pref("dom.w3c_pointer_events.dispatch_by_pointer_messages", false);
//user_pref("gecko.handlerService.migrated", true);
//user_pref("media.gmp-manager.url.override", "");
//user_pref("media.peerconnection.ice.force_interface", "");
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("widget.wayland-dmabuf-webgl.enabled", true); 
user_pref("dom.webgpu.enabled", false);
user_pref("network.netlink.route.check.IPv4", "");
user_pref("network.netlink.route.check.IPv6", "");
user_pref("browser.urlbar.ctrlCanonizesURLs", false);
user_pref("dom.image-lazy-loading.enabled", true);
user_pref("widget.wayland_vsync.enabled", true);
//user_pref("network.protocol-handler.external.moz-extension", false); // removed
//user_pref("print.printer_list", "");
//user_pref("privacy.resistFingerprinting.letterboxing.dimensions", "1280x720");
//user_pref("privacy.resistFingerprinting.letterboxing", false);
//user_pref("ui.use_standins_for_native_colors", true)
user_pref("security.pki.crlite_mode", 2);
user_pref("browser.download.lastDir.savePerSite", false);
user_pref("apz.frame_delay.enabled", false);
user_pref("accessibility.accesskeycausesactivation", true);
user_pref("accessibility.AOM.enabled", false);
user_pref("accessibility.browsewithcaret_shortcut.enabled", true);
user_pref("accessibility.browsewithcaret", false);
user_pref("accessibility.delay_plugin_time", 20000);
user_pref("accessibility.delay_plugins", false);
user_pref("webgl.dxgl.enabled", false);
user_pref("accessibility.force_disabled", 1);
user_pref("accessibility.handler.enabled", true);
user_pref("accessibility.mouse_focuses_formcontrol", false);
user_pref("accessibility.tabfocus", 7);
user_pref("accessibility.typeaheadfind.autostart", true);
user_pref("accessibility.typeaheadfind.casesensitive", 0);
user_pref("accessibility.typeaheadfind.enablesound", true);
user_pref("accessibility.typeaheadfind.linksonly", true);
user_pref("accessibility.typeaheadfind.manual", true);
user_pref("accessibility.typeaheadfind.matchesCountLimit", 1000);
user_pref("accessibility.typeaheadfind.soundURL", "beep");
user_pref("accessibility.typeaheadfind.startlinksonly", false);
user_pref("accessibility.typeaheadfind.timeout", 4000);
user_pref("accessibility.typeaheadfind", true);
user_pref("accessibility.usetexttospeech", "");
user_pref("accessibility.warn_on_browsewithcaret", true);
user_pref("advanced.mailftp", false);
user_pref("alerts.showFavicons", false);
user_pref("alerts.useSystemBackend", true);
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.remotesettings.enabled", false);
user_pref("app.releaseNotesURL", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.auto", true);
user_pref("app.update.enabled", true);
user_pref("app.update.url.details", ""); // https://www.mozilla.org/%LOCALE%/firefox/beta/notes
user_pref("app.update.url.manual", ""); // https://www.mozilla.org/firefox/beta"
user_pref("asanreporter.apiurl", ""); // https://anf1.fuzzing.mozilla.org/crashproxy/submit/
user_pref("asanreporter.clientid", "unknown");
user_pref("beacon.enabled", false);
user_pref("bidi.browser.ui", false);
user_pref("bidi.direction", 1);
user_pref("bidi.edit.caret_movement_style", 2);
user_pref("bidi.edit.delete_immediately", true);
user_pref("bidi.numeral", 0);
user_pref("bidi.texttype", 1);
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.active_color", "#EE0000");
user_pref("browser.anchor_color", "#0000EE");
user_pref("browser.backspace_action", 0);
user_pref("browser.bookmarks.max_backups", 0); // 3-5
user_pref("browser.bookmarks.openInTabClosesMenu", true);
user_pref("media.gmp-manager.buildID", "20200402050101");
user_pref("browser.cache.cache_isolation", true);
user_pref("browser.cache.check_doc_frequency", 3);
user_pref("browser.cache.compression_level", 0); // 0=disable comp, 1 = best speed, 9 = best compression
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("webgl.cgl.multithreaded", false);
user_pref("browser.cache.disk.capacity", 256000);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.free_space_hard_limit", 1024); // 1MB
user_pref("browser.cache.disk.free_space_soft_limit", 5120); // 5MB
user_pref("browser.cache.disk.max_chunks_memory_usage", 40960);
user_pref("browser.cache.disk.max_entry_size", 51200); // 50 MB
user_pref("browser.cache.disk.max_priority_chunks_memory_usage", 40960);
user_pref("browser.cache.disk.metadata_memory_limit", 250); // 0.25 MB
user_pref("browser.cache.disk.preload_chunk_count", 4); // 1 MB of read ahead
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.frecency_experiment", 0);
user_pref("browser.cache.frecency_half_life_hours", 6);
user_pref("browser.cache.max_shutdown_io_lag", 2);
user_pref("browser.cache.memory.capacity", 0); //-1 since 70
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.memory.max_entry_size", 5120);
user_pref("browser.cache.offline.capacity", 512000);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.offline.insecure.enable", false);
user_pref("browser.casting.enabled", false);
user_pref("browser.chrome.errorReporter.submitUrl", "");
user_pref("browser.chrome.image_icons.max_size", 1024);
user_pref("browser.contentblocking.cryptomining.preferences.ui.enabled", true);
user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", false);
user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", true);
user_pref("browser.contentblocking.database.enabled", false);
user_pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior4,cm,fp,stp");
user_pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", true);
user_pref("browser.contentblocking.report.cookie.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cross-site-tracking-report");
user_pref("browser.contentblocking.report.cryptominer.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cryptominers-report");
user_pref("browser.contentblocking.report.fingerprinter.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/fingerprinters-report");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/password-manager-report");
user_pref("browser.contentblocking.report.lockwise.url", "https://lockwise.firefox.com/");
user_pref("browser.contentblocking.report.manage_devices.url", "https://accounts.firefox.com/settings/clients");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/monitor-faq");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "https://monitor.firefox.com/oauth/init?entrypoint=protection_report_monitor&utm_source=about-protections&email=");
user_pref("browser.contentblocking.report.monitor.url", "https://monitor.firefox.com/?entrypoint=protection_report_monitor&utm_source=about-protections");
user_pref("browser.contentblocking.report.proxy_extension.url", "https://private-network.firefox.com/");
user_pref("browser.contentblocking.report.proxy.enabled", false); //true if you use above settings
user_pref("browser.contentblocking.report.social.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/social-media-tracking-report");
user_pref("browser.contentblocking.report.tracker.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/tracking-content-report");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.discovery.enabled", false);
user_pref("browser.display.auto_quality_min_font_size", 20);
user_pref("browser.display.background_color", "#202020"); //#FFFFFF
user_pref("browser.display.document_color_use", 0);
user_pref("browser.display.focus_background_color", "#117722");
user_pref("browser.display.focus_ring_on_anything", false);
user_pref("browser.display.focus_ring_style", 1);
user_pref("browser.display.focus_ring_width", 0);
user_pref("browser.display.focus_text_color",   "#ffffff");
user_pref("browser.display.force_inline_alttext", false);
user_pref("browser.display.foreground_color", "#000000");
user_pref("browser.display.normal_lineheight_calc_control", 2);
user_pref("browser.display.show_image_placeholders", true);
user_pref("browser.display.show_loading_image_placeholder", false);
user_pref("browser.display.use_document_fonts", 0);
user_pref("browser.display.use_focus_colors", false);
user_pref("browser.display.use_system_colors", false);
user_pref("browser.dom.window.dump.enabled", true, sticky);
user_pref("browser.download.folderList", 2);
user_pref("browser.download.forbid_open_with", false);
user_pref("browser.download.forward_oma_android_download_manager", false);
user_pref("browser.download.manager.retention", 0);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.enable_automatic_image_resizing", false);
user_pref("browser.enable_click_image_resizing", true);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.alternate.prefix", "www.");
user_pref("browser.fixup.alternate.suffix", ".com");
user_pref("browser.fixup.dns_first_for_single_words", false);
user_pref("browser.fixup.hide_user_pass", true);
user_pref("browser.fixup.typo.scheme", true);
user_pref("browser.formfill.agedWeight", 2);
user_pref("browser.formfill.boundaryWeight", 25);
user_pref("browser.formfill.bucketSize", 1);
user_pref("browser.formfill.debug", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 100);
user_pref("browser.formfill.maxTimeGroupings", 25);
user_pref("browser.formfill.prefixWeight", 5);
user_pref("browser.formfill.timeGroupingSize", 604800);
user_pref("browser.fullscreen.animate", false); //removed
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.helperApps.neverAsk.openFile", "");
user_pref("browser.helperApps.neverAsk.saveToDisk", "");
user_pref("browser.history.maxStateObjectSize", 2097152);
user_pref("browser.in-content.dark-mode", true); // https://overdodactyl.github.io/ShadowFox/
user_pref("browser.launcherProcess.enabled", true);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.messaging-system.fxatoolbarbadge.enabled", true);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.meta_refresh_when_inactive.disabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "{}");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "{\"id\":\"whats-new-panel\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"whats-new-panel\",\"updateCycleInMs\":3600000}");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "{}");
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.filterAdult", false);
user_pref("dom.vr.webxr.enabled", false);
user_pref("browser.ping-centre.production.endpoint", "");
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", true);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.ping-centre.staging.endpoint", "");
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("extensions.blocklist.useXML", false);
user_pref("browser.newtabpage.activity-streamasrouterExperimentEnabled", false);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.offline-apps.notify", true);
user_pref("browser.onboarding.tour.onboarding-tour-addons.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-customize.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-default-browser.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-performance.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-private-browsing.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-screenshots.completed", true);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.ping-centre.log", false);
user_pref("browser.ping-centre.telemetry", false); // removed
user_pref("browser.pingcentre.telemetry", false); // outdated
user_pref("browser.pocket.enabled", false);
user_pref("browser.privatebrowsing.autostart", true);
user_pref("browser.privatebrowsing.searchUI", false);
user_pref("browser.safebrowsing.allowOverride", true);
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.debug", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.timeout_ms", 10100);
user_pref("browser.safebrowsing.downloads.remote.url", ""); // https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_SAFEBROWSING_API_KEY%"
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.id", "Firefox");
user_pref("browser.safebrowsing.id", "navclient-auto-ffox");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "CHEF-KOCH's Anti-Safe Browsing");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", ""); // https://developers.google.com/safe-browsing/v4/advisory
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST
user_pref("browser.safebrowsing.provider.google4.lists", "goog-badbinurl-proto,goog-downloadwhite-proto,goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto,goog-harmful-proto,goog-passwordwhite-proto");
user_pref("browser.safebrowsing.provider.google4.pver", "4");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", ""); // https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site=
user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.base", "moz-std");
user_pref("browser.safebrowsing.provider.mozilla.lists.content", "moz-full");
user_pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "1");
user_pref("browser.safebrowsing.provider.mozilla.pver", "2.2");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", ""); // https://%LOCALE%.phish-report.mozilla.com/?hl=%LOCALE%&url=
user_pref("browser.sanitizer.loglevel", "Warn");
user_pref("browser.search.context.loadInBackground", true); // removed
user_pref("browser.search.countryCode", "US"); // removed
user_pref("browser.search.geoip.timeout", 3000);
user_pref("browser.search.geoip.url", ""); // https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%
user_pref("browser.search.geoSpecificDefaults.url", ""); // removed
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.log", false);
user_pref("browser.search.official", true);
user_pref("browser.search.region", "US");
user_pref("browser.search.separatePrivateDefault", true); //false
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update.interval", 21600);
user_pref("browser.search.update.log", false);
user_pref("browser.search.update", false);
user_pref("browser.security.newcerterrorpage.enabled", true);
user_pref("browser.security.newcerterrorpage.mitm.enabled", true); // removed FF70+
user_pref("browser.selfsupport.url", ""); // removed
user_pref("browser.send_pings.max_per_link", 1);
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.send_pings", false);
user_pref("browser.sessionhistory.max_entries", 4);
user_pref("browser.sessionhistory.max_total_viewers", -1);
user_pref("browser.sessionstore_max_tabs_undo", 0); // 1=last closed window
user_pref("browser.sessionstore.interval", 60000);
user_pref("browser.sessionstore.max_windows_undo", 0);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.startup.homepage_override.buildID", "20100101");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.page", 3); //0 for blank
user_pref("browser.storageManager.pressureNotification.minIntervalMS", 1200000);
user_pref("browser.storageManager.pressureNotification.usageThresholdGB", 5);
user_pref("browser.tabs.animate", false);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("browser.tabs.insertAfterCurrent", true);
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", true);
user_pref("browser.tabs.remote.autostart", false);
user_pref("browser.tabs.remote.enforceRemoteTypeRestrictions", false);
user_pref("browser.tabs.remote.force-paint", true);
user_pref("browser.tabs.remote.separatedMozillaDomains", "addons.mozilla.org,accounts.firefox.com");
user_pref("browser.tabs.remote.separateFileUriProcess", true);
user_pref("browser.tabs.remote.separatePrivilegedContentProcess", false);
user_pref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", false);
user_pref("browser.tabs.remote.useCrossOriginEmbedderPolicy", true); //false
user_pref("browser.tabs.tabMinWidth", 50);
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.previews.enable", false);
user_pref("browser.triple_click_selects_paragraph", true);
user_pref("browser.uiCustomization.debug", false); // set true, in case your extensions are hidden from toolbar
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.underline_anchors", true); // leak?
user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
user_pref("browser.urlbar.filter.javascript", true);
user_pref("browser.urlbar.matchBuckets", "suggestion:4,general:5");
user_pref("browser.urlbar.maxRichResults", 0);
user_pref("browser.urlbar.megabar", false);
user_pref("browser.urlbar.oneOffSearches", false);
user_pref("browser.urlbar.quantumbar", true); //removed FF70+
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.update1", true);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
user_pref("browser.visited_color", "#551A8B");
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("browser.zoom.full", false);
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("canvas.capturestream.enabled", false);
user_pref("canvas.image.cache.limit", 0);
user_pref("captivedetect.canonicalContent", "success\n");
user_pref("captivedetect.canonicalURL", "); // http://detectportal.firefox.com/success.txt"
user_pref("captivedetect.maxRetryCount", 5);
user_pref("captivedetect.maxWaitingTime", 5000);
user_pref("captivedetect.pollingTime", 3000);
user_pref("clipboard.autocopy", false);
user_pref("clipboard.autocopy", true);
user_pref("clipboard.plainTextOnly", false);
user_pref("content.cors.disable", false);
user_pref("content.notify.backoffcount", -1);
user_pref("content.notify.interval", 180000);
user_pref("content.notify.ontimer", true); // removed
user_pref("content.sink.enable_perf_mode", 0);
user_pref("content.sink.event_probe_rate", 1);
user_pref("content.sink.initial_perf_time", 2000000);
user_pref("content.sink.interactive_deflect_count", 0);
user_pref("content.sink.interactive_parse_time", 3000);
user_pref("content.sink.interactive_time", 750000);
user_pref("content.sink.pending_event_mode", 0);
user_pref("content.sink.perf_deflect_count", 215);
user_pref("content.sink.perf_parse_time", 360000);
user_pref("converter.html2txt.always_include_ruby", false);
user_pref("converter.html2txt.header_strategy",  1);
user_pref("converter.html2txt.structs", true);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("device.sensors.test.events", false);
user_pref("device.storage.enabled", false);
user_pref("devtools.browserconsole.input.editorWidth", 0);
user_pref("devtools.browsertoolbox.fission", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.connectpage.enabled", false);
user_pref("devtools.console.stdout.chrome", true, sticky);
user_pref("devtools.console.stdout.content", false, sticky);
user_pref("devtools.debugger.component-visible", true);
user_pref("devtools.debugger.dom-mutation-breakpoints-visible", false);
user_pref("devtools.debugger.event-listeners-visible", true);
user_pref("devtools.debugger.expressions-visible", false);
user_pref("devtools.debugger.features.async-stepping", false);
user_pref("devtools.debugger.features.dom-mutation-breakpoints", true);
user_pref("devtools.debugger.features.inline-preview", true);
user_pref("devtools.debugger.features.overlay-step-buttons", true); //false
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.debugger.workers-visible", true);
user_pref("devtools.debugger.xhr-breakpoints-visible", false);
user_pref("devtools.inspector.inactive.css.enabled", true);
user_pref("devtools.markup.mutationBreakpoints.enabled", true);
user_pref("devtools.netmonitor.features.search", false);
user_pref("devtools.netmonitor.ws.displayed-frames.limit", 400);
user_pref("devtools.netmonitor.ws.messageDataLimit", 100000);
user_pref("devtools.netmonitor.ws.payload-preview-height", 128);
user_pref("devtools.netmonitor.ws.visibleColumns", "[\"data\", \"time\"]");
user_pref("devtools.onboarding.telemetry-logged", false);
user_pref("devtools.popup.disable_autohide", false);
user_pref("devtools.recordreplay.allowRepaintFailures", true);
user_pref("devtools.recordreplay.includeSystemScripts", false);
user_pref("devtools.recordreplay.logging", false);
user_pref("devtools.recordreplay.loggingFull", false);
user_pref("devtools.recordreplay.mvp.enabled", false);
user_pref("devtools.storage.extensionStorage.enabled", false);
user_pref("devtools.toolbox.content-frame", true);
user_pref("devtools.toolbox.force-chrome-prefs", true);
user_pref("devtools.webconsole.input.editorOnboarding", true);
user_pref("devtools.webconsole.input.editorWidth", 0);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.enabled", false);
user_pref("dom.allow_cut_copy", false);
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.allow_XUL_XBL_for_file", false);
user_pref("dom.animations.offscreen-throttling", true);
user_pref("dom.archivereader.enabled", false);
user_pref("dom.audiochannel.audioCompeting.allAgents", false);
user_pref("dom.audiochannel.audioCompeting", false);
user_pref("dom.battery.enabled", false); // removed
user_pref("dom.beforeunload_timeout_ms", 1000);
user_pref("dom.block_reload_from_resize_event_handler", true);
user_pref("dom.capture.enabled", false);
user_pref("dom.clients.openwindow_favors_same_process", true);
user_pref("dom.compositionevent.allow_control_characters", false);
user_pref("dom.cycle_collector.incremental", true);
user_pref("dom.datatransfer.mozAtAPIs", false);
user_pref("dom.disable_beforeunload", true);
user_pref("dom.disable_open_click_delay", 1000);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.disable_window_flip", false);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.disable_window_showModalDialog", true);
user_pref("dom.enable_user_timing", false);
user_pref("dom.enable_window_print", true);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.event.coalesce_mouse_move", true);
user_pref("dom.event.contextmenu.enabled", false);
user_pref("network.cookie.lifetime.days", 1);
user_pref("dom.event.default_to_passive_touch_listeners", true);
user_pref("dom.events.dataTransfer.protected.enabled", false);
user_pref("dom.events.testing.asyncClipboard", false);
user_pref("dom.events.user_interaction_interval", 5000);
user_pref("dom.experimental_forms", false);
user_pref("dom.fileHandle.enabled", true);
user_pref("dom.flyweb.enabled", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("dom.forms.color", true);
user_pref("dom.forms.datetime.others", false);
user_pref("dom.forms.datetime.timepicker", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("dom.forms.number.grouping", false);
user_pref("dom.forms.selectSearch", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.global_stop_script", true);
user_pref("dom.indexedDB.enabled", false);
user_pref("dom.indexedDB.experimental", false);
user_pref("dom.indexedDB.logging.details", true);
user_pref("dom.indexedDB.logging.enabled", true);
user_pref("dom.indexedDB.logging.profiler-marks", false);
user_pref("dom.input.fallbackUploadDir", "");
user_pref("dom.inputevent.datatransfer.enabled", true);
user_pref("dom.IntersectionObserver.enabled", false);
user_pref("dom.ipc.cancel_content_js_when_navigating", true);
user_pref("dom.ipc.cpows.log.enabled", false);
user_pref("dom.ipc.cpows.log.stack", false);
user_pref("dom.ipc.keepProcessesAlive.privilegedabout", 1);
user_pref("dom.ipc.plugins.asyncdrawing.enabled", true);
user_pref("dom.ipc.plugins.contentTimeoutSecs", 0);
user_pref("dom.ipc.plugins.flash.disable-protected-mode", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.forcedirect.enabled", true);
user_pref("dom.ipc.plugins.parentTimeoutSecs", 0);
user_pref("dom.ipc.plugins.processLaunchTimeoutSecs", 0);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.plugins.timeoutSecs", 0);
user_pref("dom.ipc.plugins.unloadTimeoutSecs", 30);
user_pref("dom.ipc.processCount.extension", 1);
user_pref("dom.ipc.processCount.file", 1);
user_pref("dom.ipc.processCount.privilegedabout", 1);
user_pref("dom.ipc.processCount.privilegedmozilla", 1);
user_pref("dom.ipc.processCount.webIsolated", 1);
user_pref("dom.ipc.processCount.webLargeAllocation", 10);
user_pref("dom.ipc.processCount", 64); // 8
user_pref("dom.ipc.processPrelaunch.delayMs", 1000);
user_pref("dom.ipc.processPriorityManager.backgroundGracePeriodMS", 0);
user_pref("dom.ipc.processPriorityManager.backgroundPerceivableGracePeriodMS", 0);
user_pref("dom.ipc.processPriorityManager.enabled", true);
user_pref("dom.ipc.processPriorityManager.testMode", false);
user_pref("dom.ipc.tabs.createKillHardCrashReports", false);
user_pref("dom.ipc.tabs.disabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", true);
user_pref("dom.keyboardevent.keypress.dispatch_non_printable_keys_only_system_group_in_content", true);
user_pref("dom.keyboardevent.keypress.hack.dispatch_non_printable_keys.addl", "");
user_pref("dom.keyboardevent.keypress.hack.use_legacy_keycode_and_charcode.addl", "");
user_pref("dom.keyboardevent.keypress.hack.use_legacy_keycode_and_charcode", "*.collabserv.com,*.gov.online.office365.us,*.officeapps-df.live.com,*.officeapps.live.com,*.online.office.de,*.partner.officewebapps.cn,*.scniris.com");
user_pref("dom.largeAllocation.testing.allHttpLoads", false);
user_pref("dom.largeAllocationHeader.enabled", true);
user_pref("dom.mapped_arraybuffer.enabled", true);
user_pref("dom.max_chrome_script_run_time", 20);
user_pref("dom.max_ext_content_script_run_time", 5);
user_pref("dom.max_script_run_time", 10);
user_pref("dom.maxHardwareConcurrency", 16);
user_pref("dom.maxtouchpoints.testing.value", -1);
user_pref("dom.media.autoplay.autoplay-policy-api", true);
user_pref("dom.meta-viewport.enabled", false);
user_pref("dom.min_background_timeout_value", 1000);
user_pref("dom.min_timeout_value", 4);
user_pref("dom.min_tracking_background_timeout_value", 4);
user_pref("dom.min_tracking_timeout_value", 4);
user_pref("dom.mouseevent.click.hack.use_legacy_non-primary_dispatch", "");
user_pref("dom.mozTCPSocket.enabled", false);
user_pref("dom.network.enabled", false);
user_pref("dom.noopener.newprocess.enabled", true);
user_pref("dom.payments.defaults.saveAddress", true);
user_pref("dom.payments.defaults.saveCreditCard", false);
user_pref("dom.payments.loglevel", "Warn");
user_pref("dom.payments.request.supportedRegions", "US,CA");
user_pref("dom.popup_allowed_events", "click dblclick"");
user_pref("dom.popup_maximum", 20);
user_pref("dom.presentation.discoverable.encrypted", true);
user_pref("dom.presentation.discoverable.retry_ms", 5000);
user_pref("dom.presentation.discoverable", false);
user_pref("dom.presentation.discovery.enabled", false);
user_pref("dom.presentation.discovery.timeout_ms", 10000);
user_pref("dom.presentation.session_transport.data_channel.enable", false);
user_pref("dom.presentation.tcp_server.debug", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.http2.maxRetries", 2);
user_pref("dom.push.http2.reset_retry_count_after_ms", 60000);
user_pref("dom.push.http2.retryInterval", 5000);
user_pref("dom.push.loglevel", "Error");
user_pref("dom.push.maxQuotaPerSubscription", 16);
user_pref("dom.push.maxRecentMessageIDsPerSubscription", 10);
user_pref("dom.push.pingInterval", 1800000); // 30 minutes
user_pref("dom.push.quotaUpdateDelay", 3000); // 3 seconds
user_pref("dom.push.requestTimeout", 10000);
user_pref("dom.push.retryBaseInterval", 5000);
user_pref("dom.push.serverURL", ""); // wss://push.services.mozilla.com/
user_pref("dom.push.userAgentID", "");
user_pref("dom.quotaManager.loadQuotaFromCache", true);
user_pref("dom.quotaManager.temporaryStorage.chunkSize", 10240);
user_pref("dom.quotaManager.temporaryStorage.fixedLimit", -1);
user_pref("dom.quotaManager.testing", false);
user_pref("dom.registerProtocolHandler.insecure.enabled", false);
user_pref("dom.require_user_interaction_for_beforeunload", true);
user_pref("dom.script_loader.binast_encoding.domain.restrict.list", "*.facebook.com,static.xx.fbcdn.net,*.cloudflare.com,*.cloudflarestream.com,unpkg.com");
user_pref("dom.script_loader.binast_encoding.enabled", false);
user_pref("dom.script_loader.external_scripts.utf8_parsing.enabled", true);
user_pref("dom.securecontext.whitelist_onions", false);
user_pref("dom.security.respect_document_nosniff", true);
user_pref("dom.select_events.textcontrols.enabled", true);
user_pref("dom.select_popup_in_parent.enabled", false);
user_pref("dom.send_after_paint_to_content", false);
user_pref("dom.server-events.default-reconnection-time", 5000);
user_pref("dom.serviceWorkers.disable_open_click_delay", 1000);
user_pref("dom.serviceWorkers.enabled", true);
user_pref("dom.serviceWorkers.idle_extended_timeout", 300000);
user_pref("dom.serviceWorkers.idle_timeout", 30000);
user_pref("dom.serviceWorkers.testUpdateOverOneDay", false);
user_pref("dom.serviceWorkers.update_delay", 1000);
user_pref("dom.storage_access.enabled", false);
user_pref("dom.storage.abort_on_sync_parent_to_child_messages", false);
user_pref("dom.storage.client_validation", true);
user_pref("dom.storage.default_quota", 5120);
user_pref("dom.storage.enabled", true);
user_pref("dom.storage.next_gen", true);
user_pref("dom.storage.shadow_writes", true);
user_pref("dom.storage.snapshot_gradual_prefill", 4096);
user_pref("dom.storage.snapshot_prefill", 16384);
user_pref("dom.storage.snapshot_reusing", true);
user_pref("dom.storageManager.prompt.testing.allow", false);
user_pref("dom.storageManager.prompt.testing", false);
user_pref("dom.targetBlankNoOpener.enabled", true);
user_pref("dom.telephony.enabled", false);
user_pref("dom.testing.sync-content-blocking-notifications", false);
user_pref("dom.timeout.background_budget_regeneration_rate", 100);
user_pref("dom.timeout.background_throttling_max_budget", 50);
user_pref("dom.timeout.budget_throttling_max_delay", 15000);
user_pref("dom.timeout.enable_budget_timer_throttling", true);
user_pref("dom.timeout.foreground_budget_regeneration_rate", 1);
user_pref("dom.timeout.foreground_throttling_max_budget", -1);
user_pref("dom.timeout.max_consecutive_callbacks_ms", 4);
user_pref("dom.timeout.throttling_delay", 30000);
user_pref("dom.use_components_shim", true);
user_pref("dom.use_watchdog", true);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vibrator.max_vibrate_list_len", 128);
user_pref("dom.vibrator.max_vibrate_ms", 10000);
user_pref("dom.vr.autoactivate.enabled", false);
user_pref("dom.vr.controller_trigger_threshold", "0.1");
user_pref("dom.vr.controller.enumerate.interval", 1000);
user_pref("dom.vr.display.enumerate.interval", 5000);
user_pref("dom.vr.display.rafMaxDuration", 50);
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.external.notdetected.timeout", 60000);
user_pref("dom.vr.external.quit.timeout", 10000);
user_pref("dom.vr.inactive.timeout", 5000);
user_pref("dom.vr.navigation.timeout", 5000);
user_pref("dom.vr.oculus.invisible.enabled", true);
user_pref("dom.vr.oculus.present.timeout", 500);
user_pref("dom.vr.poseprediction.enabled", true);
user_pref("dom.vr.puppet.enabled", false);
user_pref("dom.vr.require-gesture", true);
user_pref("dom.w3c_pointer_events.implicit_capture", false);
user_pref("dom.w3c_pointer_events.multiprocess.android.enabled", true);
user_pref("dom.w3c_touch_events.enabled", 2);
user_pref("dom.wakelock.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("dom.webidl.test1", false);
user_pref("dom.webidl.test2", false);
user_pref("dom.webnotifications.allowcrossoriginiframe", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.requireinteraction.count", 3);
user_pref("dom.webnotifications.requireuserinteraction", true);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.window.history.async", true);
user_pref("dom.worker.script_loader.utf8_parsing.enabled", true);
user_pref("dom.workers.maxPerDomain", 512);
user_pref("dom.xhr.lowercase_header.enabled", true);
user_pref("editor.css.default_length_unit", "px");
user_pref("editor.inline_table_editing.enabled_by_default", false);
user_pref("editor.password.mask_delay", -1);
user_pref("editor.password.testing.mask_delay", false);
user_pref("editor.positioning.enabled_by_default", false);
user_pref("editor.positioning.offset", 0);
user_pref("editor.resizing.enabled_by_default", false);
user_pref("editor.resizing.preserve_ratio", true);
user_pref("editor.singleLine.pasteNewlines", 2);
user_pref("editor.use_css", false);
user_pref("editor.use_custom_colors", false);
user_pref("editor.use_div_for_default_newlines", true);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.abuseReport.enabled", true);
user_pref("extensions.abuseReport.url", ""); // https://addons.mozilla.org/api/v4/abuse/report/addon/
user_pref("extensions.allowPrivateBrowsingByDefault", true);
user_pref("extensions.autoDisableScopes", 14);
user_pref("extensions.blocklist.detailsURL", ""); // https://blocked.cdn.mozilla.net/
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.interval", 86400);
user_pref("extensions.blocklist.itemURL", "https://blocked.cdn.mozilla.net/%blockID%.html");
user_pref("extensions.blocklist.url", ""); // https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/
user_pref("extensions.CanvasBlocker@kkapsner.de.whiteList", ""); // optional
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.fxmonitor.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.discovery.api_url", ""); //https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%&edition=%DISTRIBUTION%"
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.enabled", false);
user_pref("extensions.htmlaboutaddons.inline-options.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.langpacks.signatures.required", false);
user_pref("extensions.legacy.enabled", true);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.privatebrowsing.notification", false); //removed
user_pref("extensions.recommendations.privacyPolicyUrl", "");
user_pref("extensions.recommendations.themeRecommendationUrl", "");
user_pref("extensions.screenshots.disabled", true); // removed
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.shield-recipe-client.first_run", false);
user_pref("extensions.shield-recipe-client.user_id", ""); // 14a0a78f-38a0-4468-bddd-d482c8950b3c
user_pref("extensions.spellcheck.inline.max-misspellings", 500);
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.update.autoUpdateDefault", true);
user_pref("extensions.update.enabled", true);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "https://webcompat.com/issues/new");
user_pref("extensions.webextensions.background-delayed-startup", false);
user_pref("extensions.webextensions.enablePerformanceCounters", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.enabled", true);
user_pref("extensions.webextensions.identity.redirectDomain", "extensions.allizom.org");
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);
user_pref("extensions.webextensions.performanceCountersMaxAge", 5000);
user_pref("extensions.webextensions.protocol.remote", true);
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("extensions.webextensions.tabhide.enabled", true);
user_pref("extensions.webextensions.userScripts.enabled", true);
user_pref("extensions.webExtensionsMinPlatformVersion", "42.0a1");
user_pref("extensions.webservice.discoverURL", "");
user_pref("findbar.entireword", false);
user_pref("findbar.highlightAll", false);
user_pref("findbar.iteratorTimeout", 100);
user_pref("findbar.modalHighlight", false);
user_pref("fission.autostart", false, locked);
user_pref("fission.preserve_browsing_contexts", false);
user_pref("fission.rebuild_frameloaders_on_remoteness_change", false);
user_pref("focusmanager.testmode", false);
user_pref("font.blacklist.underline_offset", "FangSong,Gulim,GulimChe,MingLiU,MingLiU-ExtB,MingLiU_HKSCS,MingLiU-HKSCS-ExtB,MS Gothic,MS Mincho,MS PGothic,MS PMincho,MS UI Gothic,PMingLiU,PMingLiU-ExtB,SimHei,SimSun,SimSun-ExtB,Hei,Kai,Apple LiGothic,Apple LiSung,Osaka");
user_pref("full-screen-api.enabled", false);
user_pref("full-screen-api.ignore-widgets", false);
user_pref("full-screen-api.pointer-lock.enabled", true);
user_pref("full-screen-api.transition-duration.enter", 0);
user_pref("full-screen-api.transition-duration.enter", 0);
user_pref("full-screen-api.transition-duration.leave", 0);
user_pref("full-screen-api.transition.timeout", 0);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("general.autoScroll", true);
user_pref("general.config.obscure_value", 13);
user_pref("general.document_open_conversion_depth_limit", 20);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.25");
user_pref("general.smoothScroll.durationToIntervalRatio", 200);
user_pref("general.smoothScroll.lines.durationMaxMS", 150);
user_pref("general.smoothScroll.lines.durationMinMS", 150);
user_pref("general.smoothScroll.lines", true);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 400);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 200);
user_pref("general.smoothScroll.mouseWheel", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 120);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 1000);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "1.3");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 600);
user_pref("general.smoothScroll.other.durationMaxMS", 150);
user_pref("general.smoothScroll.other.durationMinMS", 150);
user_pref("general.smoothScroll.other", true);
user_pref("general.smoothScroll.pages.durationMaxMS", 150);
user_pref("general.smoothScroll.pages.durationMinMS", 150);
user_pref("general.smoothScroll.pages", true);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("general.smoothScroll.pixels.durationMaxMS", 150);
user_pref("general.smoothScroll.pixels.durationMinMS", 150);
user_pref("general.smoothScroll.pixels", true);
user_pref("general.smoothScroll.scrollbars.durationMaxMS", 150);
user_pref("general.smoothScroll.scrollbars.durationMinMS", 150);
user_pref("general.smoothScroll.scrollbars", true);
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.4");
user_pref("general.useragent.compatMode.firefox", false);
user_pref("general.useragent.site_specific_overrides", true);
user_pref("general.warnOnAboutConfig", false);
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.timeout", 0);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.wifi.xhr.timeout", 60000);
user_pref("gesture.swipeLeft", "");
user_pref("gesture.swipeRight", "");
user_pref("gestures.enable_single_finger_input", true);
user_pref("gfx.blocklist.all", 0);
user_pref("gfx.canvas.azure.accelerated", true);
user_pref("gfx.canvas.azure.backends", "direct2d1.1,skia");
user_pref("gfx.canvas.remote", false);
user_pref("gfx.color_management.display_profile", "");
user_pref("gfx.color_management.enablev4", false);
user_pref("gfx.color_management.mode", 0);
user_pref("gfx.color_management.rendering_intent", 0);
user_pref("gfx.compositor.glcontext.opaque", false);
user_pref("gfx.content.always-paint", false);
user_pref("gfx.content.azure.accelerated", true);
user_pref("gfx.content.azure.backends", "direct2d1.1,skia");
user_pref("gfx.core-animation.enabled", false);
user_pref("gfx.crash-guard.status.wmfvpxvideo", 0);
user_pref("gfx.direct2d.destroy-dt-on-paintthread", true);
user_pref("gfx.direct2d.disabled", false);
user_pref("gfx.direct3d11.use-double-buffering", false);
user_pref("gfx.downloadable_fonts.disable_cache", true);
user_pref("gfx.downloadable_fonts.enabled", true); // uBlock
user_pref("gfx.downloadable_fonts.fallback_delay_short", 100);
user_pref("gfx.downloadable_fonts.fallback_delay", 3000);
user_pref("gfx.downloadable_fonts.keep_color_bitmaps", false);
user_pref("gfx.downloadable_fonts.otl_validation", true);
user_pref("gfx.downloadable_fonts.validate_variation_tables", true);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
user_pref("gfx.draw-color-bars", false);
user_pref("gfx.font_ahem_antialias_none", false);
user_pref("gfx.font_loader.delay", 8000);
user_pref("signon.storeSignons", true);
user_pref("signon.include.OtherSubdomainsInLookup", false);
user_pref("gfx.font_loader.interval", 50);
user_pref("gfx.font_rendering.ahem_antialias_none", false); // set to true if blurry
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", -1);
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", -1);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "Arial,Consolas,Courier New,Microsoft Sans Serif,Segoe UI,Tahoma,Trebuchet MS,Verdana");
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 15);
user_pref("gfx.font_rendering.cleartype_params.gamma", -1);
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", -1);
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5); // -1
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", true);
user_pref("gfx.font_rendering.fallback.always_use_cmaps", false);
user_pref("gfx.font_rendering.fontconfig.max_generic_substitutions", 3);
user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.font_rendering.wordcache.charlimit", 32);
user_pref("gfx.font_rendering.wordcache.maxentries", 10000);
user_pref("gfx.hidpi.enabled", 2);
user_pref("gfx.layerscope.enabled", false);
user_pref("gfx.layerscope.port", 23456);
user_pref("gfx.logging.painted-pixel-count.enabled", false);
user_pref("gfx.missing_fonts.notify", false);
user_pref("gfx.perf-warnings.enabled", false);
user_pref("gfx.use_text_smoothing_setting", false);
user_pref("gfx.vr.osvr.clientKitLibPath", "");
user_pref("gfx.vr.osvr.clientLibPath", "");
user_pref("gfx.vr.osvr.commonLibPath", "");
user_pref("gfx.vr.osvr.utilLibPath", "");
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.blob-images", true);
user_pref("gfx.webrender.blob.paint-flashing", false);
user_pref("gfx.webrender.dcomp-win-triple-buffering.enabled", true);
user_pref("gfx.webrender.dcomp-win.enabled", true);
user_pref("gfx.webrender.debug.alpha-primitives", false);
user_pref("gfx.webrender.debug.compact-profiler", false);
user_pref("gfx.webrender.debug.disable-batching", false);
user_pref("gfx.webrender.debug.echo-driver-messages", false);
user_pref("gfx.webrender.debug.epochs", false);
user_pref("gfx.webrender.debug.gpu-cache", false);
user_pref("gfx.webrender.debug.gpu-sample-queries", false);
user_pref("gfx.webrender.debug.gpu-time-queries", false);
user_pref("gfx.webrender.debug.new-frame-indicator", false);
user_pref("gfx.webrender.debug.new-scene-indicator", false);
user_pref("gfx.webrender.debug.picture-caching", false);
user_pref("gfx.webrender.debug.primitives", false);
user_pref("gfx.webrender.debug.profiler", true);
user_pref("gfx.webrender.debug.render-targets", false);
user_pref("gfx.webrender.debug.show-overdraw", false);
user_pref("gfx.webrender.debug.slow-frame-indicator", false);
user_pref("gfx.webrender.debug.small-screen", false);
user_pref("gfx.webrender.debug.texture-cache.clear-evicted", true);
user_pref("gfx.webrender.debug.texture-cache", false);
user_pref("gfx.webrender.dl.dump-content", false);
user_pref("gfx.webrender.dl.dump-parent", false);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.flip-sequential", false);
user_pref("gfx.webrender.force-angle", true);
user_pref("gfx.webrender.force-disabled", true); // Workaround for FF69 stutter + responsive issue
user_pref("gfx.webrender.highlight-painted-layers", false);
user_pref("gfx.webrender.picture-caching", true);
user_pref("gfx.webrender.program-binary-disk", true);
user_pref("gfx.webrender.start-debug-server", false);
user_pref("gfx.webrender.triple-buffering.enabled", true);
user_pref("gfx.xrender.enabled",false);
user_pref("gfx.ycbcr.accurate-conversion", false);
user_pref("gl.allow-high-power", true);
user_pref("gl.ignore-dx-interop2-blacklist", false);
user_pref("gl.use-tls-is-current", 0);
user_pref("html5.offmainthread", true);
user_pref("identity.fxaccounts.auth.uri", ""); // https://api.accounts.firefox.com/v1
user_pref("identity.fxaccounts.enabled", false); // removed
user_pref("identity.fxaccounts.service.monitorLoginUrl", ""); // https://monitor.firefox.com/
user_pref("identity.fxaccounts.service.sendLoginUrl", ""); // https://send.firefox.com/login/
user_pref("idle_period.during_page_load.min", 12);
user_pref("idle_period.min", 3);
user_pref("image.animated.decode-on-demand.batch-size", 6);
user_pref("image.animated.decode-on-demand.threshold-kb", 20480);
user_pref("image.animated.resume-from-last-displayed", true);
user_pref("image.animation_mode", "normal");
user_pref("image.cache.factor2.threshold-surfaces", 4);
user_pref("image.cache.max-rasterized-svg-threshold-kb", 204800);
user_pref("image.decode-immediately.enabled", false);
user_pref("image.downscale-during-decode.enabled", true);
user_pref("image.http.accept", "*/\*");
user_pref("image.infer-src-animation.threshold-ms", 2000);
user_pref("signon.management.page.showPasswordSyncNotification", false);
user_pref("image.layout_network_priority", true);
user_pref("image.mem.allow_locking_in_content_processes", true);
user_pref("image.mem.animated.use_heap", false);
user_pref("image.mem.debug-reporting", false);
user_pref("image.mem.discardable", true);
user_pref("image.mem.shared", true);
user_pref("image.mem.volatile.min_threshold_kb", -1);
user_pref("image.webp.enabled", false);
user_pref("input_event_queue.count_for_prediction", 9);
user_pref("input_event_queue.default_duration_per_event", 1);
user_pref("input_event_queue.duration.max", 8);
user_pref("input_event_queue.duration.min", 1);
user_pref("input_event_queue.supported", true);
user_pref("intl.accept_languages", "en-US, en");
user_pref("intl.charset.fallback.override", "");
user_pref("intl.charset.fallback.tld", true);
user_pref("intl.charset.fallback.utf8_for_file", false); // removed
user_pref("intl.fallbackCharsetList.ISO-8859-1", "windows-1252");
user_pref("intl.hyphenate-capitalized.de-1901", true);
user_pref("intl.hyphenate-capitalized.de-1996", true);
user_pref("intl.hyphenate-capitalized.de-CH", true);
user_pref("intl.hyphenation-alias.af-*", "af");
user_pref("intl.hyphenation-alias.bg-*", "bg");
user_pref("intl.hyphenation-alias.bs-*", "sh");
user_pref("intl.hyphenation-alias.bs", "sh");
user_pref("intl.hyphenation-alias.ca-*", "ca");
user_pref("intl.hyphenation-alias.cy-*", "cy");
user_pref("intl.hyphenation-alias.da-*", "da");
user_pref("intl.hyphenation-alias.de-*", "de-1996");
user_pref("intl.hyphenation-alias.de-AT-1901", "de-1901");
user_pref("intl.hyphenation-alias.de-CH-*", "de-CH");
user_pref("intl.hyphenation-alias.de-DE-1901", "de-1901");
user_pref("intl.hyphenation-alias.de", "de-1996");
user_pref("intl.hyphenation-alias.en-*", "en-us");
user_pref("intl.hyphenation-alias.en", "en-us");
user_pref("intl.hyphenation-alias.eo-*", "eo");
user_pref("intl.hyphenation-alias.es-*", "es");
user_pref("intl.hyphenation-alias.et-*", "et");
user_pref("intl.hyphenation-alias.fi-*", "fi");
user_pref("intl.hyphenation-alias.fr-*", "fr");
user_pref("intl.hyphenation-alias.gl-*", "gl");
user_pref("intl.hyphenation-alias.hr-*", "hr");
user_pref("intl.hyphenation-alias.hsb-*", "hsb");
user_pref("intl.hyphenation-alias.hu-*", "hu");
user_pref("intl.hyphenation-alias.ia-*", "ia");
user_pref("intl.hyphenation-alias.is-*", "is");
user_pref("intl.hyphenation-alias.it-*", "it");
user_pref("intl.hyphenation-alias.kmr-*", "kmr");
user_pref("intl.hyphenation-alias.la-*", "la");
user_pref("intl.hyphenation-alias.lt-*", "lt");
user_pref("intl.hyphenation-alias.mn-*", "mn");
user_pref("intl.hyphenation-alias.nb-*", "nb");
user_pref("intl.hyphenation-alias.nl-*", "nl");
user_pref("intl.hyphenation-alias.nn-*", "nn");
user_pref("intl.hyphenation-alias.no-*", "nb");
user_pref("intl.hyphenation-alias.no", "nb");
user_pref("intl.hyphenation-alias.pl-*", "pl");
user_pref("intl.hyphenation-alias.pt-*", "pt");
user_pref("intl.hyphenation-alias.ru-*", "ru");
user_pref("intl.hyphenation-alias.sh-*", "sh");
user_pref("intl.hyphenation-alias.sl-*", "sl");
user_pref("intl.hyphenation-alias.sr-*", "sh");
user_pref("intl.hyphenation-alias.sr", "sh");
user_pref("intl.hyphenation-alias.sv-*", "sv");
user_pref("intl.hyphenation-alias.tr-*", "tr");
user_pref("intl.hyphenation-alias.uk-*", "uk");
user_pref("intl.ime.remove_placeholder_character_at_commit", false);
user_pref("intl.ime.use_simple_context_on_password_field", false);
user_pref("intl.imm.composition_font.japanist_2003", "MS PGothic");
user_pref("intl.imm.composition_font", "");
user_pref("intl.imm.japanese.assume_active_tip_name_as", "");
user_pref("intl.imm.vertical_writing.always_assume_not_supported", false);
user_pref("intl.keyboard.per_window_layout", false);
user_pref("intl.locale.matchOS", false);
user_pref("intl.locale.requested", "en-US");
user_pref("intl.regional_prefs.use_os_locales", false);
user_pref("intl.tsf.associate_imc_only_when_imm_ime_is_active", false);
user_pref("intl.tsf.enable", true);
user_pref("intl.tsf.hack.allow_to_stop_hacking_on_build_17643_or_later", false);
user_pref("intl.tsf.hack.atok.create_native_caret", true);
user_pref("intl.tsf.hack.atok.do_not_return_no_layout_error_of_composition_string", true);
user_pref("intl.tsf.hack.free_chang_jie.do_not_return_no_layout_error", true);
user_pref("intl.tsf.hack.japanist10.do_not_return_no_layout_error_of_composition_string", true);
user_pref("intl.tsf.hack.ms_japanese_ime.do_not_return_no_layout_error_at_caret", true);
user_pref("intl.tsf.hack.ms_japanese_ime.do_not_return_no_layout_error_at_first_char", true);
user_pref("intl.tsf.hack.ms_simplified_chinese.do_not_return_no_layout_error", true);
user_pref("intl.tsf.hack.ms_simplified_chinese.query_insert_result", true);
user_pref("intl.tsf.hack.ms_traditional_chinese.do_not_return_no_layout_error", true);
user_pref("intl.tsf.hack.ms_traditional_chinese.query_insert_result", true);
user_pref("intl.tsf.support_imm", true);
user_pref("intl.uidirection", -1);
user_pref("io.activity.enabled", false);
user_pref("javascript.enabled", true);
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.asyncstack", false);
user_pref("javascript.options.baselinejit.threshold", 80);
user_pref("javascript.options.baselinejit", true);
user_pref("javascript.options.blinterp.threshold", 10); // removed
user_pref("javascript.options.blinterp", true); // removed
user_pref("javascript.options.discardSystemSource", false);
user_pref("javascript.options.dump_stack_on_debuggee_would_run", false);
user_pref("javascript.options.dynamicImport", true);
user_pref("javascript.options.gc_delay.first", 10000);
user_pref("javascript.options.gc_delay.full", 60000);
user_pref("javascript.options.gc_delay.interslice", 100);
user_pref("javascript.options.gc_delay", 4000); // removed
user_pref("javascript.options.ion.frequent_bailout_threshold", 10);
user_pref("javascript.options.ion.full.threshold", 100000);
user_pref("javascript.options.ion.offthread_compilation", true);
user_pref("javascript.options.ion.threshold", 1000);
user_pref("javascript.options.ion", false);
user_pref("javascript.options.jit.full_debug_checks", false);
user_pref("javascript.options.mem.gc_allocation_threshold_factor_avoid_interrupt", 90);
user_pref("javascript.options.mem.gc_allocation_threshold_factor", 90);
user_pref("javascript.options.mem.gc_allocation_threshold_mb", 25);
user_pref("javascript.options.mem.gc_avoid_interrupt_factor", 100);
user_pref("javascript.options.mem.gc_compacting", true);
user_pref("javascript.options.mem.gc_dynamic_heap_growth", true);
user_pref("javascript.options.mem.gc_dynamic_mark_slice", true);
user_pref("javascript.options.mem.gc_high_frequency_heap_growth_max", 300);
user_pref("javascript.options.mem.gc_high_frequency_heap_growth_min", 150);
user_pref("javascript.options.mem.gc_high_frequency_high_limit_mb", 500);
user_pref("javascript.options.mem.gc_high_frequency_low_limit_mb", 100);
user_pref("javascript.options.mem.gc_high_frequency_time_limit_ms", 1000);
user_pref("javascript.options.mem.gc_incremental_slice_ms", 5);
user_pref("javascript.options.mem.gc_incremental", true);
user_pref("javascript.options.mem.gc_low_frequency_heap_growth", 150);
user_pref("javascript.options.mem.gc_max_empty_chunk_count", 30);
user_pref("javascript.options.mem.gc_min_empty_chunk_count", 1);
user_pref("javascript.options.mem.gc_non_incremental_factor", 112);
user_pref("javascript.options.mem.gc_per_zone", true);
user_pref("javascript.options.mem.high_water_mark", 128);
user_pref("javascript.options.mem.max", -1);
user_pref("javascript.options.mem.nursery.max_kb", 16384);
user_pref("javascript.options.mem.nursery.min_kb", 256);
user_pref("javascript.options.native_regexp", true);
user_pref("javascript.options.parallel_parsing", true);
user_pref("javascript.options.shared_memory", false);
user_pref("javascript.options.showInConsole", false);
user_pref("javascript.options.streams", true);
user_pref("javascript.options.strict.debug", false);
user_pref("javascript.options.strict", false);
user_pref("javascript.options.throw_on_asmjs_validation_failure", false);
user_pref("javascript.options.throw_on_debuggee_would_run", false);
user_pref("javascript.options.unboxed_objects", false);
user_pref("javascript.options.wasm_baselinejit", true);
user_pref("javascript.options.wasm_cranelift", false);
user_pref("javascript.options.wasm_gc", false);
user_pref("javascript.options.wasm_ionjit", true);
user_pref("javascript.options.wasm_verbose", false);
user_pref("javascript.options.wasm", false);
user_pref("javascript.use_us_english_locale", true);
user_pref("javascript.options.bigint", false);
user_pref("jsloader.shareGlobal", true);
user_pref("keyword.enabled", false);
user_pref("layers.acceleration.draw-fps", false);
user_pref("layers.acceleration.force-enabled", true);
user_pref("layers.bench.enabled", false);
user_pref("layers.child-process-shutdown", true);
user_pref("layers.compositing-tiles.width", 1024);
user_pref("layers.d3d11.enable-blacklist", true); // false
user_pref("layers.draw-bigimage-borders", false);
user_pref("layers.draw-borders", false);
user_pref("layers.draw-mask-debug", false);
user_pref("layers.draw-tile-borders", false);
user_pref("layers.dump-client-layers", false);
user_pref("layers.dump-decision", false);
user_pref("layers.dump-host-layers", false);
user_pref("layers.dump-texture", false);
user_pref("layers.dump", false);
user_pref("layers.force-active", false);
user_pref("layers.geometry.basic.enabled", true);
user_pref("layers.geometry.d3d11.enabled", true);
user_pref("layers.geometry.opengl.enabled", true);
user_pref("layers.low-precision-buffer", false);
user_pref("layers.mlgpu.enable-on-windows7", true);
user_pref("layers.offmainthreadcomposition.async-animations", true);
user_pref("layers.offmainthreadcomposition.enabled", true);
user_pref("layers.offmainthreadcomposition.frame-rate", -1);
user_pref("layers.offmainthreadcomposition.log-animations", false);
user_pref("layers.omtp.dump-capture", false);
//user_pref("layers.omtp.paint-workers", 4);
//user_pref("layers.enable-tiles", true);
user_pref("layers.omtp.release-capture-on-main-thread", false);
user_pref("layers.progressive-paint", false);
user_pref("layers.shared-buffer-provider.enabled", true);
user_pref("layers.single-tile.enabled", true);
user_pref("layers.tiles.edge-padding", false);
user_pref("layers.tiles.retain-back-buffer", true);
user_pref("layout.animated-image-layers.enabled", false);
user_pref("layout.animation.prerender.absolute-limit-x", 4096);
user_pref("layout.animation.prerender.absolute-limit-y", 4096);
user_pref("layout.animation.prerender.partial", false);
user_pref("layout.animation.prerender.viewport-ratio-limit-x", "1.125");
user_pref("layout.animation.prerender.viewport-ratio-limit-y", "1.125");
user_pref("layout.css.aspect-ratio-number.enabled", false);
user_pref("layout.css.devPixelsPerPx", "-1.0");
user_pref("layout.css.dpi", -1);
user_pref("layout.css.outline-style-auto.enabled", false);
user_pref("layout.css.paint-order.enabled", true);
user_pref("layout.css.report_errors", true);
user_pref("layout.css.ruby.intercharacter.enabled", false);
user_pref("layout.css.scroll-behavior.damping-ratio", "1.0");
user_pref("layout.css.scroll-behavior.enabled", true);
user_pref("layout.css.scroll-behavior.spring-constant", "250.0");
user_pref("layout.css.scroll-snap.prediction-max-velocity", 2000);
user_pref("layout.css.scroll-snap.prediction-sensitivity", "0.750");
user_pref("layout.css.scroll-snap.proximity-threshold", 200);
user_pref("layout.css.servo.enable", true);
user_pref("layout.css.shared-memory-ua-sheets.enabled", true);
user_pref("layout.css.text-decoration-skip-ink.enabled", true);
user_pref("layout.css.text-decoration-thickness.enabled", true);
user_pref("layout.css.text-underline-offset.enabled", true);
user_pref("layout.css.use-counters-unimplemented.enabled", false);
user_pref("layout.css.visited_links_enabled", false);
user_pref("layout.display-list.dump-content", false);
user_pref("layout.display-list.dump-parent", false);
user_pref("layout.display-list.dump", false);
user_pref("layout.display-list.rebuild-frame-limit", 500);
user_pref("layout.float-fragments-inside-column.enabled", true);
user_pref("layout.frame_rate.precise", true); // false, in case you have scrolling issues
user_pref("layout.frame_rate", 144);
user_pref("layout.framevisibility.amountscrollbeforeupdatehorizontal", 2);
user_pref("layout.framevisibility.amountscrollbeforeupdatevertical", 2);
user_pref("layout.framevisibility.enabled", true);
user_pref("layout.framevisibility.numscrollportheights", 1);
user_pref("layout.framevisibility.numscrollportwidths", 0);
user_pref("layout.idle_period.required_quiescent_frames", 2);
user_pref("layout.idle_period.time_limit", 1);
user_pref("layout.interruptible-reflow.enabled", true);
user_pref("layout.reflow.synthMouseMove", true);
user_pref("layout.scroll.root-frame-containers", false);
user_pref("layout.scrollbar.side", 0);
user_pref("layout.scrollbars.always-layerize-track", false);
user_pref("layout.selection.caret_style", 0);
user_pref("layout.spammy_warnings.enabled", false);
user_pref("layout.spellcheckDefault", 2);
user_pref("layout.testing.overlay-scrollbars.always-visible", false);
user_pref("layout.viewport_contains_no_contents_area", false);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("layout.word_select.stop_at_punctuation", true);
user_pref("layout.word_select.stop_at_underscore", false);
user_pref("logging.config.clear_on_startup", true);
user_pref("loop.logDomains", false);
user_pref("mathml.deprecated_style_attributes.disabled", false);
user_pref("mathml.disabled", false);
user_pref("mathml.legacy_number_syntax.disabled", true);
user_pref("mathml.mathsize_names.disabled", false);
user_pref("mathml.mathspace_names.disabled", false);
user_pref("mathml.mfrac_linethickness_names.disabled", false);
user_pref("mathml.nonzero_unitless_lengths.disabled", true);
user_pref("mathml.scale_stretchy_operators.enabled", true);
user_pref("media.audioFocus.management", false);
user_pref("media.audiograph.single_thread.enabled", false);
user_pref("media.audioipc.pool_size", 2);
user_pref("media.audioipc.stack_size", 262144);
user_pref("media.autoplay.allow-extension-background-pages", true);
user_pref("media.autoplay.allow-muted", false);
user_pref("media.autoplay.blackList-override-default", true);
user_pref("media.autoplay.block-webaudio", true);
user_pref("media.autoplay.blocked", 1);
user_pref("media.autoplay.default", 5);
user_pref("media.autoplay.enabled.user-gestures-needed", false);
user_pref("media.av1.enabled", true);
user_pref("media.av1.use-dav1d", true);
user_pref("media.benchmark.frames", 300);
user_pref("media.benchmark.timeout", 1000);
user_pref("media.benchmark.vp9.threshold", 150);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("media.cloneElementVisually.testing", false);
user_pref("media.cubeb.logging_level", "");
user_pref("media.decoder-doctor.decode-errors-allowed", "");
user_pref("media.decoder-doctor.decode-warnings-allowed", "");
user_pref("media.decoder-doctor.new-issue-endpoint", "); // https://webcompat.com/issues/new"
user_pref("media.decoder-doctor.notifications-allowed", "MediaWMFNeeded,MediaWidevineNoWMF,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec");
user_pref("media.decoder-doctor.verbose", false);
user_pref("media.default_volume", "1.0");
user_pref("media.eme.enabled", false);
user_pref("media.encoder.webm.enabled", true);
user_pref("media.getusermedia.aec_enabled", false);
user_pref("media.getusermedia.aec_extended_filter", true);
user_pref("media.getusermedia.aec", 1);
user_pref("media.getusermedia.agc_enabled", true);
user_pref("media.getusermedia.agc", 1);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.camera.off_while_disabled.delay_ms", 3000);
user_pref("media.getusermedia.camera.off_while_disabled.enabled", true);
user_pref("media.getusermedia.channels", 0);
user_pref("media.getusermedia.noise_enabled", false);
user_pref("media.getusermedia.noise", 1);
user_pref("media.getusermedia.use_aec_mobile", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.cert.checkAttributes", true);
user_pref("media.gmp-manager.cert.requireBuiltIn", true);
user_pref("media.gmp-manager.certs.1.commonName", "aus5.mozilla.org");
user_pref("media.gmp-manager.certs.1.issuerName", "CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US");
user_pref("media.gmp-manager.certs.2.commonName", "aus5.mozilla.org");
user_pref("media.gmp-manager.certs.2.issuerName", "CN=thawte SSL CA - G2,O=\"thawte, Inc.\",C=US");
user_pref("media.gmp-manager.url", "");
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp.decoder.aac", 0);
user_pref("media.gmp.decoder.h264", 0);
user_pref("media.gmp.storage.version.expected", 1);
user_pref("media.gpu-process-decoder", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.media-capabilities.enabled", false);
user_pref("media.media-capabilities.screen.enabled", false);
user_pref("media.mediacapabilities.drop-threshold", 95);
user_pref("media.mediacapabilities.from-database", true);
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.experimental.enabled", false);
user_pref("media.mediasource.mp4.enabled", true);
user_pref("media.mediasource.webm.audio.enabled", true);
user_pref("media.mediasource.webm.enabled", false);
user_pref("media.navigator.audio.fake_frequency", 1000);
user_pref("media.navigator.audio.full_duplex", true);
user_pref("media.navigator.audio.use_fec", true);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.mediadatadecoder_h264_enabled", true);
user_pref("media.navigator.mediadatadecoder_vpx_enabled", true);
user_pref("media.navigator.permission.disabled", false);
user_pref("media.navigator.streams.fake", false);
user_pref("media.navigator.video.default_fps", 60);
user_pref("media.navigator.video.default_height", 0);
user_pref("media.navigator.video.default_width", 0);
user_pref("media.navigator.video.enabled", false);
user_pref("media.navigator.video.h264.level", 31);
user_pref("media.navigator.video.h264.max_br", 0);
user_pref("media.navigator.video.h264.max_mbps", 0);
user_pref("media.navigator.video.max_fr", 60);
user_pref("media.navigator.video.max_fs", 12288);
user_pref("media.navigator.video.red_ulpfec_enabled", false);
user_pref("media.navigator.video.use_remb", true);
user_pref("media.navigator.video.use_tmmbr", false);
user_pref("media.omt_data_delivery.enabled", true);
user_pref("media.ondevicechange.fakeDeviceChangeEvent.enabled", false);
user_pref("media.opus.enabled", true);
user_pref("media.peerconnection.default_iceservers", "[]");
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.link_local", false);
user_pref("media.peerconnection.ice.loopback", false);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.obfuscate_host_addresses", false);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", false);
user_pref("media.peerconnection.ice.proxy_only", false);
user_pref("media.peerconnection.ice.relay_only", false);
user_pref("media.peerconnection.ice.stun_client_maximum_transmits", 7);
user_pref("media.peerconnection.ice.tcp_so_sock_count", 0);
user_pref("media.peerconnection.ice.tcp", true);
user_pref("media.peerconnection.ice.trickle_grace_period", 5000);
user_pref("media.peerconnection.identity.timeout", 10000);
user_pref("media.peerconnection.mtransport_process", false);
user_pref("media.peerconnection.sdp.rust.compare", false);
user_pref("media.peerconnection.sdp.rust.compare", true);
user_pref("media.peerconnection.sdp.rust.enabled", false);
user_pref("media.peerconnection.sdp.rust.enabled", true);
user_pref("media.peerconnection.simulcast", true);
user_pref("media.peerconnection.turn.disable", false);
user_pref("media.peerconnection.use_document_iceservers", true);
user_pref("media.peerconnection.video.denoising", false);
user_pref("media.peerconnection.video.enabled", true);
user_pref("media.peerconnection.video.max_bitrate", 0);
user_pref("media.peerconnection.video.min_bitrate_estimate", 0);
user_pref("media.peerconnection.video.min_bitrate", 0);
user_pref("media.peerconnection.video.start_bitrate", 0);
user_pref("media.peerconnection.video.vp9_enabled", true);
user_pref("media.peerconnection.video.vp9_preferred", false);
user_pref("media.play-stand-alone", true);
user_pref("media.rdd-opus.enabled", true);
user_pref("media.rdd-wav.enabled", false);
user_pref("media.recorder.audio_node.enabled", false);
user_pref("media.recorder.video.frame_drops", true);
user_pref("media.throttle-factor", 2);
user_pref("media.throttle-regardless-of-download-rate", false);
user_pref("media.useAudioChannelAPI", false);
user_pref("media.video_stats.enabled", false);
user_pref("media.video-queue.default-size", 10);
user_pref("media.video-queue.send-to-compositor-size", 9999);
user_pref("media.videocontrols.picture-in-picture.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.flyout-enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.flyout-wait-ms", 5000);
user_pref("media.volume_scale", "1.0");
user_pref("media.wave.enabled", true);
user_pref("media.webm.enabled", true);
user_pref("media.webrtc.debug.aec_dump_max_size", 4194304);
user_pref("media.webrtc.debug.log_file", "");
user_pref("media.webrtc.debug.multi_log", false);
user_pref("media.webrtc.debug.trace_mask", 0);
user_pref("media.webrtc.net.force_disable_rtcp_reception", false);
user_pref("media.webrtc.platformencoder", false);
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.webvtt.debug.logging", false);
user_pref("media.webvtt.pseudo.enabled", true);
user_pref("media.wmf.allow-unsupported-resolutions", false);
user_pref("media.wmf.amd.highres.enabled", true);
user_pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process", false); // removed
user_pref("media.wmf.disable-d3d11-for-dlls", "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2884, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2884, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 22.21.13.8253, 22.21.13.8233, 22.21.13.8205, 22.21.13.8189, 22.21.13.8178, 22.21.13.8165, 21.21.13.7892, 21.21.13.7878, 21.21.13.7866, 21.21.13.7849, 21.21.13.7654, 21.21.13.7653, 21.21.13.7633, 21.21.13.7619, 21.21.13.7563, 21.21.13.7306, 21.21.13.7290, 21.21.13.7270, 21.21.13.7254, 21.21.13.6939, 21.21.13.6926, 21.21.13.6909, 21.21.13.4201, 21.21.13.4200, 10.18.13.6881, 10.18.13.6839, 10.18.13.6510, 10.18.13.6472, 10.18.13.6143, 10.18.13.5946, 10.18.13.5923, 10.18.13.5921, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5445, 10.18.13.5382, 10.18.13.5362, 9.18.13.4788, 9.18.13.4752, 9.18.13.4725, 9.18.13.4709, 9.18.13.4195, 9.18.13.4192, 9.18.13.4144, 9.18.13.4052, 9.18.13.3788, 9.18.13.3523, 9.18.13.3235, 9.18.13.3165, 9.18.13.2723, 9.18.13.2702, 9.18.13.1422, 9.18.13.1407, 9.18.13.1106, 9.18.13.546; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822");
user_pref("media.wmf.disable-d3d9-for-dlls", "igdumd64.dll: 8.15.10.2189, 8.15.10.2119, 8.15.10.2104, 8.15.10.2102, 8.771.1.0; atiumd64.dll: 7.14.10.833, 7.14.10.867, 7.14.10.885, 7.14.10.903, 7.14.10.911, 8.14.10.768, 9.14.10.1001, 9.14.10.1017, 9.14.10.1080, 9.14.10.1128, 9.14.10.1162, 9.14.10.1171, 9.14.10.1183, 9.14.10.1197, 9.14.10.945, 9.14.10.972, 9.14.10.984, 9.14.10.996");
user_pref("media.wmf.dxva.d3d11.enabled", true);
user_pref("media.wmf.dxva.enabled", true);
user_pref("media.wmf.dxva.max-videos", 8);
user_pref("media.wmf.force.allow-p010-format", false);
user_pref("media.wmf.low-latency.enabled", false);
user_pref("media.wmf.low-latency.force-disabled", false);
user_pref("media.wmf.play-stand-alone", true);
user_pref("media.wmf.use-nv12-format", true);
user_pref("memory_info_dumper.watch_fifo.enabled", false);
user_pref("memory.blob_report.stack_frames", 0);
user_pref("memory.dump_reports_on_oom", false);
user_pref("memory.ghost_window_timeout_seconds", 60);
user_pref("memory.report_concurrency", 10);
user_pref("middlemouse.contentLoadURL", false);
user_pref("middlemouse.openNewWindow", true);
user_pref("middlemouse.paste", false);
user_pref("middlemouse.scrollbarPosition", true);
user_pref("mousewheel.acceleration.factor", 10);
user_pref("mousewheel.acceleration.start", -1);
user_pref("mousewheel.autodir.enabled", false);
user_pref("mousewheel.autodir.honourroot", false);
user_pref("mousewheel.debug.make_window_under_cursor_foreground", false);
user_pref("mousewheel.default.action.override_x", -1);
user_pref("mousewheel.default.action", 1);
user_pref("mousewheel.default.delta_multiplier_x", 100);
user_pref("mousewheel.default.delta_multiplier_y", 100);
user_pref("mousewheel.default.delta_multiplier_z", 100);
user_pref("mousewheel.emulate_at_wm_scroll", false);
user_pref("mousewheel.min_line_scroll_amount", 5);
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 200);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 420);
user_pref("mousewheel.system_settings_cache.enabled", true);
user_pref("mousewheel.system_settings_cache.force_enabled", false);
user_pref("mousewheel.transaction.ignoremovedelay", 100);
user_pref("mousewheel.transaction.timeout", 1500);
user_pref("mousewheel.with_alt.action.override_x", -1);
user_pref("mousewheel.with_alt.action", 2);
user_pref("mousewheel.with_alt.delta_multiplier_x", 100);
user_pref("mousewheel.with_alt.delta_multiplier_y", 100);
user_pref("mousewheel.with_alt.delta_multiplier_z", 100);
user_pref("mousewheel.with_control.action.override_x", -1);
user_pref("mousewheel.with_control.action", 3);
user_pref("mousewheel.with_control.delta_multiplier_x", 100);
user_pref("mousewheel.with_control.delta_multiplier_y", 100);
user_pref("mousewheel.with_control.delta_multiplier_z", 100);
user_pref("mousewheel.with_shift.action.override_x", -1);
user_pref("mousewheel.with_shift.action", 4);
user_pref("mousewheel.with_shift.delta_multiplier_x", 100);
user_pref("mousewheel.with_shift.delta_multiplier_y", 100);
user_pref("mousewheel.with_shift.delta_multiplier_z", 100);
user_pref("mousewheel.with_win.action.override_x", -1);
user_pref("mousewheel.with_win.action", 1);
user_pref("mousewheel.with_win.delta_multiplier_x", 100);
user_pref("mousewheel.with_win.delta_multiplier_y", 100);
user_pref("mousewheel.with_win.delta_multiplier_z", 100);
user_pref("narrate.filter-voices", true);
user_pref("narrate.rate", 0);
user_pref("narrate.test", false);
user_pref("narrate.voice", " { \"default\": \"automatic\" }");
user_pref("network.allow-experiments", false);
user_pref("network.auth.force-generic-ntlm-v1", false);
user_pref("network.auth.force-generic-ntlm", false);
user_pref("network.auth.private-browsing-sso", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("network.auth.use-sspi", true);
user_pref("network.automatic-ntlm-auth.allow-non-fqdn", false);
user_pref("network.automatic-ntlm-auth.allow-proxies", true);
user_pref("network.automatic-ntlm-auth.trusted-uris", "");
user_pref("network.buffer.cache.count", 24);
user_pref("network.buffer.cache.size",  32768);
user_pref("network.captive-portal-service.backoffFactor", "5.0");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.maxInterval", 1500000);
user_pref("network.captive-portal-service.minInterval", 60000);
user_pref("network.connectivity-service.DNSv4.domain", ""); // mozilla.org
user_pref("network.connectivity-service.DNSv6.domain", ""); // ^^
user_pref("network.connectivity-service.enabled", false);
user_pref("network.connectivity-service.IPv4.url", "http://0.0.0.0"); // http://detectportal.firefox.com/success.txt?ipv4
user_pref("network.connectivity-service.IPv6.url", "http://0.0.0.0"); // http://detectportal.firefox.com/success.txt?ipv6
user_pref("network.cookie.cookieBehavior", 2);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.maxNumber", 3000);
user_pref("network.cookie.maxPerHost", 180);
user_pref("network.cookie.move.interval_sec", 10);
user_pref("network.cookie.prefsMigrated", true);
user_pref("network.cookie.quotaPerHost", 150);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.disable.ipc.security", true);
user_pref("network.dns.blockDotOnion", true);
user_pref("network.dns.disableIPv6", false);
user_pref("network.dns.disablePrefetch-next", false);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dns.forceResolve", "");
user_pref("network.dns.get-ttl", true);
user_pref("network.dns.ipv4OnlyDomains", "");
user_pref("network.dns.localDomains", "");
user_pref("network.dns.native-is-localhost", false);
user_pref("network.dns.offline-localhost", true);
user_pref("network.dns.resolver-thread-extra-idle-time-seconds", 60);
user_pref("network.dns.skipTRR-when-parental-control-enabled", true);
user_pref("network.dnsCacheEntries", 400);
user_pref("network.dnsCacheExpiration", 60);
user_pref("network.dnsCacheExpirationGracePeriod", 60);
user_pref("network.file.disable_unc_paths", false);
user_pref("network.ftp.control.qos", 0);
user_pref("network.ftp.data.qos", 0);
user_pref("network.ftp.enabled", false);
user_pref("network.ftp.idleConnectionTimeout", 300);
user_pref("network.generic-ntlm-auth.workstation", "WORKSTATION");
user_pref("network.gio.supported-protocols", "");
user_pref("network.http.accept-encoding.secure", "gzip, deflate, br");
user_pref("network.http.accept-encoding", "gzip, deflate");
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("network.http.altsvc.proxy_checks", true);
user_pref("network.http.assoc-req.enforce", false);
user_pref("network.http.connection-retry-timeout", 250);
user_pref("network.http.connection-timeout", 90);
user_pref("network.http.default-socket-type", "");
user_pref("network.http.diagnostics", false);
user_pref("network.http.enforce-framing.http1", false);
user_pref("network.http.enforce-framing.soft", true);
user_pref("network.http.enforce-framing.strict_chunked_encoding", true);
user_pref("network.http.fallback-connection-timeout", 5);
user_pref("network.http.fast-fallback-to-IPv4", true);
user_pref("network.http.focused_window_transaction_ratio", "0.9");
user_pref("network.http.keep-alive.timeout", 60);
user_pref("network.http.max_response_header_size", 393216);
user_pref("network.http.max-connections", 700);
user_pref("network.http.max-persistent-connections-per-proxy", 32);
user_pref("network.http.max-persistent-connections-per-server", 6);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 3);
user_pref("network.http.network-changed.timeout", 5);
user_pref("network.http.on_click_priority", true);
user_pref("network.http.originextension", true);
user_pref("network.http.pacing.requests.burst", 10);
user_pref("network.http.pacing.requests.enabled", true);
user_pref("network.http.pacing.requests.hz", 80);
user_pref("network.http.pacing.requests.min-parallelism", 6);
user_pref("network.http.prompt-temp-redirect", false);
user_pref("network.http.proxy.version", "1.1");
user_pref("network.http.qos", 0);
user_pref("network.http.rcwn.cache_queue_normal_threshold", 8);
user_pref("network.http.rcwn.cache_queue_priority_threshold", 2);
user_pref("network.http.rcwn.enabled", true);
user_pref("network.http.rcwn.max_wait_before_racing_ms", 500);
user_pref("network.http.rcwn.min_wait_before_racing_ms", 0);
user_pref("network.http.rcwn.small_resource_size_kb", 256);
user_pref("network.http.redirection-limit", 20);
user_pref("network.http.referer.defaultPolicy.pbmode", 2);
user_pref("network.http.referer.defaultPolicy.trackers.pbmode", 2);
user_pref("network.http.referer.defaultPolicy.trackers", 2);
user_pref("network.http.referer.defaultPolicy", 3);
user_pref("network.http.referer.hideOnionSource", true);
user_pref("network.http.referer.referrerLengthLimit", 4096);
user_pref("network.http.referer.spoofSource", false);
user_pref("network.http.referer.trimmingPolicy", 0);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
user_pref("network.http.rendering-critical-requests-prioritization", true);
user_pref("network.http.request.max-attempts", 10);
user_pref("network.http.request.max-start-delay", 10);
user_pref("network.http.response.timeout", 300);
user_pref("network.http.send_window_size", 1024);
user_pref("network.http.sendOriginHeader", 2);
user_pref("network.http.sendRefererHeader", 1);
user_pref("network.http.spdy.allow-push", false);
user_pref("network.http.spdy.bug1556491", true); //irrelevant, workaround
user_pref("network.http.spdy.bug1563538", true);
user_pref("network.http.spdy.bug1563695", true); //irrelevant, workaround
user_pref("network.http.spdy.chunk-size", 16000);
user_pref("network.http.spdy.coalesce-hostnames", true);
user_pref("network.http.spdy.default-concurrent", 100);
user_pref("network.http.spdy.default-hpack-buffer", 65536);
user_pref("network.http.spdy.enable-hpack-dump", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enforce-tls-profile", false);
user_pref("network.http.spdy.persistent-settings", false);
user_pref("network.http.spdy.ping-threshold", 58);
user_pref("network.http.spdy.ping-timeout", 8);
user_pref("network.http.spdy.pull-allowance", 12582912);
user_pref("network.http.spdy.push-allowance", 131072);
user_pref("network.http.spdy.send-buffer-size", 131072);
user_pref("network.http.spdy.timeout", 170);
user_pref("network.http.spdy.websockets", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.http.tailing.delay-max", 5000);
user_pref("network.http.tailing.delay-quantum-after-domcontentloaded", 100);
user_pref("network.http.tailing.delay-quantum", 600);
user_pref("network.http.tailing.total-max", 45000);
user_pref("network.http.tcp_keepalive.long_lived_connections", true);
user_pref("network.http.tcp_keepalive.long_lived_idle_time", 600);
user_pref("network.http.tcp_keepalive.short_lived_connections", true);
user_pref("network.http.tcp_keepalive.short_lived_idle_time", 10);
user_pref("network.http.tcp_keepalive.short_lived_time", 60);
user_pref("network.http.throttle.hold-time-ms", 800);
user_pref("network.http.throttle.max-time-ms", 500);
user_pref("network.http.throttle.resume-for", 100);
user_pref("network.http.throttle.suspend-for", 900);
user_pref("network.http.throttle.version", 1);
user_pref("network.http.tls-handshake-timeout", 30);
user_pref("network.http.version", "1.1");
user_pref("network.IDN_show_punycode", true);
user_pref("network.IDN.extra_allowed_chars", "");
user_pref("network.IDN.extra_blocked_chars", "");
user_pref("network.IDN.restriction_profile", "high");
user_pref("network.IDN.use_whitelist", false);
user_pref("network.IDN.whitelist.ac", true);
user_pref("network.IDN.whitelist.ar", true);
user_pref("network.IDN.whitelist.asia", true);
user_pref("network.IDN.whitelist.at", true);
user_pref("network.IDN.whitelist.biz", true);
user_pref("network.IDN.whitelist.br", true);
user_pref("network.IDN.whitelist.ca", true);
user_pref("network.IDN.whitelist.cat", true);
user_pref("network.IDN.whitelist.ch", true);
user_pref("network.IDN.whitelist.cl", true);
user_pref("network.IDN.whitelist.cn", true);
user_pref("network.IDN.whitelist.de", true);
user_pref("network.IDN.whitelist.dk", true);
user_pref("network.IDN.whitelist.ee", true);
user_pref("network.IDN.whitelist.es", true);
user_pref("network.IDN.whitelist.fi", true);
user_pref("network.IDN.whitelist.fr", true);
user_pref("network.IDN.whitelist.gr", true);
user_pref("network.IDN.whitelist.gt", true);
user_pref("network.IDN.whitelist.hu", true);
user_pref("network.IDN.whitelist.il", true);
user_pref("network.IDN.whitelist.info", true);
user_pref("network.IDN.whitelist.io", true);
user_pref("network.IDN.whitelist.ir", true);
user_pref("network.IDN.whitelist.is", true);
user_pref("network.IDN.whitelist.jp", true);
user_pref("network.IDN.whitelist.kr", true);
user_pref("network.IDN.whitelist.li", true);
user_pref("network.IDN.whitelist.lt", true);
user_pref("network.IDN.whitelist.lu", true);
user_pref("network.IDN.whitelist.lv", true);
user_pref("network.IDN.whitelist.museum", true);
user_pref("network.IDN.whitelist.no", true);
user_pref("network.IDN.whitelist.nu", true);
user_pref("network.IDN.whitelist.nz", true);
user_pref("network.IDN.whitelist.org", true);
user_pref("network.IDN.whitelist.pl", true);
user_pref("network.IDN.whitelist.pm", true);
user_pref("network.IDN.whitelist.pr", true);
user_pref("network.IDN.whitelist.re", true);
user_pref("network.IDN.whitelist.se", true);
user_pref("network.IDN.whitelist.sh", true);
user_pref("network.IDN.whitelist.si", true);
user_pref("network.IDN.whitelist.tel", true);
user_pref("network.IDN.whitelist.tf", true);
user_pref("network.IDN.whitelist.th", true);
user_pref("network.IDN.whitelist.tm", true);
user_pref("network.IDN.whitelist.tw", true);
user_pref("network.IDN.whitelist.ua", true);
user_pref("network.IDN.whitelist.vn", true);
user_pref("network.IDN.whitelist.wf", true);
user_pref("network.IDN.whitelist.xn--0zwm56d", true);
user_pref("network.IDN.whitelist.xn--11b5bs3a9aj6g", true);
user_pref("network.IDN.whitelist.xn--80akhbyknj4f", true);
user_pref("network.IDN.whitelist.xn--90a3ac", true);
user_pref("network.IDN.whitelist.xn--9t4b11yi5a", true);
user_pref("network.IDN.whitelist.xn--deba0ad", true);
user_pref("network.IDN.whitelist.xn--fiqs8s", true); // Simplified
user_pref("network.IDN.whitelist.xn--fiqz9s", true); // Traditional
user_pref("network.IDN.whitelist.xn--fzc2c9e2c", true);
user_pref("network.IDN.whitelist.xn--g6w251d", true);
user_pref("network.IDN.whitelist.xn--hgbk6aj7f53bba", true);
user_pref("network.IDN.whitelist.xn--hlcj6aya9esc7a", true);
user_pref("network.IDN.whitelist.xn--j6w193g", true);
user_pref("network.IDN.whitelist.xn--jxalpdlp", true);
user_pref("network.IDN.whitelist.xn--kgbechtv", true);
user_pref("network.IDN.whitelist.xn--kprw13d", true);  // Simplified
user_pref("network.IDN.whitelist.xn--kpry57d", true);  // Traditional
user_pref("network.IDN.whitelist.xn--mgba3a4f16a", true);
user_pref("network.IDN.whitelist.xn--mgba3a4fra", true);
user_pref("network.IDN.whitelist.xn--mgbaam7a8h", true);
user_pref("network.IDN.whitelist.xn--mgbayh7gpa", true);
user_pref("network.IDN.whitelist.xn--mgberp4a5d4a87g", true);
user_pref("network.IDN.whitelist.xn--mgberp4a5d4ar", true);
user_pref("network.IDN.whitelist.xn--mgbqly7c0a67fbc", true);
user_pref("network.IDN.whitelist.xn--mgbqly7cvafr", true);
user_pref("network.IDN.whitelist.xn--o3cw4h", true);
user_pref("network.IDN.whitelist.xn--ogbpf8fl", true);
user_pref("network.IDN.whitelist.xn--p1ai", true);
user_pref("network.IDN.whitelist.xn--wgbh1c", true);
user_pref("network.IDN.whitelist.xn--wgbl6a", true);
user_pref("network.IDN.whitelist.xn--xkc2al3hye2a", true);
user_pref("network.IDN.whitelist.xn--zckzah", true);
user_pref("network.IDN.whitelist.yt", true);
user_pref("network.jar.open-unsafe-types", false);
user_pref("network.manage-offline-status", false);
user_pref("network.mdns.use_js_fallback", false);
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
user_pref("network.negotiate-auth.allow-non-fqdn", false);
user_pref("network.negotiate-auth.allow-proxies", true);
user_pref("network.negotiate-auth.delegation-uris", "");
user_pref("network.negotiate-auth.gsslib", "");
user_pref("network.negotiate-auth.trusted-uris", "");
user_pref("network.negotiate-auth.using-native-gsslib", true);
user_pref("network.notify.changed", true);
user_pref("network.notify.IPv6", true);
user_pref("network.offline-mirrors-connectivity", false);
user_pref("network.online", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.preload", false);
user_pref("network.process.enabled", false);
user_pref("network.protocol-handler.expose-all", true);
user_pref("network.protocol-handler.expose.about", true); // removed
user_pref("network.protocol-handler.expose.blob", true); // removed
user_pref("network.protocol-handler.expose.chrome", true);
user_pref("network.protocol-handler.expose.data", true);
user_pref("network.protocol-handler.expose.file", true);
user_pref("network.protocol-handler.expose.ftp", false);
user_pref("network.protocol-handler.expose.http", true);
user_pref("network.protocol-handler.expose.https", true);
user_pref("network.protocol-handler.expose.imap", true);
user_pref("network.protocol-handler.expose.javascript", true);
user_pref("network.protocol-handler.expose.moz-extension", true);
user_pref("network.protocol-handler.external-default", true);
user_pref("network.protocol-handler.external.about", false);
user_pref("network.protocol-handler.external.afp", false);
user_pref("network.protocol-handler.external.blob", false);
user_pref("network.protocol-handler.external.chrome", false);
user_pref("network.protocol-handler.external.data", false);
user_pref("network.protocol-handler.external.disk", false);
user_pref("network.protocol-handler.external.disks", false);
user_pref("network.protocol-handler.external.file", false);
user_pref("network.protocol-handler.external.ftp", false);
user_pref("network.protocol-handler.external.hcp", false);
user_pref("network.protocol-handler.external.htp", false);
user_pref("network.protocol-handler.external.htps", false);
user_pref("network.protocol-handler.external.http", false);
user_pref("network.protocol-handler.external.https", false);
user_pref("network.protocol-handler.external.ie.http", false);
user_pref("network.protocol-handler.external.iehistory", false);
user_pref("network.protocol-handler.external.ierss", false);
user_pref("network.protocol-handler.external.ile", false);
user_pref("network.protocol-handler.external.javascript", false);
user_pref("network.protocol-handler.external.le", false);
user_pref("network.protocol-handler.external.moz-icon", false);
user_pref("network.protocol-handler.external.ms-help", false);
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("network.protocol-handler.external.ps", false);
user_pref("network.protocol-handler.external.res", false);
user_pref("network.protocol-handler.external.shell", false);
user_pref("network.protocol-handler.external.tps", false);
user_pref("network.protocol-handler.external.ttp", false);
user_pref("network.protocol-handler.external.ttps", false);
user_pref("network.protocol-handler.external.vbscript", false);
user_pref("network.protocol-handler.external.vnd.ms.radio", false);
user_pref("network.protocol-handler.warn-external-default", true);
user_pref("network.protocol-handler.warn-external.file", false);
user_pref("network.proxy.allow_hijacking_localhost", false);
user_pref("network.proxy.autoconfig_retry_interval_max", 300);
user_pref("network.proxy.autoconfig_retry_interval_min", 5);
user_pref("network.proxy.autoconfig_url.include_path", false);
user_pref("network.proxy.enable_wpad_over_dhcp", true);
user_pref("network.proxy.failover_timeout", 1800);
user_pref("network.proxy.ftp_port", 0);
user_pref("network.proxy.ftp", "");
user_pref("network.proxy.http_port", 0);
user_pref("network.proxy.http", "");
user_pref("network.proxy.no_proxies_on", "");
user_pref("network.proxy.proxy_over_tls", true);
user_pref("network.proxy.socks_port", 0);
user_pref("network.proxy.socks_remote_dns", false); // true
user_pref("network.proxy.socks_version", 5);
user_pref("network.proxy.socks", "");
user_pref("network.proxy.ssl_port", 0);
user_pref("network.proxy.ssl", "");
user_pref("network.proxy.type", 5);
user_pref("network.security.esni.enabled", true);
user_pref("network.security.ports.banned", "1,2,3,4,5");
user_pref("network.ssl_tokens_cache_capacity", 2048);
user_pref("network.ssl_tokens_cache_enabled", false);
user_pref("network.standard-url.max-length", 2047);
user_pref("network.standard-url.punycode-host", true);
user_pref("network.stricttransportsecurity.preloadlist", true);
user_pref("network.sts.max_time_for_events_between_two_polls", 100);
user_pref("network.sts.max_time_for_pr_close_during_shutdown", 5000);
user_pref("network.sts.poll_busy_wait_period_timeout", 7);
user_pref("network.sts.poll_busy_wait_period", 50);
user_pref("network.sts.pollable_event_timeout", 6);
user_pref("network.tcp.keepalive.enabled", true);
user_pref("network.tcp.keepalive.idle_time", 550);
user_pref("network.tcp.keepalive.probe_count", 4);
user_pref("network.tcp.keepalive.retry_interval", 1);
user_pref("network.tcp.tcp_fastopen_consecutive_failure_limit", 5);
user_pref("network.tcp.tcp_fastopen_enable", false);
user_pref("network.tcp.tcp_fastopen_http_check_for_stalls_only_if_idle_for", 10);
user_pref("network.tcp.tcp_fastopen_http_stalls_limit", 3);
user_pref("network.tcp.tcp_fastopen_http_stalls_timeout", 20);
user_pref("network.tickle-wifi.delay", 16);
user_pref("network.tickle-wifi.duration", 400);
user_pref("network.tickle-wifi.enabled", false);
user_pref("network.traffic_analyzer.enabled", true);
user_pref("network.trr.allow-rfc1918", false);
user_pref("network.trr.blacklist-duration", 60);
user_pref("network.trr.bootstrapAddress", 146.185.167.43); //SecureDNS (example)
user_pref("network.trr.confirmationNS", "example.com");
user_pref("network.trr.credentials", "");
user_pref("network.trr.custom_uri", "");
user_pref("network.trr.disable-ECS", true);
user_pref("network.trr.early-AAAA", false);
user_pref("network.trr.excluded-domains", "localhost,local");
user_pref("network.trr.max-fails", 5);
>>>>>>> master
user_pref("network.trr.mode", 3);
user_pref("network.security.esni.enabled, true);
        user_pref("network.trr.enable_when_vpn_detected, true);
            user_pref("network.trr.enable_when_proxy_detected, true);
                user_pref("network.trr.enable_when_nrpt_detected, true);
                    user_pref("security.enterprise_roots.enabled, false");


                    //user_pref("browser.fullscreen.autohide", false); // Replaces: https://addons.mozilla.org/en-US/firefox/addon/youtube-full-windowed/
                    //
                    user_perf("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "{"
                        id ":"
                        whats - new - panel ","
                        enabled ":false,"
                        type ":"
                        remote - settings ","
                        bucket ":"
                        whats - new - panel ","
                        updateCycleInMs ":3600000}"); user_pref("browser.aboutConfig.showWarning", false); //chrome://global/content/config.xul?filter=
                    // user_pref("accessibility.tabfocus", 1);
                    // user_pref("mousebutton.4th.enabled", true);
                    // user_pref("mousebutton.5th.enabled", true);
                    // user_pref("network.http.proxy.version", "1.0"); // uncomment, in case of problems!
                    // user_pref("network.http.version", "1.0"); // uncomment, in case of problems!
                    // user_pref("network.tcp.sendbuffer", 0);
                    // user_pref("print.postscript.enabled", true);
                    //user_pref("app.update.channel", "beta");
                    //user_pref("dom.w3c_pointer_events.dispatch_by_pointer_messages", false);
                    //user_pref("gecko.handlerService.migrated", true);
                    //user_pref("media.gmp-manager.url.override", "");
                    //user_pref("media.peerconnection.ice.force_interface", "");
                    user_pref("browser.newtabpage.activity-stream.feeds.sections", false); user_pref("widget.wayland-dmabuf-webgl.enabled", true); user_pref("browser.urlbar.update1", false); // will be removed
                    user_pref("dom.webgpu.enabled", false); user_pref("network.netlink.route.check.IPv4", ""); user_pref("network.netlink.route.check.IPv6", ""); user_pref("browser.urlbar.ctrlCanonizesURLs", false); user_pref("dom.image-lazy-loading.enabled", true); user_pref("widget.wayland_vsync.enabled", true);
                    //user_pref("network.protocol-handler.external.moz-extension", false); // removed
                    //user_pref("print.printer_list", "");
                    //user_pref("privacy.resistFingerprinting.letterboxing.dimensions", "1280x720");
                    //user_pref("privacy.resistFingerprinting.letterboxing", false);
                    //user_pref("ui.use_standins_for_native_colors", true)
                    user_pref("security.pki.crlite_mode", 2); user_pref("browser.download.lastDir.savePerSite", false); user_pref("apz.frame_delay.enabled", false); user_pref("accessibility.accesskeycausesactivation", true); user_pref("accessibility.AOM.enabled", false); user_pref("accessibility.browsewithcaret_shortcut.enabled", true); user_pref("accessibility.browsewithcaret", false); user_pref("accessibility.delay_plugin_time", 10000); user_pref("accessibility.delay_plugins", false); user_pref("webgl.dxgl.enabled", false); user_pref("accessibility.force_disabled", 1); user_pref("accessibility.handler.enabled", true); user_pref("accessibility.mouse_focuses_formcontrol", false); user_pref("accessibility.tabfocus", 7); user_pref("accessibility.typeaheadfind.autostart", true); user_pref("accessibility.typeaheadfind.casesensitive", 0); user_pref("accessibility.typeaheadfind.enablesound", true); user_pref("accessibility.typeaheadfind.linksonly", true); user_pref("accessibility.typeaheadfind.manual", true); user_pref("accessibility.typeaheadfind.matchesCountLimit", 1000); user_pref("accessibility.typeaheadfind.soundURL", "beep"); user_pref("accessibility.typeaheadfind.startlinksonly", false); user_pref("accessibility.typeaheadfind.timeout", 4000); user_pref("accessibility.typeaheadfind", true); user_pref("accessibility.usetexttospeech", ""); user_pref("accessibility.warn_on_browsewithcaret", true); user_pref("advanced.mailftp", false); user_pref("alerts.showFavicons", false); user_pref("alerts.useSystemBackend", true); user_pref("app.normandy.api_url", ""); user_pref("app.normandy.enabled", false); user_pref("app.normandy.remotesettings.enabled", false); user_pref("app.releaseNotesURL", ""); user_pref("app.shield.optoutstudies.enabled", false); user_pref("app.update.auto", true); user_pref("app.update.enabled", true); user_pref("app.update.url.details", ""); // https://www.mozilla.org/%LOCALE%/firefox/beta/notes
                    user_pref("app.update.url.manual", ""); // https://www.mozilla.org/firefox/beta"
                    user_pref("asanreporter.apiurl", ""); // https://anf1.fuzzing.mozilla.org/crashproxy/submit/
                    user_pref("asanreporter.clientid", "unknown"); user_pref("beacon.enabled", false); user_pref("bidi.browser.ui", false); user_pref("bidi.direction", 1); user_pref("bidi.edit.caret_movement_style", 2); user_pref("bidi.edit.delete_immediately", true); user_pref("bidi.numeral", 0); user_pref("bidi.texttype", 1); user_pref("breakpad.reportURL", ""); user_pref("browser.aboutHomeSnippets.updateUrl", ""); user_pref("browser.active_color", "#EE0000"); user_pref("browser.anchor_color", "#0000EE"); user_pref("browser.backspace_action", 0); user_pref("browser.bookmarks.max_backups", 0); // 3-5
                    user_pref("browser.bookmarks.openInTabClosesMenu", true); user_pref("media.gmp-manager.buildID", "20200402050101"); user_pref("browser.cache.cache_isolation", true); user_pref("browser.cache.check_doc_frequency", 3); user_pref("browser.cache.compression_level", 0); // 0=disable comp, 1 = best speed, 9 = best compression
                    user_pref("browser.cache.disk_cache_ssl", false); user_pref("webgl.cgl.multithreaded", false); user_pref("browser.cache.disk.capacity", 256000); user_pref("browser.cache.disk.enable", false); user_pref("browser.cache.disk.free_space_hard_limit", 1024); // 1MB
                    user_pref("browser.cache.disk.free_space_soft_limit", 5120); // 5MB
                    user_pref("browser.cache.disk.max_chunks_memory_usage", 40960); user_pref("browser.cache.disk.max_entry_size", 51200); // 50 MB
                    user_pref("browser.cache.disk.max_priority_chunks_memory_usage", 40960); user_pref("browser.cache.disk.metadata_memory_limit", 250); // 0.25 MB
                    user_pref("browser.cache.disk.preload_chunk_count", 4); // 1 MB of read ahead
                    user_pref("browser.cache.disk.smart_size.enabled", false); user_pref("browser.cache.frecency_experiment", 0); user_pref("browser.cache.frecency_half_life_hours", 6); user_pref("browser.cache.max_shutdown_io_lag", 2); user_pref("browser.cache.memory.capacity", 0); //-1 since 70
                    user_pref("browser.cache.memory.enable", false); user_pref("browser.cache.memory.max_entry_size", 5120); user_pref("browser.cache.offline.capacity", 512000); user_pref("browser.cache.offline.enable", false); user_pref("browser.cache.offline.insecure.enable", false); user_pref("browser.casting.enabled", false); user_pref("browser.chrome.errorReporter.submitUrl", ""); user_pref("browser.chrome.image_icons.max_size", 1024); user_pref("browser.contentblocking.cryptomining.preferences.ui.enabled", true); user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", false); user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", true); user_pref("browser.contentblocking.database.enabled", false); user_pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior4,cm,fp,stp"); user_pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", true); user_pref("browser.contentblocking.report.cookie.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cross-site-tracking-report"); user_pref("browser.contentblocking.report.cryptominer.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cryptominers-report"); user_pref("browser.contentblocking.report.fingerprinter.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/fingerprinters-report"); user_pref("browser.contentblocking.report.lockwise.enabled", false); user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/password-manager-report"); user_pref("browser.contentblocking.report.lockwise.url", "https://lockwise.firefox.com/"); user_pref("browser.contentblocking.report.manage_devices.url", "https://accounts.firefox.com/settings/clients"); user_pref("browser.contentblocking.report.monitor.enabled", false); user_pref("browser.contentblocking.report.monitor.how_it_works.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/monitor-faq"); user_pref("browser.contentblocking.report.monitor.sign_in_url", "https://monitor.firefox.com/oauth/init?entrypoint=protection_report_monitor&utm_source=about-protections&email="); user_pref("browser.contentblocking.report.monitor.url", "https://monitor.firefox.com/?entrypoint=protection_report_monitor&utm_source=about-protections"); user_pref("browser.contentblocking.report.proxy_extension.url", "https://private-network.firefox.com/"); user_pref("browser.contentblocking.report.proxy.enabled", false); //true if you use above settings
                    user_pref("browser.contentblocking.report.social.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/social-media-tracking-report"); user_pref("browser.contentblocking.report.tracker.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/tracking-content-report"); user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); user_pref("browser.crashReports.unsubmittedCheck.enabled", false); user_pref("browser.disableResetPrompt", true); user_pref("browser.discovery.enabled", false); user_pref("browser.display.auto_quality_min_font_size", 20); user_pref("browser.display.background_color", "#202020"); //#FFFFFF
                    user_pref("browser.display.document_color_use", 0); user_pref("browser.display.focus_background_color", "#117722"); user_pref("browser.display.focus_ring_on_anything", false); user_pref("browser.display.focus_ring_style", 1); user_pref("browser.display.focus_ring_width", 0); user_pref("browser.display.focus_text_color", "#ffffff"); user_pref("browser.display.force_inline_alttext", false); user_pref("browser.display.foreground_color", "#000000"); user_pref("browser.display.normal_lineheight_calc_control", 2); user_pref("browser.display.show_image_placeholders", true); user_pref("browser.display.show_loading_image_placeholder", false); user_pref("browser.display.use_document_fonts", 0); user_pref("browser.display.use_focus_colors", false); user_pref("browser.display.use_system_colors", false); user_pref("browser.dom.window.dump.enabled", true, sticky); user_pref("browser.download.folderList", 2); user_pref("browser.download.forbid_open_with", false); user_pref("browser.download.forward_oma_android_download_manager", false); user_pref("browser.download.manager.retention", 0); user_pref("browser.download.useDownloadDir", false); user_pref("browser.enable_automatic_image_resizing", false); user_pref("browser.enable_click_image_resizing", true); user_pref("browser.fixup.alternate.enabled", false); user_pref("browser.fixup.alternate.prefix", "www."); user_pref("browser.fixup.alternate.suffix", ".com"); user_pref("browser.fixup.dns_first_for_single_words", false); user_pref("browser.fixup.hide_user_pass", true); user_pref("browser.fixup.typo.scheme", true); user_pref("browser.formfill.agedWeight", 2); user_pref("browser.formfill.boundaryWeight", 25); user_pref("browser.formfill.bucketSize", 1); user_pref("browser.formfill.debug", false); user_pref("browser.formfill.enable", false); user_pref("browser.formfill.expire_days", 100); user_pref("browser.formfill.maxTimeGroupings", 25); user_pref("browser.formfill.prefixWeight", 5); user_pref("browser.formfill.timeGroupingSize", 604800); user_pref("browser.fullscreen.animate", false); //removed
                    user_pref("browser.helperApps.deleteTempFileOnExit", true); user_pref("browser.helperApps.neverAsk.openFile", ""); user_pref("browser.helperApps.neverAsk.saveToDisk", ""); user_pref("browser.history.maxStateObjectSize", 2097152); user_pref("browser.in-content.dark-mode", true); // https://overdodactyl.github.io/ShadowFox/
                    user_pref("browser.launcherProcess.enabled", true); user_pref("browser.library.activity-stream.enabled", false); user_pref("browser.link.open_newwindow.restriction", 0); user_pref("browser.link.open_newwindow", 3); user_pref("browser.messaging-system.fxatoolbarbadge.enabled", true); user_pref("browser.messaging-system.whatsNewPanel.enabled", false); user_pref("browser.meta_refresh_when_inactive.disabled", false); user_pref("browser.newtab.preload", false); user_pref("browser.newtab.url", "about:blank"); user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", ""); user_pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "{}"); user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", ""); user_pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "{\"id\":\"whats-new-panel\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"whats-new-panel\",\"updateCycleInMs\":3600000}"); user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false); user_pref("browser.newtabpage.activity-stream.disableSnippets", true); user_pref("browser.newtabpage.activity-stream.discoverystream.config", "{}"); user_pref("browser.newtabpage.activity-stream.enabled", false); user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); user_pref("browser.newtabpage.activity-stream.filterAdult", false); user_pref("dom.vr.webxr.enabled", false); user_pref("browser.ping-centre.production.endpoint", ""); user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false); user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", true); user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); user_pref("browser.ping-centre.staging.endpoint", ""); user_pref("browser.newtabpage.activity-stream.showSponsored", false); user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", ""); user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", ""); user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false); user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false); user_pref("browser.newtabpage.activity-stream.telemetry", false); user_pref("browser.newtabpage.activity-stream.topSitesRows", 2); user_pref("extensions.blocklist.useXML", false); user_pref("browser.newtabpage.activity-streamasrouterExperimentEnabled", false); user_pref("browser.newtabpage.directory.ping", ""); user_pref("browser.newtabpage.directory.source", "data:text/plain,{}"); user_pref("browser.newtabpage.enabled", false); user_pref("browser.newtabpage.enhanced", false); user_pref("browser.newtabpage.introShown", true); user_pref("browser.offline-apps.notify", true); user_pref("browser.onboarding.tour.onboarding-tour-addons.completed", true); user_pref("browser.onboarding.tour.onboarding-tour-customize.completed", true); user_pref("browser.onboarding.tour.onboarding-tour-default-browser.completed", true); user_pref("browser.onboarding.tour.onboarding-tour-performance.completed", true); user_pref("browser.onboarding.tour.onboarding-tour-private-browsing.completed", true); user_pref("browser.onboarding.tour.onboarding-tour-screenshots.completed", true); user_pref("browser.pagethumbnails.capturing_disabled", true); user_pref("browser.ping-centre.log", false); user_pref("browser.ping-centre.telemetry", false); // removed
                    user_pref("browser.pingcentre.telemetry", false); // outdated
                    user_pref("browser.pocket.enabled", false); user_pref("browser.privatebrowsing.autostart", true); user_pref("browser.privatebrowsing.searchUI", false); user_pref("browser.safebrowsing.allowOverride", true); user_pref("browser.safebrowsing.appRepURL", ""); user_pref("browser.safebrowsing.blockedURIs.enabled", false); user_pref("browser.safebrowsing.debug", false); user_pref("browser.safebrowsing.downloads.enabled", false); user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false); user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false); user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false); user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false); user_pref("browser.safebrowsing.downloads.remote.enabled", false); user_pref("browser.safebrowsing.downloads.remote.timeout_ms", 10100); user_pref("browser.safebrowsing.downloads.remote.url", ""); // https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_SAFEBROWSING_API_KEY%"
                    user_pref("browser.safebrowsing.enabled", false); user_pref("browser.safebrowsing.id", "Firefox"); user_pref("browser.safebrowsing.id", "navclient-auto-ffox"); user_pref("browser.safebrowsing.malware.enabled", false); user_pref("browser.safebrowsing.passwords.enabled", false); user_pref("browser.safebrowsing.phishing.enabled", false); user_pref("browser.safebrowsing.provider.google.gethashURL", ""); user_pref("browser.safebrowsing.provider.google.reportURL", ""); user_pref("browser.safebrowsing.provider.google.updateURL", ""); user_pref("browser.safebrowsing.provider.google4.advisoryName", "CHEF-KOCH's Anti-Safe Browsing"); user_pref("browser.safebrowsing.provider.google4.advisoryURL", ""); // https://developers.google.com/safe-browsing/v4/advisory
                    user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false); user_pref("browser.safebrowsing.provider.google4.dataSharingURL", ""); user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST
                    user_pref("browser.safebrowsing.provider.google4.lists", "goog-badbinurl-proto,goog-downloadwhite-proto,goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto,goog-harmful-proto,goog-passwordwhite-proto"); user_pref("browser.safebrowsing.provider.google4.pver", "4"); user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", ""); user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", ""); user_pref("browser.safebrowsing.provider.google4.reportURL", ""); // https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site=
                    user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST
                    user_pref("browser.safebrowsing.provider.mozilla.gethashURL", ""); user_pref("browser.safebrowsing.provider.mozilla.lists.base", "moz-std"); user_pref("browser.safebrowsing.provider.mozilla.lists.content", "moz-full"); user_pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"); user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "1"); user_pref("browser.safebrowsing.provider.mozilla.pver", "2.2"); user_pref("browser.safebrowsing.provider.mozilla.updateURL", ""); user_pref("browser.safebrowsing.reportPhishURL", ""); // https://%LOCALE%.phish-report.mozilla.com/?hl=%LOCALE%&url=
                    user_pref("browser.sanitizer.loglevel", "Warn"); user_pref("browser.search.context.loadInBackground", true); // removed
                    user_pref("browser.search.countryCode", "US"); // removed
                    user_pref("browser.search.geoip.timeout", 3000); user_pref("browser.search.geoip.url", ""); // https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%
                    user_pref("browser.search.geoSpecificDefaults.url", ""); // removed
                    user_pref("browser.search.geoSpecificDefaults", false); user_pref("browser.search.log", false); user_pref("browser.search.official", true); user_pref("browser.search.region", "US"); user_pref("browser.search.separatePrivateDefault", true); //false
                    user_pref("browser.search.suggest.enabled", false); user_pref("browser.search.update.interval", 21600); user_pref("browser.search.update.log", false); user_pref("browser.search.update", false); user_pref("browser.security.newcerterrorpage.enabled", true); user_pref("browser.security.newcerterrorpage.mitm.enabled", true); // removed FF70+
                    user_pref("browser.selfsupport.url", ""); // removed
                    user_pref("browser.send_pings.max_per_link", 1); user_pref("browser.send_pings.require_same_host", true); user_pref("browser.send_pings", false); user_pref("browser.sessionhistory.max_entries", 4); user_pref("browser.sessionhistory.max_total_viewers", -1); user_pref("browser.sessionstore_max_tabs_undo", 0); // 1=last closed window
                    user_pref("browser.sessionstore.interval", 60000); user_pref("browser.sessionstore.max_windows_undo", 0); user_pref("browser.sessionstore.privacy_level", 2); user_pref("browser.sessionstore.resume_from_crash", false); user_pref("browser.shell.checkDefaultBrowser", false); user_pref("browser.shell.shortcutFavicons", false); user_pref("browser.ssl_override_behavior", 1); user_pref("browser.startup.homepage_override.buildID", "20100101"); user_pref("browser.startup.homepage_override.mstone", "ignore"); user_pref("browser.startup.homepage", "about:blank"); user_pref("browser.startup.page", 3); //0 for blank
                    user_pref("browser.storageManager.pressureNotification.minIntervalMS", 1200000); user_pref("browser.storageManager.pressureNotification.usageThresholdGB", 5); user_pref("browser.tabs.animate", false); user_pref("browser.tabs.closeWindowWithLastTab", false); user_pref("browser.tabs.crashReporting.sendReport", false); user_pref("browser.tabs.drawInTitlebar", true); user_pref("browser.tabs.insertAfterCurrent", true); user_pref("browser.tabs.loadBookmarksInBackground", true); user_pref("browser.tabs.loadDivertedInBackground", true); user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", true); user_pref("browser.tabs.remote.autostart", false); user_pref("browser.tabs.remote.enforceRemoteTypeRestrictions", false); user_pref("browser.tabs.remote.force-paint", true); user_pref("browser.tabs.remote.separatedMozillaDomains", "addons.mozilla.org,accounts.firefox.com"); user_pref("browser.tabs.remote.separateFileUriProcess", true); user_pref("browser.tabs.remote.separatePrivilegedContentProcess", false); user_pref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", false); user_pref("browser.tabs.remote.useCrossOriginEmbedderPolicy", true); //false
                    user_pref("browser.tabs.tabMinWidth", 50); user_pref("browser.tabs.unloadOnLowMemory", true); user_pref("browser.tabs.warnOnClose", false); user_pref("browser.tabs.warnOnCloseOtherTabs", false); user_pref("browser.tabs.warnOnOpen", false); user_pref("browser.taskbar.lists.enabled", false); user_pref("browser.taskbar.lists.frequent.enabled", false); user_pref("browser.taskbar.lists.recent.enabled", false); user_pref("browser.taskbar.lists.tasks.enabled", false); user_pref("browser.taskbar.previews.enable", false); user_pref("browser.triple_click_selects_paragraph", true); user_pref("browser.uiCustomization.debug", false); // set true, in case your extensions are hidden from toolbar
                    user_pref("browser.uitour.enabled", false); user_pref("browser.uitour.url", ""); user_pref("browser.underline_anchors", true); // leak?
                    user_pref("browser.urlbar.autocomplete.enabled", false); user_pref("browser.urlbar.autoFill.typed", false); user_pref("browser.urlbar.autoFill", false); user_pref("browser.urlbar.clickSelectsAll", true); user_pref("browser.urlbar.doubleClickSelectsAll", false); user_pref("browser.urlbar.filter.javascript", true); user_pref("browser.urlbar.matchBuckets", "suggestion:4,general:5"); user_pref("browser.urlbar.maxRichResults", 0); user_pref("browser.urlbar.megabar", false); user_pref("browser.urlbar.oneOffSearches", false); user_pref("browser.urlbar.quantumbar", true); //removed FF70+
                    user_pref("browser.urlbar.speculativeConnect.enabled", false); user_pref("browser.urlbar.suggest.bookmark", false); user_pref("browser.urlbar.suggest.history", false); user_pref("browser.urlbar.suggest.openpage", false); user_pref("browser.urlbar.suggest.searches", false); user_pref("browser.urlbar.trimURLs", false); user_pref("browser.urlbar.update1", true); user_pref("browser.urlbar.usepreloadedtopurls.enabled", false); user_pref("browser.visited_color", "#551A8B"); user_pref("browser.xul.error_pages.expert_bad_cert", true); user_pref("browser.zoom.full", false); user_pref("camera.control.autofocus_moving_callback.enabled", false); user_pref("camera.control.face_detection.enabled", false); user_pref("canvas.capturestream.enabled", false); user_pref("canvas.image.cache.limit", 0); user_pref("captivedetect.canonicalContent", "success\n"); user_pref("captivedetect.canonicalURL", "); // http://detectportal.firefox.com/success.txt"
                        user_pref("captivedetect.maxRetryCount", 5); user_pref("captivedetect.maxWaitingTime", 5000); user_pref("captivedetect.pollingTime", 3000); user_pref("clipboard.autocopy", false); user_pref("clipboard.autocopy", true); user_pref("clipboard.plainTextOnly", false); user_pref("content.cors.disable", false); user_pref("content.notify.backoffcount", -1); user_pref("content.notify.interval", 180000); user_pref("content.notify.ontimer", true); // removed
                        user_pref("content.sink.enable_perf_mode", 0); user_pref("content.sink.event_probe_rate", 1); user_pref("content.sink.initial_perf_time", 2000000); user_pref("content.sink.interactive_deflect_count", 0); user_pref("content.sink.interactive_parse_time", 3000); user_pref("content.sink.interactive_time", 750000); user_pref("content.sink.pending_event_mode", 0); user_pref("content.sink.perf_deflect_count", 215); user_pref("content.sink.perf_parse_time", 360000); user_pref("converter.html2txt.always_include_ruby", false); user_pref("converter.html2txt.header_strategy", 1); user_pref("converter.html2txt.structs", true); user_pref("datareporting.healthreport.service.enabled", false); user_pref("datareporting.healthreport.uploadEnabled", false); user_pref("datareporting.policy.dataSubmissionEnabled", false); user_pref("device.sensors.test.events", false); user_pref("device.storage.enabled", false); user_pref("devtools.browserconsole.input.editorWidth", 0); user_pref("devtools.browsertoolbox.fission", false); user_pref("devtools.chrome.enabled", false); user_pref("devtools.connectpage.enabled", false); user_pref("devtools.console.stdout.chrome", true, sticky); user_pref("devtools.console.stdout.content", false, sticky); user_pref("devtools.debugger.component-visible", true); user_pref("devtools.debugger.dom-mutation-breakpoints-visible", false); user_pref("devtools.debugger.event-listeners-visible", true); user_pref("devtools.debugger.expressions-visible", false); user_pref("devtools.debugger.features.async-stepping", false); user_pref("devtools.debugger.features.dom-mutation-breakpoints", true); user_pref("devtools.debugger.features.inline-preview", true); user_pref("devtools.debugger.features.overlay-step-buttons", true); //false
                        user_pref("devtools.debugger.force-local", true); user_pref("devtools.debugger.remote-enabled", false); user_pref("devtools.debugger.workers-visible", true); user_pref("devtools.debugger.xhr-breakpoints-visible", false); user_pref("devtools.inspector.inactive.css.enabled", true); user_pref("devtools.markup.mutationBreakpoints.enabled", true); user_pref("devtools.netmonitor.features.search", false); user_pref("devtools.netmonitor.ws.displayed-frames.limit", 400); user_pref("devtools.netmonitor.ws.messageDataLimit", 100000); user_pref("devtools.netmonitor.ws.payload-preview-height", 128); user_pref("devtools.netmonitor.ws.visibleColumns", "[\"data\", \"time\"]"); user_pref("devtools.onboarding.telemetry-logged", false); user_pref("devtools.popup.disable_autohide", false); user_pref("devtools.recordreplay.allowRepaintFailures", true); user_pref("devtools.recordreplay.includeSystemScripts", false); user_pref("devtools.recordreplay.logging", false); user_pref("devtools.recordreplay.loggingFull", false); user_pref("devtools.recordreplay.mvp.enabled", false); user_pref("devtools.storage.extensionStorage.enabled", false); user_pref("devtools.toolbox.content-frame", true); user_pref("devtools.toolbox.force-chrome-prefs", true); user_pref("devtools.webconsole.input.editorOnboarding", true); user_pref("devtools.webconsole.input.editorWidth", 0); user_pref("devtools.webide.autoinstallADBHelper", false); user_pref("devtools.webide.autoinstallFxdtAdapters", false); user_pref("devtools.webide.enabled", false); user_pref("dom.allow_cut_copy", false); user_pref("dom.allow_scripts_to_close_windows", false); user_pref("dom.allow_XUL_XBL_for_file", false); user_pref("dom.animations.offscreen-throttling", true); user_pref("dom.archivereader.enabled", false); user_pref("dom.audiochannel.audioCompeting.allAgents", false); user_pref("dom.audiochannel.audioCompeting", false); user_pref("dom.battery.enabled", false); // removed
                        user_pref("dom.beforeunload_timeout_ms", 1000); user_pref("dom.block_reload_from_resize_event_handler", true); user_pref("dom.capture.enabled", false); user_pref("dom.clients.openwindow_favors_same_process", true); user_pref("dom.compositionevent.allow_control_characters", false); user_pref("dom.cycle_collector.incremental", true); user_pref("dom.datatransfer.mozAtAPIs", false); user_pref("dom.disable_beforeunload", true); user_pref("dom.disable_open_click_delay", 1000); user_pref("dom.disable_open_during_load", true); user_pref("dom.disable_window_flip", false); user_pref("dom.disable_window_move_resize", true); user_pref("dom.disable_window_open_feature.close", true); user_pref("dom.disable_window_open_feature.location", true); user_pref("dom.disable_window_open_feature.menubar", true); user_pref("dom.disable_window_open_feature.minimizable", true); user_pref("dom.disable_window_open_feature.personalbar", true); user_pref("dom.disable_window_open_feature.resizable", true); user_pref("dom.disable_window_open_feature.status", true); user_pref("dom.disable_window_open_feature.titlebar", true); user_pref("dom.disable_window_open_feature.toolbar", true); user_pref("dom.disable_window_showModalDialog", true); user_pref("dom.enable_user_timing", false); user_pref("dom.enable_window_print", true); user_pref("dom.event.clipboardevents.enabled", false); user_pref("dom.event.coalesce_mouse_move", true); user_pref("dom.event.contextmenu.enabled", false); user_pref("network.cookie.lifetime.days", 1); user_pref("dom.event.default_to_passive_touch_listeners", true); user_pref("dom.events.dataTransfer.protected.enabled", false); user_pref("dom.events.testing.asyncClipboard", false); user_pref("dom.events.user_interaction_interval", 5000); user_pref("dom.experimental_forms", false); user_pref("dom.fileHandle.enabled", true); user_pref("dom.flyweb.enabled", false); user_pref("dom.forms.autocomplete.formautofill", false); user_pref("dom.forms.color", true); user_pref("dom.forms.datetime.others", false); user_pref("dom.forms.datetime.timepicker", false); user_pref("toolkit.telemetry.hybridContent.enabled", false); user_pref("dom.forms.number.grouping", false); user_pref("dom.forms.selectSearch", false); user_pref("dom.gamepad.enabled", false); user_pref("dom.global_stop_script", true); user_pref("dom.indexedDB.enabled", false); user_pref("dom.indexedDB.experimental", false); user_pref("dom.indexedDB.logging.details", true); user_pref("dom.indexedDB.logging.enabled", true); user_pref("dom.indexedDB.logging.profiler-marks", false); user_pref("dom.input.fallbackUploadDir", ""); user_pref("dom.inputevent.datatransfer.enabled", true); user_pref("dom.IntersectionObserver.enabled", false); user_pref("dom.ipc.cancel_content_js_when_navigating", true); user_pref("dom.ipc.cpows.log.enabled", false); user_pref("dom.ipc.cpows.log.stack", false); user_pref("dom.ipc.keepProcessesAlive.privilegedabout", 1); user_pref("dom.ipc.plugins.asyncdrawing.enabled", true); user_pref("dom.ipc.plugins.contentTimeoutSecs", 0); user_pref("dom.ipc.plugins.flash.disable-protected-mode", false); user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false); user_pref("dom.ipc.plugins.forcedirect.enabled", true); user_pref("dom.ipc.plugins.parentTimeoutSecs", 0); user_pref("dom.ipc.plugins.processLaunchTimeoutSecs", 0); user_pref("dom.ipc.plugins.reportCrashURL", false); user_pref("dom.ipc.plugins.timeoutSecs", 0); user_pref("dom.ipc.plugins.unloadTimeoutSecs", 30); user_pref("dom.ipc.processCount.extension", 1); user_pref("dom.ipc.processCount.file", 1); user_pref("dom.ipc.processCount.privilegedabout", 1); user_pref("dom.ipc.processCount.privilegedmozilla", 1); user_pref("dom.ipc.processCount.webIsolated", 1); user_pref("dom.ipc.processCount.webLargeAllocation", 10); user_pref("dom.ipc.processCount", 64); // 8
                        user_pref("dom.ipc.processPrelaunch.delayMs", 1000); user_pref("dom.ipc.processPriorityManager.backgroundGracePeriodMS", 0); user_pref("dom.ipc.processPriorityManager.backgroundPerceivableGracePeriodMS", 0); user_pref("dom.ipc.processPriorityManager.enabled", true); user_pref("dom.ipc.processPriorityManager.testMode", false); user_pref("dom.ipc.tabs.createKillHardCrashReports", false); user_pref("dom.ipc.tabs.disabled", false); user_pref("dom.keyboardevent.dispatch_during_composition", true); user_pref("dom.keyboardevent.keypress.dispatch_non_printable_keys_only_system_group_in_content", true); user_pref("dom.keyboardevent.keypress.hack.dispatch_non_printable_keys.addl", ""); user_pref("dom.keyboardevent.keypress.hack.use_legacy_keycode_and_charcode.addl", ""); user_pref("dom.keyboardevent.keypress.hack.use_legacy_keycode_and_charcode", "*.collabserv.com,*.gov.online.office365.us,*.officeapps-df.live.com,*.officeapps.live.com,*.online.office.de,*.partner.officewebapps.cn,*.scniris.com"); user_pref("dom.largeAllocation.testing.allHttpLoads", false); user_pref("dom.largeAllocationHeader.enabled", true); user_pref("dom.mapped_arraybuffer.enabled", true); user_pref("dom.max_chrome_script_run_time", 20); user_pref("dom.max_ext_content_script_run_time", 5); user_pref("dom.max_script_run_time", 10); user_pref("dom.maxHardwareConcurrency", 16); user_pref("dom.maxtouchpoints.testing.value", -1); user_pref("dom.media.autoplay.autoplay-policy-api", true); user_pref("dom.meta-viewport.enabled", false); user_pref("dom.min_background_timeout_value", 1000); user_pref("dom.min_timeout_value", 4); user_pref("dom.min_tracking_background_timeout_value", 4); user_pref("dom.min_tracking_timeout_value", 4); user_pref("dom.mouseevent.click.hack.use_legacy_non-primary_dispatch", ""); user_pref("dom.mozTCPSocket.enabled", false); user_pref("dom.network.enabled", false); user_pref("dom.noopener.newprocess.enabled", true); user_pref("dom.payments.defaults.saveAddress", true); user_pref("dom.payments.defaults.saveCreditCard", false); user_pref("dom.payments.loglevel", "Warn"); user_pref("dom.payments.request.supportedRegions", "US,CA"); user_pref("dom.popup_allowed_events", "click dblclick"
                            ");
                            user_pref("dom.popup_maximum", 20); user_pref("dom.presentation.discoverable.encrypted", true); user_pref("dom.presentation.discoverable.retry_ms", 5000); user_pref("dom.presentation.discoverable", false); user_pref("dom.presentation.discovery.enabled", false); user_pref("dom.presentation.discovery.timeout_ms", 10000); user_pref("dom.presentation.session_transport.data_channel.enable", false); user_pref("dom.presentation.tcp_server.debug", false); user_pref("dom.push.connection.enabled", false); user_pref("dom.push.enabled", false); user_pref("dom.push.http2.maxRetries", 2); user_pref("dom.push.http2.reset_retry_count_after_ms", 60000); user_pref("dom.push.http2.retryInterval", 5000); user_pref("dom.push.loglevel", "Error"); user_pref("dom.push.maxQuotaPerSubscription", 16); user_pref("dom.push.maxRecentMessageIDsPerSubscription", 10); user_pref("dom.push.pingInterval", 1800000); // 30 minutes
                            user_pref("dom.push.quotaUpdateDelay", 3000); // 3 seconds
                            user_pref("dom.push.requestTimeout", 10000); user_pref("dom.push.retryBaseInterval", 5000); user_pref("dom.push.serverURL", ""); // wss://push.services.mozilla.com/
                            user_pref("dom.push.userAgentID", ""); user_pref("dom.quotaManager.loadQuotaFromCache", true); user_pref("dom.quotaManager.temporaryStorage.chunkSize", 10240); user_pref("dom.quotaManager.temporaryStorage.fixedLimit", -1); user_pref("dom.quotaManager.testing", false); user_pref("dom.registerProtocolHandler.insecure.enabled", false); user_pref("dom.require_user_interaction_for_beforeunload", true); user_pref("dom.script_loader.binast_encoding.domain.restrict.list", "*.facebook.com,static.xx.fbcdn.net,*.cloudflare.com,*.cloudflarestream.com,unpkg.com"); user_pref("dom.script_loader.binast_encoding.enabled", false); user_pref("dom.script_loader.external_scripts.utf8_parsing.enabled", true); user_pref("dom.securecontext.whitelist_onions", false); user_pref("dom.security.respect_document_nosniff", true); user_pref("dom.select_events.textcontrols.enabled", true); user_pref("dom.select_popup_in_parent.enabled", false); user_pref("dom.send_after_paint_to_content", false); user_pref("dom.server-events.default-reconnection-time", 5000); user_pref("dom.serviceWorkers.disable_open_click_delay", 1000); user_pref("dom.serviceWorkers.enabled", true); user_pref("dom.serviceWorkers.idle_extended_timeout", 300000); user_pref("dom.serviceWorkers.idle_timeout", 30000); user_pref("dom.serviceWorkers.testUpdateOverOneDay", false); user_pref("dom.serviceWorkers.update_delay", 1000); user_pref("dom.storage_access.enabled", false); user_pref("dom.storage.abort_on_sync_parent_to_child_messages", false); user_pref("dom.storage.client_validation", true); user_pref("dom.storage.default_quota", 5120); user_pref("dom.storage.enabled", true); user_pref("dom.storage.next_gen", true); user_pref("dom.storage.shadow_writes", true); user_pref("dom.storage.snapshot_gradual_prefill", 4096); user_pref("dom.storage.snapshot_prefill", 16384); user_pref("dom.storage.snapshot_reusing", true); user_pref("dom.storageManager.prompt.testing.allow", false); user_pref("dom.storageManager.prompt.testing", false); user_pref("dom.targetBlankNoOpener.enabled", true); user_pref("dom.telephony.enabled", false); user_pref("dom.testing.sync-content-blocking-notifications", false); user_pref("dom.timeout.background_budget_regeneration_rate", 100); user_pref("dom.timeout.background_throttling_max_budget", 50); user_pref("dom.timeout.budget_throttling_max_delay", 15000); user_pref("dom.timeout.enable_budget_timer_throttling", true); user_pref("dom.timeout.foreground_budget_regeneration_rate", 1); user_pref("dom.timeout.foreground_throttling_max_budget", -1); user_pref("dom.timeout.max_consecutive_callbacks_ms", 4); user_pref("dom.timeout.throttling_delay", 30000); user_pref("dom.use_components_shim", true); user_pref("dom.use_watchdog", true); user_pref("dom.vibrator.enabled", false); user_pref("dom.vibrator.max_vibrate_list_len", 128); user_pref("dom.vibrator.max_vibrate_ms", 10000); user_pref("dom.vr.autoactivate.enabled", false); user_pref("dom.vr.controller_trigger_threshold", "0.1"); user_pref("dom.vr.controller.enumerate.interval", 1000); user_pref("dom.vr.display.enumerate.interval", 5000); user_pref("dom.vr.display.rafMaxDuration", 50); user_pref("dom.vr.enabled", false); user_pref("dom.vr.external.notdetected.timeout", 60000); user_pref("dom.vr.external.quit.timeout", 10000); user_pref("dom.vr.inactive.timeout", 5000); user_pref("dom.vr.navigation.timeout", 5000); user_pref("dom.vr.oculus.invisible.enabled", true); user_pref("dom.vr.oculus.present.timeout", 500); user_pref("dom.vr.poseprediction.enabled", true); user_pref("dom.vr.puppet.enabled", false); user_pref("dom.vr.require-gesture", true); user_pref("dom.w3c_pointer_events.implicit_capture", false); user_pref("dom.w3c_pointer_events.multiprocess.android.enabled", true); user_pref("dom.w3c_touch_events.enabled", 2); user_pref("dom.wakelock.enabled", false); user_pref("dom.webaudio.enabled", false); user_pref("dom.webidl.test1", false); user_pref("dom.webidl.test2", false); user_pref("dom.webnotifications.allowcrossoriginiframe", false); user_pref("dom.webnotifications.enabled", false); user_pref("dom.webnotifications.requireinteraction.count", 3); user_pref("dom.webnotifications.requireuserinteraction", true); user_pref("dom.webnotifications.serviceworker.enabled", false); user_pref("dom.window.history.async", true); user_pref("dom.worker.script_loader.utf8_parsing.enabled", true); user_pref("dom.workers.maxPerDomain", 512); user_pref("dom.xhr.lowercase_header.enabled", true); user_pref("editor.css.default_length_unit", "px"); user_pref("editor.inline_table_editing.enabled_by_default", false); user_pref("editor.password.mask_delay", -1); user_pref("editor.password.testing.mask_delay", false); user_pref("editor.positioning.enabled_by_default", false); user_pref("editor.positioning.offset", 0); user_pref("editor.resizing.enabled_by_default", false); user_pref("editor.resizing.preserve_ratio", true); user_pref("editor.singleLine.pasteNewlines", 2); user_pref("editor.use_css", false); user_pref("editor.use_custom_colors", false); user_pref("editor.use_div_for_default_newlines", true); user_pref("experiments.activeExperiment", false); user_pref("experiments.enabled", false); user_pref("experiments.manifest.uri", ""); user_pref("experiments.supported", false); user_pref("extensions.abuseReport.enabled", true); user_pref("extensions.abuseReport.url", ""); // https://addons.mozilla.org/api/v4/abuse/report/addon/
                            user_pref("extensions.allowPrivateBrowsingByDefault", true); user_pref("extensions.autoDisableScopes", 14); user_pref("extensions.blocklist.detailsURL", ""); // https://blocked.cdn.mozilla.net/
                            user_pref("extensions.blocklist.enabled", true); user_pref("extensions.blocklist.interval", 86400); user_pref("extensions.blocklist.itemURL", "https://blocked.cdn.mozilla.net/%blockID%.html"); user_pref("extensions.blocklist.url", ""); // https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/
                            user_pref("extensions.CanvasBlocker@kkapsner.de.whiteList", ""); // optional
                            user_pref("extensions.formautofill.addresses.enabled", false); user_pref("extensions.formautofill.available", "off"); user_pref("extensions.formautofill.creditCards.available", false); user_pref("extensions.formautofill.creditCards.enabled", false); user_pref("extensions.formautofill.heuristics.enabled", false); user_pref("extensions.fxmonitor.enabled", false); user_pref("extensions.getAddons.cache.enabled", false); user_pref("extensions.getAddons.discovery.api_url", ""); //https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%&edition=%DISTRIBUTION%"
                            user_pref("extensions.getAddons.showPane", false); user_pref("extensions.htmlaboutaddons.enabled", false); user_pref("extensions.htmlaboutaddons.inline-options.enabled", false); user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); user_pref("extensions.langpacks.signatures.required", false); user_pref("extensions.legacy.enabled", true); user_pref("extensions.pocket.enabled", false); user_pref("extensions.privatebrowsing.notification", false); //removed
                            user_pref("extensions.recommendations.privacyPolicyUrl", ""); user_pref("extensions.recommendations.themeRecommendationUrl", ""); user_pref("extensions.screenshots.disabled", true); // removed
                            user_pref("extensions.screenshots.upload-disabled", true); user_pref("extensions.shield-recipe-client.api_url", ""); user_pref("extensions.shield-recipe-client.enabled", false); user_pref("extensions.shield-recipe-client.first_run", false); user_pref("extensions.shield-recipe-client.user_id", ""); // 14a0a78f-38a0-4468-bddd-d482c8950b3c
                            user_pref("extensions.spellcheck.inline.max-misspellings", 500); user_pref("extensions.systemAddon.update.enabled", false); user_pref("extensions.systemAddon.update.url", ""); user_pref("extensions.update.autoUpdateDefault", true); user_pref("extensions.update.enabled", true); user_pref("extensions.webcompat-reporter.enabled", false); user_pref("extensions.webcompat-reporter.newIssueEndpoint", "https://webcompat.com/issues/new"); user_pref("extensions.webextensions.background-delayed-startup", false); user_pref("extensions.webextensions.enablePerformanceCounters", true); user_pref("extensions.webextensions.ExtensionStorageIDB.enabled", true); user_pref("extensions.webextensions.identity.redirectDomain", "extensions.allizom.org"); user_pref("extensions.webextensions.keepStorageOnUninstall", false); user_pref("extensions.webextensions.keepUuidOnUninstall", false); user_pref("extensions.webextensions.performanceCountersMaxAge", 5000); user_pref("extensions.webextensions.protocol.remote", true); user_pref("extensions.webextensions.restrictedDomains", ""); user_pref("extensions.webextensions.tabhide.enabled", true); user_pref("extensions.webextensions.userScripts.enabled", true); user_pref("extensions.webExtensionsMinPlatformVersion", "42.0a1"); user_pref("extensions.webservice.discoverURL", ""); user_pref("findbar.entireword", false); user_pref("findbar.highlightAll", false); user_pref("findbar.iteratorTimeout", 100); user_pref("findbar.modalHighlight", false); user_pref("fission.autostart", false, locked); user_pref("fission.preserve_browsing_contexts", false); user_pref("fission.rebuild_frameloaders_on_remoteness_change", false); user_pref("focusmanager.testmode", false); user_pref("font.blacklist.underline_offset", "FangSong,Gulim,GulimChe,MingLiU,MingLiU-ExtB,MingLiU_HKSCS,MingLiU-HKSCS-ExtB,MS Gothic,MS Mincho,MS PGothic,MS PMincho,MS UI Gothic,PMingLiU,PMingLiU-ExtB,SimHei,SimSun,SimSun-ExtB,Hei,Kai,Apple LiGothic,Apple LiSung,Osaka"); user_pref("full-screen-api.enabled", false); user_pref("full-screen-api.ignore-widgets", false); user_pref("full-screen-api.pointer-lock.enabled", true); user_pref("full-screen-api.transition-duration.enter", 0); user_pref("full-screen-api.transition-duration.enter", 0); user_pref("full-screen-api.transition-duration.leave", 0); user_pref("full-screen-api.transition.timeout", 0); user_pref("full-screen-api.warning.delay", 0); user_pref("full-screen-api.warning.timeout", 0); user_pref("general.autoScroll", true); user_pref("general.config.obscure_value", 13); user_pref("general.document_open_conversion_depth_limit", 20); user_pref("general.smoothScroll.currentVelocityWeighting", "0.25"); user_pref("general.smoothScroll.durationToIntervalRatio", 200); user_pref("general.smoothScroll.lines.durationMaxMS", 150); user_pref("general.smoothScroll.lines.durationMinMS", 150); user_pref("general.smoothScroll.lines", true); user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 400); user_pref("general.smoothScroll.mouseWheel.durationMinMS", 200); user_pref("general.smoothScroll.mouseWheel", true); user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 120); user_pref("general.smoothScroll.msdPhysics.enabled", true); user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600); user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 1000); user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 12); user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "1.3"); user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 600); user_pref("general.smoothScroll.other.durationMaxMS", 150); user_pref("general.smoothScroll.other.durationMinMS", 150); user_pref("general.smoothScroll.other", true); user_pref("general.smoothScroll.pages.durationMaxMS", 150); user_pref("general.smoothScroll.pages.durationMinMS", 150); user_pref("general.smoothScroll.pages", true); user_pref("browser.aboutConfig.showWarning", false); user_pref("general.smoothScroll.pixels.durationMaxMS", 150); user_pref("general.smoothScroll.pixels.durationMinMS", 150); user_pref("general.smoothScroll.pixels", true); user_pref("general.smoothScroll.scrollbars.durationMaxMS", 150); user_pref("general.smoothScroll.scrollbars.durationMinMS", 150); user_pref("general.smoothScroll.scrollbars", true); user_pref("general.smoothScroll.stopDecelerationWeighting", "0.4"); user_pref("general.useragent.compatMode.firefox", false); user_pref("general.useragent.site_specific_overrides", true); user_pref("general.warnOnAboutConfig", false); user_pref("geo.enabled", false); user_pref("geo.provider.ms-windows-location", false); user_pref("geo.provider.use_corelocation", false); user_pref("geo.provider.use_gpsd", false); user_pref("geo.timeout", 0); user_pref("geo.wifi.logging.enabled", false); user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"); user_pref("geo.wifi.xhr.timeout", 60000); user_pref("gesture.swipeLeft", ""); user_pref("gesture.swipeRight", ""); user_pref("gestures.enable_single_finger_input", true); user_pref("gfx.blocklist.all", 0); user_pref("gfx.canvas.azure.accelerated", true); user_pref("gfx.canvas.azure.backends", "direct2d1.1,skia"); user_pref("gfx.canvas.remote", false); user_pref("gfx.color_management.display_profile", ""); user_pref("gfx.color_management.enablev4", false); user_pref("gfx.color_management.mode", 0); user_pref("gfx.color_management.rendering_intent", 0); user_pref("gfx.compositor.glcontext.opaque", false); user_pref("gfx.content.always-paint", false); user_pref("gfx.content.azure.accelerated", true); user_pref("gfx.content.azure.backends", "direct2d1.1,skia"); user_pref("gfx.core-animation.enabled", false); user_pref("gfx.crash-guard.status.wmfvpxvideo", 0); user_pref("gfx.direct2d.destroy-dt-on-paintthread", true); user_pref("gfx.direct2d.disabled", false); user_pref("gfx.direct3d11.use-double-buffering", false); user_pref("gfx.downloadable_fonts.disable_cache", true); user_pref("gfx.downloadable_fonts.enabled", true); // uBlock
                            user_pref("gfx.downloadable_fonts.fallback_delay_short", 100); user_pref("gfx.downloadable_fonts.fallback_delay", 3000); user_pref("gfx.downloadable_fonts.keep_color_bitmaps", false); user_pref("gfx.downloadable_fonts.otl_validation", true); user_pref("gfx.downloadable_fonts.validate_variation_tables", true); user_pref("gfx.downloadable_fonts.woff2.enabled", false); user_pref("gfx.draw-color-bars", false); user_pref("gfx.font_ahem_antialias_none", false); user_pref("gfx.font_loader.delay", 8000); user_pref("signon.storeSignons", true); user_pref("signon.include.OtherSubdomainsInLookup", false); user_pref("gfx.font_loader.interval", 50); user_pref("gfx.font_rendering.ahem_antialias_none", false); // set to true if blurry
                            user_pref("gfx.font_rendering.cleartype_params.cleartype_level", -1); user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", -1); user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "Arial,Consolas,Courier New,Microsoft Sans Serif,Segoe UI,Tahoma,Trebuchet MS,Verdana"); user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 15); user_pref("gfx.font_rendering.cleartype_params.gamma", -1); user_pref("gfx.font_rendering.cleartype_params.pixel_structure", -1); user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5); // -1
                            user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", true); user_pref("gfx.font_rendering.fallback.always_use_cmaps", false); user_pref("gfx.font_rendering.fontconfig.max_generic_substitutions", 3); user_pref("gfx.font_rendering.graphite.enabled", false); user_pref("gfx.font_rendering.opentype_svg.enabled", false); user_pref("gfx.font_rendering.wordcache.charlimit", 32); user_pref("gfx.font_rendering.wordcache.maxentries", 10000); user_pref("gfx.hidpi.enabled", 2); user_pref("gfx.layerscope.enabled", false); user_pref("gfx.layerscope.port", 23456); user_pref("gfx.logging.painted-pixel-count.enabled", false); user_pref("gfx.missing_fonts.notify", false); user_pref("gfx.perf-warnings.enabled", false); user_pref("gfx.use_text_smoothing_setting", false); user_pref("gfx.vr.osvr.clientKitLibPath", ""); user_pref("gfx.vr.osvr.clientLibPath", ""); user_pref("gfx.vr.osvr.commonLibPath", ""); user_pref("gfx.vr.osvr.utilLibPath", ""); user_pref("gfx.webrender.all", true); user_pref("gfx.webrender.blob-images", true); user_pref("gfx.webrender.blob.paint-flashing", false); user_pref("gfx.webrender.dcomp-win-triple-buffering.enabled", true); user_pref("gfx.webrender.dcomp-win.enabled", true); user_pref("gfx.webrender.debug.alpha-primitives", false); user_pref("gfx.webrender.debug.compact-profiler", false); user_pref("gfx.webrender.debug.disable-batching", false); user_pref("gfx.webrender.debug.echo-driver-messages", false); user_pref("gfx.webrender.debug.epochs", false); user_pref("gfx.webrender.debug.gpu-cache", false); user_pref("gfx.webrender.debug.gpu-sample-queries", false); user_pref("gfx.webrender.debug.gpu-time-queries", false); user_pref("gfx.webrender.debug.new-frame-indicator", false); user_pref("gfx.webrender.debug.new-scene-indicator", false); user_pref("gfx.webrender.debug.picture-caching", false); user_pref("gfx.webrender.debug.primitives", false); user_pref("gfx.webrender.debug.profiler", true); user_pref("gfx.webrender.debug.render-targets", false); user_pref("gfx.webrender.debug.show-overdraw", false); user_pref("gfx.webrender.debug.slow-frame-indicator", false); user_pref("gfx.webrender.debug.small-screen", false); user_pref("gfx.webrender.debug.texture-cache.clear-evicted", true); user_pref("gfx.webrender.debug.texture-cache", false); user_pref("gfx.webrender.dl.dump-content", false); user_pref("gfx.webrender.dl.dump-parent", false); user_pref("gfx.webrender.enabled", true); user_pref("gfx.webrender.flip-sequential", false); user_pref("gfx.webrender.force-angle", true); user_pref("gfx.webrender.force-disabled", true); // Workaround for FF69 stutter + responsive issue
                            user_pref("gfx.webrender.highlight-painted-layers", false); user_pref("gfx.webrender.picture-caching", true); user_pref("gfx.webrender.program-binary-disk", true); user_pref("gfx.webrender.start-debug-server", false); user_pref("gfx.webrender.triple-buffering.enabled", true); user_pref("gfx.xrender.enabled", false); user_pref("gfx.ycbcr.accurate-conversion", false); user_pref("gl.allow-high-power", true); user_pref("gl.ignore-dx-interop2-blacklist", false); user_pref("gl.use-tls-is-current", 0); user_pref("html5.offmainthread", true); user_pref("identity.fxaccounts.auth.uri", ""); // https://api.accounts.firefox.com/v1
                            user_pref("identity.fxaccounts.enabled", false); // removed
                            user_pref("identity.fxaccounts.service.monitorLoginUrl", ""); // https://monitor.firefox.com/
                            user_pref("identity.fxaccounts.service.sendLoginUrl", ""); // https://send.firefox.com/login/
                            user_pref("idle_period.during_page_load.min", 12); user_pref("idle_period.min", 3); user_pref("image.animated.decode-on-demand.batch-size", 6); user_pref("image.animated.decode-on-demand.threshold-kb", 20480); user_pref("image.animated.resume-from-last-displayed", true); user_pref("image.animation_mode", "normal"); user_pref("image.cache.factor2.threshold-surfaces", 4); user_pref("image.cache.max-rasterized-svg-threshold-kb", 204800); user_pref("image.decode-immediately.enabled", false); user_pref("image.downscale-during-decode.enabled", true); user_pref("image.http.accept", "*/\*"); user_pref("image.infer-src-animation.threshold-ms", 2000); user_pref("signon.management.page.showPasswordSyncNotification", false); user_pref("image.layout_network_priority", true); user_pref("image.mem.allow_locking_in_content_processes", true); user_pref("image.mem.animated.use_heap", false); user_pref("image.mem.debug-reporting", false); user_pref("image.mem.discardable", true); user_pref("image.mem.shared", true); user_pref("image.mem.volatile.min_threshold_kb", -1); user_pref("image.webp.enabled", false); user_pref("input_event_queue.count_for_prediction", 9); user_pref("input_event_queue.default_duration_per_event", 1); user_pref("input_event_queue.duration.max", 8); user_pref("input_event_queue.duration.min", 1); user_pref("input_event_queue.supported", true); user_pref("intl.accept_languages", "en-US, en"); user_pref("intl.charset.fallback.override", ""); user_pref("intl.charset.fallback.tld", true); user_pref("intl.charset.fallback.utf8_for_file", false); // removed
                            user_pref("intl.fallbackCharsetList.ISO-8859-1", "windows-1252"); user_pref("intl.hyphenate-capitalized.de-1901", true); user_pref("intl.hyphenate-capitalized.de-1996", true); user_pref("intl.hyphenate-capitalized.de-CH", true); user_pref("intl.hyphenation-alias.af-*", "af"); user_pref("intl.hyphenation-alias.bg-*", "bg"); user_pref("intl.hyphenation-alias.bs-*", "sh"); user_pref("intl.hyphenation-alias.bs", "sh"); user_pref("intl.hyphenation-alias.ca-*", "ca"); user_pref("intl.hyphenation-alias.cy-*", "cy"); user_pref("intl.hyphenation-alias.da-*", "da"); user_pref("intl.hyphenation-alias.de-*", "de-1996"); user_pref("intl.hyphenation-alias.de-AT-1901", "de-1901"); user_pref("intl.hyphenation-alias.de-CH-*", "de-CH"); user_pref("intl.hyphenation-alias.de-DE-1901", "de-1901"); user_pref("intl.hyphenation-alias.de", "de-1996"); user_pref("intl.hyphenation-alias.en-*", "en-us"); user_pref("intl.hyphenation-alias.en", "en-us"); user_pref("intl.hyphenation-alias.eo-*", "eo"); user_pref("intl.hyphenation-alias.es-*", "es"); user_pref("intl.hyphenation-alias.et-*", "et"); user_pref("intl.hyphenation-alias.fi-*", "fi"); user_pref("intl.hyphenation-alias.fr-*", "fr"); user_pref("intl.hyphenation-alias.gl-*", "gl"); user_pref("intl.hyphenation-alias.hr-*", "hr"); user_pref("intl.hyphenation-alias.hsb-*", "hsb"); user_pref("intl.hyphenation-alias.hu-*", "hu"); user_pref("intl.hyphenation-alias.ia-*", "ia"); user_pref("intl.hyphenation-alias.is-*", "is"); user_pref("intl.hyphenation-alias.it-*", "it"); user_pref("intl.hyphenation-alias.kmr-*", "kmr"); user_pref("intl.hyphenation-alias.la-*", "la"); user_pref("intl.hyphenation-alias.lt-*", "lt"); user_pref("intl.hyphenation-alias.mn-*", "mn"); user_pref("intl.hyphenation-alias.nb-*", "nb"); user_pref("intl.hyphenation-alias.nl-*", "nl"); user_pref("intl.hyphenation-alias.nn-*", "nn"); user_pref("intl.hyphenation-alias.no-*", "nb"); user_pref("intl.hyphenation-alias.no", "nb"); user_pref("intl.hyphenation-alias.pl-*", "pl"); user_pref("intl.hyphenation-alias.pt-*", "pt"); user_pref("intl.hyphenation-alias.ru-*", "ru"); user_pref("intl.hyphenation-alias.sh-*", "sh"); user_pref("intl.hyphenation-alias.sl-*", "sl"); user_pref("intl.hyphenation-alias.sr-*", "sh"); user_pref("intl.hyphenation-alias.sr", "sh"); user_pref("intl.hyphenation-alias.sv-*", "sv"); user_pref("intl.hyphenation-alias.tr-*", "tr"); user_pref("intl.hyphenation-alias.uk-*", "uk"); user_pref("intl.ime.remove_placeholder_character_at_commit", false); user_pref("intl.ime.use_simple_context_on_password_field", false); user_pref("intl.imm.composition_font.japanist_2003", "MS PGothic"); user_pref("intl.imm.composition_font", ""); user_pref("intl.imm.japanese.assume_active_tip_name_as", ""); user_pref("intl.imm.vertical_writing.always_assume_not_supported", false); user_pref("intl.keyboard.per_window_layout", false); user_pref("intl.locale.matchOS", false); user_pref("intl.locale.requested", "en-US"); user_pref("intl.regional_prefs.use_os_locales", false); user_pref("intl.tsf.associate_imc_only_when_imm_ime_is_active", false); user_pref("intl.tsf.enable", true); user_pref("intl.tsf.hack.allow_to_stop_hacking_on_build_17643_or_later", false); user_pref("intl.tsf.hack.atok.create_native_caret", true); user_pref("intl.tsf.hack.atok.do_not_return_no_layout_error_of_composition_string", true); user_pref("intl.tsf.hack.free_chang_jie.do_not_return_no_layout_error", true); user_pref("intl.tsf.hack.japanist10.do_not_return_no_layout_error_of_composition_string", true); user_pref("intl.tsf.hack.ms_japanese_ime.do_not_return_no_layout_error_at_caret", true); user_pref("intl.tsf.hack.ms_japanese_ime.do_not_return_no_layout_error_at_first_char", true); user_pref("intl.tsf.hack.ms_simplified_chinese.do_not_return_no_layout_error", true); user_pref("intl.tsf.hack.ms_simplified_chinese.query_insert_result", true); user_pref("intl.tsf.hack.ms_traditional_chinese.do_not_return_no_layout_error", true); user_pref("intl.tsf.hack.ms_traditional_chinese.query_insert_result", true); user_pref("intl.tsf.support_imm", true); user_pref("intl.uidirection", -1); user_pref("io.activity.enabled", false); user_pref("javascript.enabled", true); user_pref("javascript.options.asmjs", false); user_pref("javascript.options.asyncstack", false); user_pref("javascript.options.baselinejit.threshold", 80); user_pref("javascript.options.baselinejit", true); user_pref("javascript.options.blinterp.threshold", 10); // removed
                            user_pref("javascript.options.blinterp", true); // removed
                            user_pref("javascript.options.discardSystemSource", false); user_pref("javascript.options.dump_stack_on_debuggee_would_run", false); user_pref("javascript.options.dynamicImport", true); user_pref("javascript.options.gc_delay.first", 10000); user_pref("javascript.options.gc_delay.full", 60000); user_pref("javascript.options.gc_delay.interslice", 100); user_pref("javascript.options.gc_delay", 4000); // removed
                            user_pref("javascript.options.ion.frequent_bailout_threshold", 10); user_pref("javascript.options.ion.full.threshold", 100000); user_pref("javascript.options.ion.offthread_compilation", true); user_pref("javascript.options.ion.threshold", 1000); user_pref("javascript.options.ion", false); user_pref("javascript.options.jit.full_debug_checks", false); user_pref("javascript.options.mem.gc_allocation_threshold_factor_avoid_interrupt", 90); user_pref("javascript.options.mem.gc_allocation_threshold_factor", 90); user_pref("javascript.options.mem.gc_allocation_threshold_mb", 25); user_pref("javascript.options.mem.gc_avoid_interrupt_factor", 100); user_pref("javascript.options.mem.gc_compacting", true); user_pref("javascript.options.mem.gc_dynamic_heap_growth", true); user_pref("javascript.options.mem.gc_dynamic_mark_slice", true); user_pref("javascript.options.mem.gc_high_frequency_heap_growth_max", 300); user_pref("javascript.options.mem.gc_high_frequency_heap_growth_min", 150); user_pref("javascript.options.mem.gc_high_frequency_high_limit_mb", 500); user_pref("javascript.options.mem.gc_high_frequency_low_limit_mb", 100); user_pref("javascript.options.mem.gc_high_frequency_time_limit_ms", 1000); user_pref("javascript.options.mem.gc_incremental_slice_ms", 5); user_pref("javascript.options.mem.gc_incremental", true); user_pref("javascript.options.mem.gc_low_frequency_heap_growth", 150); user_pref("javascript.options.mem.gc_max_empty_chunk_count", 30); user_pref("javascript.options.mem.gc_min_empty_chunk_count", 1); user_pref("javascript.options.mem.gc_non_incremental_factor", 112); user_pref("javascript.options.mem.gc_per_zone", true); user_pref("javascript.options.mem.high_water_mark", 128); user_pref("javascript.options.mem.max", -1); user_pref("javascript.options.mem.nursery.max_kb", 16384); user_pref("javascript.options.mem.nursery.min_kb", 256); user_pref("javascript.options.native_regexp", true); user_pref("javascript.options.parallel_parsing", true); user_pref("javascript.options.shared_memory", false); user_pref("javascript.options.showInConsole", false); user_pref("javascript.options.streams", true); user_pref("javascript.options.strict.debug", false); user_pref("javascript.options.strict", false); user_pref("javascript.options.throw_on_asmjs_validation_failure", false); user_pref("javascript.options.throw_on_debuggee_would_run", false); user_pref("javascript.options.unboxed_objects", false); user_pref("javascript.options.wasm_baselinejit", true); user_pref("javascript.options.wasm_cranelift", false); user_pref("javascript.options.wasm_gc", false); user_pref("javascript.options.wasm_ionjit", true); user_pref("javascript.options.wasm_verbose", false); user_pref("javascript.options.wasm", false); user_pref("javascript.use_us_english_locale", true); user_pref("javascript.options.bigint", false); user_pref("jsloader.shareGlobal", true); user_pref("keyword.enabled", false); user_pref("layers.acceleration.draw-fps", false); user_pref("layers.acceleration.force-enabled", true); user_pref("layers.bench.enabled", false); user_pref("layers.child-process-shutdown", true); user_pref("layers.compositing-tiles.width", 1024); user_pref("layers.d3d11.enable-blacklist", true); // false
                            user_pref("layers.draw-bigimage-borders", false); user_pref("layers.draw-borders", false); user_pref("layers.draw-mask-debug", false); user_pref("layers.draw-tile-borders", false); user_pref("layers.dump-client-layers", false); user_pref("layers.dump-decision", false); user_pref("layers.dump-host-layers", false); user_pref("layers.dump-texture", false); user_pref("layers.dump", false); user_pref("layers.force-active", false); user_pref("layers.geometry.basic.enabled", true); user_pref("layers.geometry.d3d11.enabled", true); user_pref("layers.geometry.opengl.enabled", true); user_pref("layers.low-precision-buffer", false); user_pref("layers.mlgpu.enable-on-windows7", true); user_pref("layers.offmainthreadcomposition.async-animations", true); user_pref("layers.offmainthreadcomposition.enabled", true); user_pref("layers.offmainthreadcomposition.frame-rate", -1); user_pref("layers.offmainthreadcomposition.log-animations", false); user_pref("layers.omtp.dump-capture", false);
                            //user_pref("layers.omtp.paint-workers", 4);
                            //user_pref("layers.enable-tiles", true);
                            user_pref("layers.omtp.release-capture-on-main-thread", false); user_pref("layers.progressive-paint", false); user_pref("layers.shared-buffer-provider.enabled", true); user_pref("layers.single-tile.enabled", true); user_pref("layers.tiles.edge-padding", false); user_pref("layers.tiles.retain-back-buffer", true); user_pref("layout.animated-image-layers.enabled", false); user_pref("layout.animation.prerender.absolute-limit-x", 4096); user_pref("layout.animation.prerender.absolute-limit-y", 4096); user_pref("layout.animation.prerender.partial", false); user_pref("layout.animation.prerender.viewport-ratio-limit-x", "1.125"); user_pref("layout.animation.prerender.viewport-ratio-limit-y", "1.125"); user_pref("layout.css.aspect-ratio-number.enabled", false); user_pref("layout.css.devPixelsPerPx", "-1.0"); user_pref("layout.css.dpi", -1); user_pref("layout.css.outline-style-auto.enabled", false); user_pref("layout.css.paint-order.enabled", true); user_pref("layout.css.report_errors", true); user_pref("layout.css.ruby.intercharacter.enabled", false); user_pref("layout.css.scroll-behavior.damping-ratio", "1.0"); user_pref("layout.css.scroll-behavior.enabled", true); user_pref("layout.css.scroll-behavior.spring-constant", "250.0"); user_pref("layout.css.scroll-snap.prediction-max-velocity", 2000); user_pref("layout.css.scroll-snap.prediction-sensitivity", "0.750"); user_pref("layout.css.scroll-snap.proximity-threshold", 200); user_pref("layout.css.servo.enable", true); user_pref("layout.css.shared-memory-ua-sheets.enabled", true); user_pref("layout.css.text-decoration-skip-ink.enabled", true); user_pref("layout.css.text-decoration-thickness.enabled", true); user_pref("layout.css.text-underline-offset.enabled", true); user_pref("layout.css.use-counters-unimplemented.enabled", false); user_pref("layout.css.visited_links_enabled", false); user_pref("layout.display-list.dump-content", false); user_pref("layout.display-list.dump-parent", false); user_pref("layout.display-list.dump", false); user_pref("layout.display-list.rebuild-frame-limit", 500); user_pref("layout.float-fragments-inside-column.enabled", true); user_pref("layout.frame_rate.precise", true); // false, in case you have scrolling issues
                            user_pref("layout.frame_rate", 144); user_pref("layout.framevisibility.amountscrollbeforeupdatehorizontal", 2); user_pref("layout.framevisibility.amountscrollbeforeupdatevertical", 2); user_pref("layout.framevisibility.enabled", true); user_pref("layout.framevisibility.numscrollportheights", 1); user_pref("layout.framevisibility.numscrollportwidths", 0); user_pref("layout.idle_period.required_quiescent_frames", 2); user_pref("layout.idle_period.time_limit", 1); user_pref("layout.interruptible-reflow.enabled", true); user_pref("layout.reflow.synthMouseMove", true); user_pref("layout.scroll.root-frame-containers", false); user_pref("layout.scrollbar.side", 0); user_pref("layout.scrollbars.always-layerize-track", false); user_pref("layout.selection.caret_style", 0); user_pref("layout.spammy_warnings.enabled", false); user_pref("layout.spellcheckDefault", 2); user_pref("layout.testing.overlay-scrollbars.always-visible", false); user_pref("layout.viewport_contains_no_contents_area", false); user_pref("layout.word_select.eat_space_to_next_word", false); user_pref("layout.word_select.stop_at_punctuation", true); user_pref("layout.word_select.stop_at_underscore", false); user_pref("logging.config.clear_on_startup", true); user_pref("loop.logDomains", false); user_pref("mathml.deprecated_style_attributes.disabled", false); user_pref("mathml.disabled", false); user_pref("mathml.legacy_number_syntax.disabled", true); user_pref("mathml.mathsize_names.disabled", false); user_pref("mathml.mathspace_names.disabled", false); user_pref("mathml.mfrac_linethickness_names.disabled", false); user_pref("mathml.nonzero_unitless_lengths.disabled", true); user_pref("mathml.scale_stretchy_operators.enabled", true); user_pref("media.audioFocus.management", false); user_pref("media.audiograph.single_thread.enabled", false); user_pref("media.audioipc.pool_size", 2); user_pref("media.audioipc.stack_size", 262144); user_pref("media.autoplay.allow-extension-background-pages", true); user_pref("media.autoplay.allow-muted", false); user_pref("media.autoplay.blackList-override-default", true); user_pref("media.autoplay.block-webaudio", true); user_pref("media.autoplay.blocked", 1); user_pref("media.autoplay.default", 5); user_pref("media.autoplay.enabled.user-gestures-needed", false); user_pref("media.av1.enabled", true); user_pref("media.av1.use-dav1d", true); user_pref("media.benchmark.frames", 300); user_pref("media.benchmark.timeout", 1000); user_pref("media.benchmark.vp9.threshold", 150); user_pref("media.block-autoplay-until-in-foreground", true); user_pref("media.cloneElementVisually.testing", false); user_pref("media.cubeb.logging_level", ""); user_pref("media.decoder-doctor.decode-errors-allowed", ""); user_pref("media.decoder-doctor.decode-warnings-allowed", ""); user_pref("media.decoder-doctor.new-issue-endpoint", "); // https://webcompat.com/issues/new"
                                user_pref("media.decoder-doctor.notifications-allowed", "MediaWMFNeeded,MediaWidevineNoWMF,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec"); user_pref("media.decoder-doctor.verbose", false); user_pref("media.default_volume", "1.0"); user_pref("media.eme.enabled", false); user_pref("media.encoder.webm.enabled", true); user_pref("media.getusermedia.aec_enabled", false); user_pref("media.getusermedia.aec_extended_filter", true); user_pref("media.getusermedia.aec", 1); user_pref("media.getusermedia.agc_enabled", true); user_pref("media.getusermedia.agc", 1); user_pref("media.getusermedia.audiocapture.enabled", false); user_pref("media.getusermedia.browser.enabled", false); user_pref("media.getusermedia.camera.off_while_disabled.delay_ms", 3000); user_pref("media.getusermedia.camera.off_while_disabled.enabled", true); user_pref("media.getusermedia.channels", 0); user_pref("media.getusermedia.noise_enabled", false); user_pref("media.getusermedia.noise", 1); user_pref("media.getusermedia.use_aec_mobile", false); user_pref("media.gmp-gmpopenh264.enabled", false); user_pref("media.gmp-manager.cert.checkAttributes", true); user_pref("media.gmp-manager.cert.requireBuiltIn", true); user_pref("media.gmp-manager.certs.1.commonName", "aus5.mozilla.org"); user_pref("media.gmp-manager.certs.1.issuerName", "CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US"); user_pref("media.gmp-manager.certs.2.commonName", "aus5.mozilla.org"); user_pref("media.gmp-manager.certs.2.issuerName", "CN=thawte SSL CA - G2,O=\"thawte, Inc.\",C=US"); user_pref("media.gmp-manager.url", ""); user_pref("media.gmp-provider.enabled", false); user_pref("media.gmp-widevinecdm.enabled", false); user_pref("media.gmp-widevinecdm.visible", false); user_pref("media.gmp.decoder.aac", 0); user_pref("media.gmp.decoder.h264", 0); user_pref("media.gmp.storage.version.expected", 1); user_pref("media.gpu-process-decoder", true); user_pref("media.hardware-video-decoding.enabled", true); user_pref("media.media-capabilities.enabled", false); user_pref("media.media-capabilities.screen.enabled", false); user_pref("media.mediacapabilities.drop-threshold", 95); user_pref("media.mediacapabilities.from-database", true); user_pref("media.mediasource.enabled", true); user_pref("media.mediasource.experimental.enabled", false); user_pref("media.mediasource.mp4.enabled", true); user_pref("media.mediasource.webm.audio.enabled", true); user_pref("media.mediasource.webm.enabled", false); user_pref("media.navigator.audio.fake_frequency", 1000); user_pref("media.navigator.audio.full_duplex", true); user_pref("media.navigator.audio.use_fec", true); user_pref("media.navigator.enabled", false); user_pref("media.navigator.mediadatadecoder_h264_enabled", true); user_pref("media.navigator.mediadatadecoder_vpx_enabled", true); user_pref("media.navigator.permission.disabled", false); user_pref("media.navigator.streams.fake", false); user_pref("media.navigator.video.default_fps", 60); user_pref("media.navigator.video.default_height", 0); user_pref("media.navigator.video.default_width", 0); user_pref("media.navigator.video.enabled", false); user_pref("media.navigator.video.h264.level", 31); user_pref("media.navigator.video.h264.max_br", 0); user_pref("media.navigator.video.h264.max_mbps", 0); user_pref("media.navigator.video.max_fr", 60); user_pref("media.navigator.video.max_fs", 12288); user_pref("media.navigator.video.red_ulpfec_enabled", false); user_pref("media.navigator.video.use_remb", true); user_pref("media.navigator.video.use_tmmbr", false); user_pref("media.omt_data_delivery.enabled", true); user_pref("media.ondevicechange.fakeDeviceChangeEvent.enabled", false); user_pref("media.opus.enabled", true); user_pref("media.peerconnection.default_iceservers", "[]"); user_pref("media.peerconnection.enabled", false); user_pref("media.peerconnection.ice.default_address_only", true); user_pref("media.peerconnection.ice.link_local", false); user_pref("media.peerconnection.ice.loopback", false); user_pref("media.peerconnection.ice.no_host", true); user_pref("media.peerconnection.ice.obfuscate_host_addresses", false); user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", false); user_pref("media.peerconnection.ice.proxy_only", false); user_pref("media.peerconnection.ice.relay_only", false); user_pref("media.peerconnection.ice.stun_client_maximum_transmits", 7); user_pref("media.peerconnection.ice.tcp_so_sock_count", 0); user_pref("media.peerconnection.ice.tcp", true); user_pref("media.peerconnection.ice.trickle_grace_period", 5000); user_pref("media.peerconnection.identity.timeout", 10000); user_pref("media.peerconnection.mtransport_process", false); user_pref("media.peerconnection.sdp.rust.compare", false); user_pref("media.peerconnection.sdp.rust.compare", true); user_pref("media.peerconnection.sdp.rust.enabled", false); user_pref("media.peerconnection.sdp.rust.enabled", true); user_pref("media.peerconnection.simulcast", true); user_pref("media.peerconnection.turn.disable", false); user_pref("media.peerconnection.use_document_iceservers", true); user_pref("media.peerconnection.video.denoising", false); user_pref("media.peerconnection.video.enabled", true); user_pref("media.peerconnection.video.max_bitrate", 0); user_pref("media.peerconnection.video.min_bitrate_estimate", 0); user_pref("media.peerconnection.video.min_bitrate", 0); user_pref("media.peerconnection.video.start_bitrate", 0); user_pref("media.peerconnection.video.vp9_enabled", true); user_pref("media.peerconnection.video.vp9_preferred", false); user_pref("media.play-stand-alone", true); user_pref("media.rdd-opus.enabled", true); user_pref("media.rdd-wav.enabled", false); user_pref("media.recorder.audio_node.enabled", false); user_pref("media.recorder.video.frame_drops", true); user_pref("media.throttle-factor", 2); user_pref("media.throttle-regardless-of-download-rate", false); user_pref("media.useAudioChannelAPI", false); user_pref("media.video_stats.enabled", false); user_pref("media.video-queue.default-size", 10); user_pref("media.video-queue.send-to-compositor-size", 9999); user_pref("media.videocontrols.picture-in-picture.enabled", true); user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", false); user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true); user_pref("media.videocontrols.picture-in-picture.video-toggle.flyout-enabled", true); user_pref("media.videocontrols.picture-in-picture.video-toggle.flyout-wait-ms", 5000); user_pref("media.volume_scale", "1.0"); user_pref("media.wave.enabled", true); user_pref("media.webm.enabled", true); user_pref("media.webrtc.debug.aec_dump_max_size", 4194304); user_pref("media.webrtc.debug.log_file", ""); user_pref("media.webrtc.debug.multi_log", false); user_pref("media.webrtc.debug.trace_mask", 0); user_pref("media.webrtc.net.force_disable_rtcp_reception", false); user_pref("media.webrtc.platformencoder", false); user_pref("media.webspeech.recognition.enable", false); user_pref("media.webspeech.synth.enabled", false); user_pref("media.webvtt.debug.logging", false); user_pref("media.webvtt.pseudo.enabled", true); user_pref("media.wmf.allow-unsupported-resolutions", false); user_pref("media.wmf.amd.highres.enabled", true); user_pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process", false); // removed
                                user_pref("media.wmf.disable-d3d11-for-dlls", "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2884, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2884, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 22.21.13.8253, 22.21.13.8233, 22.21.13.8205, 22.21.13.8189, 22.21.13.8178, 22.21.13.8165, 21.21.13.7892, 21.21.13.7878, 21.21.13.7866, 21.21.13.7849, 21.21.13.7654, 21.21.13.7653, 21.21.13.7633, 21.21.13.7619, 21.21.13.7563, 21.21.13.7306, 21.21.13.7290, 21.21.13.7270, 21.21.13.7254, 21.21.13.6939, 21.21.13.6926, 21.21.13.6909, 21.21.13.4201, 21.21.13.4200, 10.18.13.6881, 10.18.13.6839, 10.18.13.6510, 10.18.13.6472, 10.18.13.6143, 10.18.13.5946, 10.18.13.5923, 10.18.13.5921, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5445, 10.18.13.5382, 10.18.13.5362, 9.18.13.4788, 9.18.13.4752, 9.18.13.4725, 9.18.13.4709, 9.18.13.4195, 9.18.13.4192, 9.18.13.4144, 9.18.13.4052, 9.18.13.3788, 9.18.13.3523, 9.18.13.3235, 9.18.13.3165, 9.18.13.2723, 9.18.13.2702, 9.18.13.1422, 9.18.13.1407, 9.18.13.1106, 9.18.13.546; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"); user_pref("media.wmf.disable-d3d9-for-dlls", "igdumd64.dll: 8.15.10.2189, 8.15.10.2119, 8.15.10.2104, 8.15.10.2102, 8.771.1.0; atiumd64.dll: 7.14.10.833, 7.14.10.867, 7.14.10.885, 7.14.10.903, 7.14.10.911, 8.14.10.768, 9.14.10.1001, 9.14.10.1017, 9.14.10.1080, 9.14.10.1128, 9.14.10.1162, 9.14.10.1171, 9.14.10.1183, 9.14.10.1197, 9.14.10.945, 9.14.10.972, 9.14.10.984, 9.14.10.996"); user_pref("media.wmf.dxva.d3d11.enabled", true); user_pref("media.wmf.dxva.enabled", true); user_pref("media.wmf.dxva.max-videos", 8); user_pref("media.wmf.force.allow-p010-format", false); user_pref("media.wmf.low-latency.enabled", false); user_pref("media.wmf.low-latency.force-disabled", false); user_pref("media.wmf.play-stand-alone", true); user_pref("media.wmf.use-nv12-format", true); user_pref("memory_info_dumper.watch_fifo.enabled", false); user_pref("memory.blob_report.stack_frames", 0); user_pref("memory.dump_reports_on_oom", false); user_pref("memory.ghost_window_timeout_seconds", 60); user_pref("memory.report_concurrency", 10); user_pref("middlemouse.contentLoadURL", false); user_pref("middlemouse.openNewWindow", true); user_pref("middlemouse.paste", false); user_pref("middlemouse.scrollbarPosition", true); user_pref("mousewheel.acceleration.factor", 10); user_pref("mousewheel.acceleration.start", -1); user_pref("mousewheel.autodir.enabled", false); user_pref("mousewheel.autodir.honourroot", false); user_pref("mousewheel.debug.make_window_under_cursor_foreground", false); user_pref("mousewheel.default.action.override_x", -1); user_pref("mousewheel.default.action", 1); user_pref("mousewheel.default.delta_multiplier_x", 100); user_pref("mousewheel.default.delta_multiplier_y", 100); user_pref("mousewheel.default.delta_multiplier_z", 100); user_pref("mousewheel.emulate_at_wm_scroll", false); user_pref("mousewheel.min_line_scroll_amount", 5); user_pref("mousewheel.system_scroll_override_on_root_content.enabled", true); user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 200); user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 420); user_pref("mousewheel.system_settings_cache.enabled", true); user_pref("mousewheel.system_settings_cache.force_enabled", false); user_pref("mousewheel.transaction.ignoremovedelay", 100); user_pref("mousewheel.transaction.timeout", 1500); user_pref("mousewheel.with_alt.action.override_x", -1); user_pref("mousewheel.with_alt.action", 2); user_pref("mousewheel.with_alt.delta_multiplier_x", 100); user_pref("mousewheel.with_alt.delta_multiplier_y", 100); user_pref("mousewheel.with_alt.delta_multiplier_z", 100); user_pref("mousewheel.with_control.action.override_x", -1); user_pref("mousewheel.with_control.action", 3); user_pref("mousewheel.with_control.delta_multiplier_x", 100); user_pref("mousewheel.with_control.delta_multiplier_y", 100); user_pref("mousewheel.with_control.delta_multiplier_z", 100); user_pref("mousewheel.with_shift.action.override_x", -1); user_pref("mousewheel.with_shift.action", 4); user_pref("mousewheel.with_shift.delta_multiplier_x", 100); user_pref("mousewheel.with_shift.delta_multiplier_y", 100); user_pref("mousewheel.with_shift.delta_multiplier_z", 100); user_pref("mousewheel.with_win.action.override_x", -1); user_pref("mousewheel.with_win.action", 1); user_pref("mousewheel.with_win.delta_multiplier_x", 100); user_pref("mousewheel.with_win.delta_multiplier_y", 100); user_pref("mousewheel.with_win.delta_multiplier_z", 100); user_pref("narrate.filter-voices", true); user_pref("narrate.rate", 0); user_pref("narrate.test", false); user_pref("narrate.voice", " { \"default\": \"automatic\" }"); user_pref("network.allow-experiments", false); user_pref("network.auth.force-generic-ntlm-v1", false); user_pref("network.auth.force-generic-ntlm", false); user_pref("network.auth.private-browsing-sso", false); user_pref("network.auth.subresource-http-auth-allow", 1); user_pref("network.auth.use-sspi", true); user_pref("network.automatic-ntlm-auth.allow-non-fqdn", false); user_pref("network.automatic-ntlm-auth.allow-proxies", true); user_pref("network.automatic-ntlm-auth.trusted-uris", ""); user_pref("network.buffer.cache.count", 24); user_pref("network.buffer.cache.size", 32768); user_pref("network.captive-portal-service.backoffFactor", "5.0"); user_pref("network.captive-portal-service.enabled", false); user_pref("network.captive-portal-service.maxInterval", 1500000); user_pref("network.captive-portal-service.minInterval", 60000); user_pref("network.connectivity-service.DNSv4.domain", ""); // mozilla.org
                                user_pref("network.connectivity-service.DNSv6.domain", ""); // ^^
                                user_pref("network.connectivity-service.enabled", false); user_pref("network.connectivity-service.IPv4.url", "http://0.0.0.0"); // http://detectportal.firefox.com/success.txt?ipv4
                                user_pref("network.connectivity-service.IPv6.url", "http://0.0.0.0"); // http://detectportal.firefox.com/success.txt?ipv6
                                user_pref("network.cookie.cookieBehavior", 2); user_pref("network.cookie.lifetimePolicy", 2); user_pref("network.cookie.maxNumber", 3000); user_pref("network.cookie.maxPerHost", 180); user_pref("network.cookie.move.interval_sec", 10); user_pref("network.cookie.prefsMigrated", true); user_pref("network.cookie.quotaPerHost", 150); user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); user_pref("network.cookie.thirdparty.sessionOnly", true); user_pref("network.disable.ipc.security", true); user_pref("network.dns.blockDotOnion", true); user_pref("network.dns.disableIPv6", false); user_pref("network.dns.disablePrefetch-next", false); user_pref("network.dns.disablePrefetch", false); user_pref("network.dns.disablePrefetchFromHTTPS", true); user_pref("network.dns.forceResolve", ""); user_pref("network.dns.get-ttl", true); user_pref("network.dns.ipv4OnlyDomains", ""); user_pref("network.dns.localDomains", ""); user_pref("network.dns.native-is-localhost", false); user_pref("network.dns.offline-localhost", true); user_pref("network.dns.resolver-thread-extra-idle-time-seconds", 60); user_pref("network.dns.skipTRR-when-parental-control-enabled", true); user_pref("network.dnsCacheEntries", 400); user_pref("network.dnsCacheExpiration", 60); user_pref("network.dnsCacheExpirationGracePeriod", 60); user_pref("network.file.disable_unc_paths", false); user_pref("network.ftp.control.qos", 0); user_pref("network.ftp.data.qos", 0); user_pref("network.ftp.enabled", false); user_pref("network.ftp.idleConnectionTimeout", 300); user_pref("network.generic-ntlm-auth.workstation", "WORKSTATION"); user_pref("network.gio.supported-protocols", ""); user_pref("network.http.accept-encoding.secure", "gzip, deflate, br"); user_pref("network.http.accept-encoding", "gzip, deflate"); user_pref("network.http.altsvc.enabled", false); user_pref("network.http.altsvc.oe", false); user_pref("network.http.altsvc.proxy_checks", true); user_pref("network.http.assoc-req.enforce", false); user_pref("network.http.connection-retry-timeout", 250); user_pref("network.http.connection-timeout", 90); user_pref("network.http.default-socket-type", ""); user_pref("network.http.diagnostics", false); user_pref("network.http.enforce-framing.http1", false); user_pref("network.http.enforce-framing.soft", true); user_pref("network.http.enforce-framing.strict_chunked_encoding", true); user_pref("network.http.fallback-connection-timeout", 5); user_pref("network.http.fast-fallback-to-IPv4", true); user_pref("network.http.focused_window_transaction_ratio", "0.9"); user_pref("network.http.keep-alive.timeout", 60); user_pref("network.http.max_response_header_size", 393216); user_pref("network.http.max-connections", 700); user_pref("network.http.max-persistent-connections-per-proxy", 32); user_pref("network.http.max-persistent-connections-per-server", 6); user_pref("network.http.max-urgent-start-excessive-connections-per-host", 3); user_pref("network.http.network-changed.timeout", 5); user_pref("network.http.on_click_priority", true); user_pref("network.http.originextension", true); user_pref("network.http.pacing.requests.burst", 10); user_pref("network.http.pacing.requests.enabled", true); user_pref("network.http.pacing.requests.hz", 80); user_pref("network.http.pacing.requests.min-parallelism", 6); user_pref("network.http.prompt-temp-redirect", false); user_pref("network.http.proxy.version", "1.1"); user_pref("network.http.qos", 0); user_pref("network.http.rcwn.cache_queue_normal_threshold", 8); user_pref("network.http.rcwn.cache_queue_priority_threshold", 2); user_pref("network.http.rcwn.enabled", true); user_pref("network.http.rcwn.max_wait_before_racing_ms", 500); user_pref("network.http.rcwn.min_wait_before_racing_ms", 0); user_pref("network.http.rcwn.small_resource_size_kb", 256); user_pref("network.http.redirection-limit", 20); user_pref("network.http.referer.defaultPolicy.pbmode", 2); user_pref("network.http.referer.defaultPolicy.trackers.pbmode", 2); user_pref("network.http.referer.defaultPolicy.trackers", 2); user_pref("network.http.referer.defaultPolicy", 3); user_pref("network.http.referer.hideOnionSource", true); user_pref("network.http.referer.referrerLengthLimit", 4096); user_pref("network.http.referer.spoofSource", false); user_pref("network.http.referer.trimmingPolicy", 0); user_pref("network.http.referer.XOriginPolicy", 1); user_pref("network.http.referer.XOriginTrimmingPolicy", 0); user_pref("network.http.rendering-critical-requests-prioritization", true); user_pref("network.http.request.max-attempts", 10); user_pref("network.http.request.max-start-delay", 10); user_pref("network.http.response.timeout", 300); user_pref("network.http.send_window_size", 1024); user_pref("network.http.sendOriginHeader", 2); user_pref("network.http.sendRefererHeader", 1); user_pref("network.http.spdy.allow-push", false); user_pref("network.http.spdy.bug1556491", true); //irrelevant, workaround
                                user_pref("network.http.spdy.bug1563538", true); user_pref("network.http.spdy.bug1563695", true); //irrelevant, workaround
                                user_pref("network.http.spdy.chunk-size", 16000); user_pref("network.http.spdy.coalesce-hostnames", true); user_pref("network.http.spdy.default-concurrent", 100); user_pref("network.http.spdy.default-hpack-buffer", 65536); user_pref("network.http.spdy.enable-hpack-dump", false); user_pref("network.http.spdy.enabled.deps", false); user_pref("network.http.spdy.enabled.http2", false); user_pref("network.http.spdy.enabled", false); user_pref("network.http.spdy.enforce-tls-profile", false); user_pref("network.http.spdy.persistent-settings", false); user_pref("network.http.spdy.ping-threshold", 58); user_pref("network.http.spdy.ping-timeout", 8); user_pref("network.http.spdy.pull-allowance", 12582912); user_pref("network.http.spdy.push-allowance", 131072); user_pref("network.http.spdy.send-buffer-size", 131072); user_pref("network.http.spdy.timeout", 170); user_pref("network.http.spdy.websockets", false); user_pref("network.http.speculative-parallel-limit", 0); user_pref("network.http.tailing.delay-max", 5000); user_pref("network.http.tailing.delay-quantum-after-domcontentloaded", 100); user_pref("network.http.tailing.delay-quantum", 600); user_pref("network.http.tailing.total-max", 45000); user_pref("network.http.tcp_keepalive.long_lived_connections", true); user_pref("network.http.tcp_keepalive.long_lived_idle_time", 600); user_pref("network.http.tcp_keepalive.short_lived_connections", true); user_pref("network.http.tcp_keepalive.short_lived_idle_time", 10); user_pref("network.http.tcp_keepalive.short_lived_time", 60); user_pref("network.http.throttle.hold-time-ms", 800); user_pref("network.http.throttle.max-time-ms", 500); user_pref("network.http.throttle.resume-for", 100); user_pref("network.http.throttle.suspend-for", 900); user_pref("network.http.throttle.version", 1); user_pref("network.http.tls-handshake-timeout", 30); user_pref("network.http.version", "1.1"); user_pref("network.IDN_show_punycode", true); user_pref("network.IDN.extra_allowed_chars", ""); user_pref("network.IDN.extra_blocked_chars", ""); user_pref("network.IDN.restriction_profile", "high"); user_pref("network.IDN.use_whitelist", false); user_pref("network.IDN.whitelist.ac", true); user_pref("network.IDN.whitelist.ar", true); user_pref("network.IDN.whitelist.asia", true); user_pref("network.IDN.whitelist.at", true); user_pref("network.IDN.whitelist.biz", true); user_pref("network.IDN.whitelist.br", true); user_pref("network.IDN.whitelist.ca", true); user_pref("network.IDN.whitelist.cat", true); user_pref("network.IDN.whitelist.ch", true); user_pref("network.IDN.whitelist.cl", true); user_pref("network.IDN.whitelist.cn", true); user_pref("network.IDN.whitelist.de", true); user_pref("network.IDN.whitelist.dk", true); user_pref("network.IDN.whitelist.ee", true); user_pref("network.IDN.whitelist.es", true); user_pref("network.IDN.whitelist.fi", true); user_pref("network.IDN.whitelist.fr", true); user_pref("network.IDN.whitelist.gr", true); user_pref("network.IDN.whitelist.gt", true); user_pref("network.IDN.whitelist.hu", true); user_pref("network.IDN.whitelist.il", true); user_pref("network.IDN.whitelist.info", true); user_pref("network.IDN.whitelist.io", true); user_pref("network.IDN.whitelist.ir", true); user_pref("network.IDN.whitelist.is", true); user_pref("network.IDN.whitelist.jp", true); user_pref("network.IDN.whitelist.kr", true); user_pref("network.IDN.whitelist.li", true); user_pref("network.IDN.whitelist.lt", true); user_pref("network.IDN.whitelist.lu", true); user_pref("network.IDN.whitelist.lv", true); user_pref("network.IDN.whitelist.museum", true); user_pref("network.IDN.whitelist.no", true); user_pref("network.IDN.whitelist.nu", true); user_pref("network.IDN.whitelist.nz", true); user_pref("network.IDN.whitelist.org", true); user_pref("network.IDN.whitelist.pl", true); user_pref("network.IDN.whitelist.pm", true); user_pref("network.IDN.whitelist.pr", true); user_pref("network.IDN.whitelist.re", true); user_pref("network.IDN.whitelist.se", true); user_pref("network.IDN.whitelist.sh", true); user_pref("network.IDN.whitelist.si", true); user_pref("network.IDN.whitelist.tel", true); user_pref("network.IDN.whitelist.tf", true); user_pref("network.IDN.whitelist.th", true); user_pref("network.IDN.whitelist.tm", true); user_pref("network.IDN.whitelist.tw", true); user_pref("network.IDN.whitelist.ua", true); user_pref("network.IDN.whitelist.vn", true); user_pref("network.IDN.whitelist.wf", true); user_pref("network.IDN.whitelist.xn--0zwm56d", true); user_pref("network.IDN.whitelist.xn--11b5bs3a9aj6g", true); user_pref("network.IDN.whitelist.xn--80akhbyknj4f", true); user_pref("network.IDN.whitelist.xn--90a3ac", true); user_pref("network.IDN.whitelist.xn--9t4b11yi5a", true); user_pref("network.IDN.whitelist.xn--deba0ad", true); user_pref("network.IDN.whitelist.xn--fiqs8s", true); // Simplified
                                user_pref("network.IDN.whitelist.xn--fiqz9s", true); // Traditional
                                user_pref("network.IDN.whitelist.xn--fzc2c9e2c", true); user_pref("network.IDN.whitelist.xn--g6w251d", true); user_pref("network.IDN.whitelist.xn--hgbk6aj7f53bba", true); user_pref("network.IDN.whitelist.xn--hlcj6aya9esc7a", true); user_pref("network.IDN.whitelist.xn--j6w193g", true); user_pref("network.IDN.whitelist.xn--jxalpdlp", true); user_pref("network.IDN.whitelist.xn--kgbechtv", true); user_pref("network.IDN.whitelist.xn--kprw13d", true); // Simplified
                                user_pref("network.IDN.whitelist.xn--kpry57d", true); // Traditional
                                user_pref("network.IDN.whitelist.xn--mgba3a4f16a", true); user_pref("network.IDN.whitelist.xn--mgba3a4fra", true); user_pref("network.IDN.whitelist.xn--mgbaam7a8h", true); user_pref("network.IDN.whitelist.xn--mgbayh7gpa", true); user_pref("network.IDN.whitelist.xn--mgberp4a5d4a87g", true); user_pref("network.IDN.whitelist.xn--mgberp4a5d4ar", true); user_pref("network.IDN.whitelist.xn--mgbqly7c0a67fbc", true); user_pref("network.IDN.whitelist.xn--mgbqly7cvafr", true); user_pref("network.IDN.whitelist.xn--o3cw4h", true); user_pref("network.IDN.whitelist.xn--ogbpf8fl", true); user_pref("network.IDN.whitelist.xn--p1ai", true); user_pref("network.IDN.whitelist.xn--wgbh1c", true); user_pref("network.IDN.whitelist.xn--wgbl6a", true); user_pref("network.IDN.whitelist.xn--xkc2al3hye2a", true); user_pref("network.IDN.whitelist.xn--zckzah", true); user_pref("network.IDN.whitelist.yt", true); user_pref("network.jar.open-unsafe-types", false); user_pref("network.manage-offline-status", false); user_pref("network.mdns.use_js_fallback", false); user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false); user_pref("network.negotiate-auth.allow-non-fqdn", false); user_pref("network.negotiate-auth.allow-proxies", true); user_pref("network.negotiate-auth.delegation-uris", ""); user_pref("network.negotiate-auth.gsslib", ""); user_pref("network.negotiate-auth.trusted-uris", ""); user_pref("network.negotiate-auth.using-native-gsslib", true); user_pref("network.notify.changed", true); user_pref("network.notify.IPv6", true); user_pref("network.offline-mirrors-connectivity", false); user_pref("network.online", true); user_pref("network.predictor.enable-prefetch", false); user_pref("network.predictor.enabled", false); user_pref("network.prefetch-next", false); user_pref("network.preload", false); user_pref("network.process.enabled", false); user_pref("network.protocol-handler.expose-all", true); user_pref("network.protocol-handler.expose.about", true); // removed
                                user_pref("network.protocol-handler.expose.blob", true); // removed
                                user_pref("network.protocol-handler.expose.chrome", true); user_pref("network.protocol-handler.expose.data", true); user_pref("network.protocol-handler.expose.file", true); user_pref("network.protocol-handler.expose.ftp", false); user_pref("network.protocol-handler.expose.http", true); user_pref("network.protocol-handler.expose.https", true); user_pref("network.protocol-handler.expose.imap", true); user_pref("network.protocol-handler.expose.javascript", true); user_pref("network.protocol-handler.expose.moz-extension", true); user_pref("network.protocol-handler.external-default", true); user_pref("network.protocol-handler.external.about", false); user_pref("network.protocol-handler.external.afp", false); user_pref("network.protocol-handler.external.blob", false); user_pref("network.protocol-handler.external.chrome", false); user_pref("network.protocol-handler.external.data", false); user_pref("network.protocol-handler.external.disk", false); user_pref("network.protocol-handler.external.disks", false); user_pref("network.protocol-handler.external.file", false); user_pref("network.protocol-handler.external.ftp", false); user_pref("network.protocol-handler.external.hcp", false); user_pref("network.protocol-handler.external.htp", false); user_pref("network.protocol-handler.external.htps", false); user_pref("network.protocol-handler.external.http", false); user_pref("network.protocol-handler.external.https", false); user_pref("network.protocol-handler.external.ie.http", false); user_pref("network.protocol-handler.external.iehistory", false); user_pref("network.protocol-handler.external.ierss", false); user_pref("network.protocol-handler.external.ile", false); user_pref("network.protocol-handler.external.javascript", false); user_pref("network.protocol-handler.external.le", false); user_pref("network.protocol-handler.external.moz-icon", false); user_pref("network.protocol-handler.external.ms-help", false); user_pref("network.protocol-handler.external.ms-windows-store", false); user_pref("network.protocol-handler.external.ps", false); user_pref("network.protocol-handler.external.res", false); user_pref("network.protocol-handler.external.shell", false); user_pref("network.protocol-handler.external.tps", false); user_pref("network.protocol-handler.external.ttp", false); user_pref("network.protocol-handler.external.ttps", false); user_pref("network.protocol-handler.external.vbscript", false); user_pref("network.protocol-handler.external.vnd.ms.radio", false); user_pref("network.protocol-handler.warn-external-default", true); user_pref("network.protocol-handler.warn-external.file", false); user_pref("network.proxy.allow_hijacking_localhost", false); user_pref("network.proxy.autoconfig_retry_interval_max", 300); user_pref("network.proxy.autoconfig_retry_interval_min", 5); user_pref("network.proxy.autoconfig_url.include_path", false); user_pref("network.proxy.enable_wpad_over_dhcp", true); user_pref("network.proxy.failover_timeout", 1800); user_pref("network.proxy.ftp_port", 0); user_pref("network.proxy.ftp", ""); user_pref("network.proxy.http_port", 0); user_pref("network.proxy.http", ""); user_pref("network.proxy.no_proxies_on", ""); user_pref("network.proxy.proxy_over_tls", true); user_pref("network.proxy.socks_port", 0); user_pref("network.proxy.socks_remote_dns", false); // true
                                user_pref("network.proxy.socks_version", 5); user_pref("network.proxy.socks", ""); user_pref("network.proxy.ssl_port", 0); user_pref("network.proxy.ssl", ""); user_pref("network.proxy.type", 5); user_pref("network.security.esni.enabled", true); user_pref("network.security.ports.banned", "1,2,3,4,5"); user_pref("network.ssl_tokens_cache_capacity", 2048); user_pref("network.ssl_tokens_cache_enabled", false); user_pref("network.standard-url.max-length", 2047); user_pref("network.standard-url.punycode-host", true); user_pref("network.stricttransportsecurity.preloadlist", true); user_pref("network.sts.max_time_for_events_between_two_polls", 100); user_pref("network.sts.max_time_for_pr_close_during_shutdown", 5000); user_pref("network.sts.poll_busy_wait_period_timeout", 7); user_pref("network.sts.poll_busy_wait_period", 50); user_pref("network.sts.pollable_event_timeout", 6); user_pref("network.tcp.keepalive.enabled", true); user_pref("network.tcp.keepalive.idle_time", 550); user_pref("network.tcp.keepalive.probe_count", 4); user_pref("network.tcp.keepalive.retry_interval", 1); user_pref("network.tcp.tcp_fastopen_consecutive_failure_limit", 5); user_pref("network.tcp.tcp_fastopen_enable", false); user_pref("network.tcp.tcp_fastopen_http_check_for_stalls_only_if_idle_for", 10); user_pref("network.tcp.tcp_fastopen_http_stalls_limit", 3); user_pref("network.tcp.tcp_fastopen_http_stalls_timeout", 20); user_pref("network.tickle-wifi.delay", 16); user_pref("network.tickle-wifi.duration", 400); user_pref("network.tickle-wifi.enabled", false); user_pref("network.traffic_analyzer.enabled", true); user_pref("network.trr.allow-rfc1918", false); user_pref("network.trr.blacklist-duration", 60); user_pref("network.trr.bootstrapAddress", 146.185 .167 .43); //SecureDNS (example)
                                user_pref("network.trr.confirmationNS", "example.com"); user_pref("network.trr.credentials", ""); user_pref("network.trr.custom_uri", ""); user_pref("network.trr.disable-ECS", true); user_pref("network.trr.early-AAAA", false); user_pref("network.trr.excluded-domains", "localhost,local"); user_pref("network.trr.max-fails", 5); user_pref("network.trr.mode", 3); user_pref("network.trr.request_timeout_mode_trronly_ms", 30000); user_pref("network.trr.request_timeout_ms", 1400); user_pref("network.trr.request-timeout", 1400); // removed
                                user_pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" }]"); // Full list here: https://github.com/curl/curl/wiki/DNS-over-HTTPS
                                user_pref("network.trr.skip-AAAA-when-not-supported", true); user_pref("network.trr.uri", "https://doh.securedns.eu/dns-query"); // https://mozilla.cloudflare-dns.com/dns-query
                                user_pref("network.trr.useGET", false); user_pref("network.trr.wait-for-A-and-AAAA", true); user_pref("network.trr.wait-for-portal", false); user_pref("network.warnOnAboutNetworking", false); user_pref("network.websocket.allowInsecureFromHTTPS", false); user_pref("network.websocket.auto-follow-http-redirects", false); user_pref("network.websocket.delay-failed-reconnects", true); user_pref("network.websocket.extensions.permessage-deflate", true); user_pref("network.websocket.max-connections", 200); user_pref("network.websocket.max-message-size", 2147483647); user_pref("network.websocket.timeout.close", 20); user_pref("network.websocket.timeout.open", 20); user_pref("network.websocket.timeout.ping.request", 0); user_pref("network.websocket.timeout.ping.response", 10); user_pref("nglayout.debug.invalidation", false); user_pref("nglayout.debug.paint_flashing_chrome", false); user_pref("nglayout.debug.paint_flashing", false); user_pref("nglayout.debug.widget_update_flashing", false); user_pref("nglayout.enable_drag_images", true); user_pref("offline-apps.allow_by_default", false); user_pref("offline-apps.quota.warn", 51200); user_pref("osfile.reset_worker_delay", 30000); user_pref("page_load.deprioritization_period", 5000); user_pref("pdfjs.disableAutoFetch", true); user_pref("pdfjs.disabled", false); user_pref("pdfjs.disableStream", true); user_pref("pdfjs.enabledCache.initialized", true); user_pref("pdfjs.enabledCache.state", true); user_pref("pdfjs.firstRun", false); user_pref("pdfjs.migrationVersion", 2); user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling", true); user_pref("pdfjs.previousHandler.preferredAction", 4); user_pref("permissions.default.camera", 2); user_pref("permissions.default.desktop-notification", 2); user_pref("permissions.default.geo", 2); user_pref("permissions.default.image", 1); user_pref("permissions.default.microphone", 2); user_pref("permissions.default.shortcuts", 2); user_pref("permissions.desktop-notification.notNow.enabled", false); user_pref("permissions.fullscreen.allowed", true); // false better privacy
                                user_pref("permissions.manager.defaultsUrl", ""); user_pref("permissions.memory_only", true); user_pref("places.history.enabled", false); user_pref("plugin.default.state", 2); user_pref("plugin.mousewheel.enabled", true); user_pref("plugin.override_internal_types", false); user_pref("plugin.persistentPermissionAlways.intervalInDays", 90); user_pref("plugin.scan.plid.all", true); user_pref("plugin.sessionPermissionNow.intervalInMinutes", 60); user_pref("plugin.state.flash", 0); user_pref("plugin.state.java", 0); user_pref("plugin.state.libgnome-shell-browser-plugin", 0); user_pref("plugins.favorfallback.mode", "never"); user_pref("plugins.favorfallback.rules", ""); user_pref("plugins.load_appdir_plugins", false); user_pref("plugins.navigator.hidden_ctp_plugin", ""); user_pref("plugins.rewrite_youtube_embeds", true); user_pref("plugins.update.notifyUser", true); user_pref("pointer-lock-api.warning.timeout", 3000); user_pref("security.enterprise_roots.enabled", true); // removed
                                user_pref("print.font-variations-as-paths", true); user_pref("print.print_edge_bottom", 0); user_pref("print.print_edge_left", 0); user_pref("print.print_edge_right", 0); user_pref("print.print_edge_top", 0); user_pref("print.print_footercenter", ""); user_pref("print.print_footerleft", ""); user_pref("print.print_footerright", ""); user_pref("print.print_headercenter", ""); user_pref("print.print_headerleft", ""); user_pref("print.print_headerright", ""); user_pref("print.print_in_color", true); user_pref("print.print_reversed", false); user_pref("print.print_unwriteable_margin_bottom", -1); user_pref("print.print_unwriteable_margin_left", -1); user_pref("print.print_unwriteable_margin_right", -1); user_pref("print.print_unwriteable_margin_top", -1); user_pref("print.print_via_parent", false); user_pref("print.printer_list", ""); user_pref("print.save_print_settings", true); user_pref("print.show_print_progress", true); user_pref("print.shrink-to-fit.scale-limit-percent", 20); user_pref("print.use_global_printsettings", true); user_pref("print.use_simplify_page", false); user_pref("privacy.clearOnShutdown.cache", true); user_pref("privacy.clearOnShutdown.cookies", true); user_pref("privacy.clearOnShutdown.downloads", true); user_pref("privacy.clearOnShutdown.formdata", true); user_pref("privacy.clearOnShutdown.history", true); user_pref("privacy.clearOnShutdown.offlineApps", true); user_pref("privacy.clearOnShutdown.openWindows", true); user_pref("privacy.clearOnShutdown.sessions", true); user_pref("privacy.clearOnShutdown.siteSettings", false); user_pref("privacy.cpd.cache", true); user_pref("privacy.cpd.cookies", true); user_pref("privacy.cpd.downloads", true); user_pref("privacy.cpd.formdata", true); user_pref("privacy.cpd.history", true); user_pref("privacy.cpd.offlineApps", true); user_pref("privacy.cpd.sessions", true); user_pref("privacy.donottrackheader.enabled", false); user_pref("privacy.donottrackheader.value", 0); user_pref("privacy.firstparty.isolate.block_post_message", false); user_pref("privacy.firstparty.isolate.restrict_opener_access", true); user_pref("privacy.firstparty.isolate", false); user_pref("privacy.popups.disable_from_plugins", 3); user_pref("privacy.popups.maxReported", 100); user_pref("privacy.reduceTimerPrecision.unconditional", true); user_pref("privacy.reduceTimerPrecision", true); user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", false); user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); user_pref("privacy.resistFingerprinting.jsmloglevel", "Warn"); user_pref("privacy.resistFingerprinting.reduceTimerPrecision.jitter", true); user_pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 1000); user_pref("privacy.resistFingerprinting.target_video_res", 480); user_pref("privacy.restrict3rdpartystorage.console.lazy", true); user_pref("privacy.restrict3rdpartystorage.partitionedHosts", "accounts.google.com/o/oauth2/"); user_pref("privacy.restrict3rdpartystorage.url_decorations", ""); user_pref("privacy.restrict3rdpartystorage.userInteractionRequiredForHosts", ""); user_pref("privacy.sanitize.sanitizeOnShutdown", true); user_pref("privacy.sanitize.timeSpan", 0); user_pref("privacy.socialtracking.block_cookies.enabled", true); user_pref("privacy.socialtracking.notification.counter", 0); user_pref("privacy.socialtracking.notification.enabled", false); //true
                                user_pref("privacy.socialtracking.notification.lastShown", "0"); user_pref("privacy.socialtracking.notification.max", 2); user_pref("privacy.socialtracking.notification.period.min", 172800000); user_pref("privacy.socialtracking.notification.session.pageload.min", 4); user_pref("privacy.trackingprotection.cryptomining.enabled", false); user_pref("privacy.trackingprotection.enabled", false); user_pref("privacy.trackingprotection.fingerprinting.enabled", false); user_pref("privacy.trackingprotection.origin_telemetry.enabled", false); user_pref("privacy.trackingprotection.pbmode.enabled", false); user_pref("privacy.userContext.enabled", true); user_pref("privacy.userContext.longPressBehavior", 2); user_pref("privacy.userContext.ui.enabled", true); user_pref("privacy.window.maxInnerHeight", 900); user_pref("privacy.window.maxInnerWidth", 1600); user_pref("profile.manage_only_at_launch", false); user_pref("prompts.authentication_dialog_abuse_limit", 2); user_pref("reader.color_scheme.values", "[\"light\",\"dark\",\"sepia\"]"); user_pref("reader.color_scheme", "light"); user_pref("reader.content_width", 3); user_pref("reader.errors.includeURLs", false); user_pref("reader.font_size", 5); user_pref("reader.font_type", "sans-serif"); user_pref("reader.has_used_toolbar", false); user_pref("reader.line_height", 4); user_pref("reader.parse-node-limit", 3000); user_pref("reader.parse-on-load.enabled", false); user_pref("reader.parse-on-load.force-enabled", false); user_pref("reader.toolbar.vertical", true); user_pref("resistFingerprinting", false); user_pref("security.aboutcertificate.enabled", true); user_pref("security.all_resource_uri_content_accessible", false); user_pref("security.allow_eval_in_parent_process", true); user_pref("security.allow_eval_with_system_principal", true); user_pref("security.ask_for_password", 2); user_pref("security.block_ftp_subresources", true); user_pref("security.block_importScripts_with_wrong_mime", true); user_pref("security.block_script_with_wrong_mime", true); user_pref("security.block_Worker_with_wrong_mime", false); user_pref("security.cert_pinning.enforcement_level", 2); user_pref("security.cert_pinning.process_headers_from_non_builtin_roots", false); user_pref("security.certerrors.permanentOverride", false); user_pref("security.certerrors.recordEventTelemetry", false); user_pref("security.csp.enable_violation_events", false); user_pref("security.csp.enable", true); user_pref("security.data_uri.block_toplevel_data_uri_navigations", true); user_pref("security.data_uri.unique_opaque_origin", true); user_pref("security.dialog_enable_delay", 800); user_pref("security.directory", ""); user_pref("security.disallow_non_local_systemprincipal_in_tests", false); user_pref("security.fileuri.strict_origin_policy", true); user_pref("security.identityblock.show_extended_validation", true); // false
                                user_pref("security.identitypopup.recordEventElemetry", false); user_pref("security.insecure_connection_icon.enabled", true); user_pref("security.insecure_connection_icon.pbmode.enabled", true); user_pref("security.insecure_connection_text.enabled", true); // problematic
                                user_pref("security.insecure_field_warning.contextual.enabled", true); user_pref("security.insecure_field_warning.ignore_local_ip_address", true); user_pref("security.insecure_password.ui.enabled", true); user_pref("security.mixed_content.block_active_content", true); user_pref("security.mixed_content.block_display_content", true); user_pref("security.mixed_content.block_object_subrequest", true); user_pref("security.mixed_content.upgrade_display_content", true); // false in case of problems
                                user_pref("security.notification_enable_delay", 500); user_pref("security.OCSP.enabled", 1); user_pref("security.OCSP.require", true); user_pref("security.OCSP.timeoutMilliseconds.hard", 10000); user_pref("security.OCSP.timeoutMilliseconds.soft", 2500); user_pref("security.onecrl.maximum_staleness_in_seconds", 108000); user_pref("security.password_lifetime", 10); user_pref("security.pki.sha1_enforcement_level", 1); user_pref("security.protectionspopup.recordEventTelemetry", false); user_pref("security.remote_settings.crlite_filters.bucket", "security-state"); user_pref("security.remote_settings.crlite_filters.checked", 0); user_pref("security.remote_settings.crlite_filters.collection", "cert-revocations"); user_pref("security.remote_settings.crlite_filters.enabled", false); user_pref("security.remote_settings.crlite_filters.signer", "onecrl.content-signature.mozilla.org"); user_pref("security.sandbox.content.win32k-disable", false); user_pref("security.secure_connection_icon_color_gray", true); user_pref("security.sri.enable", true); user_pref("security.ssl.disable_session_identifiers", true); user_pref("security.ssl.enable_false_start", false); user_pref("security.ssl.enable_ocsp_must_staple", true); user_pref("security.ssl.enable_ocsp_stapling", true); user_pref("security.ssl.errorReporting.automatic", false); user_pref("security.ssl.errorReporting.enabled", false); user_pref("security.ssl.errorReporting.url", ""); user_pref("security.ssl.require_safe_negotiation", true); user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); user_pref("security.ssl3.dhe_dss_aes_128_sha", false); user_pref("security.ssl3.dhe_dss_aes_256_sha", false); user_pref("security.ssl3.dhe_dss_camellia_128_sha", false); user_pref("security.ssl3.dhe_dss_camellia_256_sha", false); user_pref("security.ssl3.dhe_dss_des_ede3_sha", false); user_pref("security.ssl3.dhe_rsa_aes_128_sha", false); user_pref("security.ssl3.dhe_rsa_aes_256_sha", false); user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false); user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false); user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false); user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha", false); user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false); user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false); user_pref("security.ssl3.ecdh_ecdsa_null_sha", false); user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false); user_pref("security.ssl3.ecdh_rsa_aes_128_sha", false); user_pref("security.ssl3.ecdh_rsa_aes_256_sha", false); user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false); user_pref("security.ssl3.ecdh_rsa_null_sha", false); user_pref("security.ssl3.ecdh_rsa_rc4_128_sha", false); user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true); user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false); user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true); user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true); user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false); user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false); user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false); user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true); user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false); user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true); user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true); user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false); user_pref("security.ssl3.ecdhe_rsa_null_sha", false); user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false); user_pref("security.ssl3.rsa_1024_rc4_56_sha", false); user_pref("security.ssl3.rsa_aes_128_sha", true); user_pref("security.ssl3.rsa_aes_256_sha", true); user_pref("security.ssl3.rsa_camellia_128_sha", false); user_pref("security.ssl3.rsa_camellia_256_sha", false); user_pref("security.ssl3.rsa_des_ede3_sha", false); user_pref("security.ssl3.rsa_fips_des_ede3_sha", false); user_pref("security.ssl3.rsa_null_md5", false); user_pref("security.ssl3.rsa_null_sha", false); user_pref("security.ssl3.rsa_rc2_40_md5", false); user_pref("security.ssl3.rsa_rc4_128_md5", false); user_pref("security.ssl3.rsa_rc4_128_sha", false); user_pref("security.ssl3.rsa_rc4_40_md5", false); user_pref("security.ssl3.rsa_seed_sha", false); user_pref("security.tls.enable_0rtt_data", true); user_pref("security.tls.enable_delegated_credentials", false); user_pref("security.tls.unrestricted_rc4_fallback", false); user_pref("security.tls.version.fallback-limit", 4); user_pref("security.view-source.reachable-from-inner-protocol", false); user_pref("security.xpconnect.plugin.unrestricted", false); user_pref("services.blocklist.addons.checked", 0); user_pref("services.blocklist.addons.collection", "addons"); user_pref("services.blocklist.addons.signer", "remote-settings.content-signature.mozilla.org"); user_pref("services.blocklist.bucket", "blocklists"); user_pref("services.blocklist.gfx.checked", 0); user_pref("services.blocklist.gfx.collection", "gfx"); user_pref("services.blocklist.gfx.signer", "remote-settings.content-signature.mozilla.org"); user_pref("services.blocklist.pinning.bucket", "pinning"); user_pref("services.blocklist.pinning.checked", 0); user_pref("services.blocklist.pinning.collection", "pins"); user_pref("services.blocklist.pinning.enabled", true); user_pref("services.blocklist.pinning.signer", "pinning-preload.content-signature.mozilla.org"); user_pref("services.blocklist.plugins.checked", 0); user_pref("services.blocklist.plugins.collection", "plugins"); user_pref("services.blocklist.plugins.signer", "remote-settings.content-signature.mozilla.org"); user_pref("services.blocklist.update_enabled", true); // removed
                                user_pref("services.common.log.logger.rest.request", "Warn"); user_pref("services.common.log.logger.rest.response", "Warn"); user_pref("services.common.log.logger.tokenserverclient", "Warn"); user_pref("services.common.uptake.sampleRate", 1); user_pref("services.settings.default_bucket", "main"); user_pref("services.settings.poll_interval", 86400); user_pref("services.settings.security.onecrl.bucket", "security-state"); user_pref("services.settings.security.onecrl.checked", 0); user_pref("services.settings.security.onecrl.collection", "onecrl"); user_pref("services.settings.security.onecrl.signer", "onecrl.content-signature.mozilla.org"); user_pref("services.settings.server", ""); // https://firefox.settings.services.mozilla.com/v1 -> stable
                                user_pref("services.sync.prefs.dangerously_allow_arbitrary", false); user_pref("services.sync.prefs.sync.browser.contentblocking.introCount", false); user_pref("services.sync.prefs.sync.privacy.fuzzyfox.clockgrainus", 100); // false
                                user_pref("services.sync.prefs.sync.privacy.fuzzyfox.enabled", false); user_pref("services.sync.prefs.sync.privacy.trackingprotection.cryptomining.annotate.enabled", false); user_pref("services.sync.prefs.sync.privacy.trackingprotection.fingerprinting.annotate.enabled", false); user_pref("services.sync.ui.hidden", true); user_pref("shumway.disabled", true); // removed shumway project shutdown
                                user_pref("signon.autofillForms.autocompleteOff", true); user_pref("signon.autofillForms.http", false); user_pref("signon.autofillForms", false); user_pref("signon.autologin.proxy", false); user_pref("signon.debug", false); user_pref("signon.formlessCapture.enabled", true); user_pref("signon.generation.available", false); user_pref("signon.generation.enabled", true); user_pref("signon.includeOtherSubdomainsInLookup", false); user_pref("signon.management.overrideURI", "about:logins?filter=%DOMAIN%"); user_pref("signon.management.page.breach-alerts.enabled", false); user_pref("signon.management.page.breachAlertUrl", ""); // https://monitor.firefox.com/breach-details/ -> we use Have I been pwned instead
                                user_pref("signon.management.page.enabled", true); user_pref("signon.management.page.hideMobileFooter", true); user_pref("signon.management.page.mobileAndroidURL", ""); // https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dmozilla.lockbox&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=
                                user_pref("signon.management.page.mobileAppleURL", ""); // https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1314000270%3Fmt%3D8&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=
                                user_pref("signon.masterPasswordReprompt.timeout_ms", 900000); // 15 min
                                user_pref("signon.privateBrowsingCapture.enabled", false); user_pref("signon.rememberSignons.visibilityToggle", true); user_pref("signon.rememberSignons", false); user_pref("signon.schemeUpgrades", false); user_pref("signon.showAutoCompleteFooter", false); user_pref("signon.showAutoCompleteOrigins", false); user_pref("signon.storeWhenAutocompleteOff", true); user_pref("snav.enabled", false); user_pref("startup.homepage_override_url", ""); user_pref("startup.homepage_welcome_url.additional", ""); user_pref("startup.homepage_welcome_url", ""); user_pref("svg.context-properties.content.enabled", false); user_pref("svg.disabled", false); user_pref("svg.display-lists.hit-testing.enabled", true); user_pref("svg.display-lists.painting.enabled", true); user_pref("svg.new-getBBox.enabled", false); user_pref("toolkit.aboutPerformance.showInternals", true); user_pref("toolkit.asyncshutdown.crash_timeout", 180000); user_pref("toolkit.asyncshutdown.crash_timeout", 60000); user_pref("toolkit.asyncshutdown.log", false); user_pref("toolkit.autocomplete.richBoundaryCutoff", 200); user_pref("toolkit.content-background-hang-monitor.disabled", false); user_pref("toolkit.cosmeticAnimations.enabled", false); // true if problems
                                user_pref("toolkit.coverage.endpoint.base", ""); user_pref("toolkit.coverage.opt-out", true); user_pref("toolkit.crashreporter.include_context_heap", true); user_pref("toolkit.dump.emit", false); user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); user_pref("toolkit.osfile.log", false); user_pref("toolkit.pageThumbs.minHeight", 0); user_pref("toolkit.pageThumbs.minWidth", 0); user_pref("toolkit.pageThumbs.screenSizeDivisor", 7); user_pref("toolkit.scrollbox.clickToScroll.scrollDelay", 150); user_pref("toolkit.scrollbox.horizontalScrollDistance", 5); user_pref("toolkit.scrollbox.scrollIncrement", 20); user_pref("toolkit.scrollbox.smoothScroll", true); user_pref("toolkit.scrollbox.verticalScrollDistance", 3); user_pref("toolkit.tabbox.switchByScrolling", false); user_pref("toolkit.telemetry.archive.enabled", false); user_pref("toolkit.telemetry.bhrping.enabled", false); user_pref("toolkit.telemetry.cachedClientID", ""); user_pref("toolkit.telemetry.coverage.opt-out", true); user_pref("toolkit.telemetry.debugSlowSql", false); user_pref("toolkit.telemetry.enabled", false); user_pref("toolkit.telemetry.firstshutdownping.enabled", false); user_pref("toolkit.telemetry.geckoview.batchDurationMS", 5000); user_pref("toolkit.telemetry.geckoview.streaming", false); user_pref("toolkit.telemetry.hybridcontent.enabled", false); user_pref("toolkit.telemetry.ipcBatchTimeout", 2000); user_pref("toolkit.telemetry.isGeckoViewMode", false); user_pref("toolkit.telemetry.newProfilePing.enabled", false); user_pref("toolkit.telemetry.overrideUpdateChannel", "nightly-asan"); user_pref("toolkit.telemetry.prompted", 2); user_pref("toolkit.telemetry.rejected", true); user_pref("toolkit.telemetry.reportingpolicy.firstRun", false); user_pref("toolkit.telemetry.server_owner", "Mozilla"); user_pref("toolkit.telemetry.server", "data:,"); //https://incoming.telemetry.mozilla.org
                                user_pref("toolkit.telemetry.shutdownpingsender.enabled", false); user_pref("toolkit.telemetry.unified", false); user_pref("toolkit.telemetry.unifiedIsOptIn", false); user_pref("toolkit.telemetry.updatePing.enabled", false); user_pref("toolkit.winRegisterApplicationRestart", false); user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,1,1.1,1.2,1.33,1.5,1.7,2,2.4,3"); user_pref("ui.caretWidth", 2); user_pref("ui.click_hold_context_menus", false); user_pref("ui.context_menus.after_mouseup", false); user_pref("ui.elantech_gesture_hacks.enabled", -1); user_pref("ui.key.accelKey", 17); user_pref("ui.key.accelKey", 224); user_pref("ui.key.chromeAccess", 2); user_pref("ui.key.chromeAccess", 4); user_pref("ui.key.contentAccess", 5); user_pref("ui.key.contentAccess", 6); user_pref("ui.key.generalAccessKey", -1); user_pref("ui.key.menuAccessKey", 0); user_pref("ui.key.menuAccessKey", 18); user_pref("ui.key.menuAccessKeyFocuses", false); user_pref("ui.key.menuAccessKeyFocuses", true); user_pref("ui.menu.incremental_search.timeout", 1000); user_pref("ui.mouse.radius.bottommm", 4); user_pref("ui.mouse.radius.enabled", false); user_pref("ui.mouse.radius.inputSource.touchOnly", true); user_pref("ui.mouse.radius.leftmm", 8); user_pref("ui.mouse.radius.rightmm", 8); user_pref("ui.mouse.radius.topmm", 12); user_pref("ui.mouse.radius.visitedWeight", 120); user_pref("ui.osk.debug.keyboardDisplayReason", ""); user_pref("ui.osk.detect_physical_keyboard", true); user_pref("ui.osk.enabled", true); user_pref("ui.osk.on_screen_keyboard_path", ""); user_pref("ui.osk.require_win10", false); user_pref("ui.plugin.cancel_composition_at_input_source_changed", false); user_pref("ui.popup.disable_autohide", false); user_pref("ui.systemUsesDarkTheme", 1); user_pref("ui.touch_activation.delay_ms", 100); user_pref("ui.touch_activation.duration_ms", 10); user_pref("ui.touch.radius.bottommm", 4); user_pref("ui.touch.radius.enabled", false); user_pref("ui.touch.radius.leftmm", 8); user_pref("ui.touch.radius.rightmm", 8); user_pref("ui.touch.radius.topmm", 12); user_pref("ui.touch.radius.visitedWeight", 120); user_pref("ui.trackpoint_hack.enabled", -1); user_pref("ui.use_native_colors", true); user_pref("ui.window_class_override", ""); user_pref("urlclassifier.alternate_error_page", "blocked"); user_pref("urlclassifier.blockedTable", "moztest-block-simple,mozplugin-block-digest256"); user_pref("urlclassifier.disallow_completions", "goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"); user_pref("urlclassifier.downloadAllowTable", "goog-downloadwhite-proto"); user_pref("urlclassifier.downloadBlockTable", "goog-badbinurl-proto"); user_pref("urlclassifier.features.cryptomining.annotate.blacklistTables", "base-cryptomining-track-digest256"); user_pref("urlclassifier.features.cryptomining.annotate.whitelistTables", "mozstd-trackwhite-digest256"); user_pref("urlclassifier.features.cryptomining.blacklistTables", "base-cryptomining-track-digest256"); user_pref("urlclassifier.features.cryptomining.whitelistTables", "mozstd-trackwhite-digest256"); user_pref("urlclassifier.features.fingerprinting.annotate.blacklistTables", "base-fingerprinting-track-digest256"); user_pref("urlclassifier.features.fingerprinting.annotate.whitelistTables", "mozstd-trackwhite-digest256"); user_pref("urlclassifier.features.fingerprinting.blacklistTables", "base-fingerprinting-track-digest256"); user_pref("urlclassifier.features.fingerprinting.whitelistTables", "mozstd-trackwhite-digest256"); user_pref("urlclassifier.features.socialtracking.annotate.blacklistTables", "social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"); user_pref("urlclassifier.features.socialtracking.annotate.whitelistTables", "mozstd-trackwhite-digest256"); user_pref("urlclassifier.features.socialtracking.blacklistTables", "social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"); user_pref("urlclassifier.features.socialtracking.whitelistTables", "mozstd-trackwhite-digest256"); user_pref("urlclassifier.flashAllowExceptTable", "except-flashallow-digest256"); user_pref("urlclassifier.flashAllowTable", "allow-flashallow-digest256"); user_pref("urlclassifier.flashExceptTable", "except-flash-digest256"); user_pref("urlclassifier.flashSubDocExceptTable", "except-flashsubdoc-digest256"); user_pref("urlclassifier.flashSubDocTable", "block-flashsubdoc-digest256"); user_pref("urlclassifier.flashTable", "block-flash-digest256"); user_pref("urlclassifier.gethash.timeout_ms", 5000); user_pref("urlclassifier.gethashnoise", 4); user_pref("urlclassifier.malwareTable", "goog-malware-proto,goog-unwanted-proto,moztest-harmful-simple,moztest-malware-simple,moztest-unwanted-simple"); //false
                                user_pref("urlclassifier.passwordAllowTable", "goog-passwordwhite-proto"); user_pref("urlclassifier.phishTable", "goog-phish-proto,moztest-phish-simple"); //googpub-phish-proto,moztest-phish-simple -> false
                                user_pref("urlclassifier.trackingAnnotationSkipURLs", "google.com/recaptcha/,*.google.com/recaptcha/"); user_pref("urlclassifier.trackingAnnotationTable", "moztest-track-simple,ads-track-digest256,social-track-digest256,analytics-track-digest256,content-track-digest256"); user_pref("urlclassifier.trackingAnnotationWhitelistTable", "moztest-trackwhite-simple,mozstd-trackwhite-digest256"); user_pref("urlclassifier.trackingTable", "moztest-track-simple,base-track-digest256"); //false
                                user_pref("urlclassifier.trackingWhitelistTable", "moztest-trackwhite-simple,mozstd-trackwhite-digest256"); //false
                                user_pref("urlclassifier.update.response_timeout_ms", 30000); user_pref("urlclassifier.update.timeout_ms", 90000); user_pref("view_source.editor.args", ""); user_pref("view_source.editor.path", ""); user_pref("view_source.syntax_highlight", true); user_pref("view_source.wrap_long_lines", true); user_pref("webchannel.allowObject.urlWhitelist", ""); user_pref("webextensions.storage.sync.enabled", true); user_pref("webextensions.storage.sync.serverURL", ""); // https://webextensions.settings.services.mozilla.com/v1
                                user_pref("webextensions.tests", false); user_pref("webextensions.webRequest.requestBodyMaxRawBytes", 16777216); user_pref("webgl.allow-fb-invalidation", false); user_pref("webgl.can-lose-context-in-foreground", true); user_pref("webgl.default-low-power", false); user_pref("webgl.default-no-alpha", false); user_pref("webgl.disable-angle", true); user_pref("webgl.disable-DOM-blit-uploads", false); user_pref("webgl.disable-extensions", false); user_pref("webgl.disable-fail-if-major-performance-caveat", true); user_pref("webgl.disable-wgl", false); user_pref("webgl.disabled", true); user_pref("webgl.enable-debug-renderer-info", false); user_pref("webgl.enable-draft-extensions", false); user_pref("webgl.enable-privileged-extensions", false); user_pref("webgl.enable-webgl2", true); user_pref("webgl.force-enabled", false); user_pref("webgl.force-index-validation", 0); user_pref("webgl.force-layers-readback", false); user_pref("webgl.lose-context-on-memory-pressure", false); user_pref("webgl.max-contexts-per-principal", 16); user_pref("webgl.max-contexts", 32); user_pref("webgl.max-warnings-per-context", 32); user_pref("webgl.min_capability_mode", false); user_pref("webgl.msaa-force", false); user_pref("webgl.perf.max-acceptable-fb-status-invals", 0); user_pref("webgl.perf.max-warnings", 0); user_pref("webgl.perf.spew-frame-allocs", true); user_pref("webgl.prefer-16bpp", false); user_pref("webgl.renderer-string-override", ""); user_pref("webgl.vendor-string-override", ""); user_pref("widget.chrome.allow-gtk-dark-theme", false); user_pref("widget.content.allow-gtk-dark-theme", false); user_pref("widget.content.gtk-theme-override", "Breeze"); //Adwaita:light
                                user_pref("widget.disable-native-theme", false); user_pref("widget.wayland_dmabuf_backend.enabled", false); user_pref("widget.window-transforms.disabled", false); user_pref("xpinstall.signatures.required", false); user_pref("zoom.maxPercent", 300); user_pref("zoom.minPercent", 50);
