import paywatch from "assets/company/paywatch.png";
import sony from "assets/company/sony.png";
import upstack from "assets/company/upstack.png";
import werebits from "assets/company/werebits.png";

const companies: Record<string, Company> = {
  werebits: {
    key: "werebits",
    image: werebits,
    name: "Werebits",
  },
  sony: {
    key: "sony",
    image: sony,
    name: "SONY",
  },
  upstack: {
    key: "upstack",
    image: upstack,
    name: "Upstack Studio",
  },
  paywatch: {
    key: "paywatch",
    image: paywatch,
    name: "Paywatch",
  },
};

export default companies;
