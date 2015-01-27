"use strict";

var React = require('react'),
    mui = require('material-ui'),
    Icon = mui.Icon,
    CodeExample = require('../../mixins/code-example.jsx'),

    iconGroups = [
      {
        name: 'Action Icons',
        icons: [
          'action-3d-rotation',
          'action-accessibility',
          'action-account-balance',
          'action-account-balance-wallet',
          'action-account-box',
          'action-account-child',
          'action-account-circle',
          'action-add-shopping-cart',
          'action-alarm',
          'action-alarm-add',
          'action-alarm-off',
          'action-alarm-on',
          'action-android',
          'action-announcement',
          'action-aspect-ratio',
          'action-assessment',
          'action-assignment',
          'action-assignment-ind',
          'action-assignment-late',
          'action-assignment-return',
          'action-assignment-returned',
          'action-assignment-turned-in',
          'action-autorenew',
          'action-backup',
          'action-book',
          'action-bookmark',
          'action-bookmark-outline',
          'action-bug-report',
          'action-cached',
          'action-check-circle',
          'action-class',
          'action-credit-card',
          'action-dashboard',
          'action-delete',
          'action-description',
          'action-dns',
          'action-done',
          'action-done-all',
          'action-event',
          'action-exit-to-app',
          'action-explore',
          'action-extension',
          'action-face',
          'action-favorite',
          'action-favorite-outline',
          'action-find-in-page',
          'action-find-replace',
          'action-flip-to-back',
          'action-flip-to-front',
          'action-get-app',
          'action-grade',
          'action-group-work',
          'action-help',
          'action-highlight-remove',
          'action-history',
          'action-home',
          'action-https',
          'action-info',
          'action-info-outline',
          'action-input',
          'action-invert-colors',
          'action-label',
          'action-label-outline',
          'action-language',
          'action-launch',
          'action-list',
          'action-lock',
          'action-lock-open',
          'action-lock-outline',
          'action-loyalty',
          'action-markunread-mailbox',
          'action-note-add',
          'action-open-in-browser',
          'action-open-in-new',
          'action-open-with',
          'action-pageview',
          'action-payment',
          'action-perm-camera-mic',
          'action-perm-contact-cal',
          'action-perm-data-setting',
          'action-perm-device-info',
          'action-perm-identity',
          'action-perm-media',
          'action-perm-phone-msg',
          'action-perm-scan-wifi',
          'action-picture-in-picture',
          'action-polymer',
          'action-print',
          'action-query-builder',
          'action-question-answer',
          'action-receipt',
          'action-redeem',
          'action-reorder',
          'action-report-problem',
          'action-restore',
          'action-room',
          'action-schedule',
          'action-search',
          'action-settings',
          'action-settings-applications',
          'action-settings-backup-restore',
          'action-settings-bluetooth',
          'action-settings-cell',
          'action-settings-display',
          'action-settings-ethernet',
          'action-settings-input-antenna',
          'action-settings-input-component',
          'action-settings-input-composite',
          'action-settings-input-hdmi',
          'action-settings-input-svideo',
          'action-settings-overscan',
          'action-settings-phone',
          'action-settings-power',
          'action-settings-remote',
          'action-settings-voice',
          'action-shop',
          'action-shop-two',
          'action-shopping-basket',
          'action-shopping-cart',
          'action-speaker-notes',
          'action-spellcheck',
          'action-star-rate',
          'action-stars',
          'action-store',
          'action-subject',
          'action-supervisor-account',
          'action-swap-horiz',
          'action-swap-vert',
          'action-swap-vert-circle',
          'action-system-update-tv',
          'action-tab',
          'action-tab-unselected',
          'action-theaters',
          'action-thumb-down',
          'action-thumb-up',
          'action-thumbs-up-down',
          'action-toc',
          'action-today',
          'action-track-changes',
          'action-translate',
          'action-trending-down',
          'action-trending-neutral',
          'action-trending-up',
          'action-turned-in',
          'action-turned-in-not',
          'action-verified-user',
          'action-view-agenda',
          'action-view-array',
          'action-view-carousel',
          'action-view-column',
          'action-view-day',
          'action-view-headline',
          'action-view-list',
          'action-view-module',
          'action-view-quilt',
          'action-view-stream',
          'action-view-week',
          'action-visibility',
          'action-visibility-off',
          'action-wallet-giftcard',
          'action-wallet-membership',
          'action-wallet-travel',
          'action-work'
        ]
      },
      {
        name: 'Alert Icons',
        icons: [
          'alert-error',
          'alert-warning'
        ]
      },
      {
        name: 'AV Icons',
        icons: [
          'av-album',
          'av-av-timer',
          'av-closed-caption',
          'av-equalizer',
          'av-explicit',
          'av-fast-forward',
          'av-fast-rewind',
          'av-games',
          'av-hearing',
          'av-high-quality',
          'av-loop',
          'av-mic',
          'av-mic-none',
          'av-mic-off',
          'av-movie',
          'av-my-library-add',
          'av-my-library-books',
          'av-my-library-music',
          'av-new-releases',
          'av-not-interested',
          'av-pause',
          'av-pause-circle-fill',
          'av-pause-circle-outline',
          'av-play-arrow',
          'av-play-circle-fill',
          'av-play-circle-outline',
          'av-play-shopping-bag',
          'av-playlist-add',
          'av-queue',
          'av-queue-music',
          'av-radio',
          'av-recent-actors',
          'av-repeat',
          'av-repeat-one',
          'av-replay',
          'av-shuffle',
          'av-skip-next',
          'av-skip-previous',
          'av-snooze',
          'av-stop',
          'av-subtitles',
          'av-surround-sound',
          'av-video-collection',
          'av-videocam',
          'av-videocam-off',
          'av-volume-down',
          'av-volume-mute',
          'av-volume-off',
          'av-volume-up',
          'av-web'
        ]
      },
      {
        name: 'Communication Icons',
        icons: [
          'communication-business',
          'communication-call',
          'communication-call-end',
          'communication-call-made',
          'communication-call-merge',
          'communication-call-missed',
          'communication-call-received',
          'communication-call-split',
          'communication-chat',
          'communication-clear-all',
          'communication-comment',
          'communication-contacts',
          'communication-dialer-sip',
          'communication-dialpad',
          'communication-dnd-on',
          'communication-email',
          'communication-forum',
          'communication-import-export',
          'communication-invert-colors-off',
          'communication-invert-colors-on',
          'communication-live-help',
          'communication-location-off',
          'communication-location-on',
          'communication-message',
          'communication-messenger',
          'communication-no-sim',
          'communication-phone',
          'communication-portable-wifi-off',
          'communication-quick-contacts-dialer',
          'communication-quick-contacts-mail',
          'communication-ring-volume',
          'communication-stay-current-landscape',
          'communication-stay-current-portrait',
          'communication-stay-primary-landscape',
          'communication-stay-primary-portrait',
          'communication-swap-calls',
          'communication-textsms',
          'communication-voicemail',
          'communication-vpn-key'
        ]
      },
      {
        name: 'Content Icons',
        icons: [
          'content-add',
          'content-add-box',
          'content-add-circle',
          'content-add-circle-outline',
          'content-archive',
          'content-backspace',
          'content-block',
          'content-clear',
          'content-content-copy',
          'content-content-cut',
          'content-content-paste',
          'content-create',
          'content-drafts',
          'content-filter-list',
          'content-flag',
          'content-forward',
          'content-gesture',
          'content-inbox',
          'content-link',
          'content-mail',
          'content-markunread',
          'content-redo',
          'content-remove',
          'content-remove-circle',
          'content-remove-circle-outline',
          'content-reply',
          'content-reply-all',
          'content-report',
          'content-save',
          'content-select-all',
          'content-send',
          'content-sort',
          'content-text-format',
          'content-undo'
        ]
      },
      {
        name: 'Device Icons',
        icons: [
          'device-access-alarm',
          'device-access-alarms',
          'device-access-time',
          'device-add-alarm',
          'device-airplanemode-off',
          'device-airplanemode-on',
          'device-battery-20',
          'device-battery-30',
          'device-battery-50',
          'device-battery-60',
          'device-battery-80',
          'device-battery-90',
          'device-battery-alert',
          'device-battery-charging-20',
          'device-battery-charging-30',
          'device-battery-charging-50',
          'device-battery-charging-60',
          'device-battery-charging-80',
          'device-battery-charging-90',
          'device-battery-charging-full',
          'device-battery-full',
          'device-battery-std',
          'device-battery-unknown',
          'device-bluetooth',
          'device-bluetooth-connected',
          'device-bluetooth-disabled',
          'device-bluetooth-searching',
          'device-brightness-auto',
          'device-brightness-high',
          'device-brightness-low',
          'device-brightness-medium',
          'device-data-usage',
          'device-developer-mode',
          'device-devices',
          'device-dvr',
          'device-gps-fixed',
          'device-gps-not-fixed',
          'device-gps-off',
          'device-location-disabled',
          'device-location-searching',
          'device-multitrack-audio',
          'device-network-cell',
          'device-network-wifi',
          'device-nfc',
          'device-now-wallpaper',
          'device-now-widgets',
          'device-screen-lock-landscape',
          'device-screen-lock-portrait',
          'device-screen-lock-rotation',
          'device-screen-rotation',
          'device-sd-storage',
          'device-settings-system-daydream',
          'device-signal-cellular-0-bar',
          'device-signal-cellular-1-bar',
          'device-signal-cellular-2-bar',
          'device-signal-cellular-3-bar',
          'device-signal-cellular-4-bar',
          'device-signal-cellular-connected-no-internet-0-bar',
          'device-signal-cellular-connected-no-internet-1-bar',
          'device-signal-cellular-connected-no-internet-2-bar',
          'device-signal-cellular-connected-no-internet-3-bar',
          'device-signal-cellular-connected-no-internet-4-bar',
          'device-signal-cellular-no-sim',
          'device-signal-cellular-null',
          'device-signal-cellular-off',
          'device-signal-wifi-0-bar',
          'device-signal-wifi-1-bar',
          'device-signal-wifi-2-bar',
          'device-signal-wifi-3-bar',
          'device-signal-wifi-4-bar',
          'device-signal-wifi-off',
          'device-signal-wifi-statusbar-1-bar-26x24px',
          'device-signal-wifi-statusbar-2-bar-26x24px',
          'device-signal-wifi-statusbar-3-bar-26x24px',
          'device-signal-wifi-statusbar-4-bar-26x24px',
          'device-signal-wifi-statusbar-connected-no-internet-1-26x24px',
          'device-signal-wifi-statusbar-connected-no-internet-26x24px',
          'device-signal-wifi-statusbar-connected-no-internet-2-26x24px',
          'device-signal-wifi-statusbar-connected-no-internet-3-26x24px',
          'device-signal-wifi-statusbar-connected-no-internet-4-26x24px',
          'device-signal-wifi-statusbar-not-connected-26x24px',
          'device-signal-wifi-statusbar-null-26x24px',
          'device-storage',
          'device-usb',
          'device-wifi-lock',
          'device-wifi-tethering'
        ]
      },
      {
        name: 'Editor Icons',
        icons: [
          'editor-attach-file',
          'editor-attach-money',
          'editor-border-all',
          'editor-border-bottom',
          'editor-border-clear',
          'editor-border-color',
          'editor-border-horizontal',
          'editor-border-inner',
          'editor-border-left',
          'editor-border-outer',
          'editor-border-right',
          'editor-border-style',
          'editor-border-top',
          'editor-border-vertical',
          'editor-format-align-center',
          'editor-format-align-justify',
          'editor-format-align-left',
          'editor-format-align-right',
          'editor-format-bold',
          'editor-format-clear',
          'editor-format-color-fill',
          'editor-format-color-reset',
          'editor-format-color-text',
          'editor-format-indent-decrease',
          'editor-format-indent-increase',
          'editor-format-italic',
          'editor-format-line-spacing',
          'editor-format-list-bulleted',
          'editor-format-list-numbered',
          'editor-format-paint',
          'editor-format-quote',
          'editor-format-size',
          'editor-format-strikethrough',
          'editor-format-textdirection-l-to-r',
          'editor-format-textdirection-r-to-l',
          'editor-format-underline',
          'editor-functions',
          'editor-insert-chart',
          'editor-insert-comment',
          'editor-insert-drive-file',
          'editor-insert-emoticon',
          'editor-insert-invitation',
          'editor-insert-link',
          'editor-insert-photo',
          'editor-merge-type',
          'editor-mode-comment',
          'editor-mode-edit',
          'editor-publish',
          'editor-vertical-align-bottom',
          'editor-vertical-align-center',
          'editor-vertical-align-top',
          'editor-wrap-text'
        ]
      },
      {
        name: 'File Icons',
        icons: [
          'file-attachment',
          'file-cloud',
          'file-cloud-circle',
          'file-cloud-done',
          'file-cloud-download',
          'file-cloud-off',
          'file-cloud-queue',
          'file-cloud-upload',
          'file-file-download',
          'file-file-upload',
          'file-folder',
          'file-folder-open',
          'file-folder-shared'
        ]
      },
      {
        name: 'Hardware Icons',
        icons: [
          'hardware-cast',
          'hardware-cast-connected',
          'hardware-computer',
          'hardware-desktop-mac',
          'hardware-desktop-windows',
          'hardware-dock',
          'hardware-gamepad',
          'hardware-headset',
          'hardware-headset-mic',
          'hardware-keyboard',
          'hardware-keyboard-alt',
          'hardware-keyboard-arrow-down',
          'hardware-keyboard-arrow-left',
          'hardware-keyboard-arrow-right',
          'hardware-keyboard-arrow-up',
          'hardware-keyboard-backspace',
          'hardware-keyboard-capslock',
          'hardware-keyboard-control',
          'hardware-keyboard-hide',
          'hardware-keyboard-return',
          'hardware-keyboard-tab',
          'hardware-keyboard-voice',
          'hardware-laptop',
          'hardware-laptop-chromebook',
          'hardware-laptop-mac',
          'hardware-laptop-windows',
          'hardware-memory',
          'hardware-mouse',
          'hardware-phone-android',
          'hardware-phone-iphone',
          'hardware-phonelink',
          'hardware-phonelink-off',
          'hardware-security',
          'hardware-sim-card',
          'hardware-smartphone',
          'hardware-speaker',
          'hardware-tablet',
          'hardware-tablet-android',
          'hardware-tablet-mac',
          'hardware-tv',
          'hardware-watch'
        ]
      },
      {
        name: 'Image Icons',
        icons: [
          'image-add-to-photos',
          'image-adjust',
          'image-assistant-photo',
          'image-audiotrack',
          'image-blur-circular',
          'image-blur-linear',
          'image-blur-off',
          'image-blur-on',
          'image-brightness-1',
          'image-brightness-2',
          'image-brightness-3',
          'image-brightness-4',
          'image-brightness-5',
          'image-brightness-6',
          'image-brightness-7',
          'image-brush',
          'image-camera',
          'image-camera-alt',
          'image-camera-front',
          'image-camera-rear',
          'image-camera-roll',
          'image-center-focus-strong',
          'image-center-focus-weak',
          'image-collections',
          'image-color-lens',
          'image-colorize',
          'image-compare',
          'image-control-point',
          'image-control-point-duplicate',
          'image-crop-16-9',
          'image-crop',
          'image-crop-3-2',
          'image-crop-5-4',
          'image-crop-7-5',
          'image-crop-din',
          'image-crop-free',
          'image-crop-landscape',
          'image-crop-original',
          'image-crop-portrait',
          'image-crop-square',
          'image-dehaze',
          'image-details',
          'image-edit',
          'image-exposure',
          'image-exposure-minus-1',
          'image-exposure-minus-2',
          'image-exposure-plus-1',
          'image-exposure-plus-2',
          'image-exposure-zero',
          'image-filter-1',
          'image-filter',
          'image-filter-2',
          'image-filter-3',
          'image-filter-4',
          'image-filter-5',
          'image-filter-6',
          'image-filter-7',
          'image-filter-8',
          'image-filter-9',
          'image-filter-9-plus',
          'image-filter-b-and-w',
          'image-filter-center-focus',
          'image-filter-drama',
          'image-filter-frames',
          'image-filter-hdr',
          'image-filter-none',
          'image-filter-tilt-shift',
          'image-filter-vintage',
          'image-flare',
          'image-flash-auto',
          'image-flash-off',
          'image-flash-on',
          'image-flip',
          'image-gradient',
          'image-grain',
          'image-grid-off',
          'image-grid-on',
          'image-hdr-off',
          'image-hdr-on',
          'image-hdr-strong',
          'image-hdr-weak',
          'image-healing',
          'image-image',
          'image-image-aspect-ratio',
          'image-iso',
          'image-landscape',
          'image-leak-add',
          'image-leak-remove',
          'image-lens',
          'image-looks',
          'image-looks-3',
          'image-looks-4',
          'image-looks-5',
          'image-looks-6',
          'image-looks-one',
          'image-looks-two',
          'image-loupe',
          'image-movie-creation',
          'image-nature',
          'image-nature-people',
          'image-navigate-before',
          'image-navigate-next',
          'image-palette',
          'image-panorama',
          'image-panorama-fisheye',
          'image-panorama-horizontal',
          'image-panorama-vertical',
          'image-panorama-wide-angle',
          'image-photo',
          'image-photo-album',
          'image-photo-camera',
          'image-photo-library',
          'image-portrait',
          'image-remove-red-eye',
          'image-rotate-left',
          'image-rotate-right',
          'image-slideshow',
          'image-straighten',
          'image-style',
          'image-switch-camera',
          'image-switch-video',
          'image-tag-faces',
          'image-texture',
          'image-timelapse',
          'image-timer-10',
          'image-timer',
          'image-timer-3',
          'image-timer-auto',
          'image-timer-off',
          'image-tonality',
          'image-transform',
          'image-tune',
          'image-wb-auto',
          'image-wb-cloudy',
          'image-wb-incandescent',
          'image-wb-irradescent',
          'image-wb-sunny'
        ]
      },
      {
        name: 'Map Icons',
        icons: [
          'maps-beenhere',
          'maps-directions',
          'maps-directions-bike',
          'maps-directions-bus',
          'maps-directions-car',
          'maps-directions-ferry',
          'maps-directions-subway',
          'maps-directions-train',
          'maps-directions-transit',
          'maps-directions-walk',
          'maps-flight',
          'maps-hotel',
          'maps-layers',
          'maps-layers-clear',
          'maps-local-airport',
          'maps-local-atm',
          'maps-local-attraction',
          'maps-local-bar',
          'maps-local-cafe',
          'maps-local-car-wash',
          'maps-local-convenience-store',
          'maps-local-drink',
          'maps-local-florist',
          'maps-local-gas-station',
          'maps-local-grocery-store',
          'maps-local-hospital',
          'maps-local-hotel',
          'maps-local-laundry-service',
          'maps-local-library',
          'maps-local-mall',
          'maps-local-movies',
          'maps-local-offer',
          'maps-local-parking',
          'maps-local-pharmacy',
          'maps-local-phone',
          'maps-local-pizza',
          'maps-local-play',
          'maps-local-post-office',
          'maps-local-print-shop',
          'maps-local-restaurant',
          'maps-local-see',
          'maps-local-shipping',
          'maps-local-taxi',
          'maps-location-history',
          'maps-map',
          'maps-my-location',
          'maps-navigation',
          'maps-pin-drop',
          'maps-place',
          'maps-rate-review',
          'maps-restaurant-menu',
          'maps-satellite',
          'maps-store-mall-directory',
          'maps-terrain',
          'maps-traffic'
        ]
      },
      {
        name: 'Navigation Icons',
        icons: [
          'navigation-apps',
          'navigation-arrow-back',
          'navigation-arrow-drop-down',
          'navigation-arrow-drop-down-circle',
          'navigation-arrow-drop-up',
          'navigation-arrow-forward',
          'navigation-cancel',
          'navigation-check',
          'navigation-chevron-left',
          'navigation-chevron-right',
          'navigation-close',
          'navigation-expand-less',
          'navigation-expand-more',
          'navigation-fullscreen',
          'navigation-fullscreen-exit',
          'navigation-menu',
          'navigation-more-horiz',
          'navigation-more-vert',
          'navigation-refresh',
          'navigation-unfold-less',
          'navigation-unfold-more'
        ]
      },
      {
        name: 'Notification Icons',
        icons: [
          'notification-adb',
          'notification-bluetooth-audio',
          'notification-disc-full',
          'notification-dnd-forwardslash',
          'notification-do-not-disturb',
          'notification-drive-eta',
          'notification-event-available',
          'notification-event-busy',
          'notification-event-note',
          'notification-folder-special',
          'notification-mms',
          'notification-more',
          'notification-network-locked',
          'notification-phone-bluetooth-speaker',
          'notification-phone-forwarded',
          'notification-phone-in-talk',
          'notification-phone-locked',
          'notification-phone-missed',
          'notification-phone-paused',
          'notification-play-download',
          'notification-play-install',
          'notification-sd-card',
          'notification-sim-card-alert',
          'notification-sms',
          'notification-sms-failed',
          'notification-sync',
          'notification-sync-disabled',
          'notification-sync-problem',
          'notification-system-update',
          'notification-tap-and-play',
          'notification-time-to-leave',
          'notification-vibration',
          'notification-voice-chat',
          'notification-vpn-lock'
        ]
      },
      {
        name: 'Social Icons',
        icons: [
          'social-cake',
          'social-domain',
          'social-group',
          'social-group-add',
          'social-location-city',
          'social-mood',
          'social-notifications',
          'social-notifications-none',
          'social-notifications-off',
          'social-notifications-on',
          'social-notifications-paused',
          'social-pages',
          'social-party-mode',
          'social-people',
          'social-people-outline',
          'social-person',
          'social-person-add',
          'social-person-outline',
          'social-plus-one',
          'social-poll',
          'social-public',
          'social-school',
          'social-share',
          'social-whatshot'
        ]
      },
      {
        name: 'Toggle Icons',
        icons: [
          'toggle-check-box',
          'toggle-check-box-outline-blank',
          'toggle-radio-button-off',
          'toggle-radio-button-on'
          //'toggle-star',
          //'toggle-star-half',
          //'toggle-star-outline'
        ]
      },
      {
        name: 'MUI Custom Icons',
        icons: [
          'mui-icon-sort',
          'mui-icon-github',
          'mui-icon-arrow-drop-right',
          'mui-icon-pie'
        ]
      }
    ];

