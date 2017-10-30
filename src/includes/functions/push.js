public push(name, val, secure=false) {
	const keyName = secure == true ? this.crypto(name, true) : `sidebuf_${name}`;
	const keyValue = secure == true ? this.crypto(val, true) : val;
	this.store(keyName, keyValue);
}
