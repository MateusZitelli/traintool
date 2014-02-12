Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("{% extends \"base/base.html\" %}\n{% load staticfiles %}\n\n{% block title %}TrainTool - GymUP{% endblock %}\n{%block extrahead%}\n<style>\n  body{\n    background:url(\"{%static 'img/pattern.png'%}\") repeat;\n    padding-top:0px;\n  }\n</style>\n{%endblock%}\n{%block content%}\n<header>\n  <div class=\"navbar-wrapper\">\n    <div class='container'>\n      <nav class=\"navbar navbar-static-top navbar-default\" role=\"navigation\">\n        <div class=\"container\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n              <span class=\"sr-only\">Esconder barra de navegação</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"/\">GymUp</a>\n          </div>\n\n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"menu\">\n            <ul class=\"nav navbar-nav\">\n              <li><a href=\"/\" id=\"index_nav_btn\"><i class=\"fa fa-home\"></i> Home</a></li>\n              <li><a href=\"\" id=\"index_nav_btn\"><i class=\"fa fa-compass\"></i> Explorar</a></li>\n            </ul>\n            <form class=\"navbar-form navbar-right hide\" role=\"login\" id=\"login_nav_form\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"login\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"senha\">\n              </div>\n              <button type=\"submit\" class=\"btn btn-default\">Login</button>\n            </form>\n            <ul class=\"nav navbar-nav\">\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bars\"></i> Menu <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Criar novo treino</a></li>\n                  <li><a href=\"#\">Perfil</a></li>\n                  <li><a href=\"#\">Convidar amigo</a></li>\n                </ul>\n              </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li>\n                <a href=\"#\" id=\"login_toggle\">Login</a>\n              </li>\n            </ul>\n          </div><!-- /.navbar-collapse -->\n        </div>\n      </nav>\n    </div>\n  </div>\n  <div id=\"mainCarousel\" class=\"carousel slide\" data-ride=\"darousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#mainCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#mainCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#mainCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"{%static 'img/slide-0.jpg'%}\" data-src=\"holder.js/900x500/auto/#777:#7a7a7a/text:First slide\" alt=\"Primeiro slide\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Crie e Compartilhe seus treinos</h1>\n            <p>Mostre do que é capaz!</p>\n            <button class=\"btn btn-primary big\">Criar Treino</button>\n            <hr>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <img data-src=\"holder.js/900x500/auto/#777:#7a7a7a/text:First slide\" alt=\"Segundo Slide\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Crie e Comartilhe seus treinos!</h1>\n            <p>Crie e compartilhe agora mesmo</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <img data-src=\"holder.js/900x500/auto/#777:#7a7a7a/text:First slide\" alt=\"Terceiro Slide\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Crie e Comartilhe seus treinos!</h1>\n            <p>Crie e compartilhe agora mesmo</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"left carousel-control\" href=\"#mainCarousel\" data-slide=\"prev\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n    <a class=\"right carousel-control\" href=\"#mainCarousel\" data-slide=\"next\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n  </div>\n</header>\n<div class=\"container main-container\">\n  <article>\n    <div class=\"row\">\n      <div class=\"col-lg-4 text-center\">\n        <h2>Top Treinos</h2>\n        <ul class=\"list-unstyled\">\n          <li class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">Treino do Arnold</h4>\n            </div>\n            <div class=\"panel-body\">\n              <p>Treino histórico promovido pelo maior fisiculturista de todos os tempos.</p>\n            </div>\n          </li>\n          <li class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">Treino do Arnold</h4>\n            </div>\n            <div class=\"panel-body\">\n              <p>Treino histórico promovido pelo maior fisiculturista de todos os tempos.</p>\n            </div>\n          </li>\n        </ul>       \n      </div>\n      <div class=\"col-lg-4 text-center\">\n        <h2>Novos Treinos</h2>\n        <ul class=\"list-unstyled\">\n          <li class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">Treino do Arnold</h4>\n            </div>\n            <div class=\"panel-body\">\n              <p>Treino histórico promovido pelo maior fisiculturista de todos os tempos.</p>\n            </div>\n          </li>\n          <li class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">Treino do Arnold</h4>\n            </div>\n            <div class=\"panel-body\">\n              <p>Treino histórico promovido pelo maior fisiculturista de todos os tempos.</p>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-lg-4 text-center\">\n        <h2>Top Users</h2>\n        <ul class=\"list-unstyled\">\n          <li class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">Treino do Arnold</h4>\n            </div>\n            <div class=\"panel-body\">\n              <p>Treino histórico promovido pelo maior fisiculturista de todos os tempos.</p>\n            </div>\n          </li>\n          <li class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">Treino do Arnold</h4>\n            </div>\n            <div class=\"panel-body\">\n              <p>Treino histórico promovido pelo maior fisiculturista de todos os tempos.</p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </article>\n</div>\n{%endblock%}\n");
  
});

