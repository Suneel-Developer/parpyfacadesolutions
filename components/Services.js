'use client';

export default function Services() {
    return (
        <section className="bg-[#193366] text-white py-20" id="services">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16">
                <h1 className="text-3xl font-semibold mb-16">
                    What we do for:
                </h1>

                <div className="flex items-center justify-around mt-5">
                    <div className="w-[20rem] hidden md:block shadow-2xl border-white border-2 border-solid">
                        <img
                            src="/assets/window-door.webp"
                            alt="Doors & Windows Company"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full"
                        />
                    </div>

                    <div className="max-w-2xl">
                        <h1 className="text-lg font-semibold">Doors & Windows Company:</h1>
                        <div>
                            <ul className="list-disc px-5">
                                <li>Capability Development of your Organisation: we provide advisory role to your company for organizational development, operational efficiency as well as introducing recent technology to grow your business.</li>
                                <li>We prepare tender documentation for your tender submission including Estimation/Quotation</li>
                                <li>We completely manage your projects as a management consultancy including Quality Control and Safety.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto my-16 bg-[#20293c] h-[1px]"></div>

                <div className="flex items-center justify-around mt-5 flex-row-reverse">
                    <div className="w-[20rem] hidden md:block shadow-2xl border-white border-2 border-solid">
                        <img
                            src="/assets/meeting.webp"
                            alt="Client/Head Contractor/Architect"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full"
                        />
                    </div>

                    <div className="max-w-2xl">
                        <h1 className="text-lg font-semibold">Client/Head Contractor/Architect:</h1>
                        <div>
                            <ul className="list-disc px-5">
                                <li>We can provide conceptual design of the Glazing Works as well as drafting glazing scope of works/Specification.</li>
                                <li>We can offer Technical Supervision of the Glazing Works based on the agreed Terms of Reference.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto my-16 bg-[#20293c] h-[1px]"></div>

                <div className="flex items-center justify-around mt-5">
                    <div className="w-[20rem] hidden md:block shadow-2xl border-white border-2 border-solid">
                        <img
                            src="/assets/house-demo.webp"
                            alt="Residential Owner"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full"
                        />
                    </div>

                    <div className="max-w-2xl">
                        <h1 className="text-lg font-semibold">Residential Owner:</h1>
                        <div>
                            <ul className="list-disc px-5">
                                <li>If you want to take our conceptual design and idea then we can advise you while finalizing your home with Architect</li>
                                <li>We can provide our conceptual design as well as manage your glazing/facades refurbishment works employing registered glazing company.</li>
                                <li>We focus not only in large projects, we love to work modifying your kitchen, shower, Doors/Windows, Skylights, Curtain Walls projects.</li>
                                <li>If you are worried who will design and manage your construction for Balustrading, pool fencing then we are here to help you</li>
                                <li>All the products we design and manage for construction will be as per the Australian Standards and prevailing rules and regulations.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto my-16 h-[1px] bg-[#20293c]"></div>

                <div className="flex items-center justify-around mt-5 flex-row-reverse">
                    <div className="w-[20rem] hidden md:block shadow-2xl border-white border-2 border-solid">
                        <img
                            src="/assets/appartment.webp"
                            alt="appartment"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full"
                        />
                    </div>

                    <div className="max-w-2xl">
                        <h1 className="text-lg font-semibold">Body Corporate/ Apartment Owner:</h1>
                        <div>
                            <ul className="list-disc px-5">
                                <li>Most of the apartment built 30 years before are now experiencing the waterleakage due to rusting of aluminium extrusion, concrete cancer as well as the installation methods . We have the team of experts who have been gone through this fixing the problems using proven experienced window design and installation methods. We will help you to investigate and provide you the proper guideline for fixing the problems.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
