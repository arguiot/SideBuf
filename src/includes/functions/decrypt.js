private decrypt(name, encrypted) {
	//= ../other/sha256.js
	//= ../other/xorcipher.js
	//= github://marcuswestin/store.js/dist/store.everything.min.js
	return encrypted == true ? XORCipher(name, store.get(sha256(name))) : store.get(name)
}
