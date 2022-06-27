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
  link: string;
}
