'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "12fdc9b25cefc408a7ee208b06392325",
"index.html": "2266380d6eb30aadc907ff1ce1f917cb",
"/": "2266380d6eb30aadc907ff1ce1f917cb",
"main.dart.js": "a6438acf4b673d81cc2577cd05b77a5d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "edff6839a01e9d05c198ab4b23362864",
".git/ORIG_HEAD": "8ec8133f87c5993c457667b7ef38548e",
".git/config": "0ab0fe4d9bb96a4e80d5b3c819113bb2",
".git/objects/95/76e2da8a65c46f667835fb2110ff7ac73eab66": "9faafadef9732cad24672a03fafc6347",
".git/objects/59/b031318bbec69fdbff63f03d5add59edf30399": "882c33f81ede9560b9cceeaf909763b8",
".git/objects/92/89c9d60da2fb7dcecc3db9762ad0e471c8f275": "2bda4c2bb798fbb39caa33af90564d1b",
".git/objects/0c/8dafc231271252c795b71ad981b3ddf7c231a1": "e39771035a93ad09068c0852dad7177f",
".git/objects/50/14b266aa7c57e6f3fab6502df291824597c9cd": "409fa69bac51dc0c40a5c48ed5aed3e2",
".git/objects/68/4fc04bd03e02ae16e9894ca6e307494720e4ad": "e02d692cc9f0f5572a781f85ebc0be82",
".git/objects/68/2bf5f939e7c83d2a4e60cdcb59e8fad6a7278b": "44cc8bb987f6d1c3dc6247541c28bb39",
".git/objects/6f/41521faefb48cddf8bb7c4532c62e2d9e978f3": "c0afd409d064b99522d54a2adda80944",
".git/objects/6f/ad3410ea7add8065ef864e6a5680aa3af4ac5b": "aa9ca5111fe2994867460cedae5438aa",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/61594b5ab8ad3d766f0f402c38fe994eb32844": "2d37d0399ac4b0dab87f384ce3ec5501",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/34/9c8748b409b96409abb6fa48f55ae2ba267414": "a2092963e2a6a8404743523befdf3a1d",
".git/objects/ac/8507bc7b2ed3dfa69d17a9f45103676f0872b2": "662377f178e856a1a890ae13b8c3b780",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/bd/7845d732cfcee669475dc160182238e5109d2e": "be0f08e2a804d486e3d38aee1b77258f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/dcacf85c51dd845c35adfafed655c684e6e6d9": "8fb341a601c28c2e881a89b1688978b9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/4e/c469a09255857910e123480b67e2c0f2a4148c": "8937d63be18330e1ea0a17db2c8e109c",
".git/objects/4b/0bf9f894bbf8125a56bf0e430f7d0776951d6e": "783812cbf64d5e1d68a7f266c6473610",
".git/objects/7d/ff62f4029210d1e2c9c46e7ed235a70717990f": "5cb28933830fd27da3922eef76b04e22",
".git/objects/7c/425adcc3f2639784c3b18a867b3f10d53bfeff": "cda9edd3fd02a25851ffd5f21c723230",
".git/objects/80/e79f83c3832e5127476e5504d1e9bf1b2e71b4": "2a612bd32559aa018fc29c72c20138c0",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/84497b3334033e7853822312e34cdd9aa65338": "4b04c60e88be3e7f73145539da7b6251",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/a26ab74eba4c1cb29945764014d291b07b34f4": "38f4ce2195b2fb8638b6307d193c508d",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/54/ef8197ec62b4977a877ccc99010971b9c9cb64": "d90ce322a84f8378621b52ea1f5e874c",
".git/objects/54/e23339fbadffd043f903b1e3ed5eb86d842c4e": "e4b288fdd3c55ae4e615344a3af871e2",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/97/b3e4032b287764af0e20e71833a06a54ca5066": "c8ab5b8c24ea46b503cf88de0f7de993",
".git/objects/90/a0edc258fdda279a10c67838074120ca010916": "d1e11287604f2b80f0cfe291a1ec6414",
".git/objects/90/0860ebf0bdd00d170106bf89ee197af160b45c": "33ef122f1582b773c66bbcdb7f99928a",
".git/objects/bf/0bbd2a7a26fe1faf1852070de5eefb77aa1fcc": "cb3c1aab4019be0dd6c22c34b7f6400d",
".git/objects/bf/92f199c6e3f317ba380a0c4a8a5eafc4db9bc2": "0bbf3fd424b9f4b5ab469e42a68f50b3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/5a1258c42656f0e4ba3a557fab983f17001b95": "ffc0037661c24034a87672a38067bcb4",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/e08ace9ac1a8b79d5e513f2a340476d55d1744": "0f999c9e8c81674723fce3277bcb90ed",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c5/ab6fa814e8870cfcaeca086d59290231eba128": "e07c1de2af2572c280cb8e3013b98046",
".git/objects/cb/d1e108ff07a6f1a30b894a244cb8042bd6605a": "d0c0b68b55f6ff91bb951395cda28b30",
".git/objects/f8/42f66e3389ede87d8db173cfcdf6a6302fa850": "1e86b6b450bf4ee7720225e59a383999",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/4099ab641f07caca562bd6cd19325998c0ba4b": "afabc317e2dc91133a0b5d97261472b1",
".git/objects/77/026fc147aca21f319c2bf0adfcb32cd4dc70fa": "5e708423b95a10490bb11a10bc514b30",
".git/objects/70/42276f712e5c9d947dd7ae6abf6073e888650c": "3c7b5e626b1e82cf4eb19e30ed200671",
".git/objects/24/345b369d943886b59cc56cb26b7a9febc7b5f4": "825e2970b873e12a9e2b645b93e7467e",
".git/objects/82/3c96e755e058424ab67903cc529bff6d826e8e": "08fd5b93e8cac10dd8daaf836c65ec4b",
".git/objects/2e/1033d301c8543976a93d87f3a4f18b1d9e0866": "7f8ccffa045ee9971837a92aaa8b4b66",
".git/objects/8b/f2a60203c24758c3df92a418c1ea6176792983": "9f6c41c9e53be286fabbdf314e83e8db",
".git/objects/8b/20180d99db144a1eda4be9261a978b4dad28a4": "2c1ca3a03e372efa14dff2e98841a87c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb06df196fcca95e7d2c21009d5846ae",
".git/logs/refs/heads/main": "2acb0034163f6f20114c831bf2bd1f07",
".git/logs/refs/remotes/origin/HEAD": "f2b6317dd80bd63e194801a596d39b13",
".git/logs/refs/remotes/origin/main": "27b239236d248da0859422eecd288fa3",
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
".git/refs/heads/main": "7badba3b19beddafce550e9dedd21ab1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "7badba3b19beddafce550e9dedd21ab1",
".git/index": "e975d45648baf0b2defff5c441074c7d",
".git/COMMIT_EDITMSG": "44f737bdacd6cafc9e25fabd3340691f",
".git/FETCH_HEAD": "f92a6c92148e8222079f99fc901502c8",
"assets/AssetManifest.json": "2f6bf1a83710bf95de094ca58939fb5e",
"assets/NOTICES": "ccd3caffe48d9976ca6bba5522d95ef4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e139ab9cf7ceb52be257ecd1c4ae7f88",
"assets/fonts/MaterialIcons-Regular.otf": "18ab0eeb429d16099c8ee8ca9092ea0d",
"assets/assets/ring.png": "8613149a3eeb4ebc122db416fd29a7da",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
