'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6d4429cc5e00835dc028b953496cbb7c",
"version.json": "289acbdea3f22ae03fce58301d560d7a",
"index.html": "5009d42ccd8363ba2422a0ce082d1658",
"/": "5009d42ccd8363ba2422a0ce082d1658",
"main.dart.js": "4fd9f9cc7bb7e7affb9b967fac442932",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e0702103b741f3c842d44915abb793cf",
".git/config": "ca95c10eb20f658d784138692a62f384",
".git/objects/6f/bbf751027a1684a40ad5879939cd5cce1f3488": "43aaf86a52c2d274d9373e7abd9495b0",
".git/objects/3d/52deca7bda759f3dfc5b9c6020db9053a64e61": "5a418060a6108cd2ac68796cf90d5a06",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/4d848acd7fb9e856c3793e3a031cb2d3162a4a": "ec0a0d2f285a68e555e2411a5889a5cd",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/21f100188c10dc3b07346d01eede97c1bb4367": "d6dd1f3f641f77733a1433d1e6dc5720",
".git/objects/02/88889778246f950df2b0bcf4db71f677fd0eb8": "91933d1c994b70bc9027ab46622563c7",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/db433d5c25d78a7d3fb7ffdbfc34817549e3c2": "da49da16fc24ec80c6398f4c5331b6d6",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/dbd0a57255b929e1cb8be435a74b0242438d95": "3bb4f63fa56dfd8910c2ec2b267b0f50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ef13c4ce374010d8828536fc541e6400cdbbfe": "e2035858eb9b07f449c9cb717ea9be20",
".git/objects/eb/9b171941ac7403e772ae522aaffa7d67909856": "94e4730ad0448ab6bf2999bc66f63275",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/07cf09dc9226a6563681c2e6fb267781960dd7": "846e0c447b018ee0746aef0d37317175",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/fb/d37f4c3b104d05f612965fa5d2b89a1541dcc5": "b2fc270a05de4c97cec543398f202f8c",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/99990ab8ec700e820e93c7e63f48cf550af96a": "67fb658d8e8449a83cd5ccb39e30fcab",
".git/objects/16/d869726759e452ee8ae1c6b483d3655a5e5c00": "6dfa0ab6c45480bf08ba5dcb0543e11a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/3e1499287037f8a439199820fbe9202ca40af1": "21e0fabaacf0d580c8977887d42a9e31",
".git/objects/8f/5ea8b6acf77f6c95cc82c047058273390df911": "954c537fe0d9b9512eb309f5dfaa8a2f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/763e0cb5372c43cb90aa10381e1b5dfffc5ab5": "c910f0f2c96bf3eff1a570c9bcf4a124",
".git/objects/26/0691ff1068bb1b7c7ae31c680c2327442277c5": "81f4dea4a181df29605360c5b4479684",
".git/objects/72/3feb90537bda18a29c711327ff2834cffcb8b9": "96331616175e7130d26319b50bf29bd3",
".git/objects/43/2e8f3c5d38ec1fb9002421ed385904436dc414": "df2bca95313011e1ac5e1d63cef3ea08",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/adfd12959c56368a9234c642f4187459b502a4": "2399f2980d9e26f83787c6096670ba56",
".git/objects/9a/f22636e5192acd453937e9ed7cd7ffeb4bc3bf": "277a6e027f767e446aa47bc7b1579ef9",
".git/objects/36/6d6bcab0f19163881f9a308a0b7105d25d2bc5": "1f2baec2cd8788f4dbd2a67ea4ef4ce0",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/98/f6779dc9f83de9e1c5904c70536cccd09bf8c0": "19d033802ca38c57f04222535c56eeef",
".git/objects/30/936e3f01ae48edadbf232f7ee14379f0867723": "8307926292395453045089d33d9b9555",
".git/objects/01/49380e60fa360cd50dc8aa755960fe3ae1f743": "15f4d765cb811a872bf4ecb07f418964",
".git/objects/0a/f4d0936eb151a1d2632867600feeefcc48feea": "e00778b2327318eaf63a5d9ef03737c1",
".git/objects/90/c9024bdcede502335e221577cd2308a709ee64": "f3bece830e953e903282ba0c14338a9a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/4de8b7e16a6eccd4805f097faea6a75ddf6af5": "a6cb4143aa2f0bd6cabe918325fbc35d",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/dc7514e30147f429f6aa3b1ad04b07eed28165": "84dc381aa4dabd48871ba00e6c045db6",
".git/objects/a8/7051c80ef9159e61a79284a5b64fa4944755a4": "48f28f74cbfed954e57173cd13eaaa9c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5ad7640deb71f98e17b5ba6508d7d856ed3d84": "b4447e0e0084c03f54017b01c63adcb3",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e7/a3a9dc566d3409f6a8ca4cb67723fef68743e8": "d2792854c59bbb9e08d9e881e8593181",
".git/objects/f8/024c2ed950f08cfebb422314d41b93d830cb4a": "4ff5f50fecf0d9fed6e0012a5716b54d",
".git/objects/e0/cc97d610be9f99bc7d6cf86004330cd6142e5a": "b7fa4953bfb93c004ed3f7eb9a53261e",
".git/objects/2d/116d920580367caf6a179155f344ede856bf31": "664ce7bca47fdb5e1d15a77de593527b",
".git/objects/12/4b233e590c924ab75d8b48723caf750e73f11a": "6f3998b8e6580951025e7575f4178779",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/7a/47cf86cbaf3da1cd5235ad1e18121fcb181ac7": "95f1547e616be46da78b9ca28a9e5e40",
".git/objects/14/9b32f27072d53139cea13f2aa7fa3a57bc3ed6": "a155c218fb9c4c0d742281c3ac716a40",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0af084a1524186f00c0922ec3aca8a70",
".git/logs/refs/heads/main": "10da45c2bc3b3d73125be53dd95b64c9",
".git/logs/refs/remotes/origin/main": "48c5ab23ad68c7b6f314bef211e27447",
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
".git/refs/heads/main": "e7ab35df6df7b95c0adc5f65c9ea3829",
".git/refs/remotes/origin/main": "e7ab35df6df7b95c0adc5f65c9ea3829",
".git/index": "2f0813748521dbd7363b2135b14a3f34",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "0a2d67eea90ec3bf491d495348155f82",
"assets/NOTICES": "c2e6da7a35a555c76da243189429bd64",
"assets/FontManifest.json": "91707ccb5182788a121f8427b692df6f",
"assets/AssetManifest.bin.json": "f9326321d4bc82d40276bb138020dbec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2f80a9914be9a190da62e1a962df8829",
"assets/fonts/MaterialIcons-Regular.otf": "7992960e9a053db5530db45495e128cf",
"assets/assets/work.png": "88d77d6e59e14d5bef9242e6627ce989",
"assets/assets/train.png": "e672934e8a1e2a1080dfb6314bbc5893",
"assets/assets/brushmark.png": "d091eed7dd3673a17bb07696656d2026",
"assets/assets/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/coffeebg.png": "1d37dc0e07773247aaf814a2c193f621",
"assets/assets/chatbotsit.png": "c2e9d17b247a6bfbad1e4cfd22b9f1fe",
"assets/assets/numbers4.png": "a56b17ef4afeb2607edc09cae8f709c8",
"assets/assets/numbers3.png": "c26c32986155c2fa176649ffed8a8a96",
"assets/assets/numbers2.png": "223c37ab3531b65da793ae391cd29b6f",
"assets/assets/chatbothi.png": "e41fc0b8b7ec0fbe0c37ee2e57af554a",
"assets/assets/numbers1.png": "430e8def915b02dbb746dec51ef2cc09",
"assets/assets/brushmarkflipped.png": "410a226e21cfe438dabb04a8c7ce0355",
"assets/assets/match.png": "abb01ae1c87df0bd0d2606611c2eb11f",
"assets/assets/infinitylogo.png": "1f82fa11d465e00636e7ecefe31a957c",
"assets/assets/bigLogo.png": "1793ca4a49c2de76a9f0bedfa2132114",
"assets/assets/identify.png": "4f9a232d8d28cc67c8306f1d8365e52a",
"assets/assets/titlelogo.png": "6442be46ab4f61047d028b30f09c315c",
"assets/assets/empower.png": "710dabb8a1dadb928c3195aa812b37ee",
"assets/assets/OpenDyslexic-Regular.otf": "57618c912a50080a2dd15770753b535a",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
