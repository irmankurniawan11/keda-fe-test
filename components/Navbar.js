import Link from "next/link"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { ArrowUpIcon, BriefcaseIcon } from "@heroicons/react/24/solid"

const navigation = [
    { name: 'About', href: '#about', current: false },
    { name: 'Pricing', href: '#pricing', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = debounce(() => {
            setIsScrolled((isScrolled) => {
                if (!isScrolled && window.scrollY > 50) {
                    return true;
                }
                else if (isScrolled && window.scrollY < 4) {
                    return false;
                }
                return isScrolled;
            });
        }, 50);

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <>
            <Disclosure as="nav" className={classNames(
                isScrolled ? "backdrop-blur-md bg-opacity-80" : "backdrop-blur-none bg-opacity-100", "bg-white sticky top-0 z-50")} >
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-5xl 2xl:max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className={classNames(isScrolled ? "sm:h-20" : "sm:h-32", "transition-all duration-500 ease-in-out relative flex h-16 items-center justify-between")}>
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-cyan-800 hover:bg-cyan-600 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                    <a className="flex flex-shrink-0 items-center gap-2" href="/">
                                        {/* <img className="h-8 w-auto" src="/eti-logo-192-transparent.png" alt="Extra Time Indonesia" /> */}
                                        {/* <BriefcaseIcon className="h-10 w-10 text-slate-800" aria-hidden="true"/> */}
                                        <h1 className="text-4xl font-bold text-slate-700">bizz<span className="text-cyan-500">ERP</span></h1>
                                    </a>
                                    <div className="hidden sm:ml-6 sm:flex gap-4 items-center">
                                        <div className="flex items-center space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-cyan-500 hover:text-white',
                                                        'rounded-md px-6 py-2 font-bold focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name.toUpperCase()}
                                                </Link>
                                            ))}
                                        </div>
                                        <Link href='/login' className="font-bold py-2 px-6 rounded-md ring-2 ring-cyan-400 text-cyan-500 hover:text-cyan-400 hover:bg-cyan-50 hover:ring-cyan-300">LOGIN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="flex flex-col gap-2 px-2 py-3">
                            <div className="space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-cyan-500 hover:text-white',
                                            'block rounded-md px-3 py-2 text-center font-bold'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name.toUpperCase()}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <Link href='/login' className="font-bold py-2 px-6 rounded-md ring-2 ring-cyan-400 text-cyan-500 hover:text-cyan-400 hover:bg-cyan-50 hover:ring-cyan-300 text-center">LOGIN</Link>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <a href="#root" className={classNames(isScrolled ? "bottom-10 sm:bottom-20 scale-100" : "-bottom-20 scale-0", "w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-400 right-10 fixed z-50 shadow-lg text-white transition-all duration-500 ease-in-out")}>
                <ArrowUpIcon className="w-8 h-full mx-auto" aria-hidden="true" />
            </a>
        </>
    )
}

export default Navbar