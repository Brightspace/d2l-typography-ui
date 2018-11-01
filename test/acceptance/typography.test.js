/* eslint no-invalid-this: 0 */
'use strict';

var browsers = {
	chrome: new LocalBrowserFactory({
		browser: 'chrome'
	}),
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'WIN10'
	}),
	firefoxWindows: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'WIN10'
	}),
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10'
	}),
	edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10'
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'SIERRA'
	})
};

var endpoint = 'http://localhost:8081/components/d2l-typography/test/acceptance/typography.html';
var endpointMixins = 'http://localhost:8081/components/d2l-typography/test/acceptance/typography-mixins.html';
var spec = 'test/acceptance/typography.gspec';

polymerTests(browsers, function(test) {
	test('typography-mobile', {
		endpoint: endpoint,
		spec: spec,
		size: '420x600',
		tags: ['mobile']
	});

	test('typography-desktop', {
		endpoint: endpoint,
		spec: spec,
		size: '1024x768',
		tags: ['desktop']
	});

	test('typography-mixins-mobile', {
		endpoint: endpointMixins,
		spec: spec,
		size: '420x600',
		tags: ['mobile']
	});

	test('typography-mixins-desktop', {
		endpoint: endpointMixins,
		spec: spec,
		size: '1024x768',
		tags: ['desktop']
	});
});
