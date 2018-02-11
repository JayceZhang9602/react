webpackJsonp([0x9c95c53fc02e],{674:function(e,t){e.exports={data:{markdownRemark:{html:'<h2 id="data-fetching-for-react-applications"><a href="#data-fetching-for-react-applications" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Data fetching for React applications</h2>\n<p>There’s more to building an application than creating a user interface. Data fetching is still a tricky problem, especially as applications become more complicated. At <a href="http://conf.reactjs.com/">React.js Conf</a> we announced two projects we’ve created at Facebook to make data fetching simple for developers, even as a product grows to include dozens of contributors and the application becomes as complex as Facebook itself.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 48.46153846153846%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube-nocookie.com/embed/9sc8Pyc51uU" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>The two projects — Relay and GraphQL — have been in use in production at Facebook for some time, and we’re excited to be bringing them to the world as open source in the future. In the meantime, we wanted to share some additional information about the projects here.</p>\n<script async class="speakerdeck-embed" data-id="7af7c2f33bf9451a892dcd91de55b7c2" data-ratio="1.29456384323641" src="//speakerdeck.com/assets/embed.js"></script>\n<h2 id="what-is-relay"><a href="#what-is-relay" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is Relay?</h2>\n<p>Relay is a new framework from Facebook that provides data-fetching functionality for React applications. It was announced at React.js Conf (January 2015).</p>\n<p>Each component specifies its own data dependencies declaratively using a query language called GraphQL. The data is made available to the component via properties on <code>this.props</code>.</p>\n<p>Developers compose these React components naturally, and Relay takes care of composing the data queries into efficient batches, providing each component with exactly the data that it requested (and no more), updating those components when the data changes, and maintaining a client-side store (cache) of all data.</p>\n<h2 id="what-is-graphql"><a href="#what-is-graphql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is GraphQL?</h2>\n<p>GraphQL is a data querying language designed to describe the complex, nested data dependencies of modern applications. It’s been in production use in Facebook’s native apps for several years.</p>\n<p>On the server, we configure the GraphQL system to map queries to underlying data-fetching code. This configuration layer allows GraphQL to work with arbitrary underlying storage mechanisms. Relay uses GraphQL as its query language, but it is not tied to a specific implementation of GraphQL.</p>\n<h2 id="the-value-proposition"><a href="#the-value-proposition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The value proposition</h2>\n<p>Relay was born out of our experiences building large applications at Facebook. Our overarching goal is to enable developers to create correct, high-performance applications in a straightforward and obvious way. The design enables even large teams to make changes with a high degree of isolation and confidence. Fetching data is hard, dealing with ever-changing data is hard, and performance is hard. Relay aims to reduce these problems to simple ones, moving the tricky bits into the framework and freeing you to concentrate on building your application.</p>\n<p>By co-locating the queries with the view code, the developer can reason about what a component is doing by looking at it in isolation; it’s not necessary to consider the context where the component was rendered in order to understand it. Components can be moved anywhere in a render hierarchy without having to apply a cascade of modifications to parent components or to the server code which prepares the data payload.</p>\n<p>Co-location leads developers to fall into the “pit of success”, because they get exactly the data they asked for and the data they asked for is explicitly defined right next to where it is used. This means that performance becomes the default (it becomes much harder to accidentally over-fetch), and components are more robust (under-fetching is also less likely for the same reason, so components won’t try to render missing data and blow up at runtime).</p>\n<p>Relay provides a predictable environment for developers by maintaining an invariant: a component won’t be rendered until all the data it requested is available. Additionally, queries are defined statically (ie. we can extract queries from a component tree before rendering) and the GraphQL schema provides an authoritative description of what queries are valid, so we can validate queries early and fail fast when the developer makes a mistake.</p>\n<p>Only the fields of an object that a component explicitly asks for will be accessible to that component, even if other fields are known and cached in the store (because another component requested them). This makes it impossible for implicit data dependency bugs to exist latently in the system.</p>\n<p>By handling all data-fetching via a single abstraction, we’re able to handle a bunch of things that would otherwise have to be dealt with repeatedly and pervasively across the application:</p>\n<ul>\n<li><strong>Performance:</strong> All queries flow through the framework code, where things that would otherwise be inefficient, repeated query patterns get automatically collapsed and batched into efficient, minimal queries. Likewise, the framework knows which data have been previously requested, or for which requests are currently “in flight”, so queries can be automatically de-duplicated and the minimal queries can be produced.</li>\n<li><strong>Subscriptions:</strong> All data flows into a single store, and all reads from the store are via the framework. This means the framework knows which components care about which data and which should be re-rendered when data changes; components never have to set up individual subscriptions.</li>\n<li><strong>Common patterns:</strong> We can make common patterns easy. Pagination is the example that <a href="https://twitter.com/jingc">Jing</a> gave at the conference: if you have 10 records initially, getting the next page just means declaring you want 15 records in total, and the framework automatically constructs the minimal query to grab the delta between what you have and what you need, requests it, and re-renders your view when the data become available.</li>\n<li><strong>Simplified server implementation:</strong> Rather than having a proliferation of end-points (per action, per route), a single GraphQL endpoint can serve as a facade for any number of underlying resources.</li>\n<li><strong>Uniform mutations:</strong> There is one consistent pattern for performing mutations (writes), and it is conceptually baked into the data querying model itself. You can think of a mutation as a query with side-effects: you provide some parameters that describe the change to be made (eg. attaching a comment to a record) and a query that specifies the data you’ll need to update your view of the world after the mutation completes (eg. the comment count on the record), and the data flows through the system using the normal flow. We can do an immediate “optimistic” update on the client (ie. update the view under the assumption that the write will succeed), and finally commit it, retry it or roll it back in the event of an error when the server payload comes back.</li>\n</ul>\n<h2 id="how-does-it-relate-to-flux"><a href="#how-does-it-relate-to-flux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How does it relate to Flux?</h2>\n<p>In some ways Relay is inspired by Flux, but the mental model is much simpler. Instead of multiple stores, there is one central store that caches all GraphQL data. Instead of explicit subscriptions, the framework itself can track which data each component requests, and which components should be updated whenever the data change. Instead of actions, modifications take the form of mutations.</p>\n<p>At Facebook, we have apps built entirely using Flux, entirely using Relay, or with both. One pattern we see emerging is letting Relay manage the bulk of the data flow for an application, but using Flux stores on the side to handle a subset of application state.</p>\n<h2 id="open-source-plans"><a href="#open-source-plans" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Open source plans</h2>\n<p>We’re working very hard right now on getting both GraphQL (a spec, and a reference implementation) and Relay ready for public release (no specific dates yet, but we are super excited about getting these out there).</p>\n<p>In the meantime, we’ll be providing more and more information in the form of blog posts (and in <a href="https://gist.github.com/wincent/598fa75e22bdfa44cf47">other channels</a>). As we get closer to the open source release, you can expect more concrete details, syntax and API descriptions and more.</p>\n<p>Watch this space!</p>',excerpt:"Data fetching for React applications There’s more to building an application than creating a user interface. Data fetching is still a tricky problem, especially as applications become more complicated. At  React.js Conf  we announced two projects we’ve created at Facebook to make data fetching simple for developers, even as a product grows to include dozens of contributors and the application becomes as complex as Facebook itself. The two projects  —  Relay and GraphQL  —  have been in use in…",frontmatter:{title:"Introducing Relay and GraphQL",next:null,prev:null,author:[{frontmatter:{name:"Greg Hurrell",url:"https://twitter.com/wincent"}}]},fields:{date:"February 20, 2015",path:"blog/2015-02-20-introducing-relay-and-graphql.md",slug:"/blog/2015/02/20/introducing-relay-and-graphql.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2015/02/20/introducing-relay-and-graphql.html"}}}});
//# sourceMappingURL=path---blog-2015-02-20-introducing-relay-and-graphql-html-026eacef4e60d81fd0c4.js.map