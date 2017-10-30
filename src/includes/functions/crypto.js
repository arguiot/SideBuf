private crypto(val, encrypt, name) {
	//= ../other/sha256.js
	//= ../other/xorcipher.js
	return encrypt == true ? sha256(val) : XORCipher.encode(name, val)
}
