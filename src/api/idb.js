/* eslint-disable no-undef */
const DB_NAME = 'prdouctDB';
const DB_VERSION = 1;
let DB;

export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore('products', { autoIncrement: true, keyPath:'id' });
			};
		});
	},
	async deleteProduct(product) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['products'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('products');
			store.delete(product.id);
		});	
	},
	async getProducts() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['products'],'readonly');
			trans.oncomplete = () => {
				resolve(products);
			};
			
			let store = trans.objectStore('products');
			let products = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					products.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async saveProduct(product) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['products'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('products');
			store.put(product);

		});
	
	}

}