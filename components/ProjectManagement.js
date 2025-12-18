'use client';

export default function ProjectManagement() {
    const pmServices = [
        'Project scoping & feasibility assessment',
        'Initial concept drafting and layout development',
        'Project execution planning (scope, program, risks, deliverables)',
        'Budget planning and cost tracking',
        'Consultant and contractor coordination',
        'Procurement and tender support',
        'Program and milestone management',
        'Design coordination and constructability reviews',
        'Site coordination and progress monitoring',
        'Quality control, defect management & handover',
    ];

    const integratedSteps = [
        {
            number: '1',
            title: 'Concept & Initial Drafting',
            points: [
                'Prepare initial drawings and layouts in-house',
                'Develop design options aligned with client objectives',
                'Identify constraints, risks, and approval pathways early',
            ],
        },
        {
            number: '2',
            title: 'Planning & Execution Strategy',
            points: [
                'Define project scope, deliverables, and responsibilities',
                'Prepare program, milestones, and cost framework',
                'Establish procurement and construction strategy',
            ],
        },
        {
            number: '3',
            title: 'Design Development',
            points: [
                'Refine and finalise designs based on chosen option',
                'Coordinate all design inputs for consistency and buildability',
                'Manage changes, approvals, and documentation',
            ],
        },
        {
            number: '4',
            title: 'Delivery & Close-Out',
            points: [
                'Coordinate consultants, contractors, and stakeholders',
                'Monitor progress, quality, and compliance',
                'Support practical completion, defects close-out, and handover',
            ],
        },
    ];

    const whyParpy = [
        'In-house drafting + project management reduces delays and rework',
        'Single point of responsibility from concept to completion',
        'Practical, construction-focused design decisions',
        'Clear reporting, cost control, and program certainty',
    ];

    const engagementOptions = [
        {
            title: 'Advisory PM',
            description: 'Concept review, draft design, execution planning',
        },
        {
            title: 'Delivery PM',
            description: 'Full coordination with design development',
        },
        {
            title: 'Client-Side PM',
            description: 'Complete project leadership from draft design to handover',
        },
    ];

    return (
        <section className="py-20" id="project-management">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-black dark:text-white mb-1">
                        Project Management (Integrated Design & Delivery)
                    </h2>

                    <p className="text-md text-black dark:text-white">
                        Parpy provides end-to-end Project Management with in-house drafting and design capability,
                        allowing projects to move efficiently from concept through to delivery with fewer interfaces
                        and clearer accountability.
                    </p>
                </div>

                {/* What We Do */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-black dark:text-white mb-1">What We Do</h3>

                    <p className="text-md text-black dark:text-white mb-6">
                        We manage projects from early concept and planning through to completion, including preparing
                        initial draft designs, developing an execution plan, and delivering a final coordinated design
                        suitable for construction.
                    </p>

                    <div className="bg-gray-50 dark:bg-[#0f1924] rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                        <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                            Our Project Management services include:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {pmServices.map((service, index) => (
                                <ul key={index} className="flex items-start gap-2 list-disc list-inside">
                                    <li className="text-gray-700 dark:text-gray-300">{service}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Integrated Approach */}
                <div className="mb-16">
                    <h3 className="text-3xl font-semibold text-black dark:text-white mb-6">Our Integrated Approach</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {integratedSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 dark:bg-[#0f1924] rounded-xl p-8 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-[#193366] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                        {step.number}
                                    </div>
                                    <h4 className="text-xl font-semibold text-black dark:text-white">{step.title}</h4>
                                </div>

                                <ul className="space-y-3 list-disc list-inside">
                                    {step.points.map((point, idx) => (
                                        <li key={idx}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Parpy */}
                <div className="mb-16">
                    <h3 className="text-3xl font-semibold text-black dark:text-white mb-6">Why Parpy</h3>
                    <div className="flex items-center justify-start gap-3 flex-wrap">
                        {whyParpy.map((reason, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all bg-[#193366] text-white shadow hover:bg-[#193366e6] h-10 rounded-md px-8 text-wrap text-left"
                            >

                                {reason}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Engagement Options */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Project Management Engagement Options
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {engagementOptions.map((option, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0f1924] dark:to-[#2d3e50] rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                            >
                                <h4 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">{option.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300">{option.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 italic">
                        (Services tailored to project scale and complexity.)
                    </p>
                </div>
            </div>
        </section >
    );
}
