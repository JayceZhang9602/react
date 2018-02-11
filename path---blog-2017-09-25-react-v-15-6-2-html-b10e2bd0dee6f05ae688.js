webpackJsonp([0x5dd8977cccf7],{727:function(t,e){t.exports={data:{markdownRemark:{html:'<p>今天我们发布了 React 15.6.2。在 15.6.1，我们为产生的一些意外结果的变更事件和输入进行了修复。这些问题已经被消除，同时我们也包含了一些用于提高 React 跨浏览器稳定性的补丁。</p>\n<p>此外，15.6.2 增加了 <a href="https://developers.google.com/web/updates/2017/03/chrome-58-media-updates#controlslist"><code>controlList</code></a> 特性，以及 CSS columns 不再需要添加 <code>px</code> 后缀。</p>\n<h2 id="安装"><a href="#%E5%AE%89%E8%A3%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装</h2>\n<p>我们推荐使用 <a href="https://yarnpkg.com/">Yarn</a>或 <a href="https://www.npmjs.com/">npm</a>来管理前端依赖。若你是初次接触包管理器，<a href="https://yarnpkg.com/en/docs/getting-started">Yarn 文档</a>是一个不错的起点。</p>\n<p>通过Yarn安装React，运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add react@^15.6.0 react-dom@^15.6.0\n</code></pre>\n      </div>\n<p>通过npm安装React，运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save react@^15.6.0 react-dom@^15.6.0\n</code></pre>\n      </div>\n<p>我们推荐如 <a href="https://webpack.js.org/">webpack</a> 或 <a href="http://browserify.org/">Browserify</a> 打包器，以让你可以编写模块化代码并将其打包到一起放在一个小的包内以优化加载时间。</p>\n<p>记住默认情况下，React 在开发模式下运行会带有额外检查并提供有用的警告。当部署你的应用时，确保其<a href="/react/docs/installation.html#development-and-production-versions">在生产模式编译</a>。</p>\n<p>万一你未使用打包器，我们也提供了一个预先构建好的包在npm上，你可以在你的页面中<a href="/react/docs/installation.html#using-a-cdn">通过script标签引入</a>：</p>\n<ul>\n<li><strong>React</strong><br/>\n带警告的开发版本: <a href="https://unpkg.com/react@15.6.2/dist/react.js">react/dist/react.js</a><br/>\n用于生产的压缩版本: <a href="https://unpkg.com/react@15.6.2/dist/react.min.js">react/dist/react.min.js</a><br/></li>\n<li><strong>React with Add-Ons</strong><br/>\n带警告的开发版本: <a href="https://unpkg.com/react@15.6.2/dist/react-with-addons.js">react/dist/react-with-addons.js</a><br/>\n用于生产的压缩版本: <a href="https://unpkg.com/react@15.5.2/dist/react-with-addons.min.js">react/dist/react-with-addons.min.js</a><br/></li>\n<li><strong>React DOM</strong> (页面中在React DOM之前引入React) <br/>\n带警告的开发版本: <a href="https://unpkg.com/react-dom@15.6.2/dist/react-dom.js">react-dom/dist/react-dom.js</a><br/>\n用于生产的压缩版本: <a href="https://unpkg.com/react-dom@15.6.2/dist/react-dom.min.js">react-dom/dist/react-dom.min.js</a><br/></li>\n<li><strong>React DOM Server</strong> (页面中在 React DOM Server 之前引入 React)<br/>\n带警告的开发版本: <a href="https://unpkg.com/react-dom@15.6.2/dist/react-dom-server.js">react-dom/dist/react-dom-server.js</a><br/>\n用于生产的压缩版本: <a href="https://unpkg.com/react-dom@15.6.2/dist/react-dom-server.min.js">react-dom/dist/react-dom-server.min.js</a><br/></li>\n</ul>\n<p>我们还在 npm 上发布了 <code>react</code>，<code>react-dom</code> 及附件包的<code>15.6.2</code> 版本以及在bower上发布了 <code>react</code> 包。</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h2 id="1562-september-25-2017"><a href="#1562-september-25-2017" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>15.6.2 (September 25, 2017)</h2>\n<h3 id="所有包"><a href="#%E6%89%80%E6%9C%89%E5%8C%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>所有包</h3>\n<ul>\n<li>从 BSD + Patents 切换到 MIT 协议</li>\n</ul>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>修复了当 <code>document.documentMode</code> 被修改时，在其他浏览器触发了 IE检测而中断了变更事件的 bug。（<a href="https://github.com/aweary">@aweary</a> 在 <a href="https://github.com/facebook/react/pull/10032">#10032</a> 提及）</li>\n<li>CSS Columns 会被认为是无单位的数字。（<a href="https://github.com/aweary">@aweary</a> 在 <a href="https://github.com/facebook/react/pull/10115">#10115</a> 提及）</li>\n<li>Fix bug in QtWebKit when wrapping synthetic events in proxies. (<a href="https://github.com/walrusfruitcake">@walrusfruitcake</a> in <a href="https://github.com/facebook/react/pull/10011">#10115</a>)</li>\n<li>修复了在 QtWebKit下合成事件包装在 proxies 的 bug。（<a href="https://github.com/walrusfruitcake">@walrusfruitcake</a> 在 <a href="https://github.com/facebook/react/pull/10011">#10115</a> 提及）</li>\n<li>在开发环境下阻止事件处理器接受额外参数。（<a href="https://github.com/aweary">@aweary</a> 在 <a href="https://github.com/facebook/react/pull/8363">#10115</a> 提及）</li>\n<li>修复带有 <code>defaultChecked</code> 单选框（radio）不触发 <code>onChange</code> 的情况。（<a href="https://github.com/jquense">@jquense</a> 在 <a href="https://github.com/facebook/react/pull/10156">#10156</a> 提及）</li>\n<li>将 <code>controlList</code> 添加到 DOM 特性白名单（<a href="https://github.com/nhunzaker">@nhunzaker</a> 在 <a href="https://github.com/facebook/react/pull/9940">#9940</a> 提及）</li>\n<li>修复了开发环境下当在构造函数里创建带有 ref 的元素并未抛出异常。（<a href="https://github.com/iansu">@iansu</a> 在 <a href="https://github.com/facebook/react/pull/10025">#10025</a> 提及）</li>\n</ul>',excerpt:"今天我们发布了 React 15.6.2。在 15.6.1，我们为产生的一些意外结果的变更事件和输入进行了修复。这些问题已经被消除，同时我们也包含了一些用于提高 React 跨浏览器稳定性的补丁。 此外，15.6.2 增加了  controlList  特性，以及 CSS columns 不再需要添加  px  后缀。 安装 我们推荐使用  Yarn 或  npm 来管理前端依赖。若你是初次接触包管理器， Yarn 文档 是一个不错的起点。 通过Yarn安装React，运行： 通过npm安装React，运行： 我们推荐如  webpack  或  Browserify  打包器，以让你可以编写模块化代码并将其打包到一起放在一个小的包内以优化加载时间。 记住默认情况下，React 在开发模式下运行会带有额外检查并提供有用的警告。当部署你的应用时，确保其 在生产模式编译 。 万一你未使用打包器，我们也提供了一个预先构建好的包在npm上，你可以在你的页面中 通过script标签引入 ： React \n带警告的开发版本:  react/dist/react.js…",frontmatter:{title:"React v15.6.2",next:null,prev:null,author:[{frontmatter:{name:"Nathan Hunzaker",url:"https://github.com/nhunzaker"}}]},fields:{date:"September 25, 2017",path:"blog/2017-09-25-react-v15.6.2.md",slug:"/blog/2017/09/25/react-v15.6.2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}});
//# sourceMappingURL=path---blog-2017-09-25-react-v-15-6-2-html-b10e2bd0dee6f05ae688.js.map