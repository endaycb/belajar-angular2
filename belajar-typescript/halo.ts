class produk{
    private _nama: String;
    private _kode: String;
    private _harga: Number;

    constructor(nama: String, kode: String, harga: Number){
        this._nama = nama;
        this._kode = kode;
        this._harga = harga;
    }

    public get nama(): String{
        return this._nama;
    }

    public set nama(nama: String){
        this._nama = nama;
    } 

    public get kode(): String{
        return this._kode;
    }

    public set kode(kode: String){
        this._kode = kode;
    }

    public get harga(): Number{
        return this._harga;
    }

    public set harga(harga: Number){
        this._harga = harga
    }
}

let p = new produk("ciki","p001",12000);
//p.nama = "ciki";
//p.kode = "P001";
//p.harga = 1000;

console.log("kode produk : "+p.kode);
console.log("nama produk : "+p.nama);
console.log("harga produk : "+p.harga);

