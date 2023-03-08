import { StaticImageData } from "next/image";

export interface ExperienceComponentProps {
    experience: Experience;
}

export interface Experience {
    tag?: string;
    icon: StaticImageData;
    title: string;
    subtitle: string;
    text: string;
}
