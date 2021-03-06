(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['books'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	<li>\r\n		<div class=\"bookLeft\">\r\n			<h1>";
  if (stack1 = helpers.Title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n			<p>";
  if (stack1 = helpers.Author) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Author; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.Publisher) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Publisher; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.PublishYear) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.PublishYear; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n			<p>[";
  if (stack1 = helpers.Index) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Index; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "]</p>\r\n			<a href=\"/Library/Details?url=";
  if (stack1 = helpers.Url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-role=\"button\" data-inline=\"true\" data-mini=\"true\" data-theme=\"b\" data-rel=\"dialog\">详细信息</a>\r\n		</div>\r\n		<div class=\"bookRight ";
  stack1 = helpers['if'].call(depth0, depth0.IsInFavoriate, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-index=\"";
  if (stack1 = helpers.Index) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Index; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-key=\"";
  if (stack1 = helpers.LocalKey) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.LocalKey; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-json=\"";
  if (stack1 = helpers.BookJson) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.BookJson; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n			<p class=\"";
  stack1 = helpers['if'].call(depth0, depth0.IsAvailable, {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (stack1 = helpers.Available) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Available; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.Total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n			<div class=\"bookFavoriate\">\r\n				<img class=\"inFavoriate\" alt=\"favoriate\" src=\"/Content/images/red_heart.png\">\r\n				<img class=\"notInFavoriate\" alt=\"favoriate\" src=\"/Content/images/empty_heart.png\">\r\n			</div>\r\n		</div>\r\n		<div class=\"clearfix\"></div>\r\n	</li>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "inFavoriate";
  }

function program4(depth0,data) {
  
  
  return "notInFavoriate";
  }

function program6(depth0,data) {
  
  
  return "bookAvailable";
  }

function program8(depth0,data) {
  
  
  return "bookNotAvailable";
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });
})();