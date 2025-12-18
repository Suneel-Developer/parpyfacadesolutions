'use client';

import Image from "next/image";

export default function SystemsTech() {
    const systems = [
        {
            icon: "/assets/icon-1.svg",
            title: 'We are equipped with',
            description: 'Doors and windows software, Microsoft Project, Auto CAD, Microsoft office suite, Wind load calculation software.',
        },
        {
            icon: "/assets/icon-2.svg",
            title: 'We are competent to handle',
            description: 'Aconex, Procore, Bluebeam, Simpro, Revit, Advance Steel',
        },
    ];

    return (
        <section className="mt-10 bg-[#193366]" id="tools">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16">
                <div>
                    <h1 className="text-3xl font-semibold text-white">Systems & Technology We use</h1>
                    <p className="text-md text-white">
                        We are familiar with the Doors and Windows systems of Australia's largest manufacturer such as AWS, Capral, Alspec, Bradnams, Ezial, etc. We have a wide experience on importing European high-end products as well as the special glass.
                    </p>
                </div>

                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {systems.map((system, index) => (
                            <li key={index} className="bg-[#e5eeff] dark:bg-[#060b13] text-black dark:text-[#e4e5e7] space-y-3 p-4 border border-[#20293c] rounded-lg">
                                <Image src={system.icon} alt={system.title} width={24} height={24} className="pb-3" />

                                <h3 className="text-lg font-semibold">{system.title}</h3>
                                <p>{system.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
