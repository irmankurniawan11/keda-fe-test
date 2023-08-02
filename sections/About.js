import Image from "next/image"

const About = () => {
  return (
    <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-8 py-20" id="about">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
            <Image className="flex-none" src='/images/undraw_metrics_re_6g90.svg' width={480} height={320}></Image>
            <div className="flex flex-col gap-8 text-right">
                <h1 className="font-bold text-4xl">Tentang Kami</h1>
                <div className="text-lg"><strong>bizzERP</strong> merupakan perusahaan startup teknologi yang berdedikasi untuk menyediakan solusi ERP terbaik bagi usaha kecil dan menengah Anda. Dengan keahlian dan inovasi kami, kami membantu Anda mengintegrasikan dan mengoptimalkan proses bisnis sehingga Anda dapat berkonsentrasi penuh pada pertumbuhan dan keberhasilan.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About