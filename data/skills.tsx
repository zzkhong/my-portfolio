import React from "assets/icons/react.svg";
import NextJs from "assets/icons/nextjs.svg";
import Gatsby from "assets/icons/gatsby.svg";
import Android from "assets/icons/android.svg";
import CircleCI from "assets/icons/circleci.svg";
import Google from "assets/icons/google.svg";
import ZenDesk from "assets/icons/zendesk.svg";
import Azure from "assets/icons/azure.svg";
import TypeScript from "assets/icons/typescript.svg";
import JavaScript from "assets/icons/javascript.svg";
import Tailwind from "assets/icons/tailwind.svg";
import PHP from "assets/icons/php.svg";
import Laravel from "assets/icons/laravel.svg";
import Symfony from "assets/icons/symfony.svg";

const skills: Record<string, Skill> = {
  react: {
    key: "react",
    icon: React,
    label: "React",
  },
  reactnative: {
    key: "reactnative",
    icon: React,
    label: "React Native",
  },
  nextjs: {
    key: "nextjs",
    icon: NextJs,
    label: "NextJS",
  },
  gatsby: {
    key: "gatsby",
    icon: Gatsby,
    label: "Gatsby",
  },
  android: {
    key: "android",
    icon: Android,
    label: "Android",
  },
  circleci: {
    key: "circleci",
    icon: CircleCI,
    label: "CI/CD Pipeline",
  },
  seo: {
    key: "seo",
    icon: Google,
    label: "SEO",
  },
  crm: {
    key: "crm",
    icon: ZenDesk,
    label: "CRM Integration",
  },
  azure: {
    key: "azure",
    icon: Azure,
    label: "Azure DevOps",
  },
  typescript: {
    key: "typescript",
    icon: TypeScript,
    label: "TypeScript",
  },
  javascript: {
    key: "javascript",
    icon: JavaScript,
    label: "JavaScript",
  },
  tailwind: {
    key: "tailwind",
    icon: Tailwind,
    label: "Tailwind",
  },
  php: {
    key: "php",
    icon: PHP,
    label: "PHP",
  },
  laravel: {
    key: "laravel",
    icon: Laravel,
    label: "Laravel",
  },
  symfony: {
    key: "symfony",
    icon: Symfony,
    label: "Symfony",
  },
};

export default skills;
