tmp(name, val) {
	this.store(`sidebuf_${name}`, val);

	setTimeout(() => { store.remove(`sidebuf_${name}`) }, 10000)
}
