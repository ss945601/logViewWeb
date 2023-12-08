'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e9c6faec33c8822dbc107552e7168216",
"index.html": "5ef27bb29dc4445912b5f30e08e63923",
"/": "5ef27bb29dc4445912b5f30e08e63923",
"main.dart.js": "d9da353d932daee4b466697f9b8f1fd3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "38a993198258213fef75dbe2dfe064c1",
"icons/Icon-192.png": "1f757d90323f70dc69a204d923c25143",
"icons/Icon-maskable-192.png": "1f757d90323f70dc69a204d923c25143",
"icons/Icon-maskable-512.png": "ae0aacac1b655aad7aeeb1226ba5318f",
"icons/Icon-512.png": "ae0aacac1b655aad7aeeb1226ba5318f",
"manifest.json": "d5c683d164ff9801a6c590c117470fc8",
".git/config": "f0f78363f19e0dc3629391580a93abe4",
".git/objects/0c/bd1a5145929aa508854c9a3b414d1d89f3d319": "95f027009d8f96ed7cec8fa6ae9f235b",
".git/objects/66/c2db29d29a6c6346bbcacd90f19e07d3de7590": "bec75719b6f9140f7a54072ce36fc84e",
".git/objects/68/d74ff0c9549ad6b88f9089910ca70f3561de22": "5acb1ba2c8c2fd601ffa464f99e110cd",
".git/objects/57/59a321a36fb882d11b8e3a7a63d462a8fc96a9": "0633069a35cabe0bea05b13f14ebc69f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/8a2d3d22c530733c9306521278a504b63b3095": "890fc3f7db0331ef92683d23e0af802e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/1532954142e96a2114a3b2ece8dedc99815826": "41a42b605ca896502a40b8eb6bc8d7c0",
".git/objects/69/3a2aa45818d7c6a47136ba4159d23fe3d54c08": "5eac21914d10882aa565cf20f4823894",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/abd5e2cf3d656adc75a60be7fd6ee345e1804c": "771aa2791ef7b23bd8d5877cf4c49271",
".git/objects/94/483cd182606abfb649ab31f86dc0965c9bd97c": "5ff79c6ccbea6a12fb66cc8f8e60db9f",
".git/objects/5f/d627593f6e76ce27fe5940a9ceff5cbd563880": "01704df7e1ea39b422ee1716ce126a62",
".git/objects/05/1eb6f3e34888b492f0f1c6a63f8ff3687094c4": "5f596c1ca4883b0f991f34a8a25c7c50",
".git/objects/9d/1c54a282104850a8c8f96f9b877a797d9cf5ce": "1fab9f1cde81d71d7358edb55500584a",
".git/objects/02/13cc953abb80bf8987fb5302ed13a3cb0bbf82": "8244296a129709c6716e4f296fc47224",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/a2/52bcf430bc0786ed1ad54c769d4937b1479155": "5f94492929c1c6ea2b08522ef93fed1f",
".git/objects/bd/04810dcbe2e64ea9f44b288e84a3ec8a14fb3a": "59394cb2f9b8dc8745503c7ba81e0948",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/0459375c74466c3156c3cbdac8e7b46c8e2e2d": "2027eea425f312b1c6d0e78d3cc68434",
".git/objects/e2/e9e0fd592b30fdc35235d885037994b77adf6a": "6bb0acc25b6a49e46787a53277b278b4",
".git/objects/fd/542a4f011bd11fe040f6a5518af6a66a5997c4": "624a49180769b5466a98512025d9bf47",
".git/objects/e4/5c90a2dfca86c000298de5f223d89251c0ad2c": "82cbfc81191ea21d2e420c871779da47",
".git/objects/fe/ad07d925b05f27b7ef062c77c8c9cea7cd2712": "de3b7c8f4229b3e2c6b11a0ce0e418ef",
".git/objects/fb/51e8dc23f47fd72182510a6ee71e452c7ecb50": "3bac11497334f1a146e3bd0e0eb45b11",
".git/objects/11/3a3798be2ca502fc55e45db09484631f32cbc9": "d89d7b6108000a19583bd12facb27da7",
".git/objects/73/4a8e3bf2845e35f13fb193a102fc3fc2069ab2": "1f50746eabc97682417dc300e90a79f9",
".git/objects/28/9122d35eacf351caa09d6748a0973756c9cdb4": "1379d67c2bd28652ca6976d04eb0a772",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/75/1937b933256dd233047f2e4ddd5a99134b08cd": "0a7c1be24d892df4a780f4b032b476b9",
".git/objects/2f/298d422e2a04910a44eb16ab2af89b904ead90": "021237d916ee0ad557be59542a71c08f",
".git/objects/88/56cff3f946bedc6c139a916bb1ed15d2daabd9": "3a20029fb5e4d20b26f1d1fabcb5c59b",
".git/objects/07/e7a891d87d6aa7ec57b5b59fe9bae006996f44": "7f06edf0e5fceb66df8fc53fc1ba5781",
".git/objects/9a/f8635e65ded47e58745b78352d22a1f257309f": "ec2512b240887a311bf1574126b7cf08",
".git/objects/09/91269168a5f55175b6144d08f52787c038cbd6": "4c5852dbfa9f7ae4e49b6b02e43a5087",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/a98676d91d58689a007a96ebef370e62f2a53e": "d8bc8552b419fe7b6fccf81f61943964",
".git/objects/3f/4f1e453183132d15e55fcb1c3a3fe0015e4881": "161020ab1fdbfabf98c24b14dc24e3d8",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/0a/e8180373ad46c6db08dec1a12234a2eef8f77a": "fb505fbe23ffb857c7850b8b74dac1d3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/268280b6c09321d54414659751c772e6e3fd41": "1a5ef0fc8232ddb9b25afdaebbc668e3",
".git/objects/a9/111e4f699b13e8fa31aa77502cac5b3c86ac31": "c1d257965671a129201b7ae4d3205d3a",
".git/objects/a9/28998c428a3c16477b15cc24d01fb85e9b6530": "a2eb6fd1f23d0b36c4c62cdfc37b9fee",
".git/objects/b7/db1a4d098d6872989fd41d1a3cf1ebe5f549d5": "bc3e7f20270466df371dea11045e050e",
".git/objects/a6/8c892291b0bd0c21e87fb92a6ea6a8ed8d9293": "d51c1779a8b94742454475ee87e1527f",
".git/objects/a6/53650da80c912bea70ad0717fd8527b37de5bf": "267227f705d4b2543c41319531e5ac12",
".git/objects/f1/63cdf18f4ffa6470e6fb000533a78a76f5e3de": "9408503c8087341e1cc6811c7bef70a5",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/c377f9aeef30c8a97f29187243440c0e8c7c23": "70f18ec4b4443475cd500c9b20624e6b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/63bf80c2f264eb0bbc0fc0bd7307d7e8240420": "1fe7bd8adc40bb537691ff3f77a246e3",
".git/objects/1b/319109a145550384b8d57caa81c06fc1092257": "dfc29f2ed434943cee774c8e803bf509",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/4d6393ae64d6bb7952598244d613b562cba6f4": "a9da654bcf2c95b4756babaa6604c879",
".git/objects/1c/1b26c4fc8f9d29e8944658ad22361e1b3afc7e": "4947ea75332245c7be9f57335e2aa3a6",
".git/objects/82/163db786a188b3bce1a08d1a17da59b6bbcdc4": "275878ca16dcb1b4ad90835159b577a0",
".git/objects/82/56d0c3398ea51c82da13eb123e9a7666cdf962": "e017be2c0b35f7af62f52d62d6cd7ad9",
".git/objects/7f/e3325472185667049181a6d0cde6a8d15e9320": "3931096d48432844d8a8d296e1ed14d8",
".git/objects/14/74a47d36d5e9c656ecc75f9ae8263c50e95173": "9d7e0919fa447bdc0b4c39670e96b6bc",
".git/objects/14/ba3f2cd87b24c74013b150a5ef379149e98e91": "d09529c14bc462b48eebf47dde5b1afd",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/b69947bbc21e4f956dfdc59864a7398c03586d": "7702c67ae4c6353def66bb159e77ecc7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a0a2d869647689181af1c452c5c694a1",
".git/logs/refs/heads/main": "a0a2d869647689181af1c452c5c694a1",
".git/logs/refs/remotes/origin/main": "82edc3eeb9af7764fe57b7e540b18bcb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c5e486402bd80f6ff6397b53c0fb62c9",
".git/refs/remotes/origin/main": "c5e486402bd80f6ff6397b53c0fb62c9",
".git/index": "e61947f53e81c38f9c3d312fa5992877",
".git/COMMIT_EDITMSG": "6d640318faab05d1fc103bb7107f4e6e",
".git/FETCH_HEAD": "624553dc358af5110ab10485605213fb",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "5c1b5f9037ab3d2b0bc1214959d04f0a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "b339adbb6470f4af57e77348166309a4",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
