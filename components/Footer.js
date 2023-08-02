const Footer = () => {
    const footerLinkData = [
        {name:"About", link:"#about"},
        {name:"Pricing", link:"#pricing"},
        {name:"Contact", link:"#contact"},
        {name:"Privacy Policy", link:"#"},
        {name:"Terms of Service", link:"#"},
    ]

    return (
        <footer className=" bg-slate-50 text-slate-500 py-20 sm:pb-0 transition-colors duration-300 ease-in-out">
            <div className="container mx-auto max-w-7xl px-8 sm:px-4">
            <div className="flex flex-col items-center justify-between gap-8 py-2 sm:py-10 sm:mb-10 sm:flex-row sm:justify-evenly">
                <div className="sm:flex sm:items-start sm:gap-5 text-center sm:text-left">
                    <h1 className="text-4xl font-bold text-slate-700">bizz<span className="text-cyan-500">ERP</span></h1>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                    {footerLinkData.map((data)=>{
                        return (<a key={data.name} className="text-sm rounded-full ring-2 ring-slate-300 py-1 px-4 hover:bg-slate-300" href={data.link}>{data.name}</a>);
                    })}
                </div>
            </div>
            <div className="py-8 text-gray-500 flex justify-between flex-col sm:flex-row text-center">
                <p className="text-sm">Copyright 2023. All rights reserved.</p>
                <div className="flex items-center gap-4 justify-center mt-4 sm:mt-0">
                    <a href="https://twitter.com/" title="Ikuti di Twitter" target="_blank" rel="noreferrer"><span className="sr-only">Twitter</span><svg aria-hidden="true" className="h-6 w-6 fill-slate-500 hover:fill-primary-600"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"></path></svg></a>
                    <a href="https://instagram.com/" title="Ikuti di Instagram" target="_blank" rel="noreferrer"><span className="sr-only">Instagram</span><svg aria-hidden="true" className="h-6 w-6 fill-slate-500 hover:fill-primary-600"><path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path></svg></a>
                    <a href="https://www.facebook.com/" title="Ikuti di Facebook" target="_blank" rel="noreferrer"><span className="sr-only">Facebook</span><svg aria-hidden="true" className="h-6 w-6 fill-slate-500 hover:fill-primary-600" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg></a>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer