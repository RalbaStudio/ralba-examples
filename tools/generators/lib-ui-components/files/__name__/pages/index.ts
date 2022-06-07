<% for(let page of extendedPages) { %>
  import {
    <%= page.className %>PageComponent,
  } from './<%= page.fileName %>/<%= page.fileName %>-page.component';
<% } %>

export const <%= constantName %>_PAGES = [
  <% for(let page of extendedPages) { %>
    <%=  page.className %>PageComponent,
  <% } %>
]

export {
  <% for(let page of extendedPages) { %>
    <%=  page.className %>PageComponent,
  <% } %>
}