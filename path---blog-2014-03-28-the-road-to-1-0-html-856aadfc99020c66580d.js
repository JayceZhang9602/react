webpackJsonp([81162097448240],{648:function(e,t){e.exports={data:{markdownRemark:{html:'<p>When we launched React last spring, we purposefully decided not to call it 1.0. It was production ready, but we had plans to evolve APIs and behavior as we saw how people were using React, both internally and externally. We’ve learned a lot over the past 9 months and we’ve thought a lot about what 1.0 will mean for React. A couple weeks ago, I outlined <a href="https://github.com/facebook/react/wiki/Projects">several projects</a> that we have planned to take us to 1.0 and beyond. Today I’m writing a bit more about them to give our users a better insight into our plans.</p>\n<p>Our primary goal with 1.0 is to clarify our messaging and converge on an API that is aligned with our goals. In order to do that, we want to clean up bad patterns we’ve seen in use and really help enable developers write good code.</p>\n<h2 id="descriptors"><a href="#descriptors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Descriptors</h2>\n<p>The first part of this is what we’re calling “descriptors”. I talked about this briefly in our <a href="/react/blog/2014/03/21/react-v0.10.html">v0.10 announcements</a>. The goal here is to separate our virtual DOM representation from our use of it. Simply, this means the return value of a component (e.g. <code>React.DOM.div()</code>, <code>MyComponent()</code>) will be a simple object containing the information React needs to render. Currently the object returned is actually linked to React’s internal representation of the component and even directly to the DOM element. This has enabled some bad patterns that are quite contrary to how we want people to use React. That’s our failure.</p>\n<p>We added some warnings in v0.9 to start migrating some of these bad patterns. With v0.10 we’ll catch more. You’ll see more on this soon as we expect to ship v0.11 with descriptors.</p>\n<h2 id="api-cleanup"><a href="#api-cleanup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Cleanup</h2>\n<p>This is really connected to everything. We want to keep the API as simple as possible and help developers <a href="http://blog.codinghorror.com/falling-into-the-pit-of-success/">fall into the pit of success</a>. Enabling bad patterns with bad APIs is not success.</p>\n<h2 id="es6"><a href="#es6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ES6</h2>\n<p>Before we even launched React publicly, members of the team were talking about how we could leverage ES6, namely classes, to improve the experience of creating React components. Calling <code>React.createClass(...)</code> isn’t great. We don’t quite have the right answer here yet, but we’re close. We want to make sure we make this as simple as possible. It could look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>There are other features of ES6 we’re already using in core. I’m sure we’ll see more of that. The <code>jsx</code> executable we ship with <code>react-tools</code> already supports transforming many parts of ES6 into code that will run on older browsers.</p>\n<h2 id="context"><a href="#context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Context</h2>\n<p>While we haven’t documented <code>context</code>, it exists in some form in React already. It exists as a way to pass values through a tree without having to use props at every single point. We’ve seen this need crop up time and time again, so we want to make this as easy as possible. Its use has performance tradeoffs, and there are known weaknesses in our implementation, so we want to make sure this is a solid feature.</p>\n<h2 id="addons"><a href="#addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Addons</h2>\n<p>As you may know, we ship a separate build of React with some extra features we called “addons”. While this has served us fine, it’s not great for our users. It’s made testing harder, but also results in more cache misses for people using a CDN. The problem we face is that many of these “addons” need access to parts of React that we don’t expose publicly. Our goal is to ship each addon on its own and let each hook into React as needed. This would also allow others to write and distribute “addons”.</p>\n<h2 id="browser-support"><a href="#browser-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Browser Support</h2>\n<p>As much as we’d all like to stop supporting older browsers, it’s not always possible. Facebook still supports IE8. While React won’t support IE8 forever, our goal is to have 1.0 support IE8. Hopefully we can continue to abstract some of these rough parts.</p>\n<h2 id="animations"><a href="#animations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Animations</h2>\n<p>Finding a way to define animations in a declarative way is a hard problem. We’ve been exploring the space for a long time. We’ve introduced some half-measures to alleviate some use cases, but the larger problem remains. While we’d like to make this a part of 1.0, realistically we don’t think we’ll have a good solution in place.</p>\n<h2 id="miscellaneous"><a href="#miscellaneous" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Miscellaneous</h2>\n<p>There are several other things I listed on <a href="https://github.com/facebook/react/wiki/Projects">our projects page</a> that we’re tracking. Some of them are internals and have no obvious outward effect (improve tests, repo separation, updated test runner). I encourage you to take a look.</p>',excerpt:"When we launched React last spring, we purposefully decided not to call it 1.0. It was production ready, but we had plans to evolve APIs and behavior as we saw how people were using React, both internally and externally. We’ve learned a lot over the past 9 months and we’ve thought a lot about what 1.0 will mean for React. A couple weeks ago, I outlined  several projects  that we have planned to take us to 1.0 and beyond. Today I’m writing a bit more about them to give our users a better insight…",frontmatter:{title:"The Road to 1.0",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"March 28, 2014",path:"blog/2014-03-28-the-road-to-1.0.md",slug:"/blog/2014/03/28/the-road-to-1.0.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2014/03/28/the-road-to-1.0.html"}}}});
//# sourceMappingURL=path---blog-2014-03-28-the-road-to-1-0-html-856aadfc99020c66580d.js.map