webpackJsonp([0x6f0dfb350e13],{720:function(e,a){e.exports={data:{markdownRemark:{html:'<p>Today we are releasing React 15.4.0.</p>\n<p>We didn’t announce the <a href="https://github.com/facebook/react/blob/master/CHANGELOG.md#1510-may-20-2016">previous</a> <a href="https://github.com/facebook/react/blob/master/CHANGELOG.md#1520-july-1-2016">minor</a> <a href="https://github.com/facebook/react/blob/master/CHANGELOG.md#1530-july-29-2016">releases</a> on the blog because most of the changes were bug fixes. However, 15.4.0 is a special release, and we would like to highlight a few notable changes in it.</p>\n<h3 id="separating-react-and-react-dom"><a href="#separating-react-and-react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Separating React and React DOM</h3>\n<p><a href="/react/blog/2015/09/10/react-v0.14-rc1.html#two-packages-react-and-react-dom">More than a year ago</a>, we started separating React and React DOM into separate packages. We deprecated <code>React.render()</code> in favor of <code>ReactDOM.render()</code> in React 0.14, and removed DOM-specific APIs from <code>React</code> completely in React 15. However, the React DOM implementation still <a href="https://www.reddit.com/r/javascript/comments/3m6wyu/found_this_line_in_the_react_codebase_made_me/cvcyo4a/">secretly lived inside the React package</a>.</p>\n<p>In React 15.4.0, we are finally moving React DOM implementation to the React DOM package. The React package will now contain only the renderer-agnostic code such as <code>React.Component</code> and <code>React.createElement()</code>.</p>\n<p>This solves a few long-standing issues, such as <a href="https://github.com/facebook/react/issues/7386">errors</a> when you import React DOM in the same file as the <a href="https://facebook.github.io/jest/blog/2016/07/27/jest-14.html">snapshot testing</a> renderer.</p>\n<p><strong>If you only use the official and documented React APIs you won’t need to change anything in your application.</strong></p>\n<p>However, there is a possibility that you imported private APIs from <code>react/lib/*</code>, or that a package you rely on might use them. We would like to remind you that this was never supported, and that your apps should not rely on internal APIs. The React internals will keep changing as we work to make React better.</p>\n<p>Another thing to watch out for is that React DOM Server is now about the same size as React DOM since it contains its own copy of the React reconciler. We don’t recommend using React DOM Server on the client in most cases.</p>\n<h3 id="profiling-components-with-chrome-timeline"><a href="#profiling-components-with-chrome-timeline" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Profiling Components with Chrome Timeline</h3>\n<p>You can now visualize React components in the Chrome Timeline. This lets you see which components exactly get mounted, updated, and unmounted, how much time they take relative to each other.</p>\n<center></center>\n<p>To use it:</p>\n<ol>\n<li>\n<p>Load your app with <code>?react_perf</code> in the query string (for example, <code>http://localhost:3000/?react_perf</code>).</p>\n</li>\n<li>\n<p>Open the Chrome DevTools <strong>Timeline</strong> tab and press <strong>Record</strong>.</p>\n</li>\n<li>\n<p>Perform the actions you want to profile. Don’t record more than 20 seconds or Chrome might hang.</p>\n</li>\n<li>\n<p>Stop recording.</p>\n</li>\n<li>\n<p>React events will be grouped under the <strong>User Timing</strong> label.</p>\n</li>\n</ol>\n<p>Note that the numbers are relative so components will render faster in production. Still, this should help you realize when unrelated UI gets updated by mistake, and how deep and how often your UI updates occur.</p>\n<p>Currently Chrome, Edge, and IE are the only browsers supporting this feature, but we use the standard <a href="https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API">User Timing API</a> so we expect more browsers to add support for it.</p>\n<h3 id="mocking-refs-for-snapshot-testing"><a href="#mocking-refs-for-snapshot-testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mocking Refs for Snapshot Testing</h3>\n<p>If you’re using Jest <a href="https://facebook.github.io/jest/blog/2016/07/27/jest-14.html">snapshot testing</a>, you might have had <a href="https://github.com/facebook/react/issues/7371">issues</a> with components that rely on refs. With React 15.4.0, we introduce a way to provide mock refs to the test renderer. For example, consider this component using a ref in <code>componentDidMount</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MyInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n<span class="gatsby-highlight-code-line">        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>node <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>input <span class="token operator">=</span> node<span class="token punctuation">}</span></span>\n</span>      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>With snapshot renderer, <code>this.input</code> will be <code>null</code> because there is no DOM. React 15.4.0 lets us avoid such crashes by passing a custom <code>createNodeMock</code> function to the snapshot renderer in an <code>options</code> argument:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> MyInput <span class="token keyword">from</span> <span class="token string">\'./MyInput\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> renderer <span class="token keyword">from</span> <span class="token string">\'react-test-renderer\'</span><span class="token punctuation">;</span>\n\n<span class="gatsby-highlight-code-line"><span class="token keyword">function</span> <span class="token function">createNodeMock</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line"><span class="token punctuation">}</span>\n</span>\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders correctly\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>createNodeMock<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">const</span> tree <span class="token operator">=</span> renderer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyInput</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token function">expect</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We would like to thank <a href="https://github.com/Aweary">Brandon Dail</a> for implementing this feature.</p>\n<p>You can learn more about snapshot testing in <a href="https://facebook.github.io/jest/blog/2016/07/27/jest-14.html">this Jest blog post</a>.</p>\n<hr>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>We recommend using <a href="https://yarnpkg.com/">Yarn</a> or <a href="https://www.npmjs.com/">npm</a> for managing front-end dependencies. If you’re new to package managers, the <a href="https://yarnpkg.com/en/docs/getting-started">Yarn documentation</a> is a good place to get started.</p>\n<p>To install React with Yarn, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add react@15.4.0 react-dom@15.4.0\n</code></pre>\n      </div>\n<p>To install React with npm, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save react@15.4.0 react-dom@15.4.0\n</code></pre>\n      </div>\n<p>We recommend using a bundler like <a href="https://webpack.js.org/">webpack</a> or <a href="http://browserify.org/">Browserify</a> so you can write modular code and bundle it together into small packages to optimize load time.</p>\n<p>Remember that by default, React runs extra checks and provides helpful warnings in development mode. When deploying your app, make sure to <a href="/react/docs/installation.html#development-and-production-versions">compile it in production mode</a>.</p>\n<p>In case you don’t use a bundler, we also provide pre-built bundles in the npm packages which you can <a href="/react/docs/installation.html#using-a-cdn">include as script tags</a> on your page:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://unpkg.com/react@15.4.0/dist/react.js">react/dist/react.js</a><br>\nMinified build for production: <a href="https://unpkg.com/react@15.4.0/dist/react.min.js">react/dist/react.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://unpkg.com/react@15.4.0/dist/react-with-addons.js">react/dist/react-with-addons.js</a><br>\nMinified build for production: <a href="https://unpkg.com/react@15.4.0/dist/react-with-addons.min.js">react/dist/react-with-addons.min.js</a>  </li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br>\nDev build with warnings: <a href="https://unpkg.com/react-dom@15.4.0/dist/react-dom.js">react-dom/dist/react-dom.js</a><br>\nMinified build for production: <a href="https://unpkg.com/react-dom@15.4.0/dist/react-dom.min.js">react-dom/dist/react-dom.min.js</a>  </li>\n<li><strong>React DOM Server</strong> (include React in the page before React DOM Server)<br>\nDev build with warnings: <a href="https://unpkg.com/react-dom@15.4.0/dist/react-dom-server.js">react-dom/dist/react-dom-server.js</a><br>\nMinified build for production: <a href="https://unpkg.com/react-dom@15.4.0/dist/react-dom-server.min.js">react-dom/dist/react-dom-server.min.js</a></li>\n</ul>\n<p>We’ve also published version <code>15.4.0</code> of the <code>react</code>, <code>react-dom</code>, and addons packages on npm and the <code>react</code> package on bower.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react"><a href="#react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React</h3>\n<ul>\n<li>React package and browser build no longer “secretly” includes React DOM.<br>\n<small>(<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/7164">#7164</a> and <a href="https://github.com/facebook/react/pull/7168">#7168</a>)</small></li>\n<li>Required PropTypes now fail with specific messages for null and undefined.<br>\n<small>(<a href="https://github.com/chenglou">@chenglou</a> in <a href="https://github.com/facebook/react/pull/7291">#7291</a>)</small></li>\n<li>Improved development performance by freezing children instead of copying.<br>\n<small>(<a href="https://github.com/keyanzhang">@keyanzhang</a> in <a href="https://github.com/facebook/react/pull/7455">#7455</a>)</small></li>\n</ul>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>Fixed occasional test failures when React DOM is used together with shallow renderer.<br>\n<small>(<a href="https://github.com/goatslacker">@goatslacker</a> in <a href="https://github.com/facebook/react/pull/8097">#8097</a>)</small></li>\n<li>Added a warning for invalid <code>aria-</code> attributes.<br>\n<small>(<a href="https://github.com/jessebeach">@jessebeach</a> in <a href="https://github.com/facebook/react/pull/7744">#7744</a>)</small></li>\n<li>Added a warning for using <code>autofocus</code> rather than <code>autoFocus</code>.<br>\n<small>(<a href="https://github.com/hkal">@hkal</a> in <a href="https://github.com/facebook/react/pull/7694">#7694</a>)</small></li>\n<li>Removed an unnecessary warning about polyfilling <code>String.prototype.split</code>.<br>\n<small>(<a href="https://github.com/nhunzaker">@nhunzaker</a> in <a href="https://github.com/facebook/react/pull/7629">#7629</a>)</small></li>\n<li>Clarified the warning about not calling PropTypes manually.<br>\n<small>(<a href="https://github.com/jedwards1211">@jedwards1211</a> in <a href="https://github.com/facebook/react/pull/7777">#7777</a>)</small></li>\n<li>The unstable <code>batchedUpdates</code> API now passes the wrapped function’s return value through.<br>\n<small>(<a href="https://github.com/bgnorlov">@bgnorlov</a> in <a href="https://github.com/facebook/react/pull/7444">#7444</a>)</small></li>\n<li>Fixed a bug with updating text in IE 8.<br>\n<small>(<a href="https://github.com/mnpenner">@mnpenner</a> in <a href="https://github.com/facebook/react/pull/7832">#7832</a>)</small></li>\n</ul>\n<h3 id="react-perf"><a href="#react-perf" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Perf</h3>\n<ul>\n<li>When ReactPerf is started, you can now view the relative time spent in components as a chart in Chrome Timeline.<br>\n<small>(<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/7549">#7549</a>)</small></li>\n</ul>\n<h3 id="react-test-utils"><a href="#react-test-utils" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Test Utils</h3>\n<ul>\n<li>If you call <code>Simulate.click()</code> on a <code>&#x3C;input disabled onClick={foo} /></code> then <code>foo</code> will get called whereas it didn’t before.<br>\n<small>(<a href="https://github.com/nhunzaker">@nhunzaker</a> in <a href="https://github.com/facebook/react/pull/7642">#7642</a>)</small></li>\n</ul>\n<h3 id="react-test-renderer"><a href="#react-test-renderer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Test Renderer</h3>\n<ul>\n<li>Due to packaging changes, it no longer crashes when imported together with React DOM in the same file.<br>\n<small>(<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/7164">#7164</a> and <a href="https://github.com/facebook/react/pull/7168">#7168</a>)</small></li>\n<li><code>ReactTestRenderer.create()</code> now accepts <code>{createNodeMock: element => mock}</code> as an optional argument so you can mock refs with snapshot testing.<br>\n<small>(<a href="https://github.com/Aweary">@Aweary</a> in <a href="https://github.com/facebook/react/pull/7649">#7649</a> and <a href="https://github.com/facebook/react/pull/8261">#8261</a>)</small></li>\n</ul>',excerpt:"Today we are releasing React 15.4.0. We didn’t announce the  previous   minor   releases  on the blog because most of the changes were bug fixes. However, 15.4.0 is a special release, and we would like to highlight a few notable changes in it. Separating React and React DOM More than a year ago , we started separating React and React DOM into separate packages. We deprecated  React.render()  in favor of  ReactDOM.render()  in React 0.14, and removed DOM-specific APIs from  React  completely in…",frontmatter:{title:"React v15.4.0",next:null,prev:null,author:[{frontmatter:{name:"Dan Abramov",url:"https://twitter.com/dan_abramov"}}]},fields:{date:"November 16, 2016",path:"blog/2016-11-16-react-v15.4.0.md",slug:"/blog/2016/11/16/react-v15.4.0.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}}});
//# sourceMappingURL=path---blog-2016-11-16-react-v-15-4-0-html-7dd440b896ba440dd89f.js.map