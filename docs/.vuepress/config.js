const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  //解决github部署404问题 base: '/', // 格式：'/<仓库名>/'， 默认'/'
  base:'/Financial-Manager/',
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "理财管理",
  description: '包含整个项目流程周期，涉及到需求、设计图、前端、后端、部署、测试、运维等知识点',
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
