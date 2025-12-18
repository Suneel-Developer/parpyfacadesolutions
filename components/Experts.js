'use client';

export default function Expertise() {
    const expertiseAreas = [
        '⦁  Glazing Experts',
        '⦁  Facade Engineer',
        '⦁  Mechanical Engineer',
        '⦁  Civil Engineer',
        '⦁  Estimators',
        '⦁  Draft Persons',
        '⦁  Contract Specialist',
        '⦁  Financial Expert',
        '⦁  Contract Administrators',
        '⦁  IT/Technologist',
        '⦁  Quality Controller',
        '⦁	Health & Safety Related Document Administrator'
    ];

    return (
        <section id="experts">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16">
                <div>
                    <h1 className="text-3xl font-semibold text-black dark:text-[#e4e5e7]">Experts</h1>
                    <p className="text-md text-black dark:text-[#e4e5e7]">We have the following expertise in our network to provide the consulting services:</p>
                </div>

                <div className="flex items-center justify-start gap-3 flex-wrap mt-5">
                    {expertiseAreas.map((area, index) => (
                        <button key={index} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all bg-[#193366] text-white shadow hover:bg-[#193366e6] h-10 rounded-md px-8 text-wrap text-left">
                            {area}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
