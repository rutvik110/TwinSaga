'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9f67a9331d100d13f9de7fe10c0258e9",
"index.html": "54626b2af41c2087aad8a2ad2dd780ba",
"/": "54626b2af41c2087aad8a2ad2dd780ba",
"main.dart.js": "9ea1eebe5c65e1a6b39a2b22d415ccaf",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "130882fd5c973b16336ab226c258d7c8",
".git/ORIG_HEAD": "448b5873be8b1552aa1b127a05dbf91c",
".git/config": "54376c76efb56568219795840cc260d7",
".git/objects/61/1689aefa05860ea0ef716cd01a162d6a03384f": "4981758d498852344298b870c4bb3906",
".git/objects/0d/af6e41f7b0f09e862f3edb959281e88f386c7e": "a67dadd2fc67081fce2b21bd239380bd",
".git/objects/95/ac517c1d435fbea0b57b1cd07165f4719c8caf": "d6ec60c839c24cbcbdcadf71b59ea602",
".git/objects/66/3ebd457765226d2fede05c5e13fdd40fb12a09": "30f03aed271f146ba0076b71e6ce07f5",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/2dd8b01f7d6d85d36ecfd9de5d97e5c57a115f": "a91ddc524ca21312d8f4abc01b4abed5",
".git/objects/6f/9a1ece417401ea6bf41b025859ec2019195d9f": "481dbb90712382de67d13f28523ebf6c",
".git/objects/9b/0f2f3e275a264c5f13346be410c05eac3cca95": "278aa86b2378f718e457b71799fa222f",
".git/objects/9b/ad5c498a83ada102a60d5b4f28b14c519f84c0": "78ee6fc3e53eb0bd80e89f58bfc839d2",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/b4331fe90fcadb661dae373291eee4e3d8a5dd": "ac4921354f01111e87459ba25592a381",
".git/objects/94/39480481bdd23f33089df4467593ac03e5f0d6": "52836825eaf38b10f07cada79fe061fa",
".git/objects/05/a2dbe68257292342c60646596ef7849c0d840e": "38f44359df161fadd6ddb8e18b0e6755",
".git/objects/9d/a62adc9ceca6461a53dbd5c78f306f0afb818f": "daa3a725355e9221cefc4200efd7b04e",
".git/objects/9c/ac748a2fa65888b87ac32c45e6256a83a609f7": "5dda477b43d2f2ee412d0bc9af49275b",
".git/objects/a4/6e829c5bb83806a8648911921830ff274b8d68": "c703ff76288a26c2e1108826465985b3",
".git/objects/b5/c036619d416ec97353822d7f83c65d3bd9c9a8": "2e8308b0286b39f13a40b047ede089da",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b3/c25cb613047f866c818d154864db6de0c4b63b": "6cbef55c5af0b5f6118a28847786a712",
".git/objects/df/af15eb051b6f7c7359267cde84a35990a8c5cd": "4cc0e1c9f54b8a7902c7d7cba7e92db7",
".git/objects/da/04d4817de071d73f4c7ec6ef209871c4b79dde": "31c2ec6329e5e2479e7859d755a4500e",
".git/objects/a2/e48e1281d8d143db03126f3fdecf6cf4e01b48": "9caad8f6f9f628e4699974b103c28d91",
".git/objects/a2/9beb0a54105cb5b6fa4edec86c09aa3220063f": "93cd4396f45d459d2b2bb751b33007d8",
".git/objects/a2/56f10f24b4621f218f08aa9f0354b47a267403": "8ff18ff7918c94011c09fed81a792248",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/91fbd0024d89ba08a0311216ebcf4068b51a3a": "7f937b7195a1899ccdebd72f674e1fe1",
".git/objects/ee/d507bf34310dc2faaa54c35eabf302275ca8a7": "21a0e8835516f828e021139494bb85c4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/d8065f6e99462c8e973213ee77617b59055ac3": "42b1fc23c8cc69df8cf02319ef474245",
".git/objects/ca/5017f4246e74221731601aa87adb2b5c192ed0": "6350c13c30faea59894b38e8c4673e4e",
".git/objects/c1/19c54ab0bb94adffff4a6763bac08f83f0f13e": "c5d6d2f3c1a8e3cc4744ec5cb1e7e6f2",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/11/d8d4c01ba3fb6c15b56a9983625ca78196d751": "822067c2cb2ef7cafd11699e0622658e",
".git/objects/11/339aa23c73a92cfab0de58975e9698ba30f04f": "90c50757fe6827b136e009beed8ce3b6",
".git/objects/7d/c5f3b9d9c8ba1c07a0d855af6fc93fae4872db": "a2b8e414d9030a154ea7e192bf8d5106",
".git/objects/29/e13bb0e22af97ada51f535856ddaef351476de": "9397c8d6f84ea5453fc9c7bc62a711cb",
".git/objects/1f/ec695c5add668f86081e7cb731bfe10a97020e": "333db17b17a2a008c00f07883c0e46df",
".git/objects/1f/bec6429ba326a868eb3fbe91db8b6f3f1e2367": "05f47c47b164450c817c0de126136ebb",
".git/objects/87/f7f038593a84fd9c93a3c3ce576162e24c8dcc": "1e8f507016f56993a156a169fddbcffb",
".git/objects/17/4d1ce3e1a9e26770bae946101d118ad44258c5": "73e895fedf6f05dca324c4ac60997dff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/76cd2b54f010556a2cf7720c1356685d276eeb": "f71e25eefea80c5fbe213b645bf52ca9",
".git/objects/10/5cd043b2664bc58ed5d3001f8a56bef8bfc0be": "f06ed15971fe1f904b3f459fd464be5a",
".git/objects/19/cf9c7f032877a31284167d94d19c40227dc241": "e9b8a05eb6bb68567653c745b88fc9b6",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/75/f59d14a080878933a020406ecf403fa2750c58": "96933e949f3eb76067f08d54a2082a4b",
".git/objects/81/a72f56b39c7f4639375a9e259179d55b427cf5": "662513e4a6b6e1775a55e9cf25937aed",
".git/objects/44/d61011dd852920c86a826251ed4a088ffe9101": "cc8bdb70787084e4fd1b747917fb8d21",
".git/objects/44/e2c04fb75fdcd667605ecb6c2a2bf89af45338": "acb13bf3aa018b1e403c63b3e9ac1c99",
".git/objects/43/c1d5937796f1a91cd105ce1154d54874389a96": "f1496dfd7a82225e9af34427d20332a8",
".git/objects/88/31d46474070beb9776208c14a85cf1b061d502": "fec0edf19240d9d0ffc21a7c2adf2019",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/714ce47bff4e4335887adfd5850a37bd4fe988": "fa8566985a440c376732da8dfb2bf052",
".git/objects/6e/49094b2735d1b970074e9e98095e872ae0936c": "0d98a507979b4dca6cd32395e96b70d4",
".git/objects/6e/fe5dccfdcb1c22bed351d20886932d478c9f4e": "37acfdf43941929cd4d3ca0d0ce9e963",
".git/objects/09/1d7cc1ad21145696a7615c202471d320a8ab25": "b912c54dea538203ea7b018af15ce071",
".git/objects/91/b7ac2f6b6659cc87a49a3a713a58a2e006d159": "68dc862d11fb7cd47659d9613545c6cf",
".git/objects/65/cb58c34762d532cb5989e1f4a94eb787667ef2": "0fc8123399d3c48f3902bb8813620727",
".git/objects/62/ebcfef50105c3fa448e1c115dfbfc7c86c2ba4": "e93fdd1c385734a5cf3f8837c0c9f5ac",
".git/objects/62/b4fecfb6f722f7c578093ddcccc80876e629df": "894ebcc93ff26f9052363048c65e6bca",
".git/objects/98/482ddc90e8d813617eb320842a080db3610f2f": "0db38309e863f5a9e35ebbf044925476",
".git/objects/3f/30f5fe179c111faa70b0aed999b61fbebd4aa4": "cc4dec88665a6a7274842145e0a0c329",
".git/objects/3f/d7a5685665dccf46bc18aa45f488046d3f3725": "7ebd704d31c5a66393cc4321e8c8435d",
".git/objects/30/36ed8e7f947f4f1a12bda014f465a7060f9543": "368d5f5970647138a35590da0ee356ed",
".git/objects/30/8cfe09a481cfa831550857b13e298445ce71e3": "78ce0170092aaf306b749f32f3d9fd9d",
".git/objects/5e/6af5bb66c630a59dd9e3efc66ddee592225500": "67718eb359ee604d96a1c0818562767a",
".git/objects/08/16f2b7ae70748389273db848c6b76c1d18722b": "4c0d091880c14fbe62a569535422bf7e",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/01bb258a4082ca32c08cccfe69ea20022ad582": "6fb9b2cb745fc9d57dc3c9143ac58381",
".git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
".git/objects/6c/9096548726d6a292dfc913556ede383296d254": "cbb5b7fb540ad935ffb0c01cd19fd42c",
".git/objects/99/79b95f1c0bd2c75e06ca7d3f4f14476f400eda": "df4d1968130643868adaa0d4f28b342e",
".git/objects/99/c7cac155889298f69892fe1d333ad256845554": "5e1517f9e93542f94957364d4920a874",
".git/objects/63/c3e5210cb168d51b96da931437cf9bdddf3d8f": "a9f38052b9c5d9ae38e40641574b1aad",
".git/objects/63/4f01d3f0d6a9dc51ede9d2f5ba0ea941f80c00": "a72b7a53d01c06d682362b2d649dccc0",
".git/objects/d3/44c965d3f14009c176c1e0f2b373458d9caeee": "ff2192a6e3385ec5a98de08b5a536fb6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/394299a372d2dde3b2f13bb96b9db75f104147": "a5e31021a304b81b947a59c81e8893ae",
".git/objects/a7/41a2dc14c69c33dfd92efcdf89e41d530ef800": "507806f482eedc7e845bab80454e52f4",
".git/objects/dd/881377200fba6089568cb53334ec6f44fa29c4": "c7496d289d8aca5a185b8e00e252fc04",
".git/objects/b6/e64522e7d3f5f1815fbdf454eab01a08b81861": "320882a63148241e584c17416c2c05f4",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/27275ec95f5378f92af2fc36b6be4dfc293c0d": "d5c71b9c168b4b6878054dba17a61217",
".git/objects/aa/415758176946d3951752cf1fc35043adfbbc4a": "84705b15660e04c5f6378faa6ecbae07",
".git/objects/af/37fde729e752a09f9a3fc20b4aa11de4952a37": "c22eda67a06379c7aa0f7b4a123fbf8f",
".git/objects/af/c2bdec175afc49a3482fe26dd08d9247393362": "434559754c5f6d5e48b4cb9d1ff9e8ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/9e345f93dc583689d9a9565144e1f6df9e0a5e": "420bcae985457bbdb4f6cc059f47c0d8",
".git/objects/de/cb5b438fe91383eaa2d9c80f3b915912e29b6c": "08429527204e11f1f0458e4d9e6defc7",
".git/objects/b0/7d022cc2c4a0d6642e423ba01348cd1904ea44": "897a998548760138c278d00cbb23fa77",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/eca1088d1a02b8fabdb98517bc5461a8d62b99": "1b17fe2f93a38c551760be83d536a8e8",
".git/objects/a1/d324c2e809b56ba7b581e13b1354dbbeaa4670": "b611400a12ac4d57c0a3bfe652fe1472",
".git/objects/ef/8d084bebeb6094f1a1516caf61c3d4f7a5b175": "bcf90be3932b15198a8860432ff42465",
".git/objects/c3/aa225030f7aea9c104d1d3aa63932c2da757bb": "30b01091b4a588320263fca5f4a2b39e",
".git/objects/c4/e167646455232d2164dea18cf70f5fd5ddbdc3": "7162d8f8b8743f4a0db7a9381c76161f",
".git/objects/cc/03cd0ca1ceb71db5c5c5495895535de2dbf0af": "618c0e03cf48deb50313845a9531c6ff",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/7a8bad86abaa538ab9c543ca81e069dba4ef74": "d0efb02e4dea4a36aadfd6ca387b06a0",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/f7c971354b19ebf513026adecdaa56469073dd": "6b89e9800fdf9035efb52bbc5fde3f60",
".git/objects/c5/79620d224e935c0a2cafb88e1883e3263d3d8b": "cd72279afe1405f22c352fd4f7c02723",
".git/objects/e9/46cb72f13d2903524bf2eb74013d7a58c25768": "9ef2b8aed0eb68432dd50d39abe795dd",
".git/objects/ce/c10b130283cc8cc004eef18cfbd3df6880b4d9": "709fce1fadfcdf1fff6d4dac04d16038",
".git/objects/e0/1dda3460ad053fe00c1f1df93c1c155317a310": "a00465fdca4e8e3124c4cba5d3de9321",
".git/objects/41/e41f0505ae67cb72907f30302f9ed8338bc150": "1b206bf77f69c11077c7a72d6ed62ca4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1b/eaaeb2d00a87560b2b24d30cea1f63e282607f": "3e117da6de4c1162a47748e8f9c07400",
".git/objects/48/62da4a14648c8183d2e1480df206b0ff24270f": "6326fd9b0fb8b7c36cf63b6a095e1ae9",
".git/objects/70/c6a9ad5a3443143f079cb43a0450a9bfe90a90": "ecbc44f01731a676d4b9b035bc6d4e7e",
".git/objects/1e/abc8dae5ba4134ff829d2edcf4fe589619019c": "a14818f78666d2e9532e6774e95ece17",
".git/objects/1e/a13caa290fb156fdd8cf9a4db45d7003e228a7": "8aaf285ea281f817827b52937f67aced",
".git/objects/24/f450dea8fbf52b26229b5ab358791b2f4fdbb1": "e70e524edb155c859f7740dcdb1c4da8",
".git/objects/23/fde1491481deb556623d09beb992bae2b8cfb7": "cde77bfcaab94a53521684b5ca149a2d",
".git/objects/4f/838a7a1fc56e9d3ebd3311fbfbdc8920023361": "fc42e5eda2fc5a37e1fb914bfee3bcd6",
".git/objects/8d/83292af8384c0a4571a2a06541eee8ea711624": "4e7c93e13c18f170793a3676ee82695b",
".git/objects/15/d76911182aa361498edfb7fe91d3f72df82751": "5dab178d3fb6ae2df12590689a414e7e",
".git/objects/8c/21ea904538caa310b50a1681c4cfa7b8b327cc": "5ce581723120567a6e9cbefd0763c1e9",
".git/objects/1d/4b34ea33f3f2dc6a1823855f529ee69cdbaa11": "b8345b9fa2f0ae389b494a9d7141d5ed",
".git/objects/2b/31cf0f093e0812e6f92aaa12e4c3a04a1627c5": "726b5c5e5e485d68992081cdc2eb96ff",
".git/objects/8b/a3ab45830c16481780482a3b3bc115f15f4567": "e92497c1a1d6989c4dd7c59b7e4d9af3",
".git/objects/13/52a904775b3e29c837bf8db2bdae763f0343d1": "48cbe8e16495cadae4ae2e3f127b1733",
".git/objects/14/c7b9f717c046844b3610b3d7ad0c9adbf93d9d": "d6bcafc60b8ca7f148e07fce8e33a30b",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/25/0494dced6401911514a8a59263f37f13ea9875": "5dc7088c55a9bcdeabadcb506390c3e1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0cb981d3995e7e3374b24f9f64887cef",
".git/logs/refs/heads/main": "0cb981d3995e7e3374b24f9f64887cef",
".git/logs/refs/remotes/origin/main": "41e295ce873036fb6942fa0cd2a458a8",
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
".git/refs/heads/main": "448b5873be8b1552aa1b127a05dbf91c",
".git/refs/remotes/origin/main": "448b5873be8b1552aa1b127a05dbf91c",
".git/index": "788a2eab176fdb33ff754fc66d896a92",
".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
".git/FETCH_HEAD": "9c3b5ad2e31ede1b5d4fac9ceae0aee9",
"assets/AssetManifest.json": "fd179feaae56f7d21c34744989f447b0",
"assets/NOTICES": "f5d0156023ff2b128d04f3964d22dc35",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "033034d1545820d670ab6ca3c16400a7",
"assets/assets/skull_1.png": "2a0cd0847941bb834710d4b06f5ec76d",
"assets/assets/skull_2.png": "9c494ebb9059317d41db039696d07199",
"assets/assets/skull_3.png": "89b682659ecbe9755bda556b207af407",
"assets/assets/Purple%2520Effect%2520and%2520Bullet%252016x16.png": "a2dd1b0b5ec4847c772204febc8162b4",
"assets/assets/skull_4.png": "294f65da9a000e991f17cb09eba35c5e",
"assets/assets/platform_tiles/FireTiles/Fire_23_16x16.png": "e29f504a313b7b627da4ee25b9c3e2c1",
"assets/assets/platform_tiles/FireTiles/Fire_16_16x16.png": "97ee2dc2879adb206473586f2a8f5465",
"assets/assets/platform_tiles/FireTiles/Fire_3_16x16.png": "c8b06f9aa671262e8ad1f68ed880af12",
"assets/assets/platform_tiles/FireTiles/Fire_10_16x16.png": "d20eb711b3e1a56f0bfea1fa9f3fe1fb",
"assets/assets/platform_tiles/FireTiles/Fire_8_16x16.png": "761aef3f01c790f313297122599b1922",
"assets/assets/platform_tiles/FireTiles/Fire_25_16x16.png": "b13c56010b1f626aca5671e3169534d3",
"assets/assets/platform_tiles/FireTiles/Fire_5_16x16.png": "9c66c7e7122b15c56709d23cc2b28a45",
"assets/assets/platform_tiles/FireTiles/Fire_22_16x16.png": "1cf1bacbb23a2131a8b7f992b7b231c8",
"assets/assets/platform_tiles/FireTiles/Fire_17_16x16.png": "d901a158d5f2c9f476f7fcb0b2679f9b",
"assets/assets/platform_tiles/FireTiles/Fire_2_16x16.png": "3f63dfb6f053eaa6524ce7dcb8778c7e",
"assets/assets/platform_tiles/FireTiles/Fire_9_16x16.png": "a58cad4c498ea385dfd77525db009f92",
"assets/assets/platform_tiles/FireTiles/Fire_11_16x16.png": "e3c6a2d5c8e92c3d2df673dd22fa0770",
"assets/assets/platform_tiles/FireTiles/Fire_24_16x16.png": "08e939f023f5111fadabd7a55cec279b",
"assets/assets/platform_tiles/FireTiles/Fire_4_16x16.png": "b94578b453a6422fe4c178a7e832bc45",
"assets/assets/platform_tiles/FireTiles/Fire_14_16x16.png": "8bbc8244e47071294f0c0ab2310106a3",
"assets/assets/platform_tiles/FireTiles/Fire_21_16x16.png": "10bbdcc9826c97a8e1443b0656c7c50d",
"assets/assets/platform_tiles/FireTiles/Fire_19_16x16.png": "de56ec57dedf23ac08b1af1946c82045",
"assets/assets/platform_tiles/FireTiles/Fire_1_16x16.png": "5e54ee9e5d83d5c50d4c21b93a7bd32c",
"assets/assets/platform_tiles/FireTiles/Fire_12_16x16.png": "d67d4f1e6732716ec2acd2be80298e57",
"assets/assets/platform_tiles/FireTiles/Fire_7_16x16.png": "2a60465d2556d9f74d97a60d7a3e4755",
"assets/assets/platform_tiles/FireTiles/Fire_15_16x16.png": "7dad7313743f51f9eea81808e4dfae4e",
"assets/assets/platform_tiles/FireTiles/Fire_20_16x16.png": "c5172472bde922572cbd82ae18b8fa74",
"assets/assets/platform_tiles/FireTiles/Fire_18_16x16.png": "79412195a0284473e0a8870cbb6fbfa0",
"assets/assets/platform_tiles/FireTiles/Fire_13_16x16.png": "985e0b2942efff7a652c4b53ceb89a5c",
"assets/assets/platform_tiles/FireTiles/Fire_6_16x16.png": "844dd00c5909ef6907c03e9dff7bc869",
"assets/assets/platform_tiles/IceTiles/Ice_25_16x16.png": "70a4c694f250fd3fefb22b73da4345c3",
"assets/assets/platform_tiles/IceTiles/Ice_10_16x16.png": "ad53a88f4c1e2d364443064dcd07e217",
"assets/assets/platform_tiles/IceTiles/Ice_16_16x16.png": "1312ceafc4617c68d9656f038422f8a0",
"assets/assets/platform_tiles/IceTiles/Ice_6_16x16.png": "aec7afeebbca929aca0ab1e2b7a39d8f",
"assets/assets/platform_tiles/IceTiles/Ice_23_16x16.png": "1e869f285d07e8f5719959114432b23c",
"assets/assets/platform_tiles/IceTiles/Ice_24_16x16.png": "b0e9e49ced35c6b9970ca5d225c486d3",
"assets/assets/platform_tiles/IceTiles/Ice_1_16x16.png": "1ca77c9806c315f926a8c36c7bc4919f",
"assets/assets/platform_tiles/IceTiles/Ice_11_16x16.png": "5ffc302a49e6151ba7b004d839d73e6e",
"assets/assets/platform_tiles/IceTiles/Ice_17_16x16.png": "74595a11d962dc180d520c774f3214d3",
"assets/assets/platform_tiles/IceTiles/Ice_22_16x16.png": "21097057c4ac3c26b9866db21eb04f09",
"assets/assets/platform_tiles/IceTiles/Ice_7_16x16.png": "acce3571e918419a96cd31acca13e4de",
"assets/assets/platform_tiles/IceTiles/Ice_12_16x16.png": "fca2cdc200ab814461f1c051df363173",
"assets/assets/platform_tiles/IceTiles/Ice_2_16x16.png": "e81faa5542a8d6d56e1699fddb14de3f",
"assets/assets/platform_tiles/IceTiles/Ice_4_16x16.png": "55c6b8fcfa5e7d64bda2e5ea9fb6f1a7",
"assets/assets/platform_tiles/IceTiles/Ice_21_16x16.png": "1943f412a7efaf60ed6b236bed73da8b",
"assets/assets/platform_tiles/IceTiles/Ice_14_16x16.png": "5b309a105ecd0c4ce49db14f6409d94a",
"assets/assets/platform_tiles/IceTiles/Ice_9_16x16.png": "bcc1ec284ee9f27f1461bafc6a62da26",
"assets/assets/platform_tiles/IceTiles/Ice_19_16x16.png": "7245776ee3d9154837a7e7b6ad287733",
"assets/assets/platform_tiles/IceTiles/Ice_13_16x16.png": "ce9de5666f3cea868b0963d700697f8a",
"assets/assets/platform_tiles/IceTiles/Ice_3_16x16.png": "e02b30f8522941092a0d770d01d56c71",
"assets/assets/platform_tiles/IceTiles/Ice_20_16x16.png": "fedb93f467eef7721020d020ec4ba96f",
"assets/assets/platform_tiles/IceTiles/Ice_5_16x16.png": "bb10876d483331b6bd9f4301f7d26dfb",
"assets/assets/platform_tiles/IceTiles/Ice_15_16x16.png": "76127d42acd7740b2a1cd3e33ae16d46",
"assets/assets/platform_tiles/IceTiles/Ice_8_16x16.png": "42c304421038533c26a6a2c2218c5842",
"assets/assets/platform_tiles/IceTiles/Ice_18_16x16.png": "a8746f0f1cbf21080f4f688813f29d94",
"assets/assets/health_die.fa": "e45bfa397b6fa8c98306bec30e209be0",
"assets/assets/restart_icon.png": "8b21d500baecbb8181fd1ecaa6585300",
"assets/assets/Green%2520Effect%2520and%2520Bullet%252016x16.png": "e6fd33d5a18297f068ea6508a8cd8802",
"assets/assets/player_dead.png": "1933d764e469fecb07f2fe7306696a75",
"assets/assets/fire_effects_16_x_16.png": "7675df77571329cba3b77591b60c108d",
"assets/assets/wadawd.fa": "8575233f2ab2947da30b808db1395e62",
"assets/assets/water_effects.fa": "5f57168ded28b3d9f9756440a14c516d",
"assets/assets/fire_effects.fa": "04f778a9b7dd65e3f507eaf8b7f2f9df",
"assets/assets/won.gif": "6d9bc27befffd406015cfaf373dabc23",
"assets/assets/health.fa": "fefac7320ee0138cef50ac7c0098528c",
"assets/assets/audio/fire_enemy_death.wav": "fe54df0475457d2591aac344b9b7659a",
"assets/assets/audio/player_hit.wav": "1f09baca8e08be54cec9492e5b764f19",
"assets/assets/audio/ice_enemy_death_2.wav": "2ef8cc50e5da452f584db88354a024bb",
"assets/assets/audio/player_ice_bullet.wav": "08598dc0eea966b5d1618c9b2c378dd2",
"assets/assets/audio/fire_enemy_death%2520copy.wav": "bbf236e763ef68193e4b28074917d175",
"assets/assets/audio/ice_enemy_death.wav": "5f3a7293232a3522ded2f356ccbc4e60",
"assets/assets/audio/bg_music.wav": "078b6e527bda18390a6ec8dff957e2a7",
"assets/assets/audio/ice_enemy_bullet.wav": "fda2deeb0656e110c8c00ea8d6e0bfbf",
"assets/assets/audio/player_jump.wav": "eb38025b0fad3fd16fc86a8b99e5af5a",
"assets/assets/audio/enemy_weapon.wav": "302a977a55a38f0d3c637d89be0cfa24",
"assets/assets/audio/player_bullet.wav": "f9f1cb073860d02b6163006d471e5527",
"assets/assets/audio/fire_enemy_bullet.wav": "988cf9297dbafac59817262f9fc2fc5f",
"assets/assets/audio/player_final_death.wav": "cc236192dce96fe1eae923d2aa5ae0e3",
"assets/assets/audio/player_fire_bullet.wav": "1ccaab8d3edd714e20626056ac3f2e52",
"assets/assets/pause_icon.png": "2894c0c4d9972863ce21176535806e64",
"assets/assets/fire_1.fa": "bd5471ccf13a97c15639c4ea59dfc458",
"assets/assets/game_bg.png": "c3701ad54efaf90a3de442fd9b6de07f",
"assets/assets/Water%2520Effect%2520and%2520Bullet%252016x16.png": "b1ab0e76677094b6ad7978e4bc305546",
"assets/assets/start_icon.png": "59e96861aca728ce7cde72bdfabae237",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
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
