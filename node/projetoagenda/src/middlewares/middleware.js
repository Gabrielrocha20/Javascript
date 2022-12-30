exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('erros');
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user
  res.locals.contatos = 0
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err) {
    return res.render('404');
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.loginRequired = (req, res, next) => {
  if(!req.session.user) {
    req.flash('errors', 'Você precisa fazer login.');
    req.session.save(() => res.redirect('/'));
    return;
  }

  next();
};