import ep from '../../public/experiences/ep.svg';
import conserto from '../../public/experiences/conserto.png';
import troopers from '../../public/experiences/troopers.png';
import connexing from '../../public/experiences/connexing.png';
import anjou from '../../public/experiences/anjou.png';
import drouault from '../../public/experiences/drouault.png';
import { Experience } from './components/experience/experience.model';

export const EXPERIENCES: Array<Experience> = [
    {
        tag: 'current job', 
        icon: ep, 
        title: 'Front-end engineer at EP', 
        subtitle: 'June 2021 → Today', 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.<br/><br/> Est placerat in egestas erat imperdiet. Consectetur adipiscing elit ut aliquam purus sit amet. Tellus orci ac auctor augue mauris. Nec dui nunc mattis enim ut tellus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Sollicitudin tempor id eu nisl nunc mi. Eu consequat ac felis donec et odio.", 
    },
    {
        icon: conserto, 
        title: 'Front-end engineer at Conserto', 
        subtitle: 'Febrary 2020 → June 2021', 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.", 
    },
    {
        icon: troopers, 
        title: 'Front-end developer at Troopers Agency', 
        subtitle: 'Feb 10, 2021 → Feb 10, 2021', 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.", 
    },
    {
        icon: connexing, 
        title: 'Graphic Designer at Connexing', 
        subtitle: 'Feb 10, 2021 → Feb 10, 2021', 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", 
    },
    {
        icon: anjou, 
        title: 'Analyst and developer at Département de Maine-et-Loire', 
        subtitle: 'Feb 10, 2021 → Feb 10, 2021',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", 
    },
    {
        icon: drouault, 
        title: 'Admin system and software developer at Drouault', 
        subtitle: 'Feb 10, 2021 → Feb 10, 2021',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", 
    }
]

export const QUALIFICATIONS = [
    {
        title: 'Project manager in IT project design in 2019',
        subtitle: 'RNCP Level I at IMIE, Nantes, France'
    },
    {
        title: 'Analyst and webdeveloper in 2018',
        subtitle: 'RNCP Level II at IMIE, Nantes, France '
    }
]

export const EXPERTISES = [
    {
        title: 'Jamstack propagandist',
        text: 'I work on this architecture from 4 years. The best improve is a static website run 500k static pages. I use mainly Next.js, and i ready to `app/` directory.'
    },
    {
        title: 'Design System manager',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]