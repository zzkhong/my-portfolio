interface Skill {
  key: string;
  icon: any;
  label: string;
}

interface Feed {
  key: string;
  url: string;
  icon: any;
}

interface Experience {
  period: string;
  title: string;
  company: string;
  link: string;
  achievement: string[];
}

interface Company {
  key: string;
  image: any;
  name: string;
}

interface Portfolio {
  key: string;
  image: any;
  description?: string;
  title: string;
  association?: string;
  skills: string[];
  link?: string;
  action?: string;
}
