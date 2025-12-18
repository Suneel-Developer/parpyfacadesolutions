'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

    return (
        <section className="text-white bg-[#193366]" id="contact">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 md:px-8 py-32">
                <div className="flex items-start justify-between flex-wrap">
                    <div className="lg:max-w-lg space-y-3 max-lg:mb-10">
                        <h3 className="text-indigo-600 font-semibold">Contact</h3>
                        <p className="text-3xl font-semibold sm:text-4xl">Let us know how we can help</p>
                        <p className='mt-3'>If you need to design and manage your upcoming projects, please send your requirements through email, we will contact you.</p>

                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3 items-center">
                                <li className="flex items-center gap-x-3">
                                    <Image src="/assets/gmail-icon.svg" alt="Gmail" width={24} height={24} />
                                    <p>parpyfacadesolutions@outlook.com</p>
                                </li>

                                <li className="flex items-center gap-x-3">
                                    <Image src="/assets/phone-icon.svg" alt="Phone" width={24} height={24} />
                                    <p>0413 308 711 or +61 413308711</p>
                                </li>

                                <li className="flex items-center gap-x-3">
                                    <Image src="/assets/location-icon.svg" alt="Location" width={24} height={24} />
                                    <p>Fitzgibbon, Queensland 4018, Australia</p>
                                </li>

                                <li className="flex items-center gap-x-3">
                                    <div className="flex-none text-gray-400 font-extrabold">ABN:</div>
                                    <p>74677095395</p>
                                </li>

                                <li className="flex items-center gap-x-3">
                                    <div className="flex-none text-gray-400 font-extrabold">ACN:</div>
                                    <p>677095395</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#e5eeff] dark:bg-[#060b13]">
                        <form className="">
                            <div className="flex flex-col text-foreground space-y-2 w-full mb-4">
                                <label className="text-sm font-medium text-black dark:text-[#e4e5e7]" htmlFor="fullName">
                                    Full Name
                                </label>

                                <div
                                    className="p-[2px] rounded-lg transition duration-300 group/input"
                                    style={{
                                        background: "radial-gradient( 0px circle at 289.5px 40.53125px, #3b82f6, transparent 80%)",
                                    }}
                                >
                                    <input
                                        type="text"
                                        className="flex h-10 w-full border-none bg-gray-50 dark:bg-[#27272a] outline-none text-black dark:text-white rounded-md px-3 py-2 text-sm font-medium shadow-[0px_2px_3px_-1px_#20293c,0px_1px_0px_0px_#20293c,0px_0px_0px_1px_#20293c] dark:shadow-[0px_0px_1px_1px_#404040]"
                                        id="fullName"
                                        placeholder="Your Name"
                                        required=""
                                        name="name"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col text-foreground space-y-2 w-full mb-4">
                                <label className="text-sm font-medium text-black dark:text-[#e4e5e7]" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="p-[2px] rounded-lg transition duration-300 group/input"
                                    style={{
                                        background: "radial-gradient( 0px circle at 289.5px 40.53125px, #3b82f6, transparent 80%)",
                                    }}>
                                    <input
                                        type="email"
                                        className="flex h-10 w-full border-none bg-gray-50 dark:bg-[#27272a] outline-none text-black dark:text-white rounded-md px-3 py-2 text-sm font-medium shadow-[0px_2px_3px_-1px_#20293c,0px_1px_0px_0px_#20293c,0px_0px_0px_1px_#20293c] dark:shadow-[0px_0px_1px_1px_#404040]"
                                        id="email"
                                        placeholder="example@email.com"
                                        required=""
                                        name="email"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col text-foreground space-y-2 w-full mb-4">
                                <label className="text-sm font-medium text-black dark:text-[#e4e5e7]" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="flex min-h-[60px] w-full rounded-md border border-[#20293c] px-3 py-2 text-sm shadow-sm bg-[#e5eeff] dark:bg-[#060b13]"
                                    id="message"
                                    placeholder="Type your message here."
                                    name="message"
                                    required="">
                                </textarea>
                            </div>

                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-[#193366] text-white shadow hover:bg-[#193366e6] h-9 px-4 py-2"
                                type="submit">
                                Send  →
                                <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                                <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
                            </button>
                            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
