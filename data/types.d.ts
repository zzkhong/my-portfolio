interface Skill {
  key: string;
  icon: any;
  label: string;
}

interface Experience {
  key: string;
  image: any;
  year: string;
  title: string;
}

interface Portfolio {
  key: string;
  image: any;
  title: string;
  association?: string;
  skills: string[];
  link: string;
}
