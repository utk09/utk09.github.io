"use strict";(self.webpackChunkutk09_github_io=self.webpackChunkutk09_github_io||[]).push([[5754],{5091:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"electoral-bonds-analysis","metadata":{"permalink":"/blogs/electoral-bonds-analysis","editUrl":"https://github.com/utk09/utk09.github.io/edit/main/blog/2024-03-19/index.md","source":"@site/blog/2024-03-19/index.md","title":"Electoral Bonds Analysis using Python","description":"Dive deep into the world of electoral bonds with our comprehensive Python analysis.","date":"2024-03-19T00:00:00.000Z","tags":[{"inline":true,"label":"python","permalink":"/blogs/tags/python"},{"inline":true,"label":"data-analysis","permalink":"/blogs/tags/data-analysis"},{"inline":true,"label":"data-visualization","permalink":"/blogs/tags/data-visualization"},{"inline":true,"label":"electoral-bonds","permalink":"/blogs/tags/electoral-bonds"},{"inline":true,"label":"streamlit","permalink":"/blogs/tags/streamlit"}],"readingTime":4.965,"hasTruncateMarker":true,"authors":[{"name":"Utkarsh Tiwari","title":"Software Engineer","url":"https://github.com/utk09","imageURL":"https://github.com/utk09.png","key":"utk09","page":null}],"frontMatter":{"slug":"electoral-bonds-analysis","title":"Electoral Bonds Analysis using Python","description":"Dive deep into the world of electoral bonds with our comprehensive Python analysis.","authors":["utk09"],"tags":["python","data-analysis","data-visualization","electoral-bonds","streamlit"]},"unlisted":false,"nextItem":{"title":"How to resolve vulnerabilities in Front-End Applications","permalink":"/blogs/resolve-vulnerabilities-in-frontend-apps"}},"content":"In this project, I use Python to look into electoral bonds. This post shares what I\'ve learned and the code I used.\\n\\n\x3c!--truncate--\x3e\\n\\n## Introduction\\n\\nElectoral bonds are like special coupons used for donating money to political parties in India. The Reserve Bank of India makes these bonds, and anyone or any company in India can buy them. These can then be given to political parties that got at least 1% of votes in the latest elections. The thing is, nobody gets to know who gave the money. These bonds can only be turned into cash by the political party within 15 days through a special bank account.\\n\\nRecently, India\'s Supreme Court decided to let everyone know details about these electoral bonds. So, I wanted to look into this data and see what\'s happening with these donations.\\n\\n## Getting the Data\\n\\nThe data is obtained from the [Election Commision of India](https://www.eci.gov.in/disclosure-of-electoral-bonds) website. The data is available in the form of PDFs.\\n\\n| ![purchaser data](./purchaser_data_pdf.png \\"purchaser data\\") |\\n| ------------------------------------------------------------ |\\n\\n| ![encashment data](./encashment_data_pdf.png \\"encashment data\\") |\\n| --------------------------------------------------------------- |\\n\\nThe PDF\'s are also available in the [pdf_data](https://github.com/utk09/electoral-bonds-data-analysis/tree/main/pdf_data) folder on my GitHub repository.\\n\\n## PDF to CSV challenge\\n\\nBecause the data was in PDFs, which are hard to work with, I used Python [PyPDF2](https://pypdf2.readthedocs.io/en/3.0.0/) to change it into CSV files, which are easier to handle. Here\'s a screenshot of code showing how I did it:\\n\\n| ![process text](./process_text.png \\"process text\\") |\\n| -------------------------------------------------- |\\n\\nIn this project, the main task was to sort out data from electoral bonds that were all mixed up without clear separation between different pieces of information. The data didn\'t have usual separators like commas or new lines to tell where one piece of data ended and the next one began.\\n\\nThe solution came from noticing patterns in the data: it started with `dates` and ended with money amounts (like `1,000`, `10,000`, `1,00,000`), which always had `000` at the end. Here\'s how the sorting was done:\\n\\n1. **Extracting Text:** First, the text was taken out and put into a list. This text was usually one record for each page of the PDF.\\n\\n2. **Finding Dates:** Then, using patterns, the script found where each date started in the text. Since all records started with a date, this helped identify the beginning of each new piece of data.\\n\\n3. **Cutting into Pieces:** With the start of each date found, the text was cut into sections. Each section was supposed to be one record.\\n\\n4. **Pulling Out Information:** For every piece of text, the script looked for and pulled out important information like the date, how much money was involved, and who was involved.\\n\\n5. **Cleaning Up:** After getting the necessary details, the script removed any unwanted bits from the money amounts and made sure everything looked right.\\n\\n6. **Putting Everything Together:** All cleaned data for each record was put together in a structured way, making it ready for the last step.\\n\\n7. **Making a CSV File:** In the end, all these structured records were turned into a CSV file, which is much easier to work with for analysis.\\n\\nYou can find the complete scripts for this process [here](https://github.com/utk09/electoral-bonds-data-analysis/blob/main/01_clean_purchaser_data.py) for the purchaser data and [here](https://github.com/utk09/electoral-bonds-data-analysis/blob/main/02_clean_encasher_data.py) for the encasher data.\\n\\nThis method made it possible to turn messy text into neat, ordered data ready for digging into.\\n\\n## Data Analysis\\n\\nI looked into details about who bought the bonds and who cashed them in. You can find all the code and how to set it up on my [GitHub repository](https://github.com/utk09/electoral-bonds-data-analysis/blob/main/README.md)\\n\\nIn this analysis, I focussed on the purchase and encashment patterns of Electoral Bonds. Here are the main areas explored:\\n\\n- **Number of Unique Participants:** Calculated the total number of distinct purchasers and encashers to understand the diversity in participation.\\n- **Total Transaction Amounts:** Summed up the total money involved in all transactions to gauge the scale of electoral bonds dealings.\\n- **Statistical Measures:** Examined the average (mean), median, and various quantiles (25th, 50th, and 75th percentiles) of the transaction amounts to understand the distribution and central tendencies.\\n- **Purchaser Summaries:** Grouped the total purchases by each purchaser along with their respective purchasing dates, providing insights into the most active participants.\\n- **Yearly and Monthly Analyses:** Created plots to visualize how the total purchase amounts varied across different years and months, offering a temporal perspective on the data.\\n- **Interactive Visualizations:** Utilized Plotly to generate interactive charts, enabling a dynamic exploration of how different purchasers behaved over time.\\n- **Encasher Summaries:** Similar to purchasers, I analyzed the total encashments by each political party and included the dates of encashment, highlighting the primary beneficiaries.\\n- **Encashment Trends:** Illustrated through plots how the total amounts encashed fluctuated across years and months, shedding light on the temporal patterns from the encashers\' perspective.\\n\\nThe approach employed for this analysis utilizes Python and libraries like Pandas, Streamlit, and Plotly to process, analyze, and visualize the data. Streamlit was chosen for its ability to quickly create interactive web apps, allowing for a more engaging presentation of the findings. Plotly, on the other hand, adds an interactive dimension to the data visualizations, making the exploration of trends more intuitive.\\n\\n### Screenshots of the visualizations\\n\\n| ![purchaser details 1](./purchaser_details_1.png \\"purchaser details 1\\") |\\n| ----------------------------------------------------------------------- |\\n\\n| ![purchaser details 2](./purchaser_details_2.png \\"purchaser details 2\\") |\\n| ----------------------------------------------------------------------- |\\n\\n| ![purchaser details 3](./purchaser_details_3.png \\"purchaser details 3\\") |\\n| ----------------------------------------------------------------------- |\\n\\n| ![encasher details 1](./encasher_details_1.png \\"encasher details 1\\") |\\n| -------------------------------------------------------------------- |\\n\\n| ![encasher details 2](./encasher_details_2.png \\"encasher details 2\\") |\\n| -------------------------------------------------------------------- |\\n\\n## Hosted Application\\n\\nI made a Streamlit app where you can interact with the data: **[https://electoral-bonds-data-analysis.streamlit.app/](https://electoral-bonds-data-analysis.streamlit.app/)**\\n\\n## Conclusion\\n\\nWorking on this project was a big learning experience. I got to know more about electoral bonds and how to handle PDFs. The project is still ongoing, and I plan to add more features. If you have any ideas or comments, feel free to contact me on [Twitter](https://twitter.com/utk09) or open an issue on [GitHub](https://github.com/utk09/electoral-bonds-data-analysis/issues)."},{"id":"resolve-vulnerabilities-in-frontend-apps","metadata":{"permalink":"/blogs/resolve-vulnerabilities-in-frontend-apps","editUrl":"https://github.com/utk09/utk09.github.io/edit/main/blog/2024-03-02/index.md","source":"@site/blog/2024-03-02/index.md","title":"How to resolve vulnerabilities in Front-End Applications","description":"Learn how to tackle vulnerabilities in front-end libraries such as React.js, Angular, and Vue.js to enhance your application\'s security.","date":"2024-03-02T00:00:00.000Z","tags":[{"inline":true,"label":"vulnerabilities","permalink":"/blogs/tags/vulnerabilities"},{"inline":true,"label":"react","permalink":"/blogs/tags/react"},{"inline":true,"label":"angular","permalink":"/blogs/tags/angular"},{"inline":true,"label":"vue","permalink":"/blogs/tags/vue"},{"inline":true,"label":"front-end","permalink":"/blogs/tags/front-end"},{"inline":true,"label":"security","permalink":"/blogs/tags/security"},{"inline":true,"label":"libraries","permalink":"/blogs/tags/libraries"},{"inline":true,"label":"package.json","permalink":"/blogs/tags/package-json"},{"inline":true,"label":"npm","permalink":"/blogs/tags/npm"},{"inline":true,"label":"yarn","permalink":"/blogs/tags/yarn"}],"readingTime":4.935,"hasTruncateMarker":true,"authors":[{"name":"Utkarsh Tiwari","title":"Software Engineer","url":"https://github.com/utk09","imageURL":"https://github.com/utk09.png","key":"utk09","page":null}],"frontMatter":{"slug":"resolve-vulnerabilities-in-frontend-apps","title":"How to resolve vulnerabilities in Front-End Applications","description":"Learn how to tackle vulnerabilities in front-end libraries such as React.js, Angular, and Vue.js to enhance your application\'s security.","authors":["utk09"],"tags":["vulnerabilities","react","angular","vue","front-end","security","libraries","package.json","npm","yarn"]},"unlisted":false,"prevItem":{"title":"Electoral Bonds Analysis using Python","permalink":"/blogs/electoral-bonds-analysis"}},"content":"If you\'re working with front-end frameworks like React.js, Angular, or Vue.js, or if your project relies on a `package.json` file, you might encounter vulnerabilities when running `npm audit` or `yarn audit`. These vulnerabilities pose a security risk and need to be addressed promptly. This article will guide you through resolving vulnerabilities, particularly in React.js-based projects.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Understanding Vulnerabilities\\n\\nVulnerabilities refer to flaws or weaknesses in a software system that attackers can exploit to undermine the system\'s integrity, availability, or confidentiality. These can emerge from outdated packages, insecure configurations, or flawed code.\\n\\n## Resolving Vulnerabilities in Direct Dependencies\\n\\nDirect dependencies (or devDependencies) are the packages that your project directly relies on. Here\u2019s how you can address vulnerabilities in your React.js, Angular, or Vue.js applications:\\n\\n1. **Identify Vulnerabilities:** Execute `npm audit` or `yarn audit` to uncover any vulnerabilities within your project.\\n\\n2. **Assess Breaking Changes:** Before updating any packages, verify whether there are breaking changes in the newer versions. Review the release notes of the packages or use `npm outdated` or `yarn outdated` to identify any significant changes that could impact your application.\\n\\n3. **Update Packages:** After evaluating for breaking changes, rectify the vulnerabilities by executing `npm audit fix` or `yarn audit fix`. This will typically upgrade the packages to the latest versions, thereby resolving the security issues. If you want to update a specific package, you can use `npm install package-name@latest` or `yarn add package-name@latest`. **Note:** Avoid using `npm audit fix --force` or `yarn audit fix --force` as it can sometimes lead to downgrading packages, which might introduce new vulnerabilities. In such cases, it\'s better to manually update the packages by specifying the version in the `package.json` file.\\n\\n4. **Automate Security Checks:** Incorporate vulnerability checks into your CI/CD pipeline by using `npm audit` or `yarn audit` and configure the pipeline to fail if vulnerabilities are detected. Additionally, tools like `npm audit fix` or `yarn audit fix` can be employed to automatically correct vulnerabilities, streamlining the maintenance of your project\'s security.\\n\\n| ![npm audit](./npm-audit.png \\"npm audit\\") |\\n| ----------------------------------------- |\\n\\n| ![npm audit fix --force](./npm-audit-fix-force.png \\"npm audit fix --force\\") |\\n| --------------------------------------------------------------------------- |\\n\\n## Resolving Vulnerabilities in Indirect Dependencies\\n\\nVulnerabilities can also occur in indirect (or transitive) dependencies, which are packages that your direct dependencies require. These vulnerabilities need careful handling to avoid breaking your project. Here\u2019s how to deal with vulnerabilities in indirect dependencies effectively:\\n\\n1. **Identify Indirect Vulnerabilities:** Run `npm audit` or `yarn audit`. These commands help in identifying both direct and indirect dependency vulnerabilities.\\n\\n2. **Analyze the Dependency Tree:** Use `npm ls <package_name>` or `yarn list --pattern <package_name>` to understand the dependency chain. This helps in pinpointing which direct dependencies are causing the indirect vulnerabilities.\\n\\n3. **Update Direct Dependencies:** Often, updating your project\'s direct dependencies can also update the indirect ones, resolving vulnerabilities. Follow the general update procedures as outlined in previous sections.\\n\\n4. **Manual Updates for Indirect Dependencies:** If direct updates don\'t resolve the issues, you can manually update indirect dependencies in `Node.js v16.14.2 or later` and `npm v8.3.0 or later`. Add `overrides` field in your `package.json`:\\n\\n   ```json\\n   {\\n     \\"overrides\\": {\\n       \\"semver\\": \\"6.3.1\\"\\n     }\\n   }\\n   ```\\n\\n   After specifying the override, run `npm install` or `yarn install`. This modification forces all uses of the semver package to the specified version, potentially resolving the vulnerabilities. However, ensure compatibility as this may lead to issues if the updated version is incompatible with other dependencies.\\n\\n5. **Specifying Overrides for Specific Packages:** If you need to target a specific package for the update, you might add a more targeted override in your `package.json`:\\n\\n   ```json\\n   {\\n     \\"overrides\\": {\\n       \\"@vitejs/plugin-react\\": {\\n         \\"semver\\": \\"6.3.1\\"\\n       }\\n     }\\n   }\\n   ```\\n\\n   This ensures that only `@vitejs/plugin-react` uses the specified version of `semver`. Implement this, then run `npm install` or `yarn install` to apply the changes.\\n\\n6. **CI/CD Integration:** Even if your CI/CD pipeline operates under `Node.js version 14`, you can address vulnerabilities in indirect dependencies by leveraging the `overrides` feature. First, ensure that you have `Node.js version ^16.14.0` locally. Then, add the necessary overrides to your `package.json` and run `npm install`. This process should generate an updated `package-lock.json` file reflecting the changes.\\n   In your CI/CD pipeline, utilize the `package-lock.json` file from your local development environment to install dependencies. Execute the following command:\\n\\n```sh\\nnpm ci\\n```\\n\\nThis specific command ensures that your project installs dependencies exactly as defined in your `package-lock.json`, applying the overrides as intended and maintaining consistency across environments.\\n\\n| ![npm ls semver](./npm-ls-semver.png \\"npm ls semver\\") |\\n| ----------------------------------------------------- |\\n\\n| ![adding overrides](./adding-overrides.png \\"adding overrides\\") |\\n| -------------------------------------------------------------- |\\n\\n**It\'s crucial to thoroughly test your application after making these changes to ensure everything works correctly and the vulnerabilities are resolved.**\\n\\n## Best Practices for Security Maintenance\\n\\nEnhance the security of your front-end applications with these straightforward practices:\\n\\n1. **Update Packages Regularly:** Always use the latest versions of your packages to benefit from recent security updates. Consistent updates prevent compatibility issues and reduce security risks.\\n\\n2. **Automate Security:** Implement automated security scans within your CI/CD pipeline. Early detection of vulnerabilities helps in their quick resolution, keeping your production environment secure.\\n\\n3. **Utilize Security Tools:** Employ tools like `npm audit` or `yarn audit` to find and address vulnerabilities. Tools such as [`snyk`](https://snyk.io/) or `npm audit fix` can help automate the fixing process.\\n\\n4. **Specify Exact Versions:** When adding packages, use the `--save-exact` flag with `npm install` or `yarn add` to **lock** the versions. This prevents unintended updates and maintains consistency, reducing the likelihood of introducing vulnerabilities.\\n\\n## Conclusion\\n\\nVulnerabilities in front-end applications represent considerable security threats. However, by adhering to the guidelines provided in this article, you can effectively mitigate these risks in your React.js, Angular, or Vue.js projects. Regular updates to your packages and the integration of automated security checks into your CI/CD processes are crucial steps in preserving the security and integrity of your applications. Stay proactive in your security practices to ensure a safer web environment for all users.\\n\\n---"}]}}')}}]);