var IconsPage = React.createClass({

  render: function() {
    return (
      <div>
        <h2 className="mui-font-style-headline">Icon Component</h2>
        {this._getComponentExample()}

        <p className="mui-font-style-subhead-1">
          This component currently uses icon fonts
          from <a href="https://github.com/designjockey/material-design-fonticons">material-design-fonticons</a>.
          Thanks so much to <a href="https://github.com/designjockey">@designjockey</a> for
          creating these font files while we wait for the offical version to be
          release from <a href="https://github.com/google/material-design-icons">google/material-design-icons</a>.
          In addition to these icons, we've also created a few new icons that are custom to this
          project for you to use. You can find them at the bottom of this page.
        </p>

        {this._getAllIconGroups()}

    </div>
    );
  },

  _getAllIconGroups: function() {
    var iconGroupExamples = [];

    iconGroups.forEach(function(group) {
      iconGroupExamples.push(this._getIconGroup(group.name, group.icons));
    }, this);

    return iconGroupExamples;
  },

  _getIconGroup: function(groupName, icons) {
    var iconExamples = [];

    icons.forEach(function(icon) {
      iconExamples.push(this._getIconExample(icon));
    }, this);

    return (
      <div>
        <h2 className="mui-font-style-headline">{groupName}</h2>
        <hr />
        <div className="icon-group">{iconExamples}</div>
        <br/>
      </div>
    );
  },

  _getIconExample: function(icon) {
    return (
      <div className="icon-example">
        <Icon icon={icon} /><span className="icon-name">{icon}</span>
      </div>
    );
  },

  _getComponentExample: function() {
    var code = '<Icon icon="action-home" />';

    return (
      <CodeExample code={code}>
        <Icon icon='action-home' />
      </CodeExample>
    );
  }

});

module.exports = IconsPage;
