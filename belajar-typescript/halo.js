var produk = (function () {
    function produk(nama, kode, harga) {
        this._nama = nama;
        this._kode = kode;
        this._harga = harga;
    }
    Object.defineProperty(produk.prototype, "nama", {
        get: function () {
            return this._nama;
        },
        set: function (nama) {
            this._nama = nama;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(produk.prototype, "kode", {
        get: function () {
            return this._kode;
        },
        set: function (kode) {
            this._kode = kode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(produk.prototype, "harga", {
        get: function () {
            return this._harga;
        },
        set: function (harga) {
            this._harga = harga;
        },
        enumerable: true,
        configurable: true
    });
    return produk;
}());
var p = new produk("ciki", "p001", 12000);
//p.nama = "ciki";
//p.kode = "P001";
//p.harga = 1000;
console.log("kode produk : " + p.kode);
console.log("nama produk : " + p.nama);
console.log("harga produk : " + p.harga);
