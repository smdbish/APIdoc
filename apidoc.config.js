module.exports = {
  name: "SoftMouse.NET API Specification", 
  version: "1.1.0", // current version
  description: "", // document description
  title: "SoftMouse.NET API Doc", // browser title
  url: "https://softmouse.net", // 
  // useHostUrlAsSampleUrl: false, 
  sampleUrl: 'https://mouseapp.com/external', // The prefix of urls for page testing. used for @apiSampleRequest, the prefix will be added to the url of @apiSampleRequest
  // header and footer setting
  header: {
    title: "Description & Standard", // 
    filename: "header.md", // header content, follow markdown standard
  },
  footer: {
    title: "Appendix", // 
    filename: "footer.md", // footer content, follow markdown standard
  },
  // sorting for group, api-name
  order: [
    "User",
    "Animal",
    "Cage",
    "Study",
    "Sample",
    "Protocol",
    

    "login",
    "logout",
    "save",
    "getAnimal",
    "endAnimal"
  ],
  template: {
    forceLanguage: 'en', // 
    withCompare: true, // version comare, default is true
  	withGenerator: false, // display generator information on the bottom or not? default is true. e.g. "Generated with apidoc 0.28.1 - 2023-03-02T19:33:40.056Z"
    jQueryAjaxSetup: { // default ajax config
      headers: {
//         token: '123'
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
      }
    },
    // aloneDisplay: true, // display a api. deault: false
    showRequiredLabels: true,  //default is false, 
  	
  }
}