Ember.TEMPLATES["trainMaker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("\n{% extends 'base/base.html'%}\n{% load staticfiles %}\n\n{% block title %}Maker - TrainTool{% endblock %}\n{%block extrahead%}\n<style>\n  body{\n    background:url(\"{%static 'img/pattern.png'%}\") repeat;\n  }\n</style>\n{%endblock%}\n{%block content%}\n<header>\n  <nav class=\"navbar navbar-fixed-top navbar-default\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n          <span class=\"sr-only\">Esconder barra de navegação</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"/\">GymUp</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"menu\">\n        <ul class=\"nav navbar-nav\">\n          <li><a href=\"/\" id=\"index_nav_btn\"><i class=\"fa fa-home\"></i> Home</a></li>\n          <li><a href=\"\" id=\"index_nav_btn\"><i class=\"fa fa-compass\"></i> Explorar</a></li>\n        </ul>\n        <form class=\"navbar-form navbar-right hide\" role=\"login\" id=\"login_nav_form\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"login\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"senha\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\">Login</button>\n        </form>\n        <ul class=\"nav navbar-nav\">\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bars\"></i> Menu <b class=\"caret\"></b></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Criar novo treino</a></li>\n              <li><a href=\"#\">Perfil</a></li>\n              <li><a href=\"#\">Convidar amigo</a></li>\n            </ul>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a href=\"#\" id=\"login_toggle\">Login</a>\n          </li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div>\n  </nav>\n</header>\n<article>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class='col-lg-12'>\n        <h2>Definição dos treinos</h2>\n      </div>\n      <div class=\"col-lg-3\">\n        <label>Nome</label>\n        <input id=\"nome-treino-");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "treino.uid", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\" type=\"text\" class=\"form-control\" value=\"");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "treino.nome", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\"></input>\n      </div>\n      <div class=\"col-lg-5\">\n        <label>Descrição</label>\n        <textarea id=\"detalhes-treino-");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "treino.uid", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\" rows=\"1\" type=\"text\" class=\"form-control\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "treino.detalhes", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</textarea>\n      </div>\n      <div class=\"col-lg-4 text-center\">\n        \n      </div>\n      <div class=\"col-lg-12\" id=\"daysDiv\">\n        <h2>Dias de Treino</h2>\n        <ul class=\"nav nav-tabs\">\n          {%for dia in treino.dias%}\n            <li class={%if forloop.first%}\"active\"{%endif%}><a href=\"#dia_");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dia.uid", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("_div\" data-toggle=\"tab\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dia.nome", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n          {%endfor%}\n          <li><a class=\"btn btn-primary\" id=\"new_day_btn\">Novo dia de treino</a></li>\n        </ul>\n        <div class=\"tab-content\">\n          {%for dia in treino.dias%}\n          <div class=\"tab-pane active\" id=\"dia_");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dia.uid", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("_div\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3\">  \n                    <label>Nome</label>\n                    <input id=\"nome-dia-");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dia.uid", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"form-control day_editable_fields\" value=\"");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dia.nome", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\"></input>\n                  </div>\n                  <div class=\"col-lg-5\">\n                    <label>Comentário</label>\n                    <textarea id=\"comentario-dia-");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dia.uid", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"form-control day_editable_fields\" rows=\"1\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dia.detalhes", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</textarea>\n                  </div>\n                </div>\n              </li>\n              {%for object in dia.objects%}\n                {%if object.objectType == 'exercicio'%}\n                  <li class=\"list-group-item clickable\"><h4>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object.nome", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" <small>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object.series", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</small></h4></li>\n                  <li class=\"list-group-item clickable open-panel\">\n                    <div class=\"panel panel-primary\">\n                       <div class=\"panel-body\">\n                        <div class=\"row\">\n                          <div class=\"col-lg-3\">\n                            <label for=\"exampleInputEmail1\">Nome</label>\n                            <p class=\"form-control-static\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object.nome", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                          </div>\n                          <div class=\"col-lg-5\">\n                            <label for=\"exampleInputEmail1\">Descrição</label>\n                            <p class=\"form-control-static\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object.descricao", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                          </div>\n                          <div class=\"col-lg-3\">\n                              <div class=\"form-group\">\n                                <div class=\"row\">\n                                  <div class=\"col-lg-12 padding-bottom\">\n                                    <label for=\"exampleInputEmail1\">Séries</label><br>\n                                    <span class=\"label label-primary\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object.series", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                    <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-default\">+ série</button>\n                                      <button type=\"button\" class=\"btn btn-danger\">- série</button>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-lg-5\">\n                                    <input type=\"integer\" class=\"form-control input-sm\" placeholder=\"Repetições\">\n                                  </div>\n                                </div>\n                              </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n                {%elif object.objectType == 'relacao'%}\n                  {%if object.relactionType == 'descanso'%}\n                    <li class=\"list-group-item clickable\"><h5>Descanço de ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object.time", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" segundos</h5></li>\n                    <li class=\"list-group-item clickable open-panel\">\n                      <div class=\"panel panel-primary\">\n                         <div class=\"panel-body\">\n                          <div class=\"row\">\n                            <div class=\"col-lg-3\">\n                              <label for=\"exampleInputEmail1\">Tipo</label><br>\n                              <select class=\"form-control\">\n                                <option selected=\"selected\">Descanso</option>\n                                <option>Supersérie</option>\n                              </select>\n                            </div>\n                            <div class=\"descanso_fields\">\n                              <div class=\"col-lg-3\">\n                                <label for=\"exampleInputEmail1\">Descanso</label><br>\n                                <form role=\"form\">\n                                  <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Descanso\" value=\"");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object.time", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                    <span class=\"input-group-addon\">Segundos</span>\n                                  </div>\n                                </form>\n                              </div>\n                              <div class=\"col-lg-6\">\n                                <label for=\"exampleInputEmail1\">Comentário</label><br>\n                                <form role=\"form\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Breve comentário\">\n                                </form>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                  {%elif object.relactionType == 'superserie'%}\n                    <li class=\"list-group-item clickable\"><h5>Super Série</h5></li>\n                    <li class=\"list-group-item clickable open-panel\">\n                      <div class=\"panel panel-primary\">\n                         <div class=\"panel-body\">\n                          <div class=\"row\">\n                            <div class=\"col-lg-3\">\n                              <label for=\"exampleInputEmail1\">Tipo</label><br>\n                              <select class=\"form-control\">\n                                <option>Descanso</option>\n                                <option selected=\"selected\">Supersérie</option>\n                              </select>\n                            </div>\n                            <div class=\"superserie_fields\">\n                              <div class=\"col-lg-6\">\n                                <label for=\"exampleInputEmail1\">Comentário</label><br>\n                                <form role=\"form\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Breve comentário\">\n                                </form>\n                              </div>\n                            </div>\n\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                  {%endif%}\n                {%endif%}\n              {%endfor%}\n              <li class=\"list-group-item text-center\">\n                <button class=\"btn btn-primary\" id=\"addExercicio\"><strong>Lista de Exercícios</strong></button>\n              </li>\n            </ul>\n          </div>\n          {%endfor%}\n        </div>\n      </div> <!-- col-lg-12 -->\n      <div class=\"col-lg-1\" id=\"exerciciosDiv\">\n        <h3 class=\"text-center\">Lista de Exercícios</h3>\n        <input class=\"form-control search\" placeholder=\"Filtro\"></input>\n        <buttom class=\"sort btn btn-default\" data-sort=\"name\">Organizar por Nome</buttom>\n        <ul class=\"list-group list\">\n          <li class=\"list-group-item withFooter clickable\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 text-left\">\n                <h5><i class=\"fa fa fa-arrow-circle-o-left\"></i>\n               <span class=\"name\">Rosca Direta</span></h5>\n              </div>\n              <div class=\"col-lg-12 text-center btnFooter\">\n                Detalhes\n              </div>\n            </div>\n          </li>\n          <li class=\"list-group-item withFooter clickable\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 text-left\">\n                <h5><i class=\"fa fa fa-arrow-circle-o-left\"></i>\n               <span class=\"name\">Abdominal</span></h5>\n              </div>\n              <div class=\"col-lg-12 text-center btnFooter\">\n                Detalhes\n              </div>\n            </div>\n          </li>\n          <li class=\"list-group-item withFooter clickable\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 text-left\">\n                <h5><i class=\"fa fa fa-arrow-circle-o-left\"></i>\n               <span class=\"name\">Puley Costas</span></h5>\n              </div>\n              <div class=\"col-lg-12 text-center btnFooter\">\n                Detalhes\n              </div>\n            </div>\n          </li>\n          <li class=\"list-group-item withFooter clickable\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 text-left\">\n                <h5><i class=\"fa fa fa-arrow-circle-o-left\"></i>\n               <span class=\"name\">Remada Alta</span></h5>\n              </div>\n              <div class=\"col-lg-12 text-center btnFooter\">\n                Detalhes\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div><!-- row -->\n  </div>\n</article>\n<script type=\"text/javascript\">\n  //Content injection\n  train_uid = \"");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "train_uid", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\";\n</script>\n{%endblock%}\n\n{%block scripts%}\n  <script src=\"{%static 'js/uuid.js'%}\"></script>\n  <script src=\"{%static 'js/maker.js'%}\"></script>\n{%endblock%}\n");
  return buffer;
  
});