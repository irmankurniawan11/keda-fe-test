import { CheckCircleIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Pricing = () => {
  const data = [
    {
        "name":"Basic",
        "price": "500K",
        "annualPrice": "299K",
        "link": "#",
        "manfaat": [
            "Mencatat barang masuk",
            "Mencatat barang keluar",
            "Mencatat hasil keuntungan",
        ]
    },
    {
        "name":"Business",
        "price": "900K",
        "annualPrice": "599K",
        "link": "#",
        "manfaat": [
            "Mencatat barang masuk dan keluar",
            "Mencatat hasil keuntungan",
            "Dapat menganalisa hasil penjualan dengan CHART",
            "Support 7x24 Jam",
        ]
    },
    {
        "name":"Entrepreneur",
        "price": "1500K",
        "annualPrice": "999K",
        "link": "#",
        "manfaat": [
            "Mencatat barang masuk dan keluar",
            "Mencatat hasil keuntungan",
            "Dapat menganalisa hasil penjualan dengan CHART",
            "Support 7x24 Jam",
            "Export data ke Excel",
            "AI Prediksi penghasilan",
        ]
    }
  ]

  return (
    <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-8 py-20" id="pricing">
        <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Paket harga untuk bisnis Anda</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Kami memiliki beberapa paket harga yang cocok dengan kebutuhan bisnis Anda.
            </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-evenly">
              {
                  data.map((item) => (
                      <div className="flex flex-col gap-6 lg:w-96 p-8 rounded-lg shadow-md">
                          <div className="flex flex-col gap-2">
                              <h2 className="font-bold text-lg">{item.name}</h2>
                              <div className="flex items-end">
                                  <span className="text-4xl font-bold">{item.price}</span>
                                  <span>/bulan</span>
                              </div>
                              <span className="text-slate-400">Hanya {item.annualPrice} perbulan jika bayar pertahun </span>
                          </div>
                          <Link href={item.link} className="block text-center py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg rounded-md">Beli Paket Ini</Link>
                          <div className="flex flex-col gap-3">
                              {
                                  item.manfaat.map((manfaat) => (
                                      <div className="inline-flex gap-4"><CheckCircleIcon className="w-6 h-6 text-cyan-500 flex-none" />{manfaat}</div>
                                  ))
                              }
                          </div>
                      </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Pricing