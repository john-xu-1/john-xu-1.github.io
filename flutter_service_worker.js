'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "12fdc9b25cefc408a7ee208b06392325",
"index.html": "760552b18c74a22801c7956b619d211f",
"/": "760552b18c74a22801c7956b619d211f",
"main.dart.js": "d3600fd2c489ebff0583d431f9ee0bcb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "edff6839a01e9d05c198ab4b23362864",
".git/ORIG_HEAD": "8ec8133f87c5993c457667b7ef38548e",
".git/config": "0ab0fe4d9bb96a4e80d5b3c819113bb2",
".git/objects/95/1fff4ec8068e971ea8ac265ecd9f46b157cca7": "32280f75ef5843e8e0e4b4057c9ea51f",
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
".git/objects/9b/6d35df07c3ea73365511cf75fa48d329f95714": "150328caf3801a7c4015fa1cafea492f",
".git/objects/04/1b84305a441ed9abf0d1d516cb564272271449": "28460f114875dec31b7f6e05b2dd10b3",
".git/objects/32/61594b5ab8ad3d766f0f402c38fe994eb32844": "2d37d0399ac4b0dab87f384ce3ec5501",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/64cbcb23bc728283206b9f7a30c25d75908d53": "165ff070ac3acd47bd64d471206ae667",
".git/objects/69/5dbb531f62dc29a3d0003e5f8c31a49e3e2fc8": "d0697546cddb4798a12dac67e2d55e76",
".git/objects/56/d7eb5a99d7a2e59647cb6bedc6afa3025f6a9f": "fd303217823bc49c5b0a51da0986f842",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/34/9c8748b409b96409abb6fa48f55ae2ba267414": "a2092963e2a6a8404743523befdf3a1d",
".git/objects/a4/5573533c5ccd462512ebf021d18a100e925cca": "6849d390ef95bd0b4aba8f340716ee8b",
".git/objects/b2/8c1640b95435333733cbaf8d4e36edfdde5694": "bfc129f90dd061183d69e1f53cb7db87",
".git/objects/ac/8507bc7b2ed3dfa69d17a9f45103676f0872b2": "662377f178e856a1a890ae13b8c3b780",
".git/objects/ad/aa63e98df9a3728a2901921462744cf11fa955": "bf986d9f076006b3cce404bc250ecee1",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/5657ba8320a7b646599d39cabff72e846524d6": "8a95a0295c20014c2868fabe5f220805",
".git/objects/bd/7845d732cfcee669475dc160182238e5109d2e": "be0f08e2a804d486e3d38aee1b77258f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/dcacf85c51dd845c35adfafed655c684e6e6d9": "8fb341a601c28c2e881a89b1688978b9",
".git/objects/f3/25f0508624e1a1fb117321452ce832765e3140": "0be7ff019e1a37206847b504b428444d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/b6bbd152b17ecd4314c8ca934aff26e2aaf00a": "c2debe809927be132e96c1182e9ec1a0",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e3/0a3b7135c4ac46b9d5a9f59e719fff6c89d835": "59cf32354def7665a2872dfdba82840e",
".git/objects/c8/b772070d83f571a3e9c3de192ea3b782bfb7ab": "e4e349f6586157ebe79962ccd09e17b4",
".git/objects/4e/c469a09255857910e123480b67e2c0f2a4148c": "8937d63be18330e1ea0a17db2c8e109c",
".git/objects/18/fb8f2ea67574d2430061689efa7187a3351e8f": "7b4747fdb701a3170c27e66a629ecb63",
".git/objects/18/994495ba19eea98b617afa95ce3cabf6249980": "526f6820c3961e3c243d45a7f7af61f7",
".git/objects/4b/0bf9f894bbf8125a56bf0e430f7d0776951d6e": "783812cbf64d5e1d68a7f266c6473610",
".git/objects/7d/ff62f4029210d1e2c9c46e7ed235a70717990f": "5cb28933830fd27da3922eef76b04e22",
".git/objects/7c/425adcc3f2639784c3b18a867b3f10d53bfeff": "cda9edd3fd02a25851ffd5f21c723230",
".git/objects/42/6f7592984924cd8ecdd2f6f4236ed7cebc878b": "004ed9054163f1529aa03313eb298310",
".git/objects/89/ee6c03d5b6fb1b1acaa9756641e2f5375065b5": "2417a0128bbbea4af7082d6f3e64ba42",
".git/objects/89/17929aa32acae817e5d491cb39a4be0b36ddd9": "5e76a3d9e2069ce299c7491d5afac76c",
".git/objects/80/e79f83c3832e5127476e5504d1e9bf1b2e71b4": "2a612bd32559aa018fc29c72c20138c0",
".git/objects/74/8029ac76a1f88e4e9ddacf22f72dfa75b933f5": "2f2986769b15c113ebc73df42f68ca90",
".git/objects/74/3b1d15716ecfc51334ede7c044e4764a071cb4": "88652312a24efbb3b1c655b8e1fa2c6b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/84497b3334033e7853822312e34cdd9aa65338": "4b04c60e88be3e7f73145539da7b6251",
".git/objects/86/d425d34fe4ed8c753c2bb50e99d7f6754981e0": "54cd49659215861394db8bc5f545d799",
".git/objects/86/9fac8b476dad2ed0b2c06e7b9066a98219298c": "5f4856a7b420ec9ac7e6893af18fce18",
".git/objects/43/2511c2d480e97f6195b820a7d7eaa5ce43bc69": "5134f1af40f1ec21e197a2d1bb547c20",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/0fab1e32c68b0a465cbeb0f8357ab347fde5b6": "ce491d0570f6d0059cb74fe0c3df20f2",
".git/objects/36/a26ab74eba4c1cb29945764014d291b07b34f4": "38f4ce2195b2fb8638b6307d193c508d",
".git/objects/31/fae6c0603583a9a07600159fccdb5c2d4782c6": "ff44d9ce3ca7e4c49c84f3e853d8646d",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/96/65bd2c100fc32c0856cf37d8f942525a33943d": "17bbf232ce6238d9fe53c531b3cb8364",
".git/objects/54/ef8197ec62b4977a877ccc99010971b9c9cb64": "d90ce322a84f8378621b52ea1f5e874c",
".git/objects/54/e23339fbadffd043f903b1e3ed5eb86d842c4e": "e4b288fdd3c55ae4e615344a3af871e2",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/f88430fc724efd63112767b92bdc2c02c5c663": "b4b4c2e1fec6b5c47ffb15402a71c57f",
".git/objects/5b/d55f4f25f7ad6052370d2795bba271cfdb0d9e": "04991a708eb01d350d4185b08b0992cf",
".git/objects/5b/d6c69d8d7242a51968621bace149ec3997879e": "e6a57607f253ee1de29a27626bb3371b",
".git/objects/99/c95d1d36229aaa95be3ab1817e47501c36629e": "1283d8ccf7627030c03323114b8cfc07",
".git/objects/97/b3e4032b287764af0e20e71833a06a54ca5066": "c8ab5b8c24ea46b503cf88de0f7de993",
".git/objects/0a/10298110c1faf8657204238b71a129cdf3efc7": "7cab891ea1e3b60dc50b3c59ee712439",
".git/objects/90/a0edc258fdda279a10c67838074120ca010916": "d1e11287604f2b80f0cfe291a1ec6414",
".git/objects/90/0860ebf0bdd00d170106bf89ee197af160b45c": "33ef122f1582b773c66bbcdb7f99928a",
".git/objects/bf/0bbd2a7a26fe1faf1852070de5eefb77aa1fcc": "cb3c1aab4019be0dd6c22c34b7f6400d",
".git/objects/bf/92f199c6e3f317ba380a0c4a8a5eafc4db9bc2": "0bbf3fd424b9f4b5ab469e42a68f50b3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/9d762f3c947abedf0cca48ca12b03d215882d2": "276be8e17759a2f839c674230d3e10f6",
".git/objects/a0/948648497176074b5e9343dbb92205a1b766ee": "d65940ab246542e7d3305479759f1f76",
".git/objects/a0/c6668f0af7e50c4431bb71673adf12cd3fcb68": "96ab28916674f6fff4297402c89be955",
".git/objects/b8/3c7234b9a4cdd3e3627152dc61f89802033906": "0e5129674abddfd0dfeeb40d61fde86d",
".git/objects/d5/5a1258c42656f0e4ba3a557fab983f17001b95": "ffc0037661c24034a87672a38067bcb4",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/935f3fb193f77b5608872feaa05e3d1eedf5e4": "708760128624c6c1ce2927f9c52ba4e5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a6/8701aae5bd6554912246548ce4631f0af78c95": "d5cb9da5c3f334beb713903e80e03459",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/fc0ae35181a9f43cea8cced450fbb12a29702a": "ac8b296193124faa3d90da36dc70445a",
".git/objects/c3/138700c20345eb9e9d2cd849c8a4498646d3a3": "cb80b93564c87784319a32fef55aaf84",
".git/objects/c4/e08ace9ac1a8b79d5e513f2a340476d55d1744": "0f999c9e8c81674723fce3277bcb90ed",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c5/ab6fa814e8870cfcaeca086d59290231eba128": "e07c1de2af2572c280cb8e3013b98046",
".git/objects/cb/d1e108ff07a6f1a30b894a244cb8042bd6605a": "d0c0b68b55f6ff91bb951395cda28b30",
".git/objects/f8/42f66e3389ede87d8db173cfcdf6a6302fa850": "1e86b6b450bf4ee7720225e59a383999",
".git/objects/f8/d414c6a16b50a674dc824a53a3824a75e3740e": "626e2f8d2e61f045f08d5b0c14886079",
".git/objects/f8/0031d926781e84cd911b1bf7c986c744139cdd": "9828aa78b1e61ff83cbf8c741defdc05",
".git/objects/ce/2904086d0db25b8b30608365af7dae9cdd3c1d": "5813dcd6ce99bd2cda596a3df6cfe4fd",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/4099ab641f07caca562bd6cd19325998c0ba4b": "afabc317e2dc91133a0b5d97261472b1",
".git/objects/77/026fc147aca21f319c2bf0adfcb32cd4dc70fa": "5e708423b95a10490bb11a10bc514b30",
".git/objects/70/42276f712e5c9d947dd7ae6abf6073e888650c": "3c7b5e626b1e82cf4eb19e30ed200671",
".git/objects/84/01c1af73fd393d65d893bfe372948cfb98442e": "b5d272cf8733ee20bc04a69f6d1506c2",
".git/objects/24/345b369d943886b59cc56cb26b7a9febc7b5f4": "825e2970b873e12a9e2b645b93e7467e",
".git/objects/12/68272b6f2b59f6cdc5eeeb080e4e7484aa0071": "0c19027c5b76fbd5c2c25310b3fb23bd",
".git/objects/82/3c96e755e058424ab67903cc529bff6d826e8e": "08fd5b93e8cac10dd8daaf836c65ec4b",
".git/objects/40/1f6fcc8807cc005c7874f2668578ead1c0e1bb": "cd70ff872af7381394e0cca4fac6cf01",
".git/objects/2e/1033d301c8543976a93d87f3a4f18b1d9e0866": "7f8ccffa045ee9971837a92aaa8b4b66",
".git/objects/8b/f2a60203c24758c3df92a418c1ea6176792983": "9f6c41c9e53be286fabbdf314e83e8db",
".git/objects/8b/20180d99db144a1eda4be9261a978b4dad28a4": "2c1ca3a03e372efa14dff2e98841a87c",
".git/objects/22/3d51d15d1536477a86dd06646906dac568491d": "5204be681c1d10410880185c4a8354ec",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "49852581e2100abb55a6c634bba2ad55",
".git/logs/refs/heads/main": "66ea4f59a50985afa9973551bc7d1d9e",
".git/logs/refs/remotes/origin/HEAD": "32c2149c06c55c94e9e3f6b05b9c60a3",
".git/logs/refs/remotes/origin/main": "35d35d4f343a730924833efdc3ab9eac",
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
".git/refs/heads/main": "bc61d9e2c6f55b5fcc8a318c4c75c9fd",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bc61d9e2c6f55b5fcc8a318c4c75c9fd",
".git/index": "dfc9c4d4253c120849330d4ed7a09b30",
".git/COMMIT_EDITMSG": "8df26229ff8d9a293a084cbbe3b64784",
".git/FETCH_HEAD": "85511432477c08bb0355e3140fe61f5f",
"assets/AssetManifest.json": "2f6bf1a83710bf95de094ca58939fb5e",
"assets/NOTICES": "ccd3caffe48d9976ca6bba5522d95ef4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e139ab9cf7ceb52be257ecd1c4ae7f88",
"assets/fonts/MaterialIcons-Regular.otf": "2b553db5d6564cd21691b05c08b761a6",
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
