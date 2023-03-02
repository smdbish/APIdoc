module.exports = {
  name: "SoftMouse.NET API Specification", 
  version: "1.0.0", // current version
  description: "SoftMouse.NET provides this document to our customers or partner companies for integrating with their applications or systems. Technical engineers or software developers that work for SoftMouse.NET customers or partners could be potential Readers.", // document description
  title: "SoftMouse.NET API Doc", // browser title
  url: "https://softmouse.net", // 
  // useHostUrlAsSampleUrl: false, // 使用hosturl当作测试api请求的url前缀 - 经测试感觉无效,true/false没变化
  sampleUrl: 'http://127.0.0.1/SMDB-1.0/external', // 页面测试api请求的url前缀，会覆盖useHostUrlAsSampleUrl - 这个配置项不设置的话，内部的@apiSampleRequest设置也不起作用，而且@apiSampleRequest这个设置只会替换掉整个路径，不会自动加上api路径
  // 头部和尾部文档配置
  // header: {
  //   title: "headerMenu", // 标题-用于形成左侧菜单名称
  //   filename: "header.md", // 文档内容
  // },
  // footer: {
  //   title: "footerMenu", // 标题-用于形成左侧菜单名称
  //   filename: "footer.md", // 文档内容
  // },
  // api-name排序或者group-name排序, 先进行group排序-再进行name排序, 没有的则自动在后面显示
  order: [
    "User",
    "Mouse",
    "Sample",
    

    "login",
    "save",
  ],
  template: {
    forceLanguage: 'en', // 
  	withCompare: true, // 是否需要进行版本对比，默认true
  	withGenerator: true, // 是否需要显示编译信息（主要是编译日期和apidoc版本），默认true
    jQueryAjaxSetup: { // 默认的jquery的ajax的配置
      headers: {
//         token: '123'
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
      }
    },
    aloneDisplay: false, // 是否需要单独显示某个api，默认fale
  }
}