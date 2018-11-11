import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <a href="/" style={{ textDecoration: "none" }}>
          <h1>ryanbrainard.com</h1>
        </a>

        <nav>
          <ul>
            <HeadlineIcon
              fa="facebook"
              href="https://www.facebook.com/ryanbrainard"
            />
            <HeadlineIcon
              fa="twitter"
              href="https://twitter.com/ryanbrainard"
            />
            <HeadlineIcon
              fa="github"
              href="https://www.github.com/ryanbrainard"
            />
            <HeadlineIcon
              fa="linkedin"
              href="https://www.linkedin.com/in/ryanbrainard"
            />
          </ul>
        </nav>

        <ListingGroup name="Projects">
          <Listing
            name="YouTube to Readlang"
            href="http://youtube2readlang.ryanbrainard.com"
            code="https://github.com/ryanbrainard/youtube2readlang"
            intro="Search for a video and import into Readlang with synchronized subtitles"
          />
          <Listing
            name="How Many Korean Words Do You Know?"
            href="http://howmanykoreanwordsdoyouknow.ryanbrainard.com"
            code="https://github.com/ryanbrainard/korean-vocabulary-quiz"
            intro="Calculate the approximate number of words a Korean learner knows"
          />
          <Listing
            name="jjogaegi"
            href="http:/jjogaegi.ryanbrainard.com"
            code="https://github.com/ryanbrainard/jjogaegi"
            intro="Korean Vocabulary Parser-Formatter"
          />
          <Listing
            name="Axiom"
            href="https://axiomsso.herokuapp.com"
            code="https://github.com/ryanbrainard/axiom"
            intro="Tools for learning, testing, and troubleshooting single sign-on solutions for Salesforce.com"
          />
          <Listing
            name="Workbench"
            href="https://workbench.developerforce.com"
            code="https://github.com/ryanbrainard/forceworkbench"
            intro="Web-based suite of tools for administrators and developers to interact with the Force.com APIs"
          />
        </ListingGroup>

        <ListingGroup name="Writings">
          <Listing
            name="Korean as a Concatenative, Stack-Oriented Language"
            href="http://post.naver.com/viewer/postView.nhn?volumeNo=8912179&memberNo=33582594"
            intro="Musings about viewing Korean through the lens of a concatenative, stack-Oriented language"
            date="2017-08-01"
          />
          <Listing
            name="Korean-Korean Flashcards"
            href="http://post.naver.com/viewer/postView.nhn?volumeNo=8292571&memberNo=33582594"
            intro="The benefits of using monolingual flashcards"
            date="2017-06-24"
          />
          <Listing
            name="Introducing React Refetch"
            href="https://blog.heroku.com/react-refetch"
            code="https://github.com/heroku/react-refetch"
            intro="A simple, declarative, and composable way to fetch data for React components"
            date="2015-12-15"
          />
          <Listing
            name="Bulk API Queries"
            href="https://developer.salesforce.com/blogs/engineering/2011/03/bulk-api-queries.html"
            code="https://github.com/ryanbrainard/forceworkbench"
            intro="Bulk query support in Workbench 3.0"
            date="2011-03-21"
          />
          <Listing
            name="Workbench for Winter '11 Now Available"
            href="https://developer.salesforce.com/blogs/engineering/2010/10/workbench-for-winter-11-now-available.html"
            code="https://github.com/ryanbrainard/forceworkbench"
            intro="Workbench enhancements for Winter '11 Release"
            date="2010-10-17"
          />
          <Listing
            name="Workbench 3.0 with Metadata API Support and More!"
            href="https://developer.salesforce.com/blogs/engineering/2010/06/workbench-30-with-metadata-api-support-and-more.html"
            code="https://github.com/ryanbrainard/forceworkbench"
            intro="Enhancement for Workbench 3.0"
            date="2010-06-20"
          />
          <Listing
            name="PHP Client for Force.com Bulk API"
            href="https://developer.salesforce.com/blogs/engineering/2009/11/php-client-for-forcecom-bulk-api.html"
            code="https://github.com/ryanbrainard/forceworkbench"
            intro="Introduction of PHP client for Bulk API"
            date="2009-11-07"
          />
          <Listing
            name="Workbench: From Idea to 2.0"
            href="https://developer.salesforce.com/blogs/engineering/2008/07/workbench-from.html"
            code="https://github.com/ryanbrainard/forceworkbench"
            intro="How Workbench went from a modest idea to shipping v2.0"
            date="2008-07-01"
          />
        </ListingGroup>
      </div>
    );
  }
}

function HeadlineIcon({ fa, href }) {
  return (
    <li>
      <a href={href}>
        <FA name={fa} />
      </a>
    </li>
  );
}

function ListingGroup({ name, children }) {
  return (
    <div style={{ float: "left" }}>
      <h2>{name}</h2>
      <ul>{children}</ul>
    </div>
  );
}

function Listing({ name, href, code, intro, date }) {
  const hostname = new URL(href).hostname;
  return (
    <li style={{ marginBottom: "2em" }}>
      <h3 style={{ marginBottom: "0em" }}>
        <a href={href}>{name}</a>
      </h3>
      <small>
        {date && (
          <span>{new Date(date).toLocaleDateString()} &nbsp; - &nbsp; </span>
        )}

        <a href={href} style={{ textDecoration: "none" }}>
          {hostname}
        </a>

        {code && (
          <span>
            &nbsp; - &nbsp;
            <a href={code}>
              <FA name="code" />
            </a>
          </span>
        )}
      </small>
      <p>{intro}</p>
    </li>
  );
}

function FA({ name }) {
  return <i className={`fa fa-${name}`} aria-hidden="true" />;
}

export default App;
