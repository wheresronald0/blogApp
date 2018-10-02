- <p><%=blog.body.substring(0, 100)%> ...</p> substring method on index.ejs limits the nubmer of charecters (this is used to truncate the kist view as not to show too much info on the index page)
- <%-blog.body%> the dash instead of equals will allow users to input html in the description box- it evaluates the html and renders- theres an express santitizing package that will scrub out all the script tags so users can't run JS
- look of moments.js for date display flexibilitiy

  #Edit Route

- instead of placeholder tag in my form, add the value tag, and ejs the var in to the current data is diplayed in the form
- HTML forms only accepts GET and POST requests, so you need a workaround. It you submit PUT request as part of RESTful framework, it'll treat it as GET and put all updated data in the URL (ugh!)
