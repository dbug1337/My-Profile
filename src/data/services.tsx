import {
    ChartPieIcon,
    CogIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";

export const allServices = [
    {
        icon: (
            <CogIcon className="w-8 h-8 mb-3 transition-transform duration-700 stroke-[2.5px] group-hover:rotate-[360deg]" />
        ),
        title: {
            l1: "WordPress",
            l2: "Development",
        },
        description:
            "As a WordPress developer, my role involves designing, developing, and maintaining websites using the WordPress platform.",
    },
    {
        icon: (
            <CubeTransparentIcon className="w-8 h-8 mb-3 transition-transform duration-700 stroke-[2.5px] group-hover:rotate-[360deg]" />
        ),
        title: {
            l1: "DevOps",
            l2: "Development",
        },
        description:
            "I am a skilled DevOps Engineer, experienced in automating software delivery and bridging the gap between dev and ops.",
    },
    {
        icon: (
            <ChartPieIcon className="w-8 h-8 mb-3 transition-transform duration-700 stroke-[2.5px] group-hover:rotate-[360deg]" />
        ),
        title: {
            l1: "Application",
            l2: "Security",
        },
        description:
            "My role as a web security researcher is to identify vulnerabilities and potential security risks within web applications and websites and make report..",
    },
];
