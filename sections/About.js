import Image from "next/image"

const About = () => {
  return (
    <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-8 py-20" id="about">
        <div className="absolute inset-x-0 top-[10rem] -z-10 overflow-hidden blur-3xl sm:blur-none"
          aria-hidden="true">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-[880px] translate-x-[200px] sm:translate-x-[1300px]">
            <defs><linearGradient id="b" gradientTransform="rotate(-45 .5 .5)"><stop offset="0%" stop-color="#00DBDE" /><stop offset="100%" stop-color="#FC00FF" /></linearGradient><clipPath id="a"><path fill="currentColor" d="M831 628.5Q854 757 737 813t-244.5 79.5q-127.5 23.5-194-87T157 597.5q-75-97.5-22-211T294 233q106-40 233-122.5t212 36q85 118.5 77 236t15 246Z" /></clipPath></defs><g clip-path="url(#a)"><path fill="url(#b)" d="M831 628.5Q854 757 737 813t-244.5 79.5q-127.5 23.5-194-87T157 597.5q-75-97.5-22-211T294 233q106-40 233-122.5t212 36q85 118.5 77 236t15 246Z" /></g>
          </svg>
        </div>
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