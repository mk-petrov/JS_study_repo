function buildXML(args) {
    if(args.length % 2 === 0){
        let result = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

        for (let i = 0; i < args.length; i++) {
            let value = args[i];

            if(i % 2 === 0){
                result += `  <question>\n    ${value}\n  </question>\n`;
            } else {
                result += `  <answer>\n    ${value}\n  </answer>\n`;
            }
            //console.log(value);
        }
        result += '</quiz>';

        console.log(result);
    } else {
        console.log('Invalid input!');
    }
}

buildXML(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
buildXML(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);
buildXML(['only one string']);