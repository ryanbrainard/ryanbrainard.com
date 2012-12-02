package com.ryanbrainard.www

import org.scalatra._
import scalate.ScalateSupport
import java.util.Date

class RyanBrainardServlet extends ScalatraServlet with ScalateSupport {

  before() {
    contentType="text/html"
  }

  get("/") {
    jade(
      "index",
      "title" -> "Welcome"
    )
  }

  notFound {
    // remove content type in case it was set through an action
    contentType = null
    // Try to render a ScalateTemplate if no route matched
    findTemplate(requestPath) map { path =>
      contentType = "text/html"
      layoutTemplate(path)
    } orElse serveStaticResource() getOrElse resourceNotFound()
  }
